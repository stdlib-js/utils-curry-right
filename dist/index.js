"use strict";var f=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var g=f(function(b,o){
var c=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,a=require('@stdlib/error-tools-fmtprodmsg/dist');function p(t,r,l){var u,e;if(!c(t))throw new TypeError(a('1SN3c',t));if(arguments.length<2){if(e=t.length,!n(e))throw new TypeError(a('1SNEX',e))}else if(arguments.length>2){if(e=r,u=l,!n(e))throw new TypeError(a('1SNAz',e))}else if(n(r))e=r;else{if(e=t.length,!n(e))throw new TypeError(a('1SNEX',e));u=r}return s([]);function s(m){return v;function v(h){var i=m.slice();return i.unshift(h),i.length<e?s(i):t.apply(u,i)}}}o.exports=p
});var w=g();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
