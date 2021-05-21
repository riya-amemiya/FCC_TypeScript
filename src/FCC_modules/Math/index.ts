import { add } from './add';
import { dec } from './dec';
import { defaultTo } from './defaultTo';
import { Fact } from './Fact';
import { Gcd } from './Gcd';
import { k } from './k';
import { Lcm } from './Lcm';
import { Max } from './Max';
import { Min } from './Min';
import { nCr } from './nCr';
import { nCrs } from './nCrs';
import { nPr } from './nPr';
import { Pow } from './Pow';
import { quotient } from './quotient';
import { Random } from './Random';
import { Reduce } from './Reduce';
import { Spec } from './Spec';
import { sum } from './sum';
import { remove } from './remove';
import { product } from './product';
export interface MathsType {
    add: import('./add').ADD;
    dec: import('./dec').DEC;
    defaultTo: import('./defaultTo').DEFAULTtO;
    Fact: import('./Fact').FACT;
    Gcd: import('./Gcd').GCD;
    k: import('./k').K;
    Lcm: import('./Lcm').LCM;
    Max: import('./Max').M_MAX;
    Min: import('./Min').M_MIN;
    nCr: import('./nCr').NCR;
    nCrs: import('./nCrs').NCRS;
    nPr: import('./nPr').NPR;
    Pow: import('./Pow').POW;
    quotient: import('./quotient').QUOTIENT;
    Random: import('./Random').RANDOM;
    Reduce: import('./Reduce').REDUCE;
    Spec: import('./Spec').SPEC;
    sum: import('./sum').SUM;
    remove: import('./remove').REMOVE;
    product: import('./product').PRODUCT;
}
export const Maths: MathsType = {
    add,
    dec,
    defaultTo,
    Fact,
    Gcd,
    k,
    Lcm,
    Max,
    Min,
    nCr,
    nCrs,
    nPr,
    Pow,
    quotient,
    Random,
    Reduce,
    Spec,
    sum,
    remove,
    product,
};
