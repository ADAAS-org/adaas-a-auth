export declare enum A_AUTH_APP_INTERACTIONS_TYPES__SSO_ACTION {
    SIGN_IN = "SIGN_IN",
    RESET_PASSWORD = "RESET_PASSWORD",
    SIGN_UP = "SIGN_UP",
    SIGN_OUT = "SIGN_OUT",
    VERIFY_EMAIL = "VERIFY_EMAIL",
    SIGN_UP_CREATE_ACCOUNT = "SIGN_UP_CREATE_ACCOUNT",
    SIGN_UP_CREATE_ORGANIZATION = "SIGN_UP_CREATE_ORGANIZATION",
    AUTHORIZE_APP = "AUTHORIZE_APP",
    AUTHORIZE_DEVICE = "AUTHORIZE_DEVICE",
    ENABLE_2FA_APP = "ENABLE_2FA_APP",
    INVITE = "INVITE",
    VERIFY = "VERIFY",
    CHANGE_PASSWORD = "CHANGE_PASSWORD",
    CHANGE_EMAIL = "CHANGE_EMAIL",
    CHANGE_PHONE = "CHANGE_PHONE",
    CHANGE_USERNAME = "CHANGE_USERNAME",
    CHANGE_PROFILE_PICTURE = "CHANGE_PROFILE_PICTURE",
    ACCEPT_APP_REQUIREMENTS_CHANGES = "ACCEPT_APP_REQUIREMENTS_CHANGES",
    SIGN_IN_APP = "SIGN_IN_APP",
    ACCEPT_APP_NEW_PERMISSIONS = "ACCEPT_APP_NEW_PERMISSIONS",
    ACCEPT_APP_NEW_SCOPES = "ACCEPT_APP_NEW_SCOPES",
    ACCEPT_APP_NEW_TERMS = "ACCEPT_APP_NEW_TERMS",
    ACCEPT_APP_NEW_LICENSE = "ACCEPT_APP_NEW_LICENSE",
    ACCEPT_APP_NEW_PRIVACY_POLICY = "ACCEPT_APP_NEW_PRIVACY_POLICY"
}
export type A_AUTH_APP_INTERACTIONS_TYPES__SignInRequest = {
    email: string;
    password: string;
    appToken?: string;
    redirectUrl?: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignInResponse = Partial<{
    actions: Array<{
        action: A_AUTH_APP_INTERACTIONS_TYPES__SSO_ACTION;
        data: any;
    }>;
    token: string;
    refreshToken: string;
    exp: number;
}>;
export type A_AUTH_APP_INTERACTIONS_TYPES__SignInAppRequest = {
    app: string;
    actions?: Array<{
        action: A_AUTH_APP_INTERACTIONS_TYPES__SSO_ACTION;
        data: any;
    }>;
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
