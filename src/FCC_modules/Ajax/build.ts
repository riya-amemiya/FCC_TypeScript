export const build = <J extends object, T>(
    init?: RequestInit,
): ((url: string, callback: (data: J) => T) => Promise<T>) => {
    return async (url: string, callback: (data: J) => T) =>
        callback(await (await fetch(url, init)).json());
};
