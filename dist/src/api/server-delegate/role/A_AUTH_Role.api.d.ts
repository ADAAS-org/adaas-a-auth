import { A_AUTH_SERVER_DELEGATE_TYPES__RoleCreateRequest, A_AUTH_SERVER_DELEGATE_TYPES__RoleGetRequest } from "./A_AUTH_Role.types";
import { A_AUTH_ContextClass } from "../../../global/A_AUTH_Context.class";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "../../../types/A_AUTH_APIProvider.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_ServerDelegateAuthenticator } from "../../../global/authenticator/A_AUTH_ServerDelegate.authenticator";
import { A_AUTH_ServerDelegate_APIProvider } from "../../../global/api-providers/A_AUTH_ServerDelegate.api";
export declare class A_AUTH_SERVER_DELEGATE__RolesAPI extends A_AUTH_ServerDelegate_APIProvider<A_AUTH_ContextClass> {
    protected get baseURL(): string;
    create<M = any>(request: A_AUTH_SERVER_DELEGATE_TYPES__RoleCreateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<import("../../app-interactions/index.types").A_AUTH_TYPES__Role_APIEntity>;
    /**
     * Returns a role by ASEID
     *
     * @param roleIdOrIdentity
     * @returns
     */
    load<M>(request: A_AUTH_SERVER_DELEGATE_TYPES__RoleGetRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<import("../../app-interactions/index.types").A_AUTH_TYPES__Role_APIEntity>;
}
