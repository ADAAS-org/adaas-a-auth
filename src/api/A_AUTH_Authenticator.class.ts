import { AxiosResponse } from "axios";
import { A_AUTH_APIProvider } from "../global/A_AUTH_APIProvider.class";


export class A_AUTH_AuthenticatorClass extends A_AUTH_APIProvider {

    protected baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';

    constructor() {
        super();
        this.init();
    }


    async getSSOUrl(redirectURL: string) {
        console.log('baseURL', this.baseURL)
        const response: AxiosResponse<{
            url: string
        }> = await this.axiosInstance.post('/api/v1/auth/sso/url', {
            redirectURL
        });

        return response.data.url;
    }


    async getAccessTokenFromCode(code: string) {
        const response: AxiosResponse<{
            token: string
        }> = await this.axiosInstance.post('/auth/sso/token', {
            code
        });

        return response.data.token;
    }


    async getAccessTokenFromHint(hint: string) {
        const response: AxiosResponse<{
            token: string
        }> = await this.axiosInstance.post('/auth/sso/hint', {
            hint
        });

        return response.data.token;
    }

    async getNewTokenByRefreshToken(refreshToken: string) {
        const response: AxiosResponse<{
            token: string
        }> = await this.axiosInstance.post('/auth/token/refresh', {
            refreshToken
        });

        return response.data.token;
    }
}

export const A_AUTH_Authenticator = new A_AUTH_AuthenticatorClass();