// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+n(a):n(a)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,n=parseInt(i,10),!isFinite(n)){if(!t(i))throw new Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(i=(-n).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=n.toString(r),n||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(e){return"string"==typeof e}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function E(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":u(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=g.call(i,m,"$1e"),i=g.call(i,y,"e"),i=g.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=g.call(i,d,"e+0$1"),i=g.call(i,h,"e-0$1"),e.alternate&&(i=g.call(i,w,"$1."),i=g.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):l.call(i)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+x(t):x(t)+e}var S=String.fromCharCode,V=isNaN,T=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,i,t,n,o,s,u,l,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",u=1,l=0;l<e.length;l++)if(p(t=e[l]))s+=t;else{if(r=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,V(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,V(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!V(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=V(o)?String(t.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=E(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),s+=t.arg||"",u+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,t,n;for(i=[],n=0,t=F.exec(e);t;)(r=e.slice(n,F.lastIndex-t[0].length)).length&&i.push(r),i.push(_(t)),n=F.lastIndex,t=F.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function A(e){return"string"==typeof e}function C(e){var r,i;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return j.apply(null,r)}var R,O=Object.prototype,N=O.toString,Z=O.__defineGetter__,P=O.__defineSetter__,L=O.__lookupGetter__,W=O.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===N.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(L.call(e,r)||W.call(e,r)?(t=e.__proto__,e.__proto__=O,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,i.get),o&&P&&P.call(e,r,i.set),e};var G=R;function B(e,r,i){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=M()?function(e){var r,i,t,n,a;if(null==e)return z.call(e);i=e[D],a=D,r=null!=(n=e)&&Y.call(n,a);try{e[D]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[D]=i:delete e[D],t}:function(e){return z.call(e)},J=Boolean,K=Boolean.prototype.toString,Q=M();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function re(e){return U(e)||ee(e)}function ie(e){return"number"==typeof e}function te(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ne(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+te(n):te(n)+e,t&&(e="-"+e)),e}B(re,"isPrimitive",U),B(re,"isObject",ee);var ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function se(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ie(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ne(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ne(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===oe.call(e.specifier)?oe.call(i):ae.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ce(e){return"string"==typeof e}var pe=Math.abs,ue=String.prototype.toLowerCase,le=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,be=/\.0$/,ve=/\.0*e/,ye=/(\..*[^0])0*e/;function me(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=fe.call(i,ye,"$1e"),i=fe.call(i,ve,"e"),i=fe.call(i,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=fe.call(i,ge,"e+0$1"),i=fe.call(i,de,"e-0$1"),e.alternate&&(i=fe.call(i,he,"$1."),i=fe.call(i,we,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===le.call(e.specifier)?le.call(i):ue.call(i)}function Ee(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function xe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ee(t):Ee(t)+e}var ke=String.fromCharCode,Se=isNaN,Ve=Array.isArray;function Te(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ie(e){var r,i,t,n,a,o,s,c,p;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ce(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Te(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Se(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Se(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=se(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Se(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Se(a)?String(t.arg):ke(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=me(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ne(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=xe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var je=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _e(e){var r,i,t,n;for(i=[],n=0,t=je.exec(e);t;)(r=e.slice(n,je.lastIndex-t[0].length)).length&&i.push(r),i.push(Fe(t)),n=je.lastIndex,t=je.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $e(e){return"string"==typeof e}function Ae(e){var r,i;if(!$e(e))throw new TypeError(Ae("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_e(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Ie.apply(null,r)}function Ce(){return new Function("return this;")()}var Re="object"==typeof self?self:null,Oe="object"==typeof window?window:null,Ne="object"==typeof globalThis?globalThis:null,Ze=function(e){if(arguments.length){if(!U(e))throw new TypeError(Ae("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ce()}if(Ne)return Ne;if(Re)return Re;if(Oe)return Oe;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Ze.document&&Ze.document.childNodes,Le=Int8Array;function We(){return/^\s*function\s*([^(]*)/i}var Ge=/^\s*function\s*([^(]*)/i;B(We,"REGEXP",Ge);var Be=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function Ue(e){return null!==e&&"object"==typeof e}function Xe(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Ge.exec(t.toString()))return r[1]}return Ue(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}B(Ue,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ae("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Be(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Ue));var Me="function"==typeof e||"object"==typeof Le||"function"==typeof Pe?function(e){return Xe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Xe(e).toLowerCase():r};function ze(e){return"function"===Me(e)}function Ye(e){return"number"==typeof e}var qe=Number,De=qe.prototype.toString,He=M();function Je(e){return"object"==typeof e&&(e instanceof qe||(He?function(e){try{return De.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ke(e){return Ye(e)||Je(e)}B(Ke,"isPrimitive",Ye),B(Ke,"isObject",Je);var Qe=Number.POSITIVE_INFINITY,er=qe.NEGATIVE_INFINITY,rr=Math.floor;function ir(e){return e<Qe&&e>er&&rr(r=e)===r;var r}function tr(e){return Ye(e)&&ir(e)}function nr(e){return Je(e)&&ir(e.valueOf())}function ar(e){return tr(e)||nr(e)}function or(e){return tr(e)&&e>0}function sr(e){return nr(e)&&e.valueOf()>0}function cr(e){return or(e)||sr(e)}function pr(e){return"number"==typeof e}function ur(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function lr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ur(n):ur(n)+e,t&&(e="-"+e)),e}B(ar,"isPrimitive",tr),B(ar,"isObject",nr),B(cr,"isPrimitive",or),B(cr,"isObject",sr);var fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase;function dr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!pr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=lr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=lr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===gr.call(e.specifier)?gr.call(i):fr.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function hr(e){return"string"==typeof e}var wr=Math.abs,br=String.prototype.toLowerCase,vr=String.prototype.toUpperCase,yr=String.prototype.replace,mr=/e\+(\d)$/,Er=/e-(\d)$/,xr=/^(\d+)$/,kr=/^(\d+)e/,Sr=/\.0$/,Vr=/\.0*e/,Tr=/(\..*[^0])0*e/;function Ir(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!pr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":wr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=yr.call(i,Tr,"$1e"),i=yr.call(i,Vr,"e"),i=yr.call(i,Sr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=yr.call(i,mr,"e+0$1"),i=yr.call(i,Er,"e-0$1"),e.alternate&&(i=yr.call(i,xr,"$1."),i=yr.call(i,kr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===vr.call(e.specifier)?vr.call(i):br.call(i)}function jr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Fr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+jr(t):jr(t)+e}var _r=String.fromCharCode,$r=isNaN,Ar=Array.isArray;function Cr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Rr(e){var r,i,t,n,a,o,s,c,p;if(!Ar(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(hr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Cr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,$r(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,$r(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=dr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!$r(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=$r(a)?String(t.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ir(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=lr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Fr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Nr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Zr(e){var r,i,t,n;for(i=[],n=0,t=Or.exec(e);t;)(r=e.slice(n,Or.lastIndex-t[0].length)).length&&i.push(r),i.push(Nr(t)),n=Or.lastIndex,t=Or.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Pr(e){return"string"==typeof e}function Lr(e){var r,i,t;if(!Pr(e))throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Zr(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Rr.apply(null,i)}return function(e,r,i){var t,n;if(!ze(e))throw new TypeError(Lr("invalid argument. First argument must be a function. Value: `%s`.",e));if(arguments.length<2){if(!or(n=e.length))throw new TypeError(Lr("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",n))}else if(arguments.length>2){if(t=i,!or(n=r))throw new TypeError(Lr("invalid argument. Arity argument must be a positive integer. Value: `%s`.",n))}else if(or(r))n=r;else{if(!or(n=e.length))throw new TypeError(Lr("invalid argument. First argument must be a function having at least one parameter. Value: `%s`.",n));t=r}return a([]);function a(r){return function(i){var o=r.slice();return o.unshift(i),o.length<n?a(o):e.apply(t,o)}}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).curryRight=r();
//# sourceMappingURL=browser.js.map
