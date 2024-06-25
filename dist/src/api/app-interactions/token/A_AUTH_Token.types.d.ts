export type A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenRequest = {
    token: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenResponse = {
    valid: boolean;
    exp: number;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenRequest = {
    refreshToken: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenResponse = {
    token: string;
    refreshToken: string;
    exp: number;
};
