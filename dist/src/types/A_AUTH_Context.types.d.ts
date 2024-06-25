import { AxiosError, AxiosResponse } from "axios";
export type A_AUTH_TYPES__AuthContext_ResponseFormatter = <T = any, M = any>(response: AxiosResponse<T>, meta?: M) => T;
export type A_AUTH_TYPES__AuthContext_ErrorHandler = <M = any>(error: AxiosError, meta?: M) => any;
