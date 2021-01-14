
import error_language from './Props/error_language';
import cal from './Props/calClass';
async function _min(num: number[]): Promise<number>
{
    const _min = await import(/* webpackChunkName: "_FCC_Min" */'./Math/Min')
    return _min.default(num)
}
async function min({ num, callback }: { num: number[]; callback: (arg0: number) => void; }): Promise<void>
{
    const num_2 = await _min(num);
    callback(num_2);
}
async function _max(num: number[]): Promise<number>
{
    const _min = await import(/* webpackChunkName: "_FCC_Max" */'./Math/Max')
    return _min.default(num)
}
async function max({ num, callback }: { num: number[]; callback: (arg0: number) => void; }): Promise<void>
{
    const num_2 = await _max(num);
    callback(num_2);
}
async function _sleep(ms: number): Promise<void>
{
    const _sleep = await import(/* webpackChunkName: "_FCC_sleep" */ './Props/sleep');
    return _sleep.default(ms);
}
async function sleep({ ms, callback }: { ms: number; callback: () => void; }): Promise<void>
{
    await _sleep(ms);
    callback();
}
async function _Zeller({ y = 2000, m = 1, d = 1 }: { y?: number; m?: number; d?: number; } = {}): Promise<string>
{
    const _Zeller = await import(/* webpackChunkName: "_FCC_Zeller" */ './Props/Zeller');
    return _Zeller.default({ y, m, d });
}
async function Zeller({ y = 2000, m = 1, d = 1, callback }: { y: number; m: number; d: number; callback: (arg0: string) => any; }): Promise<any>
{
    const text = await _Zeller({ y, m, d });
    return callback(text);
}
async function zero(num: number | string): Promise<boolean>
{
    const _zero = await import(/* webpackChunkName: "_FCC_Zero" */ './Props/Zero');
    return _zero.default(num);
}
async function birthday(yer: number, mon: number, day: number): Promise<number>
{
    const _birthday = await import(/* webpackChunkName: "_FCC_birthday" */ './Props/birthday');
    return _birthday.default({ yer, mon, day });
}
async function wait(callBack: () => any): Promise<void>
{
    const _wait = await import(/* webpackChunkName: "_FCC_wait" */ './Props/wait');
    _wait.default(callBack);
}
async function render({ Dom, id }: { Dom: JSX.Element; id: string; }): Promise<void>
{
    const _render = await import(/* webpackChunkName: "_FCC_render" */ './Props/render');
    _render.default({ Dom, id });
}
export { error_language, cal, sleep, Zeller, zero, birthday, wait, render, min, max }
