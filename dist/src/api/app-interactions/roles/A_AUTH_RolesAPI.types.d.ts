import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
export type A_AUTH_TYPES__Role_APIEntity = {
    aseid: string;
    id: number;
    icon?: string;
    name: string;
    description?: string;
    default: boolean;
    public: boolean;
    user_id?: number;
    scope_aseid?: string;
    created_at: string;
    updated_at: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListResponse = A_SDK_TYPES__IDefaultPagination<Partial<A_AUTH_TYPES__Role_APIEntity>>;
export type A_AUTH_APP_INTERACTIONS_TYPES__ScopedRolesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__ScopedRolesListResponse = A_SDK_TYPES__IDefaultPagination<Partial<A_AUTH_TYPES__Role_APIEntity>>;
export type A_AUTH_APP_INTERACTIONS_TYPES__RolesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__RolesListResponse = A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__Role_APIEntity>;
