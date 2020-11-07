import * as React from 'react';
import { Maths } from './FCC_modules/Math';
import * as ReactDOM from 'react-dom';
import { Html } from './FCC_modules/HTML';
import * as Ajax from './FCC_modules/Ajax';
let Hello = 'Hello';

const HelloWorld = () => /*#__PURE__*/React.createElement("h1", null, "Hello World");

const zero = num => {
  if (num === 0) return true;else return false;
};

const render = (Dom, id) => {
  ReactDOM.render( /*#__PURE__*/React.createElement(Dom, null), document.getElementById(id));
};

let error_language = {
  text: 'ja',

  get() {
    return this.text;
  },

  set(text) {
    this.text = text;
  }

};

const birthday = (yer, mon, day) => {
  const birthday = new Date(yer, mon - 1, day);
  const now = new Date();
  const yb = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  const y = now.getFullYear() - birthday.getFullYear();
  const show = now < yb ? y - 1 : y;
  return show;
};

class calClass {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  sum(...Nums) {
    for (let nums of Nums) {
      this._value += nums;
    }

    return this;
  }

  sub(...Nums) {
    for (let nums of Nums) this._value -= nums;

    return this;
  }

}

const cal = new calClass(0);

const Zeller = (y = 2000, m = 1, d = 1, lan = 'jp') => {
  if (m < 3) {
    y--;
    m += 12;
  }

  let w = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;

  if (w == 0) {
    if (lan = 'en') {
      w = "Sunday";
    } else if (lan = 'jp') {
      w = "日曜日";
    }
  } else if (w == 1) {
    if (lan = 'en') {
      w = "Manday";
    } else if (lan = 'jp') {
      w = "月曜日";
    }
  } else if (w == 2) {
    if (lan = 'en') {
      w = "Tuesday";
    } else if (lan = 'jp') {
      w = "火曜日";
    }
  } else if (w == 3) {
    if (lan = 'en') {
      w = "Wedneday";
    } else if (lan = 'jp') {
      w = "水曜日";
    }
  } else if (w == 4) {
    if (lan = 'en') {
      w = "Thursday";
    } else if (lan = 'jp') {
      w = "木曜日";
    }
  } else if (w == 5) {
    if (lan = 'en') {
      w = "Friday";
    } else if (lan = 'jp') {
      w = "金曜日";
    }
  } else {
    if (lan = 'en') {
      w = "Saturday";
    } else if (lan = 'jp') {
      w = "土曜日";
    }
  }

  return w;
};

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
  if (typeof n === typeof r && typeof n === "number" && typeof r === "number") {
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
  } else if (/ja|ja_JP/.test(error_language.get())) console.error('Number型を引数に指定してください');else if (/en|en-US/.test(error_language.get())) console.error('Please specify Number type as an argument');
};

const nCrs = (n, r) => {
  if (typeof n === typeof r && typeof n === "number" && typeof r === "number") {
    //重複を許して取り出す
    n = n + r - 1;
    n = nCr(n, r);
    return n;
  } else console.error('Number型を引数に指定してください');
};

const Pow = (num, n) => {
  //xのy乗
  let nums = num;

  for (let i = 2; i <= n; i++) {
    nums *= num;
  }

  return nums;
};

const wait = callBack => {
  window.onload = function () {
    callBack();
  };
};

export { Ajax, Hello, zero, HelloWorld, Maths, render, birthday, Html, cal, Zeller, nPr, Gcd, Random, k, nCr, nCrs, Pow, wait, error_language };