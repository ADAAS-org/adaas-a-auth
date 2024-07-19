import { A_SDK_Context, A_SDK_ContextClass, A_SDK_ServerError } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__IAuthenticator } from "../types/A_AUTH_Authenticator.types";
import { A_AUTH_AppInteractionsAuthenticator } from "./authenticator/A_AUTH_AppInteractions.authenticator";
import { A_AUTH_ServerCommandsAuthenticator } from "./authenticator/A_AUTH_ServerCommands.authenticator";
import { A_AUTH_ServerDelegateAuthenticator } from "./authenticator/A_AUTH_ServerDelegate.authenticator";
import { A_AUTH_TYPES__AuthContext_ErrorHandler, A_AUTH_TYPES__AuthContext_ResponseFormatter } from "../types/A_AUTH_Context.types";
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

    responseFormatter: A_AUTH_TYPES__AuthContext_ResponseFormatter = (response) => response.data;
    errorsHandler: A_AUTH_TYPES__AuthContext_ErrorHandler = (error) => { throw new A_SDK_ServerError(error) }


    protected authContextAllowedProperties = [
        ...this.defaultAllowedToReadProperties,
        "SSO_LOCATION"
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
        switch (true) {

            /**
             * In this case it should be Front End SDK with token received from Auth API 
             */
            case this.environment === 'browser': {
                const existedAuth = this._AuthMap.get(this.environment);
                if (existedAuth) return existedAuth;
                else {
                    const frontendAuth = new A_AUTH_AppInteractionsAuthenticator({}, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(this.environment, frontendAuth);
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
                    const delegate = new A_AUTH_ServerDelegateAuthenticator({
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET,
                        userASEID: userASEID,
                        userScope: userScope
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set(userASEID, delegate);
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
                    const server = new A_AUTH_ServerCommandsAuthenticator({
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });

                    this._AuthMap.set(this.environment, server);
                    return server;
                }
            }
        }
    }

    protected async loadExtendedConfigurationsFromEnvironment(): Promise<void> {
        this.SSO_LOCATION = process.env[this.getConfigurationProperty_ENV_Alias('SSO_LOCATION')] || this.SSO_LOCATION;
    }

    protected async loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void> {
        this.SSO_LOCATION = config[this.getConfigurationProperty_File_Alias('SSO_LOCATION')] || this.SSO_LOCATION;
    }
}


export const A_AUTH_Context = new A_AUTH_ContextClass()