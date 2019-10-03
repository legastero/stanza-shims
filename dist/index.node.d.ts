/// <reference types="node" />
import fetch from 'node-fetch';
import WebSocket from 'ws';
import { Hash, Hmac } from 'crypto';
export declare function getHashes(): string[];
export declare function createHash(alg: string): Hash;
export declare function createHmac(alg: string, key: string): Hmac;
export declare function randomBytes(size: number): Buffer;
export { fetch, WebSocket, Hash, Hmac };
