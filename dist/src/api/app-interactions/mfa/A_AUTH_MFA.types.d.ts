export type A_AUTH_APP_INTERACTIONS_TYPES__EnableMFA_AppRequest = {};
export type A_AUTH_APP_INTERACTIONS_TYPES__EnableMFA_AppResponse = {
    /**
     * The QR Code to scan with Authenticator App
     * should be rendered as an image
     */
    qrCode: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_AppTokenRequest = {
    /**
     *  MFA Code to confirm device authorization and user identity
     *  Code coming from Authenticator App
     */
    token: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_AppTokenResponse = {
    status: 'OK' | 'ERROR';
};
export type A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_EmailTokenRequest = {
    /**
     *  MFA Code to confirm device authorization and user identity
     *  Code coming from Email
     */
    token: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__VerifyMFA_EmailTokenResponse = {
    status: 'OK' | 'ERROR';
};
