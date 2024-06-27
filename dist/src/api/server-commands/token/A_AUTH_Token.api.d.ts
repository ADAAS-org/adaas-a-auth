import { A_AUTH_ServerCommands_APIProvider } from "../../../global/api-providers/A_AUTH_ServerCommands.api";
import { A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenRequest, A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenResponse, A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenRequest, A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenResponse, A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenRequest, A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenResponse } from "./A_AUTH_Token.types";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "../../../types/A_AUTH_APIProvider.types";
import { A_AUTH_ContextClass } from "../../../global/A_AUTH_Context.class";
export declare class A_AUTH_SERVER_COMMANDS__TokenAPI extends A_AUTH_ServerCommands_APIProvider<A_AUTH_ContextClass> {
    protected baseURL: any;
    /**
     * Allows to exchange code for the access token for the further communication between the client and the server
     *
     * @param request
     * @param meta
     * @returns
     */
    getAccessToken<M = any>(request: A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenRequest, config: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenResponse>;
    /**
     *
     * Method to validate token regardless of the token type
     * For the BE operation it returns more information such as user, app scope and roles.
     *
     * Received information can be used to identify user access and permissions then with A-ARC API
     *
     * @param request
     * @param meta
     * @returns
     */
    verifyToken<M = any>(request: A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenRequest, config: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenResponse>;
    /**
     *
     * Method to refresh token for the user.
     * This method can be used on Beckend side to refresh token for the user with ADAAS SSO
     *
     * @param request
     * @param meta
     * @returns
     */
    refreshToken<M = any>(request: A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenRequest, config: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenResponse>;
}
