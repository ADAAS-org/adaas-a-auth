import { A_SDK_TYPES__IRequestFilter } from "@adaas/a-sdk-types";

export type A_AUTH_TYPES__App_APIEntity = {
    id: number,
    identity: string,
    name: string,
    description?: string,

    created_at: string;
    updated_at: string;
};


export interface A_AUTH_TYPES__App_ListRequestFiler extends A_SDK_TYPES__IRequestFilter {
    /**
     * Filter by particular Role identity
     * These roles only can be assigned to the API credentials or User
     */
    role_identity?: string | string[];
}
