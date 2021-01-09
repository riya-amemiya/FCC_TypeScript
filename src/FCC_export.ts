
//Modules
import { Maths } from './FCC_modules/Modules/Math'
import { Html } from './FCC_modules/Modules/HTML'
import * as Ajax from './FCC_modules/Modules/Ajax'
import HelloWorld from './FCC_modules/Modules/HelloWorld'

//Math
async function Gcd({ x, y }: { x: number; y: number }): Promise<number>
{
    const _Gcd = await import(/* webpackChunkName: "_FCC_Gcd" */'./FCC_modules/Math/Gcd')
    return _Gcd.default({ x, y })
}
async function k(num: number): Promise<number>
{
    const _k = await import(/* webpackChunkName: "_FCC_k" */'./FCC_modules/Math/k')
    return _k.default(num)
}
async function nCr({ n = 1, r = 1 }: { n?: number; r?: number } = {}): Promise<number>
{
    const _nCr = await import(/* webpackChunkName: "_FCC_nCr" */'./FCC_modules/Math/nCr')
    return _nCr.default({ n, r })
}
async function nCrs({ n = 1, r = 1 }: { n?: number; r?: number } = {}): Promise<number>
{
    const _nCrs = await import(/* webpackChunkName: "_FCC_nCrs" */ './FCC_modules/Math/nCrs')
    return _nCrs.default({ n, r })
}
async function nPr({ n = 1, r = 1 }: { n?: number; r?: number } = {}): Promise<number>
{
    const _nPr = await import(/* webpackChunkName: "_FCC_nPr" */'./FCC_modules/Math/nPr')
    return _nPr.default({ n, r })
}
async function Pow({ num = 1, n = 1 }: { num?: number; n?: number } = {}): Promise<number>
{
    const _Pow = await import(/* webpackChunkName: "_FCC_Pow" */'./FCC_modules/Math/Pow')
    return _Pow.default({ num, n })
}
async function Random(num: number = 1): Promise<number>
{
    const _Random = await import(/* webpackChunkName: "_FCC_Random" */'./FCC_modules/Math/Random')
    return _Random.default(num)
}

//Props
import error_language from './FCC_modules/Props/error_language';
import cal from './FCC_modules/Props/calClass';
async function _sleep(ms: number): Promise<void>
{
    const _sleep = await import(/* webpackChunkName: "_FCC_sleep" */'./FCC_modules/Props/sleep')
    return _sleep.default(ms)
}
async function sleep({ ms, callback }: { ms: number; callback: () => void }): Promise<void>
{
    await _sleep(ms)
    callback()
}
async function _Zeller({ y = 2000, m = 1, d = 1 }: { y?: number; m?: number; d?: number } = {}): Promise<string>
{
    const _Zeller = await import(/* webpackChunkName: "_FCC_Zeller" */'./FCC_modules/Props/Zeller')
    return _Zeller.default({ y, m, d })
}
async function Zeller({ y = 2000, m = 1, d = 1, callback }: { y: number; m: number; d: number; callback: (arg0: string) => any }): Promise<any>
{
    const text = await _Zeller({ y, m, d })
    return callback(text)
}
async function zero(num: type.int | string): Promise<boolean>
{
    const _zero = await import(/* webpackChunkName: "_FCC_Zero" */'./FCC_modules/Props/Zero')
    return _zero.default(num)
}
async function birthday(yer: number, mon: number, day: number): Promise<number>
{
    const _birthday = await import(/* webpackChunkName: "_FCC_birthday" */'./FCC_modules/Props/birthday')
    return _birthday.default({ yer, mon, day })
}
async function wait(callBack: () => any): Promise<void>
{
    const _wait = await import(/* webpackChunkName: "_FCC_wait" */'./FCC_modules/Props/wait')
    _wait.default(callBack)
}
async function render({ Dom, id }: { Dom: JSX.Element; id: string }): Promise<void>
{
    const _render = await import(/* webpackChunkName: "_FCC_render" */'./FCC_modules/Props/render')
    _render.default({ Dom, id })
}

//type
import * as type from './FCC_modules/type/type'

const version: string = '1.0'

export
{
    version,
    //Modules
    Maths,
    Html,
    Ajax,
    HelloWorld,
    //Math
    Gcd,
    k,
    nCr,
    nCrs,
    nPr,
    Pow,
    Random,
    //Props
    Zeller,
    zero,
    cal,
    error_language,
    birthday,
    wait,
    render,
    sleep,
    //type
    type
}