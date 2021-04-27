const HasType = <T>(
    has: T,
    type:
        | 'string'
        | 'number'
        | 'bigint'
        | 'boolean'
        | 'symbol'
        | 'undefined'
        | 'object'
        | 'function',
) => typeof has === type;
export default HasType;
