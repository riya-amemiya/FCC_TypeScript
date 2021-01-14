import { __awaiter, __generator } from "tslib";
import error_language from './Props/error_language';
import cal from './Props/calClass';
function _min(num) {
    return __awaiter(this, void 0, void 0, function () {
        var _min;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_Min" */ './Math/Min')];
                case 1:
                    _min = _a.sent();
                    return [2 /*return*/, _min["default"](num)];
            }
        });
    });
}
function min(_a) {
    var num = _a.num, callback = _a.callback;
    return __awaiter(this, void 0, void 0, function () {
        var num_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _min(num)];
                case 1:
                    num_2 = _b.sent();
                    callback(num_2);
                    return [2 /*return*/];
            }
        });
    });
}
function _max(num) {
    return __awaiter(this, void 0, void 0, function () {
        var _min;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_Max" */ './Math/Max')];
                case 1:
                    _min = _a.sent();
                    return [2 /*return*/, _min["default"](num)];
            }
        });
    });
}
function max(_a) {
    var num = _a.num, callback = _a.callback;
    return __awaiter(this, void 0, void 0, function () {
        var num_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _max(num)];
                case 1:
                    num_2 = _b.sent();
                    callback(num_2);
                    return [2 /*return*/];
            }
        });
    });
}
function _sleep(ms) {
    return __awaiter(this, void 0, void 0, function () {
        var _sleep;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_sleep" */ './Props/sleep')];
                case 1:
                    _sleep = _a.sent();
                    return [2 /*return*/, _sleep["default"](ms)];
            }
        });
    });
}
function sleep(_a) {
    var ms = _a.ms, callback = _a.callback;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _sleep(ms)];
                case 1:
                    _b.sent();
                    callback();
                    return [2 /*return*/];
            }
        });
    });
}
function _Zeller(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.y, y = _c === void 0 ? 2000 : _c, _d = _b.m, m = _d === void 0 ? 1 : _d, _e = _b.d, d = _e === void 0 ? 1 : _e;
    return __awaiter(this, void 0, void 0, function () {
        var _Zeller;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_Zeller" */ './Props/Zeller')];
                case 1:
                    _Zeller = _f.sent();
                    return [2 /*return*/, _Zeller["default"]({ y: y, m: m, d: d })];
            }
        });
    });
}
function Zeller(_a) {
    var _b = _a.y, y = _b === void 0 ? 2000 : _b, _c = _a.m, m = _c === void 0 ? 1 : _c, _d = _a.d, d = _d === void 0 ? 1 : _d, callback = _a.callback;
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, _Zeller({ y: y, m: m, d: d })];
                case 1:
                    text = _e.sent();
                    return [2 /*return*/, callback(text)];
            }
        });
    });
}
function zero(num) {
    return __awaiter(this, void 0, void 0, function () {
        var _zero;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_Zero" */ './Props/Zero')];
                case 1:
                    _zero = _a.sent();
                    return [2 /*return*/, _zero["default"](num)];
            }
        });
    });
}
function birthday(yer, mon, day) {
    return __awaiter(this, void 0, void 0, function () {
        var _birthday;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_birthday" */ './Props/birthday')];
                case 1:
                    _birthday = _a.sent();
                    return [2 /*return*/, _birthday["default"]({ yer: yer, mon: mon, day: day })];
            }
        });
    });
}
function wait(callBack) {
    return __awaiter(this, void 0, void 0, function () {
        var _wait;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_wait" */ './Props/wait')];
                case 1:
                    _wait = _a.sent();
                    _wait["default"](callBack);
                    return [2 /*return*/];
            }
        });
    });
}
function render(_a) {
    var Dom = _a.Dom, id = _a.id;
    return __awaiter(this, void 0, void 0, function () {
        var _render;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_render" */ './Props/render')];
                case 1:
                    _render = _b.sent();
                    _render["default"]({ Dom: Dom, id: id });
                    return [2 /*return*/];
            }
        });
    });
}
export { error_language, cal, sleep, Zeller, zero, birthday, wait, render, min, max };
//# sourceMappingURL=Props.js.map