import { A_AUTH_TYPES__Role_APIEntity } from "../roles/A_AUTH_RolesAPI.types";
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
    timezone: any;
    country: any;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileResponse = {
    status: 'OK' | 'ERROR';
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationRequest = {
    name: string;
    website: string;
    timezone: any;
    country: any;
    domains: Array<any>;
    type: any;
};
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationResponse = {
    status: 'OK' | 'ERROR';
};
