import { wait } from './wait';
export interface WAIT_CALLBACK {
    <T, R>(ms: number, data: T, callback: (data: T) => R): Promise<R>;
    <T>(ms: number, data: T): <R>(callback: (data: T) => R) => Promise<R>;
    (ms: number): <T, R>(data: T, callback: (data: T) => R) => Promise<R>;
}
export const wait_callback = function <T, R>(ms: number, data?: T, callback?: (data: T) => R) {
    if (data !== undefined && callback !== undefined) {
        return (async () => {
            await wait(ms);
            return callback(data);
        })();
    } else if (data !== undefined && callback === undefined) {
        return <A>(callback: (data: T) => A) => wait_callback(ms, data, callback);
    } else if (data === undefined && callback === undefined) {
        return <A, B>(data: A, callback: (data: A) => B) => wait_callback(ms, data, callback);
    }
} as WAIT_CALLBACK;
