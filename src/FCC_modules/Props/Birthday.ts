import { int } from "../type/type";

export default function birthday({ yer, mon, day }: { yer: int; mon: int; day: int; }): int
{
    const birthday = new Date(yer, mon - 1, day);
    const now = new Date();
    const yb = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    const y = now.getFullYear() - birthday.getFullYear();
    const show: int = (now < yb) ? y - 1 : y;
    return show;
}
