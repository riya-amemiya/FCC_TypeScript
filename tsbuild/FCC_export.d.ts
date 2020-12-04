import { Maths } from './FCC_modules/Modules/Math';
import { Html } from './FCC_modules/Modules/HTML';
import * as Ajax from './FCC_modules/Modules/Ajax';
import HelloWorld from './FCC_modules/Modules/HelloWorld';
import cal from './FCC_modules/Modules/calClass';
import Gcd from './FCC_modules/Math/Gcd';
import k from './FCC_modules/Math/k';
import nCr from './FCC_modules/Math/nCr';
import nCrs from './FCC_modules/Math/nCrs';
import nPr from './FCC_modules/Math/nPr';
import Pow from './FCC_modules/Math/Pow';
import Random from './FCC_modules/Math/Random';
import Zeller from './FCC_modules/Props/Zeller';
import Zero from './FCC_modules/Props/Zero';
import Birthday from './FCC_modules/Props/Birthday';
import Render from './FCC_modules/Props/Render';
import Wait from './FCC_modules/Props/Wait';
declare type int = number;
interface joketype {
    Hello: 'Hello';
    World: 'World';
}
declare const joke: joketype;
declare let error_language: {
    text: string;
    get(): any;
    set(error_language: string): void;
    haslanguage(haslanguage: string): boolean;
};
declare const version: string;
export { int, version, Ajax, joke, Zero, HelloWorld, Maths, Render, Birthday, Html, cal, Zeller, nPr, Gcd, Random, k, nCr, nCrs, Pow, Wait, error_language };
