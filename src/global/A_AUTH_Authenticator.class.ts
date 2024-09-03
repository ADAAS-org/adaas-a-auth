import axios, { AxiosInstance } from "axios";
import { A_SDK_ServerError } from "@adaas/a-sdk-types";
import { A_SDK_CONSTANTS__ERROR_CODES } from "@adaas/a-sdk-types/dist/src/constants/errors.constants";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "../constants/errors.constants";
import {
    A_AUTH_TYPES__AuthenticatorAuthResult,
    A_AUTH_TYPES__AuthenticatorConfigurations,
    A_AUTH_TYPES__AuthenticatorCredentials,
    A_AUTH_TYPES__IAuthenticator
} from "../types/A_AUTH_Authenticator.types";
import { A_AUTH_ContextClass } from "./A_AUTH_Context.class";

export class A_AUTH_Authenticator implements A_AUTH_TYPES__IAuthenticator {

    /**
     * Could be both API Credentials Token and User Token for the UI applications
     * Or special Token for the SDK operations on behalf of the user
     */
    protected _token: string = '';

    protected baseURL: string = '';

    protected _axiosInstance!: AxiosInstance

    protected context: A_AUTH_ContextClass;

    protected authPromise?: Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;

    constructor(
        context: A_AUTH_ContextClass,
        /**
         *  Default API Credentials configuration
         */
        credentials: Partial<A_AUTH_TYPES__AuthenticatorCredentials>,
        /**
         *  Authenticator Configuration
         */
        config: A_AUTH_TYPES__AuthenticatorConfigurations = {
            ssoUrl: 'https://sso.adaas.org'
        },
    ) {
        this.context = context;
        this.baseURL = config.ssoUrl;
        this.init();
    }


    /**
     * Initializes the SDK or can be used to reinitialize the SDK
     */
    protected init() {
        this._axiosInstance = axios.create({
            baseURL: this.baseURL
        });
        this._axiosInstance.interceptors.response.use(
            response => response,
            error => { throw new A_SDK_ServerError(error) });
    }


    async getToken(): Promise<string> {
        await this.authPromise;

        if (!this._token)
            this.context.Errors.throw(A_AUTH_CONSTANTS__ERROR_CODES.TOKEN_NOT_AVAILABLE);

        return this._token;
    }


    /**
     * 
     * Authenticates the SDK with the API Credentials
     * Uses on BE side only
     * 
     * @returns void
     */
    async authenticate(...props: any): Promise<A_AUTH_TYPES__AuthenticatorAuthResult> {
        return this.context.Errors.throw(A_SDK_CONSTANTS__ERROR_CODES.METHOD_NOT_IMPLEMENTED)
    }

    async refresh(...props: any): Promise<A_AUTH_TYPES__AuthenticatorAuthResult | undefined> {
        return this.context.Errors.throw(A_SDK_CONSTANTS__ERROR_CODES.METHOD_NOT_IMPLEMENTED)
    }


    async destroy(...props: any): Promise<void> {
        return this.context.Errors.throw(A_SDK_CONSTANTS__ERROR_CODES.METHOD_NOT_IMPLEMENTED)
    }
}