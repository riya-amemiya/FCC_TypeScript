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
async function nCr({ n = 1, r = 1 } = {}) {
    const _nCr = await import('./FCC_modules/Math/nCr');
    return _nCr.default({ n, r });
}
async function nCrs({ n = 1, r = 1 } = {}) {
    const _nCrs = await import('./FCC_modules/Math/nCrs');
    return _nCrs.default({ n, r });
}
async function nPr({ n = 1, r = 1 } = {}) {
    const _nPr = await import('./FCC_modules/Math/nPr');
    return _nPr.default({ n, r });
}
async function Pow({ num = 1, n = 1 } = {}) {
    const _Pow = await import('./FCC_modules/Math/Pow');
    return _Pow.default({ num, n });
}
async function Random(num = 1) {
    const _Random = await import('./FCC_modules/Math/Random');
    return _Random.default(num);
}
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
    const _zero = await import('./FCC_modules/Props/Zero');
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