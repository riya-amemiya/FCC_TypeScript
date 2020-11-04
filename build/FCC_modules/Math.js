const Gcd = (f = 1, x = 1) => {
  if (typeof f === typeof x && typeof f === "number" && typeof x === "number") {
    //最大公約数
    let r, tmp;

    if (f < x) {
      tmp = f;
      f = x;
      x = tmp;
    }
    /* ユークリッドの互除法 */


    r = f % x;

    while (r !== 0) {
      f = x;
      x = r;
      r = f % x;
    }

    return x;
  } else console.error('Number型を引数に指定してください');
};

const nPr = (n = 1, r = 1) => {
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
};

const Random = num => {
  return Math.floor(Math.random() * num);
};

const k = num => {
  Number(num);
  num += 273;
  return num;
};

const nCr = (n, r) => {
  //nCr
  let x;
  let z;
  let y;
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

const nCrs = (n, r) => {
  //重複を許して取り出す
  n = n + r - 1;
  n = nCr(n, r);
  return n;
};

const Pow = (num, n) => {
  //xのy乗
  let nums = num;

  for (let i = 2; i <= n; i++) {
    nums *= num;
  }

  return nums;
};

export { nPr, Gcd, Random, k, nCr, nCrs, Pow };