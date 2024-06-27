import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_ServerCommands.api";
import {
    A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenResponse,
    A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenResponse,
    A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenResponse
} from "./A_AUTH_Token.types";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth/types/A_AUTH_APIProvider.types";
import { A_AUTH_ContextClass } from "@adaas/a-auth/global/A_AUTH_Context.class";



export class A_AUTH_SERVER_COMMANDS__TokenAPI extends A_AUTH_ServerCommands_APIProvider<A_AUTH_ContextClass> {

    protected baseURL = this.context.getConfigurationProperty('SSO_LOCATION');



    /**
     * Allows to exchange code for the access token for the further communication between the client and the server
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    getAccessToken<M = any>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenRequest,
        config: A_AUTH_TYPES__APIProviderRequestConfig<M>

    ) {
        return this.post<A_AUTH_SERVER_COMMANDS_TYPES__GetUserAccessTokenResponse, M>(
            `/-s-cmd-/token`,
            request,
            config
        );
    }


    /**
     * 
     * Method to validate token regardless of the token type
     * For the BE operation it returns more information such as user, app scope and roles.
     * 
     * Received information can be used to identify user access and permissions then with A-ARC API
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async verifyToken<M = any>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenRequest,
        config: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this.post<A_AUTH_SERVER_COMMANDS_TYPES__VerifyTokenResponse, M>(
            `/-s-cmd-/token/verify`,
            request,
            config
        );
    }



    /**
     * 
     * Method to refresh token for the user. 
     * This method can be used on Beckend side to refresh token for the user with ADAAS SSO
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async refreshToken<M = any>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenRequest,
        config: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this.post<A_AUTH_SERVER_COMMANDS_TYPES__RefreshTokenResponse, M>(
            `/-s-cmd-/token/refresh`,
            request,
            config
        );
    }


    // async validateInvite(invite) {
    //     this.loading = true

    //     return await this.__axiosInstance.post(`/auth/invite/verify`, {
    //         invite
    //     });

    // }

}
