import { A_AUTH_APIProvider } from "../global/A_AUTH_APIProvider.class";
export declare class A_AUTH_AuthenticatorClass extends A_AUTH_APIProvider {
    protected baseURL: string;
    constructor();
    getSSOUrl(redirectURL: string): Promise<string>;
    getAccessToken(hint: string): Promise<{
        token: string;
        refreshToken: string;
    }>;
    verifyToken(token: string): Promise<boolean>;
    refreshToken(refreshToken: string): Promise<{
        token: string;
        refreshToken: string;
    }>;
}
export declare const A_AUTH_Authenticator: A_AUTH_AuthenticatorClass;
