export default function Repetition(n) {
    return (n === 0) ? 1 : (n * Repetition(n - 1));
}
