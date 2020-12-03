export default function Pow({ num, n }: { num: number; n: number; }): number
{
    //xのy乗
    let nums = num;
    for (let i = 2; i <= n; i++)
    {
        nums *= num;
    }
    return nums;
}
