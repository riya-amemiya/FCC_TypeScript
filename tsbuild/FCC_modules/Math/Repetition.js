export default function Repetition(x) {
    let age = 1;
    for (let i = 2; i <= x; i++) {
        age *= i;
    }
    return age;
}
