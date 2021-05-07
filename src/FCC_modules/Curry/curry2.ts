export const curry2 = <T extends (a: A, b: B) => ReturnType<T>, A, B>(fn: T) => {
    function curry(a: A, b: B): ReturnType<T>;
    function curry(a: A): (b: B) => ReturnType<T>;
    function curry(a: A, b?: B): ReturnType<typeof curry> {
        return b === undefined ? (b: B) => curry(a, b) : fn(a, b);
    }
    return curry;
};
