import { __awaiter, __generator } from "tslib";
function _sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
export default function sleep(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _sleep(ms)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=sleep.js.map