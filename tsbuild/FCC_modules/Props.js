import error_language from './Props/error_language';
import cal from './Props/calClass';
async function _sleep(ms) {
    const _sleep = await import('./Props/sleep');
    return _sleep.default(ms);
}
async function sleep({ ms, callback }) {
    await _sleep(ms);
    callback();
}
async function _Zeller({ y = 2000, m = 1, d = 1 } = {}) {
    const _Zeller = await import('./Props/Zeller');
    return _Zeller.default({ y, m, d });
}
async function Zeller({ y = 2000, m = 1, d = 1, callback }) {
    const text = await _Zeller({ y, m, d });
    return callback(text);
}
async function zero(num) {
    const _zero = await import('./Props/Zero');
    return _zero.default(num);
}
async function birthday(yer, mon, day) {
    const _birthday = await import('./Props/birthday');
    return _birthday.default({ yer, mon, day });
}
async function wait(callBack) {
    const _wait = await import('./Props/wait');
    _wait.default(callBack);
}
async function render({ Dom, id }) {
    const _render = await import('./Props/render');
    _render.default({ Dom, id });
}
export { error_language, cal, sleep, Zeller, zero, birthday, wait, render };
//# sourceMappingURL=Props.js.map