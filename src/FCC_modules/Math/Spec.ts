import { Gcd } from './Gcd';
import { Lcm } from './Lcm';
import { Pow } from './Pow';
import { Max } from './Max';
import { Min } from './Min';
import { Fact } from './Fact';
import { quotient } from './quotient';
import { curry2 } from '../Curry/curry2';
import { add } from './add';
import { dec } from './dec';
import { product } from './product';
export interface SPEC {
    (x: number, y: number): {
        sum: number;
        difference: number;
        product: number;
        quotient: {
            answer: number;
            surplus: number;
        };
        gcd: number;
        lcm: number;
        pow: number;
        max: number;
        min: number;
        fact: number;
    };
    (x: number): (y: number) => {
        sum: number;
        difference: number;
        product: number;
        quotient: {
            answer: number;
            surplus: number;
        };
        gcd: number;
        lcm: number;
        pow: number;
        max: number;
        min: number;
        fact: number;
    };
    sum(x: number, y: number): number;
    sum(x: number): (y: number) => number;
    difference(x: number, y: number): number;
    difference(x: number): (y: number) => number;
    product(x: number, y: number): number;
    product(x: number): (y: number) => number;
    quotient(x: number, y: number): { answer: number; surplus: number };
    quotient(x: number): (y: number) => { answer: number; surplus: number };
    gcd(x: number, y: number): number;
    gcd(x: number): (y: number) => number;
    lcm(x: number, y: number): number;
    lcm(x: number): (y: number) => number;
    pow(x: number, y: number): number;
    pow(x: number): (y: number) => number;
    max(x: number, y: number): number;
    max(x: number): (y: number) => number;
    min(x: number, y: number): number;
    min(x: number): (y: number) => number;
    fact(x: number, y: number): number;
    fact(x: number): (y: number) => number;
    sdpq(
        x: number,
        y: number,
    ): {
        sum: number;
        difference: number;
        product: number;
        quotient: { answer: number; surplus: number };
    };
    sdpq(x: number): (y: number) => {
        sum: number;
        difference: number;
        product: number;
        quotient: { answer: number; surplus: number };
    };
}
const Spec = curry2(function (a: number, b: number) {
    return {
        sum: add(a, b),
        difference: dec(a, b),
        product: product(a, b),
        quotient: quotient(a, b),
        gcd: Gcd(a, b),
        lcm: Lcm(a, b),
        pow: Pow(a, b),
        max: Max([a, b]),
        min: Min([a, b]),
        fact: Fact(a, b),
    };
}) as SPEC;
Spec.sum = curry2(function (a: number, b: number) {
    return add(a, b);
});
Spec.difference = curry2(function (a: number, b: number) {
    return dec(a, b);
});
Spec.product = curry2(function (a: number, b: number) {
    return product(a, b);
});
Spec.quotient = curry2(function (a: number, b: number) {
    return quotient(a, b);
});
Spec.gcd = curry2(function (a: number, b: number) {
    return Gcd(a, b);
});
Spec.lcm = curry2(function (a: number, b: number) {
    return Lcm(a, b);
});
Spec.pow = curry2(function (a: number, b: number) {
    return Pow(a, b);
});
Spec.max = curry2(function (a: number, b: number) {
    return Max([a, b]);
});
Spec.min = curry2(function (a: number, b: number) {
    return Min([a, b]);
});
Spec.fact = curry2(function (a: number, b: number) {
    return Fact(a, b);
});
Spec.sdpq = curry2(function (a: number, b: number) {
    return {
        sum: add(a, b),
        difference: dec(a, b),
        product: product(a, b),
        quotient: quotient(a, b),
    };
});
export { Spec };
