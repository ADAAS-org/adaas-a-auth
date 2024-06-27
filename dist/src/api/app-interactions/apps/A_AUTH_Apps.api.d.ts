import { A_AUTH_AppInteractions_APIProvider } from "../../../global/api-providers/A_AUTH_AppInteractions.api";
import { A_AUTH_APP_INTERACTIONS_TYPES__AppsListRequest, A_AUTH_APP_INTERACTIONS_TYPES__AppsListResponse, A_AUTH_TYPES__App_APIEntity } from "./A_AUTH_Apps.types";
import { A_AUTH_ContextClass } from "../../../global/A_AUTH_Context.class";
export declare class A_AUTH_APP_INTERACTIONS__AppsAPI extends A_AUTH_AppInteractions_APIProvider<A_AUTH_ContextClass> {
    protected baseURL: any;
    /**
     *  Returns a lis of apps corresponding to the user and the filter
     *
     *
     * @param request
     * @param meta
     * @returns
     */
    getApps<M = any>(request: A_AUTH_APP_INTERACTIONS_TYPES__AppsListRequest, meta?: M): Promise<A_AUTH_APP_INTERACTIONS_TYPES__AppsListResponse>;
    /**
     * Returns a app by id or identity
     *
     * @param appASEID
     * @returns
     */
    getApp<M = any>(
    /**
     * The app ASEID
     */
    appASEID: string, meta?: M): Promise<A_AUTH_TYPES__App_APIEntity>;
}
