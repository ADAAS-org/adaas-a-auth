import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_AppInteractions.api";
import {
    A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationResponse,
    A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileResponse,
    A_AUTH_APP_INTERACTIONS_TYPES__SignUpRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__SignUpResponse
} from "./A_AUTH_SignUp.types";
import { A_AUTH_ContextClass } from "@adaas/a-auth/global/A_AUTH_Context.class";


export class A_AUTH_APP_INTERACTIONS__SignUpAPI extends A_AUTH_AppInteractions_APIProvider<A_AUTH_ContextClass> {

    protected baseURL = this.context.getConfigurationProperty('SSO_LOCATION');

    async signUp<M = any>(
        /**
         * The new user to sign up
         */
        newUser: A_AUTH_APP_INTERACTIONS_TYPES__SignUpRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<A_AUTH_APP_INTERACTIONS_TYPES__SignUpResponse> {
        this.loading = true

        return await this.post<A_AUTH_APP_INTERACTIONS_TYPES__SignUpResponse, M>(`/auth/sign-up`, newUser, {
            meta
        });
    }

    async signUpProfile<M = any>(
        /**
         * user profile to sign up
         */
        profile: A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileResponse> {
        this.loading = true

        return await this.post<A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileResponse, M>(`/auth/sign-up/profile`, profile, {
            meta
        });
    }

    async signUpOrganization<M = any>(
        /**
         * The organization to sign up
         */
        organization: A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ): Promise<A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationResponse> {
        this.loading = true

        return await this.post<A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationResponse, M>(`/auth/sign-up/organization`, organization, {
            meta
        });
    }

    // async signUpInvite(credentials, meta) {
    //     this.loading = true

    //     return await this.__axiosInstance.post(`/auth/invite/sign-up`, credentials, {
    //         meta
    //     });
    // }

}