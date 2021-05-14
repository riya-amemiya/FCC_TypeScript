export type TYPE = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
export interface HASTYPE {
    <T>(has: T): (type: TYPE) => boolean;
    <T>(has: T, type: TYPE): boolean;
}
export const HasType = function <T>(has: T, type?: TYPE) {
    switch (arguments.length) {
        case 1:
            return (type: TYPE) => HasType(has, type);
        case 2:
            return typeof has === type;
    }
} as HASTYPE;
