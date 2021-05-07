import { curry1 } from '../Curry';
export const Random = curry1(function Random(num: number) {
    return Math.floor(Math.random() * num);
});
