import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_ServerCommands.api";
import {
    A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlResponse,
    A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlResponse,
    A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginResponse
} from "./A_AUTH_SSO.types";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth/types/A_AUTH_APIProvider.types";



export class A_AUTH_SERVER_COMMANDS__SsoAPI extends A_AUTH_ServerCommands_APIProvider {

    protected baseURL = this.context.getConfigurationProperty('SSO_LOCATION');


    /**
     * Generates a sign in url for the user to sign in via ADAAS SS0
     *  
     * @param request 
     * @param config 
     * @returns 
     */
    getSignInUrl<M = any>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlRequest,
        config: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return this.post<A_AUTH_SERVER_COMMANDS_TYPES__GetSignInUrlResponse, M>(
            `/-s-cmd-/sso/sign-in/url`,
            request,
            config
        );
    }


    /**
     * 
     * Method to generate sign up url for the user to sign up via ADAAS SSO
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async getSignUpUrl<M = any>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlRequest,
        config: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this.post<A_AUTH_SERVER_COMMANDS_TYPES__GetSignUpUrlResponse, M>(
            `/-s-cmd-/sso/sign-up/url`,
            request,
            config
        );
    }



    /**
     * Method to verify origin of the request
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async verifyOrigin<M = any>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginRequest,
        config: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this.post<A_AUTH_SERVER_COMMANDS_TYPES__VerifyOriginResponse, M>(
            `/-s-cmd-/sso/origin/verify`,
            request,
            config
        );
    }
}
