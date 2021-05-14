export interface OBJECTTOARRAY {
    <T extends object>(obj: T): [string, any][];
    <T extends object>(): (obj: T) => [string, any][];
}
export const ObjectToArray = function <T extends object>(obj?: T) {
    return obj === undefined ? (obj: T) => ObjectToArray(obj) : Object.entries(obj);
} as OBJECTTOARRAY;
