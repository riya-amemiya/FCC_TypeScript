function ObjectToArray<T extends object>(obj: T): [string, any][];
function ObjectToArray<T extends object>(): (obj: T) => [string, any][];
function ObjectToArray<T extends object>(obj?: T) {
    return obj === undefined ? (obj: T) => ObjectToArray(obj) : Object.entries(obj);
}
export { ObjectToArray };
