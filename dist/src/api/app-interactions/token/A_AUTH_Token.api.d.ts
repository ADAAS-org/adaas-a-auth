import { A_AUTH_AppInteractions_APIProvider } from "../../../global/api-providers/A_AUTH_AppInteractions.api";
import { A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenRequest, A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenResponse, A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenRequest, A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenResponse } from "./A_AUTH_Token.types";
export declare class A_AUTH_APP_INTERACTIONS__TokenAPI extends A_AUTH_AppInteractions_APIProvider {
    protected baseURL: any;
    /**
     *
     * Method to validate token
     *
     * @param request
     * @param meta
     * @returns
     */
    verifyToken<M = any>(request: A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenResponse>;
    /**
     *
     * Method to refresh token
     *
     * @param request
     * @param meta
     * @returns
     */
    refreshToken<M = any>(request: A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenResponse>;
}
