import { A_AUTH_Context } from "@adaas/a-auth/definitions/A_AUTH_Context.def";
import { A_AUTH_SERVER_DELEGATE__RolesAPI } from "./role/A_AUTH_Role.api";



export const Role = new A_AUTH_SERVER_DELEGATE__RolesAPI(A_AUTH_Context);
