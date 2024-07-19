import { A_SDK_TYPES__IContextCredentials } from "@adaas/a-sdk-types/dist/src/types/A_SDK_Context.types"
import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios"

export interface A_AUTH_TYPES__IAuthenticator {

    getToken(...props: any): Promise<string>

    authenticate(...props: any): Promise<A_AUTH_TYPES__AuthenticatorAuthResult>

    refresh(...props: any): Promise<A_AUTH_TYPES__AuthenticatorAuthResult | undefined>
}


export type A_AUTH_TYPES__AuthenticatorAuthResult = {
    token: string,
    refreshToken?: string,
    exp?: number
}


export type A_AUTH_TYPES__AuthenticatorConfigurations = {
    /**
     * ADAAS SSO Location
     */
    ssoUrl: string,
}


export interface A_AUTH_TYPES__AuthenticatorCredentials {

    /**
     * Api Credentials Client ID to authenticate the SDK
     * can be skipped for the FrontEnd SDKs
     */
    client_id: string;

    /**
     * Api Credentials Client Secret to authenticate the SDK
     * can be skipped for the FrontEnd SDKs
     */
    client_secret: string;

    /**
     * User Token for the UI applications Or Token to exchange for Using of Delegate API (on behalf of the user)
     */
    userToken: string

    /**
     * User Identifier for the SDK operations on behalf of the user
     */
    userASEID: string

    /**
     * User Identifier for the SDK operations on behalf of the user
     */
    userScope: string
}




export interface A_AUTH_TYPES__IAppInteractionsAxiosConfig extends AxiosRequestConfig {
    meta: {
        retry: boolean,
        message: string
    }
}