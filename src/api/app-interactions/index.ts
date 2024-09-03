import { A_AUTH_Context } from "@adaas/a-auth/definitions/A_AUTH_Context.def";
import { A_AUTH_APP_INTERACTIONS__AppsAPI } from "./apps/A_AUTH_Apps.api";
import { A_AUTH_APP_INTERACTIONS__MfaAPI } from "./mfa/A_AUTH_MFA.api";
import { A_AUTH_APP_INTERACTIONS__RolesAPI } from "./roles/A_AUTH_Roles.api";
import { A_AUTH_APP_INTERACTIONS__SignInAPI } from "./sign-in/A_AUTH_SignIn.api";
import { A_AUTH_APP_INTERACTIONS__SignUpAPI } from "./sign-up/A_AUTH_SignUp.api";
import { A_AUTH_APP_INTERACTIONS__TokenAPI } from "./token/A_AUTH_Token.api";


export const App = new A_AUTH_APP_INTERACTIONS__AppsAPI(A_AUTH_Context);
export const MFA = new A_AUTH_APP_INTERACTIONS__MfaAPI(A_AUTH_Context);
export const Role = new A_AUTH_APP_INTERACTIONS__RolesAPI(A_AUTH_Context);
export const SignIn = new A_AUTH_APP_INTERACTIONS__SignInAPI(A_AUTH_Context);
export const SignUp = new A_AUTH_APP_INTERACTIONS__SignUpAPI(A_AUTH_Context);
export const Token = new A_AUTH_APP_INTERACTIONS__TokenAPI(A_AUTH_Context);