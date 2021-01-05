import { Maths } from './FCC_modules/Modules/Math';
import { Html } from './FCC_modules/Modules/HTML';
import * as Ajax from './FCC_modules/Modules/Ajax';
import HelloWorld from './FCC_modules/Modules/HelloWorld';
async function Gcd({ x, y }) {
    const _Gcd = await import('./FCC_modules/Math/Gcd');
    return _Gcd.default({ x, y });
}
async function k(num) {
    const _k = await import('./FCC_modules/Math/k');
    return _k.default(num);
}
import nCr from './FCC_modules/Math/nCr';
import nCrs from './FCC_modules/Math/nCrs';
import nPr from './FCC_modules/Math/nPr';
import Pow from './FCC_modules/Math/Pow';
import Random from './FCC_modules/Math/Random';
import error_language from './FCC_modules/Props/error_language';
import cal from './FCC_modules/Props/calClass';
async function _sleep(ms) {
    const _sleep = await import('./FCC_modules/Props/sleep');
    return _sleep.default(ms);
}
async function sleep({ ms, callback }) {
    await _sleep(ms);
    callback();
}
async function _Zeller({ y = 2000, m = 1, d = 1 } = {}) {
    const _Zeller = await import('./FCC_modules/Props/Zeller');
    return _Zeller.default({ y, m, d });
}
async function Zeller({ y = 2000, m = 1, d = 1, callback }) {
    const text = await _Zeller({ y, m, d });
    return callback(text);
}
async function zero(num) {
    const _zero = await import('./FCC_modules/Props/zero');
    return _zero.default(num);
}
async function birthday(yer, mon, day) {
    const _birthday = await import('./FCC_modules/Props/birthday');
    return _birthday.default({ yer, mon, day });
}
async function wait(callBack) {
    const _wait = await import('./FCC_modules/Props/wait');
    _wait.default(callBack);
}
async function render({ Dom, id }) {
    const _render = await import('./FCC_modules/Props/render');
    _render.default({ Dom, id });
}
import * as type from './FCC_modules/type/type';
const version = '1.0';
export { version, Maths, Html, Ajax, HelloWorld, Gcd, k, nCr, nCrs, nPr, Pow, Random, Zeller, zero, cal, error_language, birthday, wait, render, sleep, type };
//# sourceMappingURL=FCC_export.js.map