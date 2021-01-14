import { __awaiter, __generator } from "tslib";
function _HelloWorld() {
    return __awaiter(this, void 0, void 0, function () {
        var React;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import(/* webpackChunkName: "_FCC_react" */ 'react')];
                case 1:
                    React = _a.sent();
                    return [2 /*return*/, React.createElement("h1", null, "Hello World")];
            }
        });
    });
}
export default function HelloWorld(callback) {
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _HelloWorld()];
                case 1:
                    text = _a.sent();
                    return [2 /*return*/, callback(text)];
            }
        });
    });
}
//# sourceMappingURL=HelloWorld.js.map