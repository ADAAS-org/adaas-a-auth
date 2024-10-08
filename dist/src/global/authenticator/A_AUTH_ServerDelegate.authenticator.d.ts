import { AxiosInstance } from "axios";
import { A_AUTH_Authenticator } from "../A_AUTH_Authenticator.class";
import { A_AUTH_TYPES__AuthenticatorAuthResult, A_AUTH_TYPES__AuthenticatorConfigurations, A_AUTH_TYPES__AuthenticatorCredentials, A_AUTH_TYPES__IAuthenticator } from "../../types/A_AUTH_Authenticator.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_ContextClass } from "../A_AUTH_Context.class";
import { A_SDK_ScheduleObject } from "@adaas/a-sdk-types/dist/src/global/A_SDK_ScheduleObject.class";
export declare class A_AUTH_ServerDelegateAuthenticator extends A_AUTH_Authenticator implements A_AUTH_TYPES__IAuthenticator {
    /**
     * This is a User token issued by ADAAS SSO for the communication between FE and BE
     */
    protected _userASEID: string;
    protected _userScope: string;
    protected _client_id: string;
    protected _client_secret: string;
    protected baseURL: string;
    protected _axiosInstance: AxiosInstance;
    protected autoDestroySchedule?: A_SDK_ScheduleObject<void>;
    constructor(context: A_AUTH_ContextClass, 
    /**
     *  Default API Credentials configuration
     */
    credentials: A_SDK_TYPES__Required<Partial<A_AUTH_TYPES__AuthenticatorCredentials>, ['userASEID', 'userScope']>, 
    /**
     *  Authenticator Configuration
     */
    config?: A_AUTH_TYPES__AuthenticatorConfigurations);
    /**
     *
     * Authenticates the SDK with the API Credentials
     * Uses on BE side only
     *
     * @returns void
     */
    authenticate(): Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
    /**
     *
     * For this AUTH Type, the refresh is not needed
     * Because of that we will just delete the token from the memory
     *
     * @param exp - Expiration Date in Unix Timestamp
     * @param userASEID
     * @returns
     */
    refresh(exp: number): Promise<undefined>;
    destroy(...props: any): Promise<void>;
}
