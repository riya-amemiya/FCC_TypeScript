!function(e){function t(t){for(var n,u,o=t[0],i=t[1],c=0,l=[];c<o.length;c++)u=o[c],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(a&&a(t);l.length;)l.shift()()}var n={},r={16:0};function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,u){n=r[e]=[t,u]}));t.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(e){return u.p+"js/"+({0:"_FCC_Gcd",1:"_FCC_Max",2:"_FCC_Min",3:"_FCC_Pow",4:"_FCC_Random",5:"_FCC_Zeller",6:"_FCC_Zero",7:"_FCC_birthday",8:"_FCC_k",9:"_FCC_nCr",10:"_FCC_nCrs",11:"_FCC_nPr",12:"_FCC_render",13:"_FCC_sleep",14:"_FCC_wait",18:"vendors~_FCC_react-dom"}[e]||e)+".js"}(e);var a=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+o+")",a.name="ChunkLoadError",a.type=u,a.request=o,n[1](a)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var a=i;u(u.s=12)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}));function r(e,t,n,r){return new(n||(n=Promise))((function(u,o){function i(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,u,o,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(u=2&o[0]?r.return:o[0]?r.throw||((u=r.return)&&u.call(r),0):r.next)&&!(u=u.call(r,o[1])).done)return u;switch(r=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(u=i.trys,(u=u.length>0&&u[u.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){i.label=o[1];break}if(6===o[0]&&i.label<u[1]){i.label=u[1],u=o;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(o);break}u[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}Object.create;Object.create},function(e,t,n){"use strict";e.exports=n(6)},function(e,t,n){"use strict";n.r(t),n.d(t,"error_language",(function(){return u.a})),n.d(t,"cal",(function(){return o})),n.d(t,"sleep",(function(){return f})),n.d(t,"Zeller",(function(){return p})),n.d(t,"zero",(function(){return h})),n.d(t,"birthday",(function(){return v})),n.d(t,"wait",(function(){return b})),n.d(t,"render",(function(){return y})),n.d(t,"min",(function(){return c})),n.d(t,"max",(function(){return l}));var r=n(0),u=n(3),o=new(function(){function e(e){this._value=e}return e.prototype._get=function(){return this._value},e.prototype.sum=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=e;n<r.length;n++){var u=r[n];this._value+=u}return this},e.prototype.sub=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=e;n<r.length;n++){var u=r[n];this._value-=u}return this},e}())(0);function i(e){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(t){switch(t.label){case 0:return[4,n.e(2).then(n.bind(null,25))];case 1:return[2,t.sent().default(e)]}}))}))}function c(e){var t=e.num,n=e.callback;return Object(r.a)(this,void 0,void 0,(function(){var e;return Object(r.b)(this,(function(r){switch(r.label){case 0:return[4,i(t)];case 1:return e=r.sent(),n(e),[2]}}))}))}function a(e){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(t){switch(t.label){case 0:return[4,n.e(1).then(n.bind(null,26))];case 1:return[2,t.sent().default(e)]}}))}))}function l(e){var t=e.num,n=e.callback;return Object(r.a)(this,void 0,void 0,(function(){var e;return Object(r.b)(this,(function(r){switch(r.label){case 0:return[4,a(t)];case 1:return e=r.sent(),n(e),[2]}}))}))}function s(e){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(t){switch(t.label){case 0:return[4,n.e(13).then(n.bind(null,27))];case 1:return[2,t.sent().default(e)]}}))}))}function f(e){var t=e.ms,n=e.callback;return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(e){switch(e.label){case 0:return[4,s(t)];case 1:return e.sent(),n(),[2]}}))}))}function d(e){var t=void 0===e?{}:e,u=t.y,o=void 0===u?2e3:u,i=t.m,c=void 0===i?1:i,a=t.d,l=void 0===a?1:a;return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(e){switch(e.label){case 0:return[4,n.e(5).then(n.bind(null,28))];case 1:return[2,e.sent().default({y:o,m:c,d:l})]}}))}))}function p(e){var t=e.y,n=void 0===t?2e3:t,u=e.m,o=void 0===u?1:u,i=e.d,c=void 0===i?1:i,a=e.callback;return Object(r.a)(this,void 0,void 0,(function(){var e;return Object(r.b)(this,(function(t){switch(t.label){case 0:return[4,d({y:n,m:o,d:c})];case 1:return e=t.sent(),[2,a(e)]}}))}))}function h(e){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(t){switch(t.label){case 0:return[4,n.e(6).then(n.bind(null,29))];case 1:return[2,t.sent().default(e)]}}))}))}function v(e,t,u){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(r){switch(r.label){case 0:return[4,n.e(7).then(n.bind(null,30))];case 1:return[2,r.sent().default({yer:e,mon:t,day:u})]}}))}))}function b(e){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(t){switch(t.label){case 0:return[4,n.e(14).then(n.bind(null,31))];case 1:return t.sent().default(e),[2]}}))}))}function y(e){var t=e.Dom,u=e.id;return Object(r.a)(this,void 0,void 0,(function(){return Object(r.b)(this,(function(e){switch(e.label){case 0:return[4,n.e(12).then(n.bind(null,32))];case 1:return e.sent().default({Dom:t,id:u}),[2]}}))}))}},function(e,t,n){"use strict";var r={text:"ja",get:function(){return this.text},set:function(e){this.text=e},haslanguage:function(e){return!!~this.text.indexOf(e)}};t.a=r},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r={};n.r(r),n.d(r,"ajax",(function(){return l})),n.d(r,"youtube",(function(){return a}));var u={};n.r(u),n.d(u,"Gcd",(function(){return p})),n.d(u,"nCr",(function(){return v})),n.d(u,"nCrs",(function(){return b})),n.d(u,"nPr",(function(){return y})),n.d(u,"Pow",(function(){return m})),n.d(u,"Random",(function(){return _})),n.d(u,"k",(function(){return h}));var o={};n.r(o);var i={};n.r(i),n.d(i,"version",(function(){return O})),n.d(i,"Html",(function(){return c})),n.d(i,"Ajax",(function(){return r})),n.d(i,"HelloWorld",(function(){return d})),n.d(i,"Maths",(function(){return u})),n.d(i,"Props",(function(){return j})),n.d(i,"type",(function(){return o}));var c=new(function(){function e(e){return this._dom=e,this._dom}return e.prototype.getid=function(e){return-1!=e.indexOf(".")?(e=e.replace(".",""),this._dom=document.getElementsByClassName(e)[0],this):-1!=e.indexOf("#")?(e=e.replace("#",""),this._dom=document.getElementById(e),this):(this._dom=document.getElementsByTagName(e)[0],this)},e.prototype.hasclass=function(e){return void 0===e&&(e=""),this._dom=this._dom.className===e,this},e.prototype.addClass=function(e){return void 0===e&&(e=""),this._dom.classList.add(e),this},e.prototype.removeClass=function(e){return void 0===e&&(e=""),this._dom.classList.remove(e),this},e.prototype.html=function(e){return void 0===e&&(e=""),e?this._dom.innerHTML=e:this._dom=this._dom.innerHTML,this},e}())(null);function a(e){var t=void 0===e?{}:e;return"https://www.googleapis.com/youtube/v3/search?type="+(t.type||"video")+"&part="+(t.part||"snippet")+"&q="+(t.q||"music")+"&maxResults="+(t.maxResults||6)+"&key="+t.key+"&videoEmbeddable="+(t.videoEmbeddable||"true")+"&videoSyndicated="+(t.videoSyndicated||"true")}function l(e){var t=e.url,n=e.callback,r=new XMLHttpRequest;r.open("GET",t),r.send(),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e=JSON.parse(r.response);n(e)}}}var s=n(0);function f(){return Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(e){switch(e.label){case 0:return[4,Promise.resolve().then(n.t.bind(null,1,7))];case 1:return[2,e.sent().createElement("h1",null,"Hello World")]}}))}))}function d(e){return Object(s.a)(this,void 0,void 0,(function(){var t;return Object(s.b)(this,(function(n){switch(n.label){case 0:return[4,f()];case 1:return t=n.sent(),[2,e(t)]}}))}))}function p(e){var t=e.x,r=e.y;return Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(e){switch(e.label){case 0:return[4,n.e(0).then(n.bind(null,19))];case 1:return[2,e.sent().default({x:t,y:r})]}}))}))}function h(e){return Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(t){switch(t.label){case 0:return[4,n.e(8).then(n.bind(null,20))];case 1:return[2,t.sent().default(e)]}}))}))}function v(e){var t=void 0===e?{}:e,r=t.n,u=void 0===r?1:r,o=t.r,i=void 0===o?1:o;return Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(e){switch(e.label){case 0:return[4,n.e(9).then(n.bind(null,14))];case 1:return[2,e.sent().default({n:u,r:i})]}}))}))}function b(e){var t=void 0===e?{}:e,r=t.n,u=void 0===r?1:r,o=t.r,i=void 0===o?1:o;return Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(e){switch(e.label){case 0:return[4,n.e(10).then(n.bind(null,21))];case 1:return[2,e.sent().default({n:u,r:i})]}}))}))}function y(e){var t=void 0===e?{}:e,r=t.n,u=void 0===r?1:r,o=t.r,i=void 0===o?1:o;return Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(e){switch(e.label){case 0:return[4,n.e(11).then(n.bind(null,22))];case 1:return[2,e.sent().default({n:u,r:i})]}}))}))}function m(e){var t=void 0===e?{}:e,r=t.num,u=void 0===r?1:r,o=t.n,i=void 0===o?1:o;return Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(e){switch(e.label){case 0:return[4,n.e(3).then(n.bind(null,23))];case 1:return[2,e.sent().default({num:u,n:i})]}}))}))}function _(e){return void 0===e&&(e=1),Object(s.a)(this,void 0,void 0,(function(){return Object(s.b)(this,(function(t){switch(t.label){case 0:return[4,n.e(4).then(n.bind(null,24))];case 1:return[2,t.sent().default(e)]}}))}))}var j=n(2),O="1.0"},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,a=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))u.call(n,s)&&(a[s]=n[s]);if(r){c=r(n);for(var f=0;f<c.length;f++)o.call(n,c[f])&&(a[c[f]]=n[c[f]])}}return a}},function(e,t,n){"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(5),u=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,a=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;u=f("react.element"),o=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),c=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}function y(){}function m(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var _=m.prototype=new y;_.constructor=m,r(_,b.prototype),_.isPureReactComponent=!0;var j={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function g(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case o:a=!0}}if(a)return i=i(a=e),e=""===r?"."+k(a,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=r+k(c=e[l],l);a+=x(c,t,n,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(c=e.next()).done;)a+=x(c=c.value,t,n,s=r+k(c,l++),i);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function S(e,t,n){if(null==e)return e;var r=[],u=0;return x(e,r,"","",(function(e){return t.call(n,e,u++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function F(){var e=R.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(p(143));return e}},t.Component=b,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var o=r({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)O.call(t,s)&&!w.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=g,t.createFactory=function(e){var t=g.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="17.0.1"},,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(1),u=n(4),o=function(){var e=r.useState({y:2020,m:1,d:1}),t=e[0],n=e[1],o=r.useState(""),i=o[0],c=o[1],a=function(e){switch(e.target.name){case"y":n({y:Number(e.target.value),m:t.m,d:t.d});break;case"m":n({y:t.y,m:Number(e.target.value),d:t.d});break;case"d":n({y:t.y,m:t.m,d:Number(e.target.value)})}};return u.a.Props.Zeller({y:t.y,m:t.m,d:t.d,callback:function(e){return c(e)}}),r.createElement("section",{id:"zeller"},r.createElement("h1",null,"Zeller"),r.createElement("p",null,"引数"),r.createElement("pre",null,r.createElement("code",null,"{ y: number, m: number, d: number, callback: (data)=> any}")),r.createElement("p",null,"戻り値"),r.createElement("div",{className:"demo"},r.createElement("p",null,"Demo"),r.createElement("p",null,"y"),r.createElement("input",{type:"text",onChange:a,name:"y",className:"input-text"}),r.createElement("p",null,"m"),r.createElement("input",{type:"text",onChange:a,name:"m",className:"input-text"}),r.createElement("p",null,"d"),r.createElement("input",{type:"text",onChange:a,name:"d",className:"input-text"}),r.createElement("p",null,i),r.createElement("p",null,t.y),r.createElement("p",null,t.m),r.createElement("p",null,t.d)))},i=(n(9),n(2)),c=function(){return r.createElement(r.Fragment,null,r.createElement(o,null))};Object(i.render)({Dom:r.createElement(c,null),id:"root"})}]);