/// <reference types="react" />
import { Maths } from './FCC_modules/Math';
import { Html } from './FCC_modules/HTML';
import * as Ajax from './FCC_modules/Ajax';
declare type int = number;
interface joketype {
    Hello: 'Hello';
    World: 'World';
}
declare const joke: joketype;
declare const HelloWorld: () => JSX.Element;
declare const zero: (num: int | string) => boolean;
declare const render: (Dom: () => JSX.Element, id: string) => void;
declare let error_language: {
    text: string;
    get(): any;
    set(error_language: string): void;
    haslanguage(haslanguage: string): boolean;
};
declare const birthday: (yer: int, mon: int, day: int) => int;
declare class calClass {
    private _value;
    constructor(_value: number);
    get value(): number;
    sum(...Nums: number[]): this;
    sub(...Nums: number[]): this;
}
declare const cal: calClass;
declare const Zeller: (y?: number, m?: number, d?: number) => string | number;
declare const Gcd: (f?: number, x?: number) => number;
declare const nPr: (n?: number, r?: number) => number;
declare const Random: (num: number) => number;
declare const k: (num: number) => number;
declare const nCr: (n: number, r: number) => number;
declare const nCrs: (n: number, r: number) => number;
declare const Pow: (num: number, n: number) => number;
declare const wait: (callBack: any) => void;
declare const version: string;
export { version, Ajax, joke, zero, HelloWorld, Maths, render, birthday, Html, cal, Zeller, nPr, Gcd, Random, k, nCr, nCrs, Pow, wait, error_language };
