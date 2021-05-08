import { curry1 } from '../Curry';
export const Random = curry1(function (num: number) {
    return Math.floor(Math.random() * num);
});
