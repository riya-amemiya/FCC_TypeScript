import { error_language } from '../../FCC_export';

export default function Zeller({ y = 2000, m = 1, d = 1 }: { y?: number; m?: number; d?: number; } = {}): string | number
{
    if (m < 3)
    {
        y--;
        m += 12;
    }
    let w: number | string = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;
    if (w == 0)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Sunday";
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "日曜日";
        }
    } else if (w == 1)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Manday";
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "月曜日";
        }
    } else if (w == 2)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Tuesday";
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "火曜日";
        }
    } else if (w == 3)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Wedneday";
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "水曜日";
        }
    } else if (w == 4)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Thursday";
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "木曜日";
        }
    } else if (w == 5)
    {
        if (error_language.haslanguage('en'))
        {
            w = "Friday";
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "金曜日";
        }
    }

    else
    {
        if (error_language.haslanguage('en'))
        {
            w = "Saturday";
        }
        else if (error_language.haslanguage('ja'))
        {
            w = "土曜日";
        }
    }
    return w;
}
