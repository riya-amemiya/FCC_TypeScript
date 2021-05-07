export const curry1 = <T extends (a: A) => ReturnType<T>, A>(fn: T) => {
    function curry(a: A): ReturnType<T>;
    function curry(): (a: A) => ReturnType<T>;
    function curry(a?: A) {
        return a === undefined ? (a: A) => curry(a) : fn(a);
    }
    return curry;
};
