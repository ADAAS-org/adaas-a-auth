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

        const resp = await this.post<A_AUTH_APP_INTERACTIONS_TYPES__SignUpResponse, M>(`/sign-up`, newUser, {
            meta
        });

        // Set the authenticator for the context
        this.context.setAuthenticator({
            token: resp.token,
            refreshToken: resp.refreshToken,
            exp: resp.exp,
        });

        return resp;
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

        const resp = await this.post<A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileResponse, M>(`/sign-up/profile`, profile, {
            meta
        });

        if ('token' in resp) {
            // Set the authenticator for the context
            this.context.setAuthenticator({
                token: resp.token,
                refreshToken: resp.refreshToken,
                exp: resp.exp,
            });
        }

        return resp;
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

        const resp = await this.post<A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationResponse, M>(`/sign-up/organization`, organization, {
            meta
        });

        if ('token' in resp) {
            // Set the authenticator for the context
            this.context.setAuthenticator({
                token: resp.token,
                refreshToken: resp.refreshToken,
                exp: resp.exp,
            });
        }

        return resp;
    }
}