import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { A_AUTH_Authenticator } from "../A_AUTH_Authenticator.class";
import { A_SDK_CommonHelper, A_SDK_Error, A_SDK_ServerError } from "@adaas/a-sdk-types";
import { ADAAS_ErrorsProvider } from "@adaas/a-auth/helpers/errors.helper";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "@adaas/a-auth/constants/errors.constants";
import { A_AUTH_TYPES__AuthenticatorAuthResult } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";

export class A_AUTH_AppInteractionsAuthenticator extends A_AUTH_Authenticator {

    /**
     * Could be both API Credentials Token and User Token for the UI applications
     * Or special Token for the SDK operations on behalf of the user
     */
    protected _token: string = '';
    protected _tokenExp: number = 0;

    protected _refreshToken: string = '';


    /**
     * 
     * 
     * @returns void
     */
    async authenticate(): Promise<A_AUTH_TYPES__AuthenticatorAuthResult> {
        /**
         * Authentication must be done only once by external request using SSO API instead of SDK
         */
        if (!this.authPromise) {
            this.authPromise = new Promise(async (resolve, reject) => {
                try {
                    this._token = localStorage.getItem('x-adaas-access') || '';

                    const response: AxiosResponse<{ valid: boolean, exp: number }> = await this._axiosInstance
                        .post(
                            `${this.baseURL}/api/v1/auth/token/verify`,
                            {
                                token: this._token,
                            });

                    this._tokenExp = response.data.exp;

                    /**
                     * Run automatic Refresh of the token
                     */
                    this.refresh(this._tokenExp);

                    resolve({
                        token: this._token,
                        exp: this._tokenExp
                    })
                } catch (error) {
                    reject(new A_SDK_Error(error))
                }
            });
        }

        return this.authPromise;
    }


    async refresh(exp: number): Promise<A_AUTH_TYPES__AuthenticatorAuthResult> {
        try {
            const schedule = A_SDK_CommonHelper
                .schedule<A_AUTH_TYPES__AuthenticatorAuthResult>(
                    (exp * 1000) - 60 * 1000,
                    async () => {
                        this._refreshToken = localStorage.getItem('x-adaas-refresh') || '';

                        const updatedTokens: AxiosResponse<{
                            token: string,
                            refreshToken: string
                        }> = await this._axiosInstance
                            .post(`${this.baseURL}/api/v1/auth/token/refresh`, {
                                refreshToken: this._refreshToken
                            }, {
                                headers: {
                                    Authorization: `Bearer ${this._token}`
                                }
                            });

                        this._token = updatedTokens.data.token;
                        this._refreshToken = updatedTokens.data.refreshToken;

                        return {
                            token: this._token,
                            refreshToken: this._refreshToken
                        }
                    },
                );

            return await schedule.promise;

        } catch (error) {
            throw ADAAS_ErrorsProvider.getError(A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_REFRESH_TOKEN);
        }
    }
}