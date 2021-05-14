import { curry3 } from '../Curry';
export interface ZELLER {
    (y: number, m: number, d: number): {
        ja: string;
        en: string;
    };
    (y: number, m: number): (d: number) => {
        ja: string;
        en: string;
    };
    (y: number): (
        m: number,
        d: number,
    ) => {
        ja: string;
        en: string;
    };
}
export const Zeller = curry3(function (y: number, m: number, d: number) {
    switch ('日月火水木金土'[new Date(y, m - 1, d).getDay()]) {
        case '日':
            return { ja: '日曜日', en: 'Sunday' };
        case '月':
            return { ja: '月曜日', en: 'Monday' };
        case '火':
            return { ja: '火曜日', en: 'Tuesday' };
        case '水':
            return { ja: '水曜日', en: 'Wednesday' };
        case '木':
            return { ja: '木曜日', en: 'Thursday' };
        case '金':
            return { ja: '金曜日', en: 'Friday' };
        case '土':
            return { ja: '土曜日', en: 'Saturday' };
        default:
            return { ja: '判定不能', en: 'undefined' };
    }
}) as ZELLER;
