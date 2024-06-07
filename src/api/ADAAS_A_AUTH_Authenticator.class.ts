import { AxiosResponse } from "axios";
import { ADAAS_A_AUTH_APIProvider } from "../global/ADAAS_A_AUTH_APIProvider.class";


export class ADAAS_A_AUTH_AuthenticatorClass extends ADAAS_A_AUTH_APIProvider {

  
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
        }> = await this.axiosInstance.post('/auth/sso/refresh', {
            hint
        });

        return response.data.token;
    }
}

export const ADAAS_A_AUTH_Authenticator = new ADAAS_A_AUTH_AuthenticatorClass();