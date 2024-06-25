import { A_SDK_ErrorsProvider } from "@adaas/a-sdk-types";
import { A_AUTH_CONSTANTS__DEFAULT_ERRORS } from "../constants/errors.constants";



export const ADAAS_ErrorsProvider = new A_SDK_ErrorsProvider('a-auth')
    .addRegistry(A_AUTH_CONSTANTS__DEFAULT_ERRORS);