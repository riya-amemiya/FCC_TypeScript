interface HASKEY {
    <T extends object, K extends keyof T>(obj: T): K;
    <T extends object, K extends keyof T>(): (obj: T) => K;
}
export const HasKey = function _<T extends object>(obj?: T) {
    return obj === undefined ? (obj: T) => _(obj) : Object.keys(obj);
} as HASKEY;
