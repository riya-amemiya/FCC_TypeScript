import * as React from 'react';
import {Maths} from './FCC_modules/Math'
import * as ReactDOM from 'react-dom'
import {Html} from './FCC_modules/HTML'
import * as Ajax from './FCC_modules/Ajax'
type int = number;
interface joketype{
    Hello: 'Hello',
    World: 'World'
}
const joke:joketype = {
    Hello:'Hello',
    World:'World'
}
const HelloWorld = ():JSX.Element => <h1>Hello World</h1>;
const zero = (num: int | string): boolean => { if (num === 0) return true; else return false }
const render = (Dom: ()=> JSX.Element,id: string) =>
{
    ReactDOM.render(<Dom/>,document.getElementById(id))
}
let error_language = {
    text: 'ja',
    get (){
        return this.text
    },
    set(error_language:string){
        this.text = error_language
    },
    haslanguage(haslanguage:string){
        if(~this.text.indexOf(haslanguage))return true
        else return false
    }
}
const birthday = (yer: int, mon: int, day: int):int =>
{
    const birthday = new Date(yer, mon - 1, day);
    const now = new Date()
    const yb = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate())
    const y = now.getFullYear() - birthday.getFullYear()
    const show:int = (now < yb) ? y - 1 : y;
    return show
}
class calClass
{
    constructor(private _value: number) { }
    get value(): number
    {
        return this._value
    }
    sum(...Nums: number[]):this
    {
        for (let nums of Nums)
        {
            this._value += nums
        }
        return this;
    }
    sub(...Nums: number[]):this
    {
        for (let nums of Nums) this._value -= nums
        return this;
    }
}
const cal = new calClass(0)
const Zeller = (y = 2000, m = 1, d = 1) =>
{
    if (m < 3)
    {
        y--;
        m += 12;
    }
    let w:number | string = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;
    if (w == 0)
    {
        if (error_language.haslanguage('en') )
        {
            w = "Sunday"
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "日曜日";
        }
    } else if (w == 1)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Manday"
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "月曜日";
        }
    } else if (w == 2)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Tuesday"
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "火曜日";
        }
    } else if (w == 3)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Wedneday"
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "水曜日";
        }
    } else if (w == 4)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Thursday"
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "木曜日";
        }
    } else if (w == 5)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Friday"
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "金曜日";
        }
    } else
    {
        if (error_language.haslanguage('en'))
        {
            w = "Saturday"
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "土曜日";
        }
    }
    return w;
}
const Gcd = (f: number = 1, x: number = 1) =>
{
    if (typeof (f) === typeof (x) && typeof (f) === "number" && typeof (x) === "number")
    {
        //最大公約数
        let r: number, tmp: number;
        if (f < x)
        {
            tmp = f;
            f = x;
            x = tmp;
        }
        /* ユークリッドの互除法 */
        r = f % x;
        while (r !== 0)
        {
            f = x;
            x = r;
            r = f % x;
        }
        return x;
    }
    else console.error('Number型を引数に指定してください')
}
const nPr = (n: number = 1, r: number = 1) =>
{
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number")
    {
        //nPr
        let y: number;
        let x = 0;
        y = n;
        while (x === 0)
        {
            if (r === 1)
            {
                y = y * r;
            }
            r--;
            if (r === 0) x++;
            else
            {
                n--;
                if (n === 0)
                {
                    x++;
                    break;
                }
                y = y * n;
            }
        }
        return y;
    }
    else console.error('Number型を引数に指定してください')
}
const Random = (num: number): number =>
{
    return Math.floor(Math.random() * num);
}
const k = (num: number) =>
{
    Number(num)
    num += 273
    return num
}
const nCr = (n: number, r: number) =>
{
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number") {
        //nCr
        let x: number;
        let z: number;
        let y: number;
        let age = 1;
        y = n;
        z = r;
        x = 0;
        while (x == 0)
        {
            if (r == 1)
            {
                y = y * r;
            }
            r--;
            if (r == 0)
            {
                x++;
            } else
            {
                n--;
                if (n == 0)
                {
                    x++;
                    break;
                }
                y = y * n;
            }
        }
        for (let i = 2; i <= z; i++)
        {
            age *= i;
        }
        y = y / age;
        return y;
    }
    else if(/ja|ja_JP/.test(error_language.get()))console.error('Number型を引数に指定してください')
    else if(/en|en-US/.test(error_language.get()))console.error('Please specify Number type as an argument')
    else console.log('言語コードが不正な値です');console.log('ja_JPでerrorステータスを出力します');console.error('Number型を引数に指定してください')
}
const nCrs = (n: number, r: number) =>
{
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number") {
        //重複を許して取り出す
        n = n + r - 1;
        n = nCr(n, r);
        return n;
    }
    else console.error('Number型を引数に指定してください')
}
const Pow = (num: number, n: number) =>
{
    //xのy乗
    let nums = num;
    for (let i = 2; i <= n; i++)
    {
        nums *= num;
    }
    return nums;
}
const wait= (callBack:any):void=>{
    window.onload = function () {
        callBack()
    };
}
const version:string = '1.0'
export
{
    version,
    Ajax,
    joke,
    zero,
    HelloWorld,
    Maths,
    render,
    birthday,
    Html,
    cal,
    Zeller,
    nPr,
    Gcd,
    Random,
    k,
    nCr,
    nCrs,
    Pow,
    wait,
    error_language
}