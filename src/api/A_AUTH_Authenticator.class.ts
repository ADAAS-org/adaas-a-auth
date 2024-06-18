import { AxiosResponse } from "axios";
import { A_AUTH_APIProvider } from "../global/A_AUTH_APIProvider.class";


export class A_AUTH_AuthenticatorClass extends A_AUTH_APIProvider {

    protected baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';

    constructor(baseURL?: string) {
        super(baseURL);
        this.init();
    }


    async getSignInUrl(redirectURL: string) {
        const response: AxiosResponse<{
            url: string
        }> = await this.axiosInstance.post('/api/v1/auth/sso/url', {
            redirectURL
        });

        return response.data.url;
    }

    async getSignUpUrl(redirectURL: string) {
        const response: AxiosResponse<{
            url: string
        }> = await this.axiosInstance.post('/api/v1/auth/sso/sign-up/url', {
            redirectURL
        });

        return response.data.url;
    }



    async getAccessToken(code: string): Promise<{
        token: string,
        refreshToken: string
    }> {
        const response: AxiosResponse<{
            token: string,
            refreshToken: string
        }> = await this.axiosInstance.post('/api/v1/auth/sso/token', {
            code
        });

        return response.data;
    }


    async verifyToken(token: string): Promise<boolean> {
        const response: AxiosResponse<{
            status: 'OK' | 'ERROR',

        }> = await this.axiosInstance.post('/api/v1/auth/sso/token/verify', {
            token
        });

        return response.data.status === 'OK';
    }


    async refreshToken(refreshToken: string): Promise<{
        token: string,
        refreshToken: string
    }> {
        const response: AxiosResponse<{
            token: string,
            refreshToken: string
        }> = await this.axiosInstance.post('/api/v1/auth/sso/token/refresh', {
            refreshToken
        });

        return response.data;
    }
}

