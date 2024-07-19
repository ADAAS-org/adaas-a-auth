import { AxiosInstance, AxiosResponse } from "axios";
import { A_AUTH_Authenticator } from "../A_AUTH_Authenticator.class";
import { A_AUTH_TYPES__AuthenticatorAuthResult, A_AUTH_TYPES__AuthenticatorConfigurations, A_AUTH_TYPES__AuthenticatorCredentials, A_AUTH_TYPES__IAuthenticator } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";
import { A_SDK_CommonHelper, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";

export class A_AUTH_ServerDelegateAuthenticator extends A_AUTH_Authenticator implements A_AUTH_TYPES__IAuthenticator {


    /**
     * This is a User token issued by ADAAS SSO for the communication between FE and BE
     */
    protected _userASEID!: string;
    protected _userScope!: string;

    protected _client_id: string = '';
    protected _client_secret: string = '';

    protected baseURL: string = '';
    protected _axiosInstance!: AxiosInstance;


    constructor(
        /**
         *  Default API Credentials configuration
         */
        credentials: A_SDK_TYPES__Required<Partial<A_AUTH_TYPES__AuthenticatorCredentials>, ['userASEID', 'userScope']>,
        /**
         *  Authenticator Configuration
         */
        config: A_AUTH_TYPES__AuthenticatorConfigurations = {
            ssoUrl: 'https://sso.adaas.org'
        }
    ) {
        super(credentials, config);

        this._userASEID = credentials.userASEID;
        this._userScope = credentials.userScope;
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
            this.authPromise = new Promise(async (resolve, reject) => {
                try {
                    const response: AxiosResponse<{
                        token: string,
                        exp: number
                    }> = await this._axiosInstance.post(
                        `${this.baseURL}/api/v1/-s-cmd-/api-credentials/authorize`,
                        {
                            client_id: this._client_id,
                            client_secret: this._client_secret,
                            usr: this._userASEID,
                            scope: this._userScope
                        });

                    this.refresh(response.data.exp);

                    resolve({
                        token: response.data.token,
                        exp: response.data.exp
                    });

                } catch (error) {
                    reject(error);
                }
            });
        }

        return this.authPromise;
    }



    /**
     * 
     * For this AUTH Type, the refresh is not needed
     * Because of that we will just delete the token from the memory
     * 
     * @param exp - Expiration Date in Unix Timestamp 
     * @param userASEID 
     * @returns 
     */
    async refresh(exp: number): Promise<undefined> {

        const diff = exp - Math.floor(Date.now() / 1000);

        A_SDK_CommonHelper
            .schedule<undefined>(
                (diff * 1000) - 60 * 1000,
                async () => this.authPromise = undefined,
            );

        return;
    }
}