import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination, A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
import { A_AUTH_TYPES__Role_APIEntity } from "../../app-interactions/index.types";
export type A_AUTH_SERVER_COMMANDS_TYPES__RolesListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__RolesListResponse = A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__Role_APIEntity>;
export type A_AUTH_SERVER_COMMANDS_TYPES__RoleGetRequest = {
    roleASEID: string;
};
export type A_AUTH_SERVER_COMMANDS_TYPES__RoleGetResponse = A_AUTH_TYPES__Role_APIEntity;
export type A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateRequest = A_SDK_TYPES__Required<Partial<A_AUTH_TYPES__Role_APIEntity>, [
    'name'
]> & {
    userASEID: string;
} & Partial<A_AUTH_TYPES__Role_APIEntity>;
export type A_AUTH_SERVER_COMMANDS_TYPES__RoleCreateResponse = A_AUTH_TYPES__Role_APIEntity;
