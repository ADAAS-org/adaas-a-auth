import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_AUTH_TYPES__Role_APIEntity } from "./types/A_AUTH_RolesAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth/global/A_AUTH_APIProvider.class";

export class A_AUTH_RolesAPIClass extends A_AUTH_APIProvider {

    protected baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';

    constructor() {
        super();
        this.init();
    }


    // ==========================================
    // ================ Role API ================
    // ==========================================

    /**
     * Returns a list of roles in accordance with API Credentials permissions and issuer
     * Based on The parent organization Role
     * 
     * 
     * @param pagination 
     * @param filter 
     * @returns 
     */
    async getRoles(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_SDK_TYPES__IRequestFilter
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__Role_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__Role_APIEntity>
        > = await this.axiosInstance
            .get('/api/v1/roles', {
                params: {
                    ...pagination,
                    ...filter
                }
            });

        return response.data;
    }


    /**
     * Returns a role by id or identity
     * 
     * @param roleIdOrIdentity 
     * @returns 
     */
    async getRole(
        roleIdOrIdentity: number | string,
    ): Promise<A_AUTH_TYPES__Role_APIEntity> {
        const response: AxiosResponse<A_AUTH_TYPES__Role_APIEntity> = await this.axiosInstance
            .get(`/api/v1/roles/${roleIdOrIdentity}`);

        return response.data;
    }


    /**
     * Creates a new role
     * 
     * @param role 
     * @returns 
     */
    async createRole(
        role: A_AUTH_TYPES__Role_APIEntity
    ): Promise<A_AUTH_TYPES__Role_APIEntity> {
        const response: AxiosResponse<A_AUTH_TYPES__Role_APIEntity> = await this.axiosInstance
            .post('/api/v1/roles', role);

        return response.data;
    }
}
