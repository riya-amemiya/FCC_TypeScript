export default function nPr({
  n = 1,
  r = 1
} = {}) {
  if (typeof n === typeof r && typeof n === "number" && typeof r === "number") {
    //nPr
    let y;
    let x = 0;
    y = n;

    while (x === 0) {
      if (r === 1) {
        y = y * r;
      }

      r--;
      if (r === 0) x++;else {
        n--;

        if (n === 0) {
          x++;
          break;
        }

        y = y * n;
      }
    }

    return y;
  } else console.error('Number型を引数に指定してください');
}