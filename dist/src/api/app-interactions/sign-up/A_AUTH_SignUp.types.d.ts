import { A_AUTH_TYPES__Role_APIEntity } from "../roles/A_AUTH_RolesAPI.types";
export type A_AUTH_TYPES__Country_APIEntity = {
    id: number;
    aseid: '';
    name: string;
    iso2: string;
    iso3: string;
    numeric: string;
    phone_code?: number;
    created_at: string;
    updated_at: string;
};
export type A_AUTH_TYPES__Timezone_APIEntity = {
    id: number;
    aseid: '';
    name: string;
    code: string;
    utc_offset: number;
    created_at: string;
    updated_at: string;
};
export type A_AUTH_TYPES__BusinessDomain_APIEntity = {
    id: number;
    aseid: '';
    name: string;
    description: string;
    icon?: string;
    created_at: string;
    updated_at: string;
};
export type A_AUTH_TYPES__BusinessType_APIEntity = {
    id: number;
    aseid: '';
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpRequest = {
    email: string;
    name: string;
    password: string;
    repeatPassword: string;
    termsAccepted: boolean;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpResponse = {
    token: string;
    refreshToken: string;
    exp: number;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileRequest = {
    role: A_AUTH_TYPES__Role_APIEntity;
    title: string;
    name: string;
    timezone: A_AUTH_TYPES__Timezone_APIEntity;
    country: A_AUTH_TYPES__Country_APIEntity;
    locale: string;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileResponse = {
    status: 'OK' | 'ERROR';
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationRequest = {
    name: string;
    website: string;
    timezone: A_AUTH_TYPES__Timezone_APIEntity;
    country: A_AUTH_TYPES__Country_APIEntity;
    domains: Array<A_AUTH_TYPES__BusinessDomain_APIEntity>;
    type: A_AUTH_TYPES__BusinessType_APIEntity;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationResponse = {
    status: 'OK' | 'ERROR';
};
