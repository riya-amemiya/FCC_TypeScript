import { curry1 } from '../Curry';
export const k = curry1(function (num: number) {
    return (num += 273);
});
