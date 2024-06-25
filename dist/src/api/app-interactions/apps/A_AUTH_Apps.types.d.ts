import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
export type A_AUTH_TYPES__App_APIEntity = {
    id: number;
    identity: string;
    name: string;
    description?: string;
    created_at: string;
    updated_at: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__AppsListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__AppsListResponse = A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__App_APIEntity>;
