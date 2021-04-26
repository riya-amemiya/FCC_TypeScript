import nCr from './nCr';
const nCrs = ({ n, r }: { n: number; r: number }) => nCr({ n: n + r - 1, r });
export default nCrs;
