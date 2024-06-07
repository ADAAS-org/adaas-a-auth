export type ADAAS_A_AUTH_RequestParam = {
    id?: string;
    /**
     * The issuer of the parameter. Could be system, custom, proxy, credentials or SIC to data provider service(e.g. CSS)
     */
    issuer?: 'system' | 'custom' | 'proxy' | 'credentials' | string;
    /**
     * Common internal value, uses for proper mapping
     */
    key?: string;
    /**
     * Allows to define the type of the parameter to convert input during the execution
     */
    type: 'json' | 'array' | 'number' | 'string' | 'boolean' | 'base_64' | 'file' | 'file_url';
    /**
     * The name of the parameter
     */
    name: string;
    /**
     * The value of the parameter
     */
    value: string;
};
export type ADAAS_A_AUTH_DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? ADAAS_A_AUTH_DeepPartial<T[P]> : T[P];
};
export type ADAAS_A_AUTH_ObjectKeyEnum<T, E> = {
    [P in keyof T]?: T[P] extends object ? ADAAS_A_AUTH_ObjectKeyEnum<T[P], E> : E;
};
export type ADAAS_A_AUTH_Dictionary<T> = {
    [Key: string]: T;
};
