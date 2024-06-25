import { AxiosInstance } from "axios";
import { A_AUTH_TYPES__AuthenticatorAuthResult, A_AUTH_TYPES__AuthenticatorConfigurations, A_AUTH_TYPES__AuthenticatorCredentials, A_AUTH_TYPES__IAuthenticator } from "../types/A_AUTH_Authenticator.types";
export declare class A_AUTH_Authenticator implements A_AUTH_TYPES__IAuthenticator {
    /**
     * Could be both API Credentials Token and User Token for the UI applications
     * Or special Token for the SDK operations on behalf of the user
     */
    protected _token: string;
    protected baseURL: string;
    protected _axiosInstance: AxiosInstance;
    protected authPromise?: Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
    constructor(
    /**
     *  Default API Credentials configuration
     */
    credentials: Partial<A_AUTH_TYPES__AuthenticatorCredentials>, 
    /**
     *  Authenticator Configuration
     */
    config?: A_AUTH_TYPES__AuthenticatorConfigurations);
    /**
     * Initializes the SDK or can be used to reinitialize the SDK
     */
    protected init(): void;
    getToken(): Promise<string>;
    /**
     *
     * Authenticates the SDK with the API Credentials
     * Uses on BE side only
     *
     * @returns void
     */
    authenticate(...props: any): Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
    refresh(...props: any): Promise<A_AUTH_TYPES__AuthenticatorAuthResult | undefined>;
}
