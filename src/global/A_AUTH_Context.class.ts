import {
    A_SDK_Context,
    A_SDK_ContextClass,
    A_SDK_Error,
    A_SDK_ServerError,
    A_SDK_TYPES__DeepPartial
} from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__IAuthenticator } from "../types/A_AUTH_Authenticator.types";
import { A_AUTH_AppInteractionsAuthenticator } from "./authenticator/A_AUTH_AppInteractions.authenticator";
import { A_AUTH_ServerCommandsAuthenticator } from "./authenticator/A_AUTH_ServerCommands.authenticator";
import { A_AUTH_ServerDelegateAuthenticator } from "./authenticator/A_AUTH_ServerDelegate.authenticator";
import {
    A_AUTH_TYPES__AuthContext_ErrorHandler,
    A_AUTH_TYPES__AuthContext_ResponseFormatter,
    A_AUTH_TYPES__ContextConfigurations
} from "../types/A_AUTH_Context.types";
import { A_AUTH_CONSTANTS__DEFAULT_ERRORS } from "../constants/errors.constants";
import { A_SDK_CONSTANTS__ERROR_CODES } from "@adaas/a-sdk-types/dist/src/constants/errors.constants";
import { A_SDK_TYPES__ContextConstructor } from "@adaas/a-sdk-types/dist/src/types/A_SDK_Context.types";


export class A_AUTH_ContextClass extends A_SDK_ContextClass {

    /**
     * API Credentials Authentication using CLIENT_ID and CLIENT_SECRET
     * Uses Across all SDKs connected to A-AUTH
     */
    global: A_SDK_ContextClass = A_SDK_Context;


    protected SSO_LOCATION: string = 'https://sso.adaas.org';
    protected ENABLE_AUTH: boolean = true;

    responseFormatter: A_AUTH_TYPES__AuthContext_ResponseFormatter = (response) => response.data;
    errorsHandler: A_AUTH_TYPES__AuthContext_ErrorHandler = (error) => { throw new A_SDK_ServerError(error) }


    protected authContextAllowedProperties = [
        ...this.defaultAllowedToReadProperties,
        "SSO_LOCATION",
        "ENABLE_AUTH"
    ] as const;


    protected _AuthMap = new Map<string, A_AUTH_TYPES__IAuthenticator>();

    constructor(
        protected params: Partial<A_SDK_TYPES__ContextConstructor> = {
            namespace: 'a-auth',
            errors: A_AUTH_CONSTANTS__DEFAULT_ERRORS
        }
    ) {
        super({
            namespace: 'a-auth',
            errors: A_AUTH_CONSTANTS__DEFAULT_ERRORS,
            ...params,
        });
    }


    async init(): Promise<void> {
        if (!this.ready)
            this.ready = new Promise(async (resolve, reject) => {
                try {
                    await super.init();
                    await this.global.ready;
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        else
            await this.ready;
    }


    /**
      * Configures the SDK with the provided parameters or uses the default ones
      * Useful for Front End applications to omit env variables and use the SDK
      * 
      * @param verbose 
      * @param ignoreErrors 
      * @param sdkValidation 
      */
    configure(config: A_SDK_TYPES__DeepPartial<A_AUTH_TYPES__ContextConfigurations>) {

        if (this.hasInherited(A_AUTH_ContextClass))
            this.Logger.log('Configuring A_AUTH_Context with provided configurations', config);

        this.SSO_LOCATION = config.auth?.location || this.SSO_LOCATION;
        this.ENABLE_AUTH = config.auth
            ? config.auth.enable !== undefined
                ? config.auth.enable
                : this.ENABLE_AUTH
            : this.ENABLE_AUTH;

        super.configure(config);
    }



    getConfigurationProperty<T = any>(
        property: typeof this.authContextAllowedProperties[number]
    ): T {
        if (this.authContextAllowedProperties.includes(property as any))
            return this[property as string] as T;
        this.Errors.throw(A_SDK_CONSTANTS__ERROR_CODES.CONFIGURATION_PROPERTY_NOT_EXISTS_OR_NOT_ALLOWED_TO_READ);
    }


    /**
     * Allows to define a global custom API response and error processors
     * 
     * @param responseFormatter 
     * @param errorsHandler 
     */
    setAPIHandlers(
        responseFormatter: A_AUTH_TYPES__AuthContext_ResponseFormatter,
        errorsHandler: A_AUTH_TYPES__AuthContext_ErrorHandler

    ) {
        this.responseFormatter = responseFormatter || this.responseFormatter;
        this.errorsHandler = errorsHandler || this.errorsHandler;
    }



    /**
     * 
     * Returns a authentication depending on the request type
     * 
     * @param userASEID 
     * @param userScope 
     * @returns 
     */
    getAuthenticator(
        userASEID?: string,
        userScope?: string
    ): A_AUTH_TYPES__IAuthenticator {

        this.Logger.log('Getting Authenticator for the environment', this.environment);

        switch (true) {

            /**
             * In this case it should be Front End SDK with token received from Auth API 
             */
            case this.environment === 'browser': {
                const existedAuth = this._AuthMap.get(this.environment);
                if (existedAuth) return existedAuth;
                else {
                    const frontendAuth = new A_AUTH_AppInteractionsAuthenticator(
                        this,
                        {
                            client_id: this.CLIENT_ID,
                            client_secret: this.CLIENT_SECRET
                        }, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(this.environment, frontendAuth);

                    this.Logger.log('Frontend Authenticator created');

                    return frontendAuth;
                }
            }

            /**
             * In this case it should be APP API credentials to do operations on behalf of the user
             * 
             */
            case this.environment === 'server' && !!userASEID && !!userScope: {
                const existedDelegate = this._AuthMap.get(`${userScope}/${userASEID}`);
                if (existedDelegate) return existedDelegate;
                else {
                    const delegate = new A_AUTH_ServerDelegateAuthenticator(
                        this,
                        {
                            client_id: this.CLIENT_ID,
                            client_secret: this.CLIENT_SECRET,
                            userASEID: userASEID,
                            userScope: userScope
                        }, {
                        ssoUrl: this.SSO_LOCATION
                    });

                    this._AuthMap.set(userASEID, delegate);

                    this.Logger.log('Server Delegate Authenticator created');

                    return delegate;
                }
            }

            /**
             * This could be both API Credentials connected to User or APP credentials
             */
            default: {

                const existedServer = this._AuthMap.get(this.environment);
                if (existedServer) return existedServer;
                else {
                    const server = new A_AUTH_ServerCommandsAuthenticator(
                        this,
                        {
                            client_id: this.CLIENT_ID,
                            client_secret: this.CLIENT_SECRET
                        }, {
                        ssoUrl: this.SSO_LOCATION
                    });

                    this._AuthMap.set(this.environment, server);

                    this.Logger.log('Server Authenticator created');

                    return server;
                }
            }
        }
    }

    setAuthenticator(
        data: {
            token?: string,
            refreshToken?: string,
            exp?: number
        }
    ) {
        if (!this.ENABLE_AUTH) return;

        this.Logger.log('Setting Authenticator for the environment', this.environment);

        if (!data.token || !data.exp || this.environment !== 'browser') {
            this.Logger.log('Token or Exp is not provided or environment is not browser');
            return;
        }

        try {
            localStorage.setItem('x-adaas-access', data.token);
            localStorage.setItem('x-adaas-refresh', data.refreshToken || '');

            const existedAuth = this._AuthMap.get(this.environment);

            if (existedAuth && existedAuth instanceof A_AUTH_AppInteractionsAuthenticator) {
                existedAuth.schedule?.clear();
                const frontendAuth = new A_AUTH_AppInteractionsAuthenticator(
                    this,
                    {}, {
                    ssoUrl: this.SSO_LOCATION
                });

                this._AuthMap.set(this.environment, frontendAuth);

                this.Logger.log('Frontend Authenticator created');
            }
        } catch (error) {
            this.Logger.error(new A_SDK_Error(error));
        }
    }

    protected async loadExtendedConfigurationsFromEnvironment(): Promise<void> {
        try {
            this.Logger.log('Loading Extended Configurations from Environment');

            this.SSO_LOCATION = this.environment === 'server' ?
                // eslint-disable-next-line no-use-before-define
                (process.env[this.getConfigurationProperty_ENV_Alias('SSO_LOCATION')] || this.SSO_LOCATION)
                : this.SSO_LOCATION;

            this.ENABLE_AUTH = this.environment === 'server' ?
                // eslint-disable-next-line no-use-before-define
                (
                    process.env[this.getConfigurationProperty_ENV_Alias('ENABLE_AUTH')] ?
                        process.env[this.getConfigurationProperty_ENV_Alias('ENABLE_AUTH')] === 'true' ?
                            true : false
                        : this.ENABLE_AUTH
                )
                : this.ENABLE_AUTH;
        } catch (error) {
            // TODO fix error handling
            error;
        }
    }

    protected async loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void> {

        this.Logger.log('Loading Extended Configurations from File');

        // eslint-disable-next-line no-use-before-define
        this.SSO_LOCATION = this.environment === 'server' ?
            // eslint-disable-next-line no-use-before-define
            config[this.getConfigurationProperty_File_Alias('SSO_LOCATION')] || this.SSO_LOCATION
            : this.SSO_LOCATION;

        // eslint-disable-next-line no-use-before-define
        this.ENABLE_AUTH = this.environment === 'server' ?
            // eslint-disable-next-line no-use-before-define
            (
                config[this.getConfigurationProperty_File_Alias('ENABLE_AUTH')] ?
                    (config[this.getConfigurationProperty_File_Alias('ENABLE_AUTH')] === 'true'
                        ||
                        config[this.getConfigurationProperty_File_Alias('ENABLE_AUTH')] === true
                    ) ?
                        true : false
                    : this.ENABLE_AUTH
            )
            : this.ENABLE_AUTH;
    }
}

