"use strict";var f=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var l=f(function(b,g){
var c=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,a=require('@stdlib/error-tools-fmtprodmsg/dist');function p(t,r,u){var s,e;if(!c(t))throw new TypeError(a('1SN3c',t));if(arguments.length<2){if(e=t.length,!n(e))throw new TypeError(a('1SNEX',e))}else if(arguments.length>2){if(e=r,s=u,!n(e))throw new TypeError(a('1SNAz',e))}else if(n(r))e=r;else{if(e=t.length,!n(e))throw new TypeError(a('1SNEX',e));s=r}return o([]);function o(m){return v;function v(h){var i=m.slice();return i.unshift(h),i.length<e?o(i):t.apply(s,i)}}}g.exports=p
});var w=l();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
