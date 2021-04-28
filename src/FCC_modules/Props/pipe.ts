type Pipe<T> = {
    (): T;
    <U>(f: (x: T) => U): Pipe<U>;
};
const pipe: <T>(x: T) => Pipe<T> = <T>(x: T) =>
    (<U>(f?: (x: T) => U) => (f ? pipe(f(x)) : x)) as Pipe<T>;

export default pipe;
