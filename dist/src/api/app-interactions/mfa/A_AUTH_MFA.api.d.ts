import { A_AUTH_AppInteractions_APIProvider } from "../../../global/api-providers/A_AUTH_AppInteractions.api";
import { A_AUTH_APP_INTERACTIONS_TYPES__EnableMFA_AppResponse, A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_AppTokenRequest, A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_AppTokenResponse, A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_EmailTokenRequest, A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_EmailTokenResponse } from "./A_AUTH_MFA.types";
import { A_AUTH_ContextClass } from "../../../global/A_AUTH_Context.class";
export declare class A_AUTH_APP_INTERACTIONS__MfaAPI extends A_AUTH_AppInteractions_APIProvider<A_AUTH_ContextClass> {
    protected baseURL: any;
    /**
     * Request to enable MFA for the user using Authenticator App
     *
     * @param meta
     * @returns
     */
    enableMFA_App<M = any>(
    /**
     *  The meta object to pass through API for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__EnableMFA_AppResponse>;
    /**
     *
     * Method to verify MFA token from Authenticator App
     *
     * @param request
     * @param meta
     * @returns
     */
    verifyMFA_AppToken<M = any>(request: A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_AppTokenRequest, 
    /**
     *  The meta object to pass through API for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_AppTokenResponse>;
    /**
     * Method to verify MFA token from Email
     *
     *
     * @param request
     * @param meta
     * @returns
     */
    verifyMFA_EmailToken<M>(request: A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_EmailTokenRequest, 
    /**
     *  The meta object to pass through API for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_EmailTokenResponse>;
}
