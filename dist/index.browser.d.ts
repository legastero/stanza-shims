/// <reference types="node" />
import createHash, { Hash } from './crypto/createHash';
import Hmac from './crypto/Hmac';
export declare function randomBytes(size: number): Buffer;
export declare function getHashes(): string[];
export declare function createHmac(alg: string, key: string | Buffer): Hmac;
declare const nativeFetch: typeof fetch;
declare const nativeWS: {
    new (url: string, protocols?: string | string[] | undefined): WebSocket;
    prototype: WebSocket;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};
export { nativeFetch as fetch, nativeWS as WebSocket, Hash, Hmac, createHash };
