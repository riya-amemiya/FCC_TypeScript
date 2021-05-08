type TYPE = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
function HasType<T>(has: T, type: TYPE): boolean;
function HasType<T>(has: T): (type: TYPE) => boolean;
function HasType<T>(has: T, type?: TYPE) {
    switch (arguments.length) {
        case 1:
            return (type: TYPE) => typeof has === type;
        case 2:
            return typeof has === type;
    }
}
export { HasType };
