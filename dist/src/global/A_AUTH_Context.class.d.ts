import { A_SDK_ContextClass } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__IAuthenticator } from "../types/A_AUTH_Authenticator.types";
import { A_AUTH_TYPES__AuthContext_ErrorHandler, A_AUTH_TYPES__AuthContext_ResponseFormatter } from "../types/A_AUTH_Context.types";
import { A_SDK_TYPES__ContextConstructor } from "@adaas/a-sdk-types/dist/src/types/A_SDK_Context.types";
export declare class A_AUTH_ContextClass extends A_SDK_ContextClass {
    protected params: Partial<A_SDK_TYPES__ContextConstructor>;
    /**
     * API Credentials Authentication using CLIENT_ID and CLIENT_SECRET
     * Uses Across all SDKs connected to A-AUTH
     */
    global: A_SDK_ContextClass;
    protected SSO_LOCATION: string;
    responseFormatter: A_AUTH_TYPES__AuthContext_ResponseFormatter;
    errorsHandler: A_AUTH_TYPES__AuthContext_ErrorHandler;
    protected customAllowedProperties: readonly ["CONFIG_SDK_VALIDATION", "CONFIG_VERBOSE", "CONFIG_IGNORE_ERRORS", "SSO_LOCATION"];
    protected _AuthMap: Map<string, A_AUTH_TYPES__IAuthenticator>;
    constructor(params?: Partial<A_SDK_TYPES__ContextConstructor>);
    getConfigurationProperty<T = any>(property: typeof this.customAllowedProperties[number]): T;
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
     * @returns
     */
    getAuthenticator(userASEID?: string): A_AUTH_TYPES__IAuthenticator;
    protected loadExtendedConfigurationsFromEnvironment(): Promise<void>;
    protected loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void>;
}
export declare const A_AUTH_Context: A_AUTH_ContextClass;
