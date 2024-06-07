export declare class ADAAS_A_AUTH_Logger {
    protected verbose: boolean;
    protected ignoreErrors: boolean;
    constructor(verbose?: boolean, ignoreErrors?: boolean);
    log(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
    private logADAASError;
    private getTime;
}
