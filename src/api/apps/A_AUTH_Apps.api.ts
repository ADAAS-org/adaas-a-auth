import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { AxiosResponse } from "axios";
import { A_AUTH_TYPES__App_APIEntity, A_AUTH_TYPES__App_ListRequestFiler } from "./types/A_AUTH_AppsAPI.types";
import { A_AUTH_APIProvider } from "@adaas/a-auth/global/A_AUTH_APIProvider.class";

export class A_AUTH_AppsAPIClass extends A_AUTH_APIProvider {

    protected baseURL = process.env.ADAAS_SSO_LOCATION || 'https://sso.adaas.org';

    constructor() {
        super();
        this.init();
    }


    // ==========================================
    // ================ App API ================
    // ==========================================

    /**
     * Returns a list of apps in accordance with API Credentials permissions and issuer
     * Based on The parent organization App
     * 
     * 
     * @param pagination 
     * @param filter 
     * @returns 
     */
    async getApps(
        pagination: A_SDK_TYPES__IRequestPagination,
        filter: A_AUTH_TYPES__App_ListRequestFiler
    ): Promise<A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__App_APIEntity>> {
        const response: AxiosResponse<
            A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__App_APIEntity>
        > = await this.axiosInstance
            .get('/api/v1/apps', {
                params: {
                    ...pagination,
                    ...filter
                }
            });

        return response.data;
    }


    /**
     * Returns a app by id or identity
     * 
     * @param appIdOrIdentity 
     * @returns 
     */
    async getApp(
        appIdOrIdentity: number | string,
    ): Promise<A_AUTH_TYPES__App_APIEntity> {
        const response: AxiosResponse<A_AUTH_TYPES__App_APIEntity> = await this.axiosInstance
            .get(`/api/v1/apps/${appIdOrIdentity}`);

        return response.data;
    }


    /**
     * Creates a new app
     * 
     * @param app 
     * @returns 
     */
    async createApp(
        app: A_AUTH_TYPES__App_APIEntity
    ): Promise<A_AUTH_TYPES__App_APIEntity> {
        const response: AxiosResponse<A_AUTH_TYPES__App_APIEntity> = await this.axiosInstance
            .post('/api/v1/apps', app);

        return response.data;
    }


    /**
     * Updates an existing app
     * 
     * @param app 
     * @returns 
     */
    async updateApp(
        app: A_AUTH_TYPES__App_APIEntity
    ): Promise<A_AUTH_TYPES__App_APIEntity> {
        const response: AxiosResponse<A_AUTH_TYPES__App_APIEntity> = await this.axiosInstance
            .put(`/api/v1/apps/${app.id}`, app);

        return response.data;
    }


    
}
