export default function Repetition(n: number): number
{
    return (n === 0) ? 1 : (n * Repetition(n - 1));
}