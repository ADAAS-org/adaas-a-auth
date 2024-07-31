import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_AppInteractions.api";
import {
    A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenResponse,
    A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenResponse
} from "./A_AUTH_Token.types";
import { A_AUTH_ContextClass } from "@adaas/a-auth/global/A_AUTH_Context.class";


export class A_AUTH_APP_INTERACTIONS__TokenAPI extends A_AUTH_AppInteractions_APIProvider<A_AUTH_ContextClass> {

    protected baseURL = this.context.getConfigurationProperty('SSO_LOCATION');


    /**
     * 
     * Method to validate token
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async verify<M = any>(
        request: A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this.post<A_AUTH_APP_INTERACTIONS_TYPES__VerifyTokenResponse, M>(
            `/a-auth/token/verify`,
            request,
            {
                meta,
                adaas: {
                    auth: false
                }
            });
    }



    /**
     * 
     * Method to refresh token 
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async refresh<M = any>(
        request: A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this.post<A_AUTH_APP_INTERACTIONS_TYPES__RefreshTokenResponse, M>(
            `/a-auth/token/refresh`,
            request,
            {
                meta
            });
    }


    // async validateInvite(invite) {
    //     this.loading = true

    //     return await this.__axiosInstance.post(`/a-auth/invite/verify`, {
    //         invite
    //     });

    // }

}
