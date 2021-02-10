var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import error_language from './Props/error_language';
import cal from './Props/calClass';
function _min(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const _min = yield import(/* webpackChunkName: "_FCC_Min" */ './Math/Min');
        return _min.default(num);
    });
}
function min({ num, callback }) {
    return __awaiter(this, void 0, void 0, function* () {
        const num_2 = yield _min(num);
        callback(num_2);
    });
}
function _max(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const _min = yield import(/* webpackChunkName: "_FCC_Max" */ './Math/Max');
        return _min.default(num);
    });
}
function max({ num, callback }) {
    return __awaiter(this, void 0, void 0, function* () {
        const num_2 = yield _max(num);
        callback(num_2);
    });
}
function _sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        const _sleep = yield import(/* webpackChunkName: "_FCC_sleep" */ './Props/sleep');
        return _sleep.default(ms);
    });
}
function sleep({ ms, callback }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield _sleep(ms);
        callback();
    });
}
function _Zeller({ y = 2000, m = 1, d = 1 } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const _Zeller = yield import(/* webpackChunkName: "_FCC_Zeller" */ './Props/Zeller');
        return _Zeller.default({ y, m, d });
    });
}
function Zeller({ y = 2000, m = 1, d = 1, callback }) {
    return __awaiter(this, void 0, void 0, function* () {
        const text = yield _Zeller({ y, m, d });
        return callback(text);
    });
}
function zero(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const _zero = yield import(/* webpackChunkName: "_FCC_Zero" */ './Props/Zero');
        return _zero.default(num);
    });
}
function birthday(yer, mon, day) {
    return __awaiter(this, void 0, void 0, function* () {
        const _birthday = yield import(/* webpackChunkName: "_FCC_birthday" */ './Props/birthday');
        return _birthday.default({ yer, mon, day });
    });
}
function wait(callBack) {
    return __awaiter(this, void 0, void 0, function* () {
        const _wait = yield import(/* webpackChunkName: "_FCC_wait" */ './Props/wait');
        _wait.default(callBack);
    });
}
function render({ Dom, id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const _render = yield import(/* webpackChunkName: "_FCC_render" */ './Props/render');
        _render.default({ Dom, id });
    });
}
export { error_language, cal, sleep, Zeller, zero, birthday, wait, render, min, max };
//# sourceMappingURL=Props.js.map