/// <reference types="react" />
import * as Maths from './FCC_modules/Math';
import html from './FCC_modules/HTML';
import * as Ajax from './FCC_modules/Ajax';
declare type int = number;
declare let Hello: 'Hello';
declare const HelloWorld: () => JSX.Element;
declare const zero: (num: int | string) => boolean;
declare const render: (Dom: () => JSX.Element, id: string) => void;
declare const birthday: (yer: int, mon: int, day: int) => int;
declare class calClass {
    private _value;
    constructor(_value: number);
    get value(): number;
    sum(...Nums: number[]): this;
    sub(...Nums: number[]): this;
}
declare const cal: calClass;
declare const Zeller: (y?: number, m?: number, d?: number, lan?: string) => string | number;
export { Ajax, Hello, zero, HelloWorld, Maths, render, birthday, html, cal, Zeller };
