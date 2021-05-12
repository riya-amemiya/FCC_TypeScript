import { curry2 } from '../Curry';
const Pow = curry2(function (num: number, n: number) {
    n ||= 1;
    num ||= 1;
    return num ** n;
});
export { Pow };
