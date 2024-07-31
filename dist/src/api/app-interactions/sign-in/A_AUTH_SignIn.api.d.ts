import { A_AUTH_AppInteractions_APIProvider } from "../../../global/api-providers/A_AUTH_AppInteractions.api";
import { A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeAppRequest, A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeAppResponse, A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeDeviceRequest, A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeDeviceResponse, A_AUTH_APP_INTERACTIONS_TYPES__SignInAppRequest, A_AUTH_APP_INTERACTIONS_TYPES__SignInAppResponse, A_AUTH_APP_INTERACTIONS_TYPES__SignInRequest } from "./A_AUTH_SignIn.types";
import { A_AUTH_ContextClass } from "../../../global/A_AUTH_Context.class";
export declare class A_AUTH_APP_INTERACTIONS__SignInAPI extends A_AUTH_AppInteractions_APIProvider<A_AUTH_ContextClass> {
    protected baseURL: any;
    /**
     *
     * Method to sign in user using email and password
     *
     * @param credentials
     * @param meta
     * @returns
     */
    signIn<M = any>(
    /**
     * The credentials to sign in email, password and optional appToken
     */
    credentials: A_AUTH_APP_INTERACTIONS_TYPES__SignInRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<Partial<{
        actions: {
            action: import("./A_AUTH_SignIn.types").A_AUTH_APP_INTERACTIONS_TYPES__SSO_ACTION;
            data: any;
        }[];
        token: string;
        refreshToken: string;
        exp: number; /**
         * This method just do sign in to particular application.
         * In contrast with APP Authorize Request it will just sign in to the app and not attach the app to the user account
         *
         * !!!NOTE: If application is not authorized this request will FAIL
         *
         * @param app
         * @param meta
         * @returns
         */
    }>>;
    /**
     * This method just do sign in to particular application.
     * In contrast with APP Authorize Request it will just sign in to the app and not attach the app to the user account
     *
     * !!!NOTE: If application is not authorized this request will FAIL
     *
     * @param app
     * @param meta
     * @returns
     */
    signInApp<M = any>(request: A_AUTH_APP_INTERACTIONS_TYPES__SignInAppRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__SignInAppResponse>;
    /**
     *
     * Method to authorize an app for the user. Will connect application to user account
     *
     * Uses as a confirmation step after sign in to attach app with APP scopes to user account
     *
     * @param app
     * @param meta
     * @returns
     */
    authorizeApp<M = any>(request: A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeAppRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeAppResponse>;
    /**
     * When user sign in from a new device, a code will be sent to the user email to confirm the device
     *
     *
     * @param code
     * @param meta
     * @returns
     */
    authorizeDevice<M = any>(request: A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeDeviceRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeDeviceResponse>;
}
