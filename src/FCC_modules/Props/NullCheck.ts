type RETURN<T, J> = T extends null ? J : UNAN<T>;
type UNAN<T> = T extends any ? unknown : T;
function NullCheck<T, J>(a: T, b: J): RETURN<T, J>;
function NullCheck<T>(a: T): RETURN<T, true>;
function NullCheck<T, J>(a: T, b?: J) {
    return b === undefined ? a ?? !0 : a ?? b;
}
export { NullCheck };
