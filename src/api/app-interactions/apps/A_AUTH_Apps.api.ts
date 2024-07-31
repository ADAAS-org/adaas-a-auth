import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth/global/api-providers/A_AUTH_AppInteractions.api";
import {
    A_AUTH_APP_INTERACTIONS_TYPES__AppsListRequest,
    A_AUTH_APP_INTERACTIONS_TYPES__AppsListResponse,
    A_AUTH_TYPES__App_APIEntity
} from "./A_AUTH_Apps.types";
import { A_AUTH_ContextClass } from "@adaas/a-auth/global/A_AUTH_Context.class";

export class A_AUTH_APP_INTERACTIONS__AppsAPI extends A_AUTH_AppInteractions_APIProvider<A_AUTH_ContextClass> {


    protected get baseURL(): string {
        return this.context.getConfigurationProperty('SSO_LOCATION');
    }


    /**
     *  Returns a lis of apps corresponding to the user and the filter
     * 
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_AUTH_APP_INTERACTIONS_TYPES__AppsListRequest,
        meta?: M
    ): Promise<A_AUTH_APP_INTERACTIONS_TYPES__AppsListResponse> {
        return await this
            .get<A_AUTH_APP_INTERACTIONS_TYPES__AppsListResponse, M>(
                '/api/v1/apps',
                request,
                {
                    meta,
                }
            );
    }


    /**
     * Returns a app by id or identity
     * 
     * @param appASEID 
     * @returns 
     */
    async load<M = any>(
        /**
         * The app ASEID 
         */
        appASEID: string,
        meta?: M
    ): Promise<A_AUTH_TYPES__App_APIEntity> {
        return await this
            .get<A_AUTH_TYPES__App_APIEntity, M>(
                `/api/v1/apps/${appASEID}`,
                {},
                {
                    meta
                }
            );
    }
}
