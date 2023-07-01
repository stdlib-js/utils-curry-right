// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||c.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&f&&f.call(t,r,e.set),t};var l=e;function p(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(t){var r,e,n,o,i;if(null==t)return v.call(t);e=t[d],i=d,r=null!=(o=t)&&m.call(o,i);try{t[d]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[d]=e:delete t[d],n}:function(t){return v.call(t)},w=Boolean.prototype.toString;var j=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function _(t){return s(t)||h(t)}function E(){return new Function("return this;")()}p(_,"isPrimitive",s),p(_,"isObject",h);var O="object"==typeof self?self:null,S="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof T?T:null;var P=function(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(S)return S;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",V);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function x(t){return null!==t&&"object"==typeof t}function C(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!F(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(x));var G="function"==typeof t||"object"==typeof N||"function"==typeof A?function(t){return C(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?C(t).toLowerCase():r};function k(t){return"function"===G(t)}function L(t){return"number"==typeof t}var M=Number,R=M.prototype.toString;var U=b();function Y(t){return"object"==typeof t&&(t instanceof M||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function X(t){return L(t)||Y(t)}p(X,"isPrimitive",L),p(X,"isObject",Y);var q=Number.POSITIVE_INFINITY,z=M.NEGATIVE_INFINITY,D=Math.floor;function H(t){return t<q&&t>z&&D(r=t)===r;var r}function J(t){return L(t)&&H(t)}function K(t){return Y(t)&&H(t.valueOf())}function Q(t){return J(t)||K(t)}function W(t){return J(t)&&t>0}function Z(t){return K(t)&&t.valueOf()>0}function $(t){return W(t)||Z(t)}function tt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function rt(t,r,e){var n,o;if(!k(t))throw new TypeError(tt("0j23p",t));if(arguments.length<2){if(!W(o=t.length))throw new TypeError(tt("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",o))}else if(arguments.length>2){if(n=e,!W(o=r))throw new TypeError(tt("0j2Bi",o))}else if(W(r))o=r;else{if(!W(o=t.length))throw new TypeError(tt("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",o));n=r}return i([]);function i(r){return function(e){var u=r.slice();if(u.unshift(e),u.length<o)return i(u);return t.apply(n,u)}}}p(Q,"isPrimitive",J),p(Q,"isObject",K),p($,"isPrimitive",W),p($,"isObject",Z);export{rt as default};
//# sourceMappingURL=mod.js.map
