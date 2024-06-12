import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__App_APIEntity, A_AUTH_TYPES__App_ListRequestFiler } from "./types/A_AUTH_AppsAPI.types";
import { A_AUTH_APIProvider } from "../../global/A_AUTH_APIProvider.class";
export declare class A_AUTH_AppsAPIClass extends A_AUTH_APIProvider {
    protected baseURL: string;
    constructor();
    /**
     * Returns a list of apps in accordance with API Credentials permissions and issuer
     * Based on The parent organization App
     *
     *
     * @param pagination
     * @param filter
     * @returns
     */
    getApps(pagination: A_SDK_TYPES__IRequestPagination, filter: A_AUTH_TYPES__App_ListRequestFiler): Promise<A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__App_APIEntity>>;
    /**
     * Returns a app by id or identity
     *
     * @param appIdOrIdentity
     * @returns
     */
    getApp(appIdOrIdentity: number | string): Promise<A_AUTH_TYPES__App_APIEntity>;
    /**
     * Creates a new app
     *
     * @param app
     * @returns
     */
    createApp(app: A_AUTH_TYPES__App_APIEntity): Promise<A_AUTH_TYPES__App_APIEntity>;
    /**
     * Updates an existing app
     *
     * @param app
     * @returns
     */
    updateApp(app: A_AUTH_TYPES__App_APIEntity): Promise<A_AUTH_TYPES__App_APIEntity>;
}
