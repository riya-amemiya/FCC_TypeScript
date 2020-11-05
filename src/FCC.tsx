import * as React from 'react';
import {Maths} from './FCC_modules/Math'
import * as ReactDOM from 'react-dom'
import html from './FCC_modules/HTML'
import * as Ajax from './FCC_modules/Ajax'
type int = number;
let Hello: 'Hello' = 'Hello'
const HelloWorld = ():JSX.Element => <h1>Hello World</h1>;
const zero = (num: int | string) => { if (num === 0) return true; else return false }
const render = (Dom: ()=> JSX.Element,id: string) =>
{
    ReactDOM.render(<Dom/>,document.getElementById(id))
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
const Zeller = (y = 2000, m = 1, d = 1, lan = 'jp') =>
{
    if (m < 3)
    {
        y--;
        m += 12;
    }
    let w:number | string = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;
    if (w == 0)
    {
        if (lan = 'en')
        {
            w = "Sunday"
        }
        else if (lan = 'jp')
        {
            w = "日曜日";
        }
    } else if (w == 1)
    {
        if (lan = 'en')
        {
            w = "Manday"
        }
        else if (lan = 'jp')
        {
            w = "月曜日";
        }
    } else if (w == 2)
    {
        if (lan = 'en')
        {
            w = "Tuesday"
        }
        else if (lan = 'jp')
        {
            w = "火曜日";
        }
    } else if (w == 3)
    {
        if (lan = 'en')
        {
            w = "Wedneday"
        }
        else if (lan = 'jp')
        {
            w = "水曜日";
        }
    } else if (w == 4)
    {
        if (lan = 'en')
        {
            w = "Thursday"
        }
        else if (lan = 'jp')
        {
            w = "木曜日";
        }
    } else if (w == 5)
    {
        if (lan = 'en')
        {
            w = "Friday"
        }
        else if (lan = 'jp')
        {
            w = "金曜日";
        }
    } else
    {
        if (lan = 'en')
        {
            w = "Saturday"
        }
        else if (lan = 'jp')
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
    } else console.error('Number型を引数に指定してください')
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
const nCrs = (n: number, r: number) =>
{
    //重複を許して取り出す
    n = n + r - 1;
    n = nCr(n, r);
    return n;
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
export
{
    Ajax,
    Hello,
    zero,
    HelloWorld,
    Maths,
    render,
    birthday,
    html,
    cal,
    Zeller,
    nPr,
    Gcd,
    Random,
    k,
    nCr,
    nCrs,
    Pow,
    wait
}