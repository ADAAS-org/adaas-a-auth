import { A_AUTH_TYPES__Role_APIEntity } from "../roles/A_AUTH_RolesAPI.types"

//========================= DEFAULT SIGN UP API TYPES ================================
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpRequest = {
    email: string
    name: string
    password: string,
    repeatPassword: string,
    termsAccepted: boolean
}


export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpResponse = {
    token: string,
    refreshToken: string,
    exp: number,
}



// ========================= PROFILE SIGN UP API TYPES ================================
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileRequest = {
    role: A_AUTH_TYPES__Role_APIEntity,
    title: string,

    // TODO: change any to the correct type
    // timezone: A_ACCOUNT_TYPES__Timezone_APIEntity,
    // country: A_ACCOUNT_TYPES__Country_APIEntity
    timezone: any,
    country: any
}

export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpProfileResponse = {
    status: 'OK' | 'ERROR',
}



// ========================= ORGANIZATION SIGN UP API TYPES ================================
export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationRequest = {
    name: string,
    website: string,

    // TODO: change any to the correct type
    // timezone: A_ACCOUNT_TYPES__Timezone_APIEntity,
    // country: A_ACCOUNT_TYPES__Country_APIEntity,
    // domains: Array<A_ACCOUNT_TYPES__BusinessDomain_APIEntity>,
    // type: A_ACCOUNT_TYPES__BusinessType_APIEntity
    timezone: any,
    country: any,
    domains: Array<any>,
    type: any
}


export type A_AUTH_APP_INTERACTIONS_TYPES__SignUpOrganizationResponse = {
    status: 'OK' | 'ERROR',
}