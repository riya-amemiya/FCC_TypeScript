var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function Gcd({ x, y }) {
    return __awaiter(this, void 0, void 0, function* () {
        const _Gcd = yield import(/* webpackChunkName: "_FCC_Gcd" */ './Math/Gcd');
        return _Gcd.default({ x, y });
    });
}
function k(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const _k = yield import(/* webpackChunkName: "_FCC_k" */ './Math/k');
        return _k.default(num);
    });
}
function nCr({ n = 1, r = 1 } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const _nCr = yield import(/* webpackChunkName: "_FCC_nCr" */ './Math/nCr');
        return _nCr.default({ n, r });
    });
}
function nCrs({ n = 1, r = 1 } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const _nCrs = yield import(/* webpackChunkName: "_FCC_nCrs" */ './Math/nCrs');
        return _nCrs.default({ n, r });
    });
}
function nPr({ n = 1, r = 1 } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const _nPr = yield import(/* webpackChunkName: "_FCC_nPr" */ './Math/nPr');
        return _nPr.default({ n, r });
    });
}
function Pow({ num = 1, n = 1 } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const _Pow = yield import(/* webpackChunkName: "_FCC_Pow" */ './Math/Pow');
        return _Pow.default({ num, n });
    });
}
function Random(num = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        const _Random = yield import(/* webpackChunkName: "_FCC_Random" */ './Math/Random');
        return _Random.default(num);
    });
}
export { Gcd, nCr, nCrs, nPr, Pow, Random, k };
//# sourceMappingURL=Math.js.map