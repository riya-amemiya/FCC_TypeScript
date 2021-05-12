interface CURRY2 {
    <T extends (a: A, b: B) => ReturnType<T>, A, B>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1]) => ReturnType<T>;
    };
    <T extends <A, B>(a: A, b: B) => ReturnType<T>>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): ReturnType<T>;
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1]) => ReturnType<T>;
    };
    <T extends <A>(a: A[], b: B) => ReturnType<T>, B>(fn: T): {
        (a: ArgumentTypes<typeof fn>[0], b: ArgumentTypes<typeof fn>[1]): ReturnType<T>[];
        (a: ArgumentTypes<typeof fn>[0]): (b: ArgumentTypes<typeof fn>[1]) => ReturnType<T>[];
    };
}
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export const curry2 = (<T extends <A, B>(a: A, b: B) => ReturnType<T>>(fn: T) => {
    function curry(a: ArgumentTypes<typeof fn>[0], b?: ArgumentTypes<typeof fn>[1]) {
        switch (arguments.length) {
            case 1:
                return (b: ArgumentTypes<typeof fn>[1]) => curry(a, b);
            case 2:
                return fn(a, b);
        }
    }
    return curry;
}) as CURRY2;
