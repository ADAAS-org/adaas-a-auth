import { AxiosInstance, AxiosResponse } from "axios";
import { A_AUTH_Authenticator } from "../A_AUTH_Authenticator.class";
import { A_SDK_CommonHelper } from "@adaas/a-sdk-types";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "@adaas/a-auth/constants/errors.constants";
import { A_AUTH_TYPES__AuthenticatorAuthResult, A_AUTH_TYPES__IAuthenticator } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";
import { A_SDK_ScheduleObject } from "@adaas/a-sdk-types/dist/src/global/A_SDK_ScheduleObject.class";

export class A_AUTH_ServerCommandsAuthenticator extends A_AUTH_Authenticator implements A_AUTH_TYPES__IAuthenticator {

    /**
     * Could be both API Credentials Token and User Token for the UI applications
     * Or special Token for the SDK operations on behalf of the user
     */
    protected _token: string = '';
    protected _tokenExp: number = 0;

    protected _client_id: string = '';
    protected _client_secret: string = '';

    protected schedule?: A_SDK_ScheduleObject<A_AUTH_TYPES__AuthenticatorAuthResult>;

    protected baseURL: string = '';
    protected _axiosInstance!: AxiosInstance

    protected authPromise?: Promise<A_AUTH_TYPES__AuthenticatorAuthResult>;


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
    async authenticate(): Promise<A_AUTH_TYPES__AuthenticatorAuthResult> {
        if (!this.authPromise) {
            this.authPromise = new Promise<A_AUTH_TYPES__AuthenticatorAuthResult>(async (resolve, reject) => {
                try {
                    const response: AxiosResponse<{ token: string, exp: number }> = await this._axiosInstance
                        .post(
                            `${this.baseURL}/api/v1/-s-cmd-/api-credentials/authorize`,
                            {
                                client_id: this._client_id,
                                client_secret: this._client_secret
                            });

                    this._token = response.data.token;
                    this._tokenExp = response.data.exp;

                    /**
                     * Run automatic Refresh of the token
                     */
                    this.refresh();

                    resolve({
                        token: this._token,
                        exp: this._tokenExp
                    });
                } catch (error) {
                    reject(error);
                }
            });
        }

        return this.authPromise;
    }




    async refresh(): Promise<A_AUTH_TYPES__AuthenticatorAuthResult> {
        try {

            if (this.schedule)
                this.schedule.clear();

            const diff = this._tokenExp - Math.floor(Date.now() / 1000);

            A_SDK_CommonHelper
                .schedule<undefined>(
                    (diff * 1000) - 60 * 1000,
                    async () => this.authPromise = undefined,
                );

            const schedule = A_SDK_CommonHelper
                .schedule<A_AUTH_TYPES__AuthenticatorAuthResult>(
                    (diff * 1000) - 60 * 1000,
                    () => {
                        this.authPromise = undefined;
                        return this.authenticate();
                    },
                );

            return await schedule.promise;

        } catch (error) {
            return {
                token: this._token,
                exp: this._tokenExp
            }
        }
    }
}