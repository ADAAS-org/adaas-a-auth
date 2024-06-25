import { Method, ResponseType } from "axios";
import { A_AUTH_APIProvider } from "../A_AUTH_APIProvider.class";
import { A_AUTH_TYPES__IAuthenticator } from "@adaas/a-auth/types/A_AUTH_Authenticator.types";
import { ADAAS_ErrorsProvider } from "@adaas/a-auth/helpers/errors.helper";
import { A_AUTH_CONSTANTS__ERROR_CODES } from "@adaas/a-auth/constants/errors.constants";


export class A_AUTH_AppInteractions_APIProvider extends A_AUTH_APIProvider {

    protected async request<T, M>(
        method: Method,
        url: string,
        auth?: A_AUTH_TYPES__IAuthenticator,
        data?: any,
        params?: any,
        responseType?: ResponseType,
        meta?: M
    ): Promise<T> {
        if (this.context.environment !== 'frontend')
            throw ADAAS_ErrorsProvider.getError(A_AUTH_CONSTANTS__ERROR_CODES.UNABLE_TO_USE_APP_INTERACTIONS_REQUESTS_ON_SERVER_SIDE);
        else
            return super.request<T, M>(method, url, auth, data, params, responseType, meta);
    }
}