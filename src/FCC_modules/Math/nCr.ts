const nCr = ({ n, r }: { n: number; r: number }): number => {
    //nCr
    let x: number;
    let z: number;
    let y: number;
    let age = 1;
    y = n;
    z = r;
    x = 0;
    while (x == 0) {
        if (r == 1) {
            y = y * r;
        }
        r--;
        if (r == 0) {
            x++;
        } else {
            n--;
            if (n == 0) {
                x++;
                break;
            }
            y = y * n;
        }
    }
    for (let i = 2; i <= z; i++) {
        age *= i;
    }
    y = y / age;
    return y;
};
export default nCr;
