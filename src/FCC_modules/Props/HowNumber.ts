import { curry1Generic } from '../Curry';
const HowNumber = curry1Generic(function <T>(num: T) {
    return Number.isNaN(Number(num));
});
export default HowNumber;
