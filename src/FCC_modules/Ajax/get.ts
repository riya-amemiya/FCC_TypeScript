async function get<J extends object, T>(url: string, callback: (data: J) => T, init?: RequestInit): Promise<T>;
async function get<J extends object, T>(url: string, callback: (data: J) => T): Promise<(init?: RequestInit) => Promise<T>>;
async function get<J extends object, T>(url: string): Promise<(callback: (data: J) => T, init?: RequestInit) => Promise<T>>;
async function get<J extends object, T>(url: string, callback?: (data: J) => T, init?: RequestInit) {
    if (url !== undefined && callback !== undefined) {
        return callback(await (await fetch(url, init)).json());
    } else if (url !== undefined && callback === undefined) {
        return async (callback: (data: J) => T) => get(url, callback, init);
    } else if (url === undefined && callback === undefined) {
        return async (url: string, callback: (data: J) => T) => get(url, callback, init);
    }
}
export { get };
