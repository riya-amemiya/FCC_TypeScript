import { curry3 } from '../Curry';
const birthday = curry3(function (yer: number, mon: number, day: number) {
    const birthday = new Date(yer, mon - 1, day);
    const now = new Date();
    const y = now.getFullYear() - birthday.getFullYear();
    return now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate()) ? y - 1 : y;
});
export default birthday;
