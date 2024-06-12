import { A_AUTH_AuthenticatorClass } from "./A_AUTH_Authenticator.class";
import { A_AUTH_AppsAPIClass } from "./apps/A_AUTH_Apps.api";
import { A_AUTH_RolesAPIClass } from "./roles/A_AUTH_Roles.api";

export const A_AUTH_Authenticator = new A_AUTH_AuthenticatorClass();
export const A_AUTH_RolesAPI = new A_AUTH_RolesAPIClass();
export const A_AUTH_AppsAPI = new A_AUTH_AppsAPIClass();
