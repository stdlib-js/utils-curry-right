// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function n(n,i,s){var o,a;if(!e(n))throw new TypeError(r("0j23p",n));if(arguments.length<2){if(a=n.length,!t(a))throw new TypeError(r("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",a))}else if(arguments.length>2){if(o=s,!t(a=i))throw new TypeError(r("0j2Bi",a))}else if(t(i))a=i;else{if(a=n.length,!t(a))throw new TypeError(r("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",a));o=i}return l([]);function l(e){return function(t){var r=e.slice();if(r.unshift(t),r.length<a)return l(r);return n.apply(o,r)}}}export{n as default};
//# sourceMappingURL=index.mjs.map
