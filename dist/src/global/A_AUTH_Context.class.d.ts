import { A_SDK_ContextClass, A_SDK_TYPES__DeepPartial } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__IAuthenticator } from "../types/A_AUTH_Authenticator.types";
import { A_AUTH_TYPES__AuthContext_ErrorHandler, A_AUTH_TYPES__AuthContext_ResponseFormatter, A_AUTH_TYPES__ContextConfigurations } from "../types/A_AUTH_Context.types";
import { A_SDK_TYPES__ContextConstructor } from "@adaas/a-sdk-types/dist/src/types/A_SDK_Context.types";
export declare class A_AUTH_ContextClass extends A_SDK_ContextClass {
    protected params: Partial<A_SDK_TYPES__ContextConstructor>;
    /**
     * API Credentials Authentication using CLIENT_ID and CLIENT_SECRET
     * Uses Across all SDKs connected to A-AUTH
     */
    global: A_SDK_ContextClass;
    protected SSO_LOCATION: string;
    protected ENABLE_AUTH: boolean;
    responseFormatter: A_AUTH_TYPES__AuthContext_ResponseFormatter;
    errorsHandler: A_AUTH_TYPES__AuthContext_ErrorHandler;
    protected authContextAllowedProperties: readonly ["CONFIG_SDK_VALIDATION", "CONFIG_VERBOSE", "CONFIG_IGNORE_ERRORS", "SSO_LOCATION", "ENABLE_AUTH"];
    protected _AuthMap: Map<string, A_AUTH_TYPES__IAuthenticator>;
    constructor(params?: Partial<A_SDK_TYPES__ContextConstructor>);
    /**
      * Configures the SDK with the provided parameters or uses the default ones
      * Useful for Front End applications to omit env variables and use the SDK
      *
      * @param verbose
      * @param ignoreErrors
      * @param sdkValidation
      */
    configure(config: A_SDK_TYPES__DeepPartial<A_AUTH_TYPES__ContextConfigurations>): void;
    getConfigurationProperty<T = any>(property: typeof this.authContextAllowedProperties[number]): T;
    /**
     * Allows to define a global custom API response and error processors
     *
     * @param responseFormatter
     * @param errorsHandler
     */
    setAPIHandlers(responseFormatter: A_AUTH_TYPES__AuthContext_ResponseFormatter, errorsHandler: A_AUTH_TYPES__AuthContext_ErrorHandler): void;
    /**
     *
     * Returns a authentication depending on the request type
     *
     * @param userASEID
     * @param userScope
     * @returns
     */
    getAuthenticator(userASEID?: string, userScope?: string): A_AUTH_TYPES__IAuthenticator;
    setAuthenticator(data: {
        token?: string;
        refreshToken?: string;
        exp?: number;
    }): void;
    protected loadExtendedConfigurationsFromEnvironment(): Promise<void>;
    protected loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void>;
}
export declare const A_AUTH_Context: A_AUTH_ContextClass;
