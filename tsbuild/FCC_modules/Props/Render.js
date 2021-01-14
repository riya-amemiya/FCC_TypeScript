import { __awaiter, __generator } from "tslib";
function react(_a) {
    var Dom = _a.Dom, id = _a.id;
    return __awaiter(this, void 0, void 0, function () {
        var DOM, ReactDOM;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    DOM = Dom;
                    return [4 /*yield*/, import(/* webpackChunkName: "_FCC_react-dom" */ 'react-dom')];
                case 1:
                    ReactDOM = _b.sent();
                    ReactDOM.render(DOM, document.getElementById(id));
                    return [2 /*return*/];
            }
        });
    });
}
export default function _render(_a) {
    var Dom = _a.Dom, id = _a.id;
    react({ Dom: Dom, id: id });
}
//# sourceMappingURL=render.js.map