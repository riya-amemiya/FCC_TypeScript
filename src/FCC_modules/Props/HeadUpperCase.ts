import { curry1 } from '../Curry';
const HeadUpperCase = curry1(function (str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
});
export default HeadUpperCase;
