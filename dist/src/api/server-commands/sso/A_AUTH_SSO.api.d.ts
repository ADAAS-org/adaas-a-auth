import { A_AUTH_ServerCommands_APIProvider } from "../../../global/api-providers/A_AUTH_ServerCommands.api";
import { A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlRequest, A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlResponse, A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlRequest, A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlResponse, A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginRequest, A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginResponse } from "./A_AUTH_SSO.types";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "../../../types/A_AUTH_APIProvider.types";
import { A_AUTH_ContextClass } from "../../../global/A_AUTH_Context.class";
export declare class A_AUTH_SERVER_COMMANDS__SsoAPI extends A_AUTH_ServerCommands_APIProvider<A_AUTH_ContextClass> {
    protected get baseURL(): string;
    /**
     * Generates a sign in url for the user to sign in via ADAAS SS0
     *
     * @param request
     * @param config
     * @returns
     */
    getSignInUrl<M = any>(request: A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlResponse>;
    /**
     *
     * Method to generate sign up url for the user to sign up via ADAAS SSO
     *
     * @param request
     * @param config
     * @returns
     */
    getSignUpUrl<M = any>(request: A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlResponse>;
    /**
     * Method to verify origin of the request
     *
     * @param request
     * @param config
     * @returns
     */
    verifyOrigin<M = any>(request: A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginResponse>;
}
