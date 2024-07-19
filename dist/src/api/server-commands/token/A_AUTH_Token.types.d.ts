export type A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenRequest = {
    token: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenResponse = {
    /**
     * Token Expiration Date
     */
    exp: number;
    /**
     * The main actor in request (API credentials or User) ASEID
     *
     */
    client?: string;
    /**
     * Array of roles ASEIDs for the actor (user or api credentials)
     */
    roles: Array<string>;
    /**
     * Current Actor scope -> corresponds to selected Role Scope e.g Organization or Sub-Organization Unit
     */
    scope: string;
    /**
     * API Credentials ASEID
     */
    api?: string;
    /**
     * user ASEID
     */
    user?: string;
    /**
     *  App ASEID
     */
    app?: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenRequest = {
    refreshToken: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenResponse = {
    token: string;
    refreshToken: string;
    exp: number;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenRequest = {
    /**
     * Oauth2 code that is received from the SSO after redirect
     */
    code: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenResponse = {
    token: string;
    refreshToken: string;
    exp: number;
};
