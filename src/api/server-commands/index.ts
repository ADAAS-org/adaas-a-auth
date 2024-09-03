import { A_AUTH_SERVER_COMMANDS__SsoAPI } from "./sso/A_AUTH_SSO.api";
import { A_AUTH_SERVER_COMMANDS__TokenAPI } from "./token/A_AUTH_Token.api";
import { A_AUTH_SERVER_COMMANDS__RolesAPI } from "./role/A_AUTH_Role.api";
import { A_AUTH_Context } from "@adaas/a-auth/definitions/A_AUTH_Context.def";


export const SSO = new A_AUTH_SERVER_COMMANDS__SsoAPI(A_AUTH_Context);
export const Token = new A_AUTH_SERVER_COMMANDS__TokenAPI(A_AUTH_Context);
export const Role = new A_AUTH_SERVER_COMMANDS__RolesAPI(A_AUTH_Context);
