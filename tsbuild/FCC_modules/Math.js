import { __awaiter, __generator } from "tslib";
function Gcd(_a) {
    var x = _a.x, y = _a.y;
    return __awaiter(this, void 0, void 0, function () {
        var _Gcd;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_Gcd" */ './Math/Gcd')];
                case 1:
                    _Gcd = _b.sent();
                    return [2 /*return*/, _Gcd["default"]({ x: x, y: y })];
            }
        });
    });
}
function k(num) {
    return __awaiter(this, void 0, void 0, function () {
        var _k;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_k" */ './Math/k')];
                case 1:
                    _k = _a.sent();
                    return [2 /*return*/, _k["default"](num)];
            }
        });
    });
}
function nCr(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.n, n = _c === void 0 ? 1 : _c, _d = _b.r, r = _d === void 0 ? 1 : _d;
    return __awaiter(this, void 0, void 0, function () {
        var _nCr;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_nCr" */ './Math/nCr')];
                case 1:
                    _nCr = _e.sent();
                    return [2 /*return*/, _nCr["default"]({ n: n, r: r })];
            }
        });
    });
}
function nCrs(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.n, n = _c === void 0 ? 1 : _c, _d = _b.r, r = _d === void 0 ? 1 : _d;
    return __awaiter(this, void 0, void 0, function () {
        var _nCrs;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_nCrs" */ './Math/nCrs')];
                case 1:
                    _nCrs = _e.sent();
                    return [2 /*return*/, _nCrs["default"]({ n: n, r: r })];
            }
        });
    });
}
function nPr(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.n, n = _c === void 0 ? 1 : _c, _d = _b.r, r = _d === void 0 ? 1 : _d;
    return __awaiter(this, void 0, void 0, function () {
        var _nPr;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_nPr" */ './Math/nPr')];
                case 1:
                    _nPr = _e.sent();
                    return [2 /*return*/, _nPr["default"]({ n: n, r: r })];
            }
        });
    });
}
function Pow(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.num, num = _c === void 0 ? 1 : _c, _d = _b.n, n = _d === void 0 ? 1 : _d;
    return __awaiter(this, void 0, void 0, function () {
        var _Pow;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_Pow" */ './Math/Pow')];
                case 1:
                    _Pow = _e.sent();
                    return [2 /*return*/, _Pow["default"]({ num: num, n: n })];
            }
        });
    });
}
function Random(num) {
    if (num === void 0) { num = 1; }
    return __awaiter(this, void 0, void 0, function () {
        var _Random;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_Random" */ './Math/Random')];
                case 1:
                    _Random = _a.sent();
                    return [2 /*return*/, _Random["default"](num)];
            }
        });
    });
}
export { Gcd, nCr, nCrs, nPr, Pow, Random, k };
//# sourceMappingURL=Math.js.map