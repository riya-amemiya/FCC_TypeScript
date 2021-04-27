const nPr = (n = 1, r = 1): number => {
    //nPr
    let y: number;
    let x = 0;
    y = n;
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
};
export default nPr;
