export type RETURN<T, J> = T extends null ? J : UNAN<T>;
export type UNAN<T> = T extends any ? unknown : T;
export interface NULLCHECK {
    <T, J>(a: T, b: J): RETURN<T, J>;
    <T>(a: T): RETURN<T, true>;
}
export const NullCheck = function <T, J>(a: T, b?: J) {
    return b === undefined ? a ?? !0 : a ?? b;
} as NULLCHECK;
