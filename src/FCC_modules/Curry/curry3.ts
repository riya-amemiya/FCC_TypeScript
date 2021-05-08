export const curry3 = <T extends (a: A, b: B, c: C) => ReturnType<T>, A, B, C>(fn: T) => {
    function curry(a: A, b: B, c: C): ReturnType<T>;
    function curry(a: A, b: B): (c: C) => ReturnType<T>;
    function curry(a: A): (b: B, c: C) => ReturnType<T>;
    function curry(a: A, b?: B, c?: C) {
        if (b !== undefined && c !== undefined) {
            return fn(a, b, c);
        } else if (b !== undefined && c === undefined) {
            return (c: C) => curry(a, b, c);
        } else if (b === undefined && c === undefined) {
            return (b: B, c: C) => curry(a, b, c);
        }
    }
    return curry;
};
