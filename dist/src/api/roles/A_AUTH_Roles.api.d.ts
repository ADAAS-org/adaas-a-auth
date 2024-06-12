import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__Role_APIEntity } from "./types/A_AUTH_RolesAPI.types";
import { A_AUTH_APIProvider } from "../../global/A_AUTH_APIProvider.class";
export declare class A_AUTH_RolesAPIClass extends A_AUTH_APIProvider {
    protected baseURL: string;
    constructor();
    /**
     * Returns a list of roles in accordance with API Credentials permissions and issuer
     * Based on The parent organization Role
     *
     *
     * @param pagination
     * @param filter
     * @returns
     */
    getRoles(pagination: A_SDK_TYPES__IRequestPagination, filter: A_SDK_TYPES__IRequestFilter): Promise<A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__Role_APIEntity>>;
    /**
     * Returns a role by id or identity
     *
     * @param roleIdOrIdentity
     * @returns
     */
    getRole(roleIdOrIdentity: number | string): Promise<A_AUTH_TYPES__Role_APIEntity>;
    /**
     * Creates a new role
     *
     * @param role
     * @returns
     */
    createRole(role: A_AUTH_TYPES__Role_APIEntity): Promise<A_AUTH_TYPES__Role_APIEntity>;
}
