export default function Repetition(x:number): number
{
    //階乗
    let age = 1;
    for (let i = 2; i <= x; i++)
    {
        age *= i;
    }
    return age;
}