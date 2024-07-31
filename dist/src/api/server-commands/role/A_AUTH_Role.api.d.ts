import { A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateRequest, A_AUTH_SERVER_COMMANDS_TYPES__RoleGetRequest } from "./A_AUTH_Role.types";
import { A_AUTH_ContextClass } from "../../../global/A_AUTH_Context.class";
import { A_AUTH_TYPES__APIProviderRequestConfig } from "../../../types/A_AUTH_APIProvider.types";
import { A_AUTH_ServerCommands_APIProvider } from "../../../global/api-providers/A_AUTH_ServerCommands.api";
export declare class A_AUTH_SERVER_COMMANDS__RolesAPI extends A_AUTH_ServerCommands_APIProvider<A_AUTH_ContextClass> {
    protected get baseURL(): string;
    create<M = any>(request: A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<import("../../app-interactions/index.types").A_AUTH_TYPES__Role_APIEntity>;
    /**
     * Returns a role by ASEID
     *
     * @param roleIdOrIdentity
     * @returns
     */
    load<M>(request: A_AUTH_SERVER_COMMANDS_TYPES__RoleGetRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<import("../../app-interactions/index.types").A_AUTH_TYPES__Role_APIEntity>;
}
