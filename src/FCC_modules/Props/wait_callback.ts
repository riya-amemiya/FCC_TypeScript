import wait from './wait';
async function wait_callback<T, R>(ms: number, data: T, callback: (data: T) => R): Promise<R>;
async function wait_callback<T, R>(ms: number, data: T): Promise<(callback: (data: T) => R) => Promise<R>>;
async function wait_callback<T, R>(ms: number): Promise<(data: T, callback: (data: T) => R) => Promise<R>>;
async function wait_callback<T, R>(ms: number, data?: T, callback?: (data: T) => R) {
    if (data !== undefined && callback !== undefined) {
        await wait(ms);
        return callback(data);
    } else if (data !== undefined && callback === undefined) {
        return async (callback: (data: T) => R) => wait_callback(ms, data, callback);
    } else if (data === undefined && callback === undefined) {
        return async (data: T, callback: (data: T) => R) => wait_callback(ms, data, callback);
    }
}
export { wait_callback };
