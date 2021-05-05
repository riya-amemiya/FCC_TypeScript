import { nCr } from './nCr';
export const nCrs = (n: number, r: number) => nCr(n + r - 1, r);
