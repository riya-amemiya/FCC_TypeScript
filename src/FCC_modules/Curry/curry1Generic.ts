export const curry1Generic = <T extends <A>(a: A) => ReturnType<T>>(fn: T) => {
    function curry<A>(a: A): ReturnType<T>;
    function curry(): <A>(a: A) => ReturnType<T>;
    function curry<A>(a?: A) {
        return a === undefined ? (a: A) => curry(a) : fn(a);
    }
    return curry;
};
