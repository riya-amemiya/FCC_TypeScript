/// <reference types="react" />
import { Maths } from './FCC_modules/Modules/Math';
import { Html } from './FCC_modules/Modules/HTML';
import * as Ajax from './FCC_modules/Modules/Ajax';
import HelloWorld from './FCC_modules/Modules/HelloWorld';
declare function Gcd({ x, y }: {
    x: number;
    y: number;
}): Promise<number>;
declare function k(num: number): Promise<number>;
import nCr from './FCC_modules/Math/nCr';
import nCrs from './FCC_modules/Math/nCrs';
import nPr from './FCC_modules/Math/nPr';
import Pow from './FCC_modules/Math/Pow';
import Random from './FCC_modules/Math/Random';
import error_language from './FCC_modules/Props/error_language';
import cal from './FCC_modules/Props/calClass';
declare function sleep({ ms, callback }: {
    ms: number;
    callback: () => void;
}): Promise<void>;
declare function Zeller({ y, m, d, callback }: {
    y: number;
    m: number;
    d: number;
    callback: (arg0: string) => any;
}): Promise<any>;
declare function zero(num: type.int | string): Promise<boolean>;
declare function birthday(yer: number, mon: number, day: number): Promise<number>;
declare function wait(callBack: () => any): Promise<void>;
declare function render({ Dom, id }: {
    Dom: JSX.Element;
    id: string;
}): Promise<void>;
import * as type from './FCC_modules/type/type';
declare const version: string;
export { version, Maths, Html, Ajax, HelloWorld, Gcd, k, nCr, nCrs, nPr, Pow, Random, Zeller, zero, cal, error_language, birthday, wait, render, sleep, type };
