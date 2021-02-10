/// <reference types="react" />
import error_language from './Props/error_language';
import cal from './Props/calClass';
declare function min({ num, callback }: {
    num: number[];
    callback: (arg0: number) => void;
}): Promise<void>;
declare function max({ num, callback }: {
    num: number[];
    callback: (arg0: number) => void;
}): Promise<void>;
declare function sleep({ ms, callback }: {
    ms: number;
    callback: () => void;
}): Promise<void>;
declare function Zeller({ y, m, d, callback }: {
    y: number;
    m: number;
    d: number;
    callback: (arg0: string) => any;
}): Promise<any>;
declare function zero(num: number | string): Promise<boolean>;
declare function birthday(yer: number, mon: number, day: number): Promise<number>;
declare function wait(callBack: () => any): Promise<void>;
declare function render({ Dom, id }: {
    Dom: JSX.Element;
    id: string;
}): Promise<void>;
export { error_language, cal, sleep, Zeller, zero, birthday, wait, render, min, max };
//# sourceMappingURL=Props.d.ts.map