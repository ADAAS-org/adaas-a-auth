export type A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlRequest = {
    /**
     * Redirect URL after successful sign in
     * Should be the URL of the app that is requesting the sign in
     *
     * !!!NOTE: This URL should be whitelisted in the SSO from the app settings
     */
    redirectURL: string;
    /**
     * Optional referrer URL from which the user is coming from
     * E.g. in case when Unauthorized error occurred during the redirect or user is not signed in
     *
     * !!!NOTE:  This parameter will be passed as a parameter to redirect URL. Then application can use it to redirect user back to the referrer
     */
    referrer?: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlResponse = {
    /**
     * URL to redirect the user to sign in
     * Full link with all the necessary parameters
     */
    url: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlRequest = {
    /**
     * Redirect URL after successful sign up
     * Should be the URL of the app that is requesting the sign up
     *
     * !!!NOTE: This URL should be whitelisted in the SSO from the app settings
     */
    redirectURL: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlResponse = {
    /**
     * URL to redirect the user to sign in
     * Full link with all the necessary parameters
     */
    url: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginRequest = {
    /**
     * Origin URL from which the request is coming or target URL to redirect after successful refresh
     */
    origin: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginResponse = {
    /**
     * Indicates if the origin is valid
     */
    status: 'OK' | 'ERROR';
};
