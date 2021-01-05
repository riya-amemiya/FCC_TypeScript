import { int } from "../type/type";

export default function zero(num: int | string): boolean
{
    if (num === 0)
        return true;

    else
        return false;
}
