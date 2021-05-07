function nPr(n: number, r: number): number;
function nPr(n: number): (r: number) => number;
function nPr(n = 1, r?: number) {
    if (typeof r !== 'undefined') {
        //nPr
        let y = n,
            x = 0;
        while (x === 0) {
            if (r === 1) {
                y = y * r;
            }
            r--;
            if (r === 0) x++;
            else {
                n--;
                if (n === 0) {
                    x++;
                    break;
                }
                y = y * n;
            }
        }
        return y;
    } else {
        return (r: number) => nPr(n, r);
    }
}
export { nPr };
