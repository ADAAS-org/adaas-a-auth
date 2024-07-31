import { A_AUTH_Authenticator } from "../A_AUTH_Authenticator.class";
import { A_AUTH_TYPES__AuthenticatorAuthResult } from "../../types/A_AUTH_Authenticator.types";
import { A_SDK_ScheduleObject } from "@adaas/a-sdk-types/dist/src/global/A_SDK_ScheduleObject.class";
export declare class A_AUTH_AppInteractionsAuthenticator extends A_AUTH_Authenticator {
    /**
     * Could be both API Credentials Token and User Token for the UI applications
     * Or special Token for the SDK operations on behalf of the user
     */
    protected _token: string;
    protected _tokenExp: number;
    protected _refreshToken: string;
    schedule?: A_SDK_ScheduleObject<A_AUTH_TYPES__AuthenticatorAuthResult>;
    /**
     *
     *
     * @returns void
     */
    authenticate(): Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
    refresh(exp: number): Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;
}
