export type A_AUTH_APP_INTERACTIONS_TYPES__SignInRequest = {
    email: string;
    password: string;
    appToken?: string;
    redirectUrl?: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignInResponse = {
    token: string;
    refreshToken: string;
    exp: number;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignInAppRequest = {
    app: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignInAppResponse = {
    status: 'OK' | 'ERROR';
};
export type A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeAppRequest = {
    /**
     * APP ASEID to authorize
     */
    app: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeAppResponse = {
    status: 'OK' | 'ERROR';
};
export type A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeDeviceRequest = {
    /**
     * MFA Code to confirm device authorization and user identity
     */
    code: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__AuthorizeDeviceResponse = {
    status: 'OK' | 'ERROR';
};
