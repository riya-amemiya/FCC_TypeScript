import * as React from 'react';
import * as Maths from './FCC_modules/Math'
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
    Zeller
}