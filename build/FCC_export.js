import * as React from 'react';
import * as ReactDOM from 'react-dom'; //Modules

import { Maths } from './FCC_modules/Modules/Math';
import { Html } from './FCC_modules/Modules/HTML';
import * as Ajax from './FCC_modules/Modules/Ajax';
import HelloWorld from './FCC_modules/Modules/HelloWorld'; //Math

import Gcd from './FCC_modules/Math/Gcd';
import k from './FCC_modules/Math/k';
import nCr from './FCC_modules/Math/nCr';
import nCrs from './FCC_modules/Math/nCrs';
import nPr from './FCC_modules/Math/nPr';
import Pow from './FCC_modules/Math/Pow';
import Random from './FCC_modules/Math/Random'; //Props

import Zeller from './FCC_modules/Props/Zeller';
import zero from './FCC_modules/Props/zero';
const joke = {
  Hello: 'Hello',
  World: 'World'
};

function render(Dom, id) {
  ReactDOM.render( /*#__PURE__*/React.createElement(Dom, null), document.getElementById(id));
}

let error_language = {
  text: 'ja',

  get() {
    return this.text;
  },

  set(error_language) {
    this.text = error_language;
  },

  haslanguage(haslanguage) {
    if (~this.text.indexOf(haslanguage)) return true;else return false;
  }

};

function birthday(yer, mon, day) {
  const birthday = new Date(yer, mon - 1, day);
  const now = new Date();
  const yb = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  const y = now.getFullYear() - birthday.getFullYear();
  const show = now < yb ? y - 1 : y;
  return show;
}

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

function wait(callBack) {
  window.onload = function () {
    callBack();
  };
}

const version = '1.0';
export { version, Ajax, joke, zero, HelloWorld, Maths, render, birthday, Html, cal, Zeller, nPr, Gcd, Random, k, nCr, nCrs, Pow, wait, error_language };