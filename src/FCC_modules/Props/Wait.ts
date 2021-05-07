import { curry1 } from '../Curry';
const wait = curry1(async function (ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
});
export default wait;
