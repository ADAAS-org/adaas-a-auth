import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_AppInteractions.api";
import {
    A_AUTH_SERVER_DELEGATE_TYPES__RoleCreateRequest,
    A_AUTH_SERVER_DELEGATE_TYPES__RoleCreateResponse,
    A_AUTH_SERVER_DELEGATE_TYPES__RoleGetRequest,
    A_AUTH_SERVER_DELEGATE_TYPES__RoleGetResponse,
} from "./A_AUTH_Role.types";
import { A_AUTH_ContextClass } from "@adaas/a-auth/global/A_AUTH_Context.class";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth/types/A_AUTH_APIProvider.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_ServerDelegateAuthenticator } from "@adaas/a-auth/global/authenticator/A_AUTH_ServerDelegate.authenticator";
import { A_AUTH_ServerDelegate_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_ServerDelegate.api";

export class A_AUTH_SERVER_DELEGATE__RolesAPI extends A_AUTH_ServerDelegate_APIProvider<A_AUTH_ContextClass> {

    protected baseURL = this.context.getConfigurationProperty('SSO_LOCATION');


    async create<M = any>(
        request: A_AUTH_SERVER_DELEGATE_TYPES__RoleCreateRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_AUTH_SERVER_DELEGATE_TYPES__RoleCreateResponse, M>(
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
        request: A_AUTH_SERVER_DELEGATE_TYPES__RoleGetRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>

    ) {
        return await this
            .get<A_AUTH_SERVER_DELEGATE_TYPES__RoleGetResponse>(
                `/roles/${request.roleASEID}`,
                {},
                config);
    }
}
