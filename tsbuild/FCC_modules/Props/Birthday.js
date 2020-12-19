export default function birthday({ yer, mon, day }) {
    const birthday = new Date(yer, mon - 1, day);
    const now = new Date();
    const yb = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    const y = now.getFullYear() - birthday.getFullYear();
    const show = (now < yb) ? y - 1 : y;
    return show;
}
