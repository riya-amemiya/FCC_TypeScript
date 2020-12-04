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
const joke = {
    Hello: 'Hello',
    World: 'World'
};
let error_language = {
    text: 'ja',
    get() {
        return this.text;
    },
    set(error_language) {
        this.text = error_language;
    },
    haslanguage(haslanguage) {
        if (~this.text.indexOf(haslanguage))
            return true;
        else
            return false;
    }
};
const version = '1.0';
export { version, Ajax, joke, Zero, HelloWorld, Maths, Render, Birthday, Html, cal, Zeller, nPr, Gcd, Random, k, nCr, nCrs, Pow, Wait, error_language };
