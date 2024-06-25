import { A_SDK_Context, A_SDK_GlobalContext, A_SDK_ServerError } from "@adaas/a-sdk-types";
import { A_AUTH_Authenticator } from "./A_AUTH_Authenticator.class";
import { A_AUTH_TYPES__AuthenticatorCredentials, A_AUTH_TYPES__IAuthenticator } from "../types/A_AUTH_Authenticator.types";
import { A_AUTH_AppInteractionsAuthenticator } from "./authenticator/A_AUTH_AppInteractions.authenticator";
import { A_AUTH_ServerCommandsAuthenticator } from "./authenticator/A_AUTH_ServerCommands.authenticator";
import { A_AUTH_ServerDelegateAuthenticator } from "./authenticator/A_AUTH_ServerDelegate.authenticator";
import { AxiosError, AxiosResponse } from "axios";
import { A_AUTH_TYPES__AuthContext_ErrorHandler, A_AUTH_TYPES__AuthContext_ResponseFormatter } from "../types/A_AUTH_Context.types";


export class A_AUTH_ContextClass extends A_SDK_Context {

    /**
     * API Credentials Authentication using CLIENT_ID and CLIENT_SECRET
     * Uses Across all SDKs connected to A-AUTH
     */
    global: A_SDK_Context = A_SDK_GlobalContext;


    protected SSO_LOCATION: string = 'https://sso.adaas.org';

    responseFormatter: A_AUTH_TYPES__AuthContext_ResponseFormatter = (response) => response.data;
    errorsHandler: A_AUTH_TYPES__AuthContext_ErrorHandler = (error) => { throw new A_SDK_ServerError(error) }


    protected customAllowedProperties = [
        ...this.defaultAllowedToReadProperties,
        "SSO_LOCATION"
    ] as const;


    protected _AuthMap = new Map<string, A_AUTH_TYPES__IAuthenticator>();

    constructor() {
        super('a-auth');
    }


    getConfigurationProperty<T = any>(
        property: typeof this.customAllowedProperties[number]
    ): T | undefined {
        if (this.customAllowedProperties.includes(property as any))
            return this[property as string] as T;

        return undefined;
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
     * @returns 
     */
    getAuthenticator(userASEID?: string): A_AUTH_TYPES__IAuthenticator {
        switch (true) {

            /**
             * In this case it should be Front End SDK with token received from Auth API 
             */
            case this.environment === 'frontend': {
                const existedAuth = this._AuthMap.get('frontend');
                if (existedAuth) return existedAuth;
                else {
                    const frontendAuth = new A_AUTH_AppInteractionsAuthenticator({}, {
                        ssoUrl: this.SSO_LOCATION
                    });
                    this._AuthMap.set('frontend', frontendAuth);
                    return frontendAuth;
                }
            }

            /**
             * In this case it should be APP API credentials to do operations on behalf of the user
             * 
             */
            case this.environment === 'server' && !!userASEID: {
                const existedDelegate = this._AuthMap.get(userASEID);
                if (existedDelegate) return existedDelegate;
                else {
                    const delegate = new A_AUTH_ServerDelegateAuthenticator({
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET,
                        userASEID: userASEID
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

                const existedServer = this._AuthMap.get('server');
                if (existedServer) return existedServer;
                else {
                    const server = new A_AUTH_ServerCommandsAuthenticator({
                        client_id: this.CLIENT_ID,
                        client_secret: this.CLIENT_SECRET
                    }, {
                        ssoUrl: this.SSO_LOCATION
                    });

                    this._AuthMap.set('server', server);
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