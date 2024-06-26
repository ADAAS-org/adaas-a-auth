import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";

//========================= DEFAULT ROLES API TYPES ================================
export type A_AUTH_TYPES__Role_APIEntity = {
    id: number,
    identity: string,
    name: string,
    description?: string,

    created_at: string;
    updated_at: string;
};



// ========================= PUBLIC ROLES LIST API TYPES ================================
export type A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_AUTH_APP_INTERACTIONS_TYPES__PublicRolesListResponse = A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__Role_APIEntity>


// =========================  ROLES LIST API TYPES ================================
export type A_AUTH_APP_INTERACTIONS_TYPES__RolesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_AUTH_APP_INTERACTIONS_TYPES__RolesListResponse = A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__Role_APIEntity>