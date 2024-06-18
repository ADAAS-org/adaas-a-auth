import { A_AUTH_APIProvider } from "../global/A_AUTH_APIProvider.class";
export declare class A_AUTH_AuthenticatorClass extends A_AUTH_APIProvider {
    protected baseURL: string;
    constructor(baseURL?: string);
    getSignInUrl(redirectURL: string): Promise<string>;
    getSignUpUrl(redirectURL: string): Promise<string>;
    getAccessToken(code: string): Promise<{
        token: string;
        refreshToken: string;
    }>;
    verifyToken(token: string): Promise<boolean>;
    refreshToken(refreshToken: string): Promise<{
        token: string;
        refreshToken: string;
    }>;
}
