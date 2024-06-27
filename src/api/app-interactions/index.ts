import { A_AUTH_Context } from "@adaas/a-auth/global/A_AUTH_Context.class";
import { A_AUTH_APP_INTERACTIONS__AppsAPI } from "./apps/A_AUTH_Apps.api";
import { A_AUTH_APP_INTERACTIONS__MfaAPI } from "./mfa/A_AUTH_MFA.api";
import { A_AUTH_APP_INTERACTIONS__RolesAPI } from "./roles/A_AUTH_Roles.api";
import { A_AUTH_APP_INTERACTIONS__SignInAPI } from "./sign-in/A_AUTH_SignIn.api";
import { A_AUTH_APP_INTERACTIONS__SignUpAPI } from "./sign-up/A_AUTH_SignUp.api";
import { A_AUTH_APP_INTERACTIONS__TokenAPI } from "./token/A_AUTH_Token.api";


export const AppsAPI = new A_AUTH_APP_INTERACTIONS__AppsAPI(A_AUTH_Context);
export const MfaAPI = new A_AUTH_APP_INTERACTIONS__MfaAPI(A_AUTH_Context);
export const RolesAPI = new A_AUTH_APP_INTERACTIONS__RolesAPI(A_AUTH_Context);
export const SignInAPI = new A_AUTH_APP_INTERACTIONS__SignInAPI(A_AUTH_Context);
export const SignUpAPI = new A_AUTH_APP_INTERACTIONS__SignUpAPI(A_AUTH_Context);
export const TokenAPI = new A_AUTH_APP_INTERACTIONS__TokenAPI(A_AUTH_Context);