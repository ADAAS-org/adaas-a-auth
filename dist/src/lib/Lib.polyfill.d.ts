/// <reference types="node" />
declare class LibPolyfillClass {
    private _fs;
    fs(): Promise<typeof import("fs")>;
    private init;
}
export declare const LibPolyfill: LibPolyfillClass;
export {};
