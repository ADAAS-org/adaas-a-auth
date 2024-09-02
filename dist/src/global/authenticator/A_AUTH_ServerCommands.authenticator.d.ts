import { AxiosInstance } from "axios";
import { A_AUTH_Authenticator } from "../A_AUTH_Authenticator.class";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__AuthenticatorAuthResult, A_AUTH_TYPES__AuthenticatorConfigurations, A_AUTH_TYPES__AuthenticatorCredentials, A_AUTH_TYPES__IAuthenticator } from "../../types/A_AUTH_Authenticator.types";
import { A_SDK_ScheduleObject } from "@adaas/a-sdk-types/dist/src/global/A_SDK_ScheduleObject.class";
export declare class A_AUTH_ServerCommandsAuthenticator extends A_AUTH_Authenticator implements A_AUTH_TYPES__IAuthenticator {
    /**
     * Could be both API Credentials Token and User Token for the UI applications
     * Or special Token for the SDK operations on behalf of the user
     */
    protected _token: string;
    protected _tokenExp: number;
    protected _client_id: string;
    protected _client_secret: string;
    protected schedule?: A_SDK_ScheduleObject<A_AUTH_TYPES__AuthenticatorAuthResult>;
    protected baseURL: string;
    protected _axiosInstance: AxiosInstance;
    protected authPromise?: Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
    constructor(
    /**
     *  Default API Credentials configuration
     */
    credentials: A_SDK_TYPES__Required<Partial<A_AUTH_TYPES__AuthenticatorCredentials>, ['client_id', 'client_secret']>, 
    /**
     *  Authenticator Configuration
     */
    config?: A_AUTH_TYPES__AuthenticatorConfigurations);
    getToken(): Promise<string>;
    /**
     *
     * Authenticates the SDK with the API Credentials
     * Uses on BE side only
     *
     * @returns void
     */
    authenticate(): Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
    refresh(): Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
}
