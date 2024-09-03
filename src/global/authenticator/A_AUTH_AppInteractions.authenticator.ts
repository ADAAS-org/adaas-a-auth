import { AxiosResponse } from "axios";
import { A_AUTH_Authenticator } from "../A_AUTH_Authenticator.class";
import { A_SDK_CommonHelper } from "@adaas/a-sdk-types";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "@adaas/a-auth/constants/errors.constants";
import { A_AUTH_TYPES__AuthenticatorAuthResult } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";
import { A_SDK_ScheduleObject } from "@adaas/a-sdk-types/dist/src/global/A_SDK_ScheduleObject.class";

export class A_AUTH_AppInteractionsAuthenticator extends A_AUTH_Authenticator {

    /**
     * Could be both API Credentials Token and User Token for the UI applications
     * Or special Token for the SDK operations on behalf of the user
     */
    protected _token: string = '';
    protected _tokenExp: number = 0;

    protected _refreshToken: string = '';

    schedule?: A_SDK_ScheduleObject<A_AUTH_TYPES__AuthenticatorAuthResult>;


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
                            `${this.baseURL}/api/v1/a-auth/token/verify`,
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
                    reject(error)
                }
            });
        }

        return this.authPromise;
    }


    async refresh(exp: number): Promise<A_AUTH_TYPES__AuthenticatorAuthResult> {
        try {
            await this.schedule?.clear();

            this.schedule = A_SDK_CommonHelper
                .schedule<A_AUTH_TYPES__AuthenticatorAuthResult>(
                    (exp * 1000) - 60 * 1000,
                    async () => {
                        this._refreshToken = localStorage.getItem('x-adaas-refresh') || '';

                        const updatedTokens: AxiosResponse<{
                            token: string,
                            refreshToken: string
                        }> = await this._axiosInstance
                            .post(`${this.baseURL}/api/v1/a-auth/token/refresh`, {
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

            return await this.schedule.promise;

        } catch (error) {
            this.context.Errors.throw(A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_REFRESH_TOKEN);
        }
    }


    async destroy(...props: any): Promise<void> {
        await this.schedule?.clear();

        this._token = undefined as any;
    }
}