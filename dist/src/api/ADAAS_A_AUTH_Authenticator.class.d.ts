import { ADAAS_A_AUTH_APIProvider } from "../global/ADAAS_A_AUTH_APIProvider.class";
export declare class ADAAS_A_AUTH_AuthenticatorClass extends ADAAS_A_AUTH_APIProvider {
    protected baseURL: string;
    constructor();
    getSSOUrl(redirectURL: string): Promise<string>;
    getAccessTokenFromCode(code: string): Promise<string>;
    getAccessTokenFromHint(hint: string): Promise<string>;
}
export declare const ADAAS_A_AUTH_Authenticator: ADAAS_A_AUTH_AuthenticatorClass;
