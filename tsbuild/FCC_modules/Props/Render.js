var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function react({ Dom, id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const DOM = Dom;
        const ReactDOM = yield import(/* webpackChunkName: "_FCC_react-dom" */ 'react-dom');
        ReactDOM.render(DOM, document.getElementById(id));
    });
}
export default function _render({ Dom, id }) {
    react({ Dom, id });
}
//# sourceMappingURL=render.js.map