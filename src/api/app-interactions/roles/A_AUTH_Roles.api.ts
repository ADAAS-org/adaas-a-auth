import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_AppInteractions.api";
import {
    A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListResponse,
    A_AUTH_APP_INTERACTIONS_TYPES__RolesListRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__RolesListResponse,
    A_AUTH_TYPES__Role_APIEntity
} from "./A_AUTH_RolesAPI.types";
import { A_AUTH_ContextClass } from "@adaas/a-auth/global/A_AUTH_Context.class";

export class A_AUTH_APP_INTERACTIONS__RolesAPI extends A_AUTH_AppInteractions_APIProvider<A_AUTH_ContextClass> {

    protected baseURL = this.context.getConfigurationProperty('SSO_LOCATION');



    /**
     * This method returns a list of publicly available roles, like student, or business owner
     * These roles can be used to setup initial ADAAS System behavior 
     * 
     * @param pagination 
     * @param filter 
     * @returns 
     */
    async getPublicRolesList<M = any>(
        request: A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListResponse, M>(
                '/roles/public',
                request,
                {
                    meta
                }
            );
    }


    /**
     * Returns a list of roles in accordance with API Credentials permissions and issuer
     * Based on The parent organization Role
     * 
     * 
     * @param pagination 
     * @param filter 
     * @returns 
     */
    async getRolesList<M = any>(
        request: A_AUTH_APP_INTERACTIONS_TYPES__RolesListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_AUTH_APP_INTERACTIONS_TYPES__RolesListResponse, M>(
                '/roles',
                request,
                {
                    meta
                });
    }


    /**
     * Returns a role by ASEID
     * 
     * @param roleIdOrIdentity 
     * @returns 
     */
    async getRole<M>(
        roleASEID: string,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_AUTH_TYPES__Role_APIEntity>(
                `/roles/${roleASEID}`,
                {},
                {
                    meta
                });
    }
}
