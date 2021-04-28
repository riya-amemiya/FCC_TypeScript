type OPTPIPE<T> = {
    (): T | null | undefined;
    <U>(f: (x: T) => U | null | undefined, g?: () => U): OPTPIPE<U>;
};
const OptPipe: <T>(x?: T) => OPTPIPE<T> = <T>(x?: T) =>
    (<U>(f?: (x: T) => U, g?: () => U) =>
        f ? OptPipe(x == null ? g && g() : f(x)) : x) as OPTPIPE<T>;
export default OptPipe;
