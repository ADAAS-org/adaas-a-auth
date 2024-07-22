import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_AppInteractions.api";
import {
    A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateResponse,
    A_AUTH_SERVER_COMMANDS_TYPES__RoleGetRequest,
    A_AUTH_SERVER_COMMANDS_TYPES__RoleGetResponse,
} from "./A_AUTH_Role.types";
import { A_AUTH_ContextClass } from "@adaas/a-auth/global/A_AUTH_Context.class";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth/types/A_AUTH_APIProvider.types";
import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_ServerCommands.api";

export class A_AUTH_SERVER_COMMANDS__RolesAPI extends A_AUTH_ServerCommands_APIProvider<A_AUTH_ContextClass> {

    protected baseURL = this.context.getConfigurationProperty('SSO_LOCATION');


    async create<M = any>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>

    ) {
        return await this
            .post<A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateResponse, M>(
                '/roles',
                request,
                config);
    }


    /**
     * Returns a role by ASEID
     * 
     * @param roleIdOrIdentity 
     * @returns 
     */
    async load<M>(
        request: A_AUTH_SERVER_COMMANDS_TYPES__RoleGetRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>

    ) {
        return await this
            .get<A_AUTH_SERVER_COMMANDS_TYPES__RoleGetResponse>(
                `/roles/${request.roleASEID}`,
                {},
                config);
    }
}
