import { A_AUTH_APIProvider } from "../global/A_AUTH_APIProvider.class";
export declare class A_AUTH_AuthenticatorClass extends A_AUTH_APIProvider {
    protected baseURL: string;
    constructor();
    getSSOUrl(redirectURL: string): Promise<string>;
    getAccessTokenFromCode(code: string): Promise<string>;
    getAccessTokenFromHint(hint: string): Promise<string>;
    getNewTokenByRefreshToken(refreshToken: string): Promise<string>;
}
export declare const A_AUTH_Authenticator: A_AUTH_AuthenticatorClass;
