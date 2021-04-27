import nCr from './nCr';
const nCrs = (n: number, r: number) => nCr(n + r - 1, r);
export default nCrs;
