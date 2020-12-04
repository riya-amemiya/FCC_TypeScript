export default function Pow({ num, n }) {
    let nums = num;
    for (let i = 2; i <= n; i++) {
        nums *= num;
    }
    return nums;
}
