export default function HasZero<T extends any>(num: T): boolean {
    return num === 0 ? true : false;
}
