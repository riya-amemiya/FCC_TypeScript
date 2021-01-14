import error_language from "./error_language";
export default function Zeller(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.y, y = _c === void 0 ? 2000 : _c, _d = _b.m, m = _d === void 0 ? 1 : _d, _e = _b.d, d = _e === void 0 ? 1 : _e;
    switch ('日月火水木金土'[new Date(y, m - 1, d).getDay()]) {
        case "日":
            if (error_language.haslanguage("en")) {
                return "Sunday";
            }
            else if (error_language.haslanguage("ja")) {
                return "日曜日";
            }
            break;
        case "月":
            if (error_language.haslanguage('en')) {
                return "Manday";
            }
            else if (error_language.haslanguage('ja')) {
                return "月曜日";
            }
            break;
        case "火":
            if (error_language.haslanguage('en')) {
                return "Tuesday";
            }
            else if (error_language.haslanguage('ja')) {
                return "火曜日";
            }
            break;
        case "水":
            if (error_language.haslanguage('en')) {
                return "Wedneday";
            }
            else if (error_language.haslanguage('ja')) {
                return "水曜日";
            }
            break;
        case "木":
            if (error_language.haslanguage('en')) {
                return "Thursday";
            }
            else if (error_language.haslanguage('ja')) {
                return "木曜日";
            }
            break;
        case "金":
            if (error_language.haslanguage('en')) {
                return "Friday";
            }
            else if (error_language.haslanguage('ja')) {
                return "金曜日";
            }
            break;
        case "土":
            if (error_language.haslanguage('en')) {
                return "Saturday";
            }
            else if (error_language.haslanguage('ja')) {
                return "土曜日";
            }
            break;
    }
    return "";
}
//# sourceMappingURL=Zeller.js.map