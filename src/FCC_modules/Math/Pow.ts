import { curry2 } from '../Curry';
const Pow = curry2(function Pow(num: number, n: number) {
    return num ** n;
});
export { Pow };
