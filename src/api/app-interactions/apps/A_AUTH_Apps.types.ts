import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";

// ==================APP STATUSES===================
export enum A_AUTH_TYPES__APP_STATUS {
    ACTIVE = 'ACTIVE',
    INVITED = 'INVITED',
    TERMINATED = 'TERMINATED'
}

export type A_AUTH_TYPES__App_APIEntity = {
    aseid: string;
    privacyPolicyLink: string;
    termsAndConditionsLink: string;
    namespace: string;
    name: string;
    description: string;
    logo_aseid: string;
    contact_email: string;
    status: A_AUTH_TYPES__APP_STATUS;
    setting_id: number
    user_id: number
    // User!: ADAAS_SSO_DB_User
    Settings?: A_AUTH_TYPES__AppSettings_APIEntity;
    // Scopes!: ADAAS_SSO_DB_SSOAppSSOAppScope[]

    created_at: string;
    updated_at: string;
};


export type A_AUTH_TYPES__AppSettings_APIEntity = {
    id: number;
    origins: {
        origins: Array<string>
    };
    primary_location: string;

    /**
     * Could be a link or an identity inside internal or external system
     */
    terms_identity: string;

    /**
     * Could be a link or an identity inside internal or external system
     */
    privacy_identity: string;

    /**
     * Could be a link or an identity inside internal or external system
     */
    license_identity: string;

    /**
     * Optional object that can store identities of extra documents
     */
    extra_docs_identity: {
        docs: Array<string>
    };
    redirect_urls: {
        urls: Array<string>
    };
    required_fields: {
        fields: Array<string>
    };
    require_2fa: boolean;
    useFMA: boolean;
    public: boolean;
    display: boolean;
}

// =========================  APPS LIST API TYPES ================================
export type A_AUTH_APP_INTERACTIONS_TYPES__AppsListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_AUTH_APP_INTERACTIONS_TYPES__AppsListResponse = A_SDK_TYPES__IDefaultPagination<A_AUTH_TYPES__App_APIEntity>
