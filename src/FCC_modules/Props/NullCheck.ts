type RETURN<T, J> = T extends null ? J : T;
function NullCheck<T, J>(a: T, b: J): RETURN<T, J>;
function NullCheck<T>(a: T): RETURN<T, true>;
function NullCheck<T, J>(a: T, b?: J) {
    return b === undefined ? a ?? true : a ?? b;
}
export { NullCheck };
