/*! For license information please see app~6b882012.bundle.js.LICENSE.txt */
(()=>{"use strict";var n,t={301:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(50),o=e(251),i=e(271),a=e(458);const c={"/":[o.Z,r.Z],"/detail/:id":[i.Z],"/favourite":[a.Z]}},268:(n,t,e)=>{e.d(t,{Z:()=>r});const r={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),t=this.urlSplitter(n);return this.urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this.urlSplitter(n)},urlSplitter:function(n){var t=n.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}}},290:(n,t,e)=>{e(666);var r=e(379),o=e.n(r),i=e(795),a=e.n(i),c=e(569),A=e.n(c),l=e(565),u=e.n(l),s=e(216),p=e.n(s),f=e(589),h=e.n(f),d=e(756),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=A().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(d.Z,g),d.Z&&d.Z.locals&&d.Z.locals;var E=e(131);function y(n){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},y(n)}function v(){v=function(){return t};var n,t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",A=i.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,e){return n[t]=e}}function u(n,t,e,r){var i=t&&t.prototype instanceof E?t:E,a=Object.create(i.prototype),c=new G(r||[]);return o(a,"_invoke",{value:j(n,e,c)}),a}function s(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",g={};function E(){}function m(){}function x(){}var w={};l(w,a,(function(){return this}));var b=Object.getPrototypeOf,B=b&&b(b(I([])));B&&B!==e&&r.call(B,a)&&(w=B);var C=x.prototype=E.prototype=Object.create(w);function k(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function e(o,i,a,c){var A=s(n[o],n,i);if("throw"!==A.type){var l=A.arg,u=l.value;return u&&"object"==y(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(n){e("next",n,a,c)}),(function(n){e("throw",n,a,c)})):t.resolve(u).then((function(n){l.value=n,a(l)}),(function(n){return e("throw",n,a,c)}))}c(A.arg)}var i;o(this,"_invoke",{value:function(n,r){function o(){return new t((function(t,o){e(n,r,t,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,r){var o=p;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var A=O(c,r);if(A){if(A===g)continue;return A}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var l=s(t,e,r);if("normal"===l.type){if(o=r.done?d:f,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function O(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=s(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function _(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function G(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function I(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(y(t)+" is not iterable")}return m.prototype=x,o(C,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,A,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,x):(n.__proto__=x,l(n,A,"GeneratorFunction")),n.prototype=Object.create(C),n},t.awrap=function(n){return{__await:n}},k(L.prototype),l(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new L(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},k(C),l(C,A,"Generator"),l(C,a,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var A=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(A&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(A){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),g},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},t}function m(n,t,e,r,o,i,a){try{var c=n[i](a),A=c.value}catch(n){return void e(n)}c.done?t(A):Promise.resolve(A).then(r,o)}const x=function(){var n,t=(n=v().mark((function n(){var t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("serviceWorker"in navigator){n.next=3;break}return console.log("Service Worker not supported in the browser"),n.abrupt("return");case 3:return t=new E.ZW("./sw.bundle.js"),n.prev=4,n.next=7,t.register();case 7:console.log("Service worker registered"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(4),console.log("Failed to register service worker",n.t0);case 13:case"end":return n.stop()}}),n,null,[[4,10]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){m(i,r,o,a,c,"next",n)}function c(n){m(i,r,o,a,c,"throw",n)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();var w=e(31);function b(n){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(n)}function B(){B=function(){return t};var n,t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",A=i.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,e){return n[t]=e}}function u(n,t,e,r){var i=t&&t.prototype instanceof E?t:E,a=Object.create(i.prototype),c=new G(r||[]);return o(a,"_invoke",{value:j(n,e,c)}),a}function s(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",h="executing",d="completed",g={};function E(){}function y(){}function v(){}var m={};l(m,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(I([])));w&&w!==e&&r.call(w,a)&&(m=w);var C=v.prototype=E.prototype=Object.create(m);function k(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function e(o,i,a,c){var A=s(n[o],n,i);if("throw"!==A.type){var l=A.arg,u=l.value;return u&&"object"==b(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(n){e("next",n,a,c)}),(function(n){e("throw",n,a,c)})):t.resolve(u).then((function(n){l.value=n,a(l)}),(function(n){return e("throw",n,a,c)}))}c(A.arg)}var i;o(this,"_invoke",{value:function(n,r){function o(){return new t((function(t,o){e(n,r,t,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,r){var o=p;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var A=O(c,r);if(A){if(A===g)continue;return A}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var l=s(t,e,r);if("normal"===l.type){if(o=r.done?d:f,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function O(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=s(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function _(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function G(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function I(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(b(t)+" is not iterable")}return y.prototype=v,o(C,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,A,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,v):(n.__proto__=v,l(n,A,"GeneratorFunction")),n.prototype=Object.create(C),n},t.awrap=function(n){return{__await:n}},k(L.prototype),l(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new L(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},k(C),l(C,A,"Generator"),l(C,a,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var A=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(A&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(A){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),g},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},t}function C(n,t,e,r,o,i,a){try{var c=n[i](a),A=c.value}catch(n){return void e(n)}c.done?t(A):Promise.resolve(A).then(r,o)}function k(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){C(i,r,o,a,c,"next",n)}function c(n){C(i,r,o,a,c,"throw",n)}a(void 0)}))}}e(90),e(770),document.addEventListener("DOMContentLoaded",k(B().mark((function n(){var t,e,r;return B().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=new w.Z(document.getElementById("app")),e=document.querySelector("#toggle-dropdown"),r=document.querySelector(".navbar"),e.addEventListener("click",(function(){r.classList.toggle("show-dropdown")})),document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.querySelector(".skip-link").blur(),document.getElementById("app").scrollIntoView()})),window.addEventListener("load",(function(){t.render(),x()})),window.addEventListener("hashchange",(function(){t.render()}));case 7:case"end":return n.stop()}}),n)}))))},756:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(537),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Gluten:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]),a.push([n.id,"* {\n  margin: 0;\n  font-family: Gluten;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  color: white;\n  text-align: center;\n  background-color: blue;\n  top: 0;\n}\n\n.text-start {\n  text-align: left;\n}\n\n.fw-bold {\n  font-weight: bold;\n}\n\n.favourite {\n  cursor: pointer;\n  background-color:palevioletred;\n  color:white;\n  border:1px solid pink;\n  border-radius:5px;\n  padding-left:15px;\n  padding-right:15px\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n\n.text-container {\n  overflow: hidden;\n   display: -webkit-box;\n   -webkit-line-clamp: 8;\n           line-clamp: 8; \n   -webkit-box-orient: vertical;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.card {\n  margin: 15px\n}\n\n.cards {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card-badge {\n  top: 10px;\n  padding: 10px;\n  border-radius: 0 10px 10px 0;\n  background-color: #fff;\n  font-size: 14px;\n}\n\n.bordered {\n  border: 1px solid black;\n}\n\n.h1 {\n  font-size: 40px;\n}\n\n.h2 {\n  font-size: 30px;\n}\n\n.h3 {\n  font-size: 20px;\n}\n\n.w-250 {\n  width: 250px;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.brand {\n  text-align: center;\n  line-height: 25px;\n}\n\n.px-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n} \n\n.img-cover {\n  background-size: cover;\n}\n\n.hero {\n  background-position: center;\n  height: 400px; \n  width: 100%;\n}\n\n@media (min-width: 1200px) {\n  .hero {\n    width: 1000px;\n    margin: 0 auto;\n  }\n}\n\n.d-block {\n  display: block;\n}\n\nhtml {\n  background-color: whitesmoke;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n  color: white;\n  padding: 10px 20px;\n}\n\n.logo {\n  margin-left: 10px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.nav-links {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-link {\n  margin-right: 20px;\n  text-decoration: none;\n  color: white;\n}\n\n.drawer-icon {\n  font-size: 28px;\n  width: 66px;\n  cursor: pointer;\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    top: 60px;\n    right: 0;\n    background-color: #333;\n    width: 100%;\n  }\n  \n  .nav-link {\n    margin: 0;\n    padding: 10px 20px;\n    text-align: center;\n  }\n  \n  .drawer-icon {\n    display: block;\n  }\n\n}\n\nbutton, a {\n  min-width: 44px;\n  min-height: 44px;\n  line-height: 250%;\n  display: block;\n}\n\n.logo-dropdown {\n  display: none;\n}\n\n.show-dropdown .logo-dropdown {\n  display: block;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.dropdown {\n  margin-top: 86px;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.nav-link-dropdown {\n  color: white;\n  text-decoration: none;\n  padding: 10px 20px;\n}\n\n.my-15 {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.bg-primary {\n  background-color: #333;\n}\n\nfooter {\n  color: #fff;\n  padding: 10px;\n}\n\n.text-center {\n  text-align: center;\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAEA;EACE,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,MAAM;AACR;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,WAAW;EACX,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB;AACF;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;GACf,oBAAoB;GACpB,qBAAqB;WACb,aAAa;GACrB,4BAA4B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;AACF;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,4BAA4B;EAC5B,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,WAAW;AACb;;AAEA;EACE;IACE,aAAa;IACb,cAAc;EAChB;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,sBAAsB;IACtB,WAAW;EACb;;EAEA;IACE,SAAS;IACT,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,cAAc;EAChB;;AAEF;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\n\n* {\n  margin: 0;\n  font-family: Gluten;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  color: white;\n  text-align: center;\n  background-color: blue;\n  top: 0;\n}\n\n.text-start {\n  text-align: left;\n}\n\n.fw-bold {\n  font-weight: bold;\n}\n\n.favourite {\n  cursor: pointer;\n  background-color:palevioletred;\n  color:white;\n  border:1px solid pink;\n  border-radius:5px;\n  padding-left:15px;\n  padding-right:15px\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n\n.text-container {\n  overflow: hidden;\n   display: -webkit-box;\n   -webkit-line-clamp: 8;\n           line-clamp: 8; \n   -webkit-box-orient: vertical;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.card {\n  margin: 15px\n}\n\n.cards {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card-badge {\n  top: 10px;\n  padding: 10px;\n  border-radius: 0 10px 10px 0;\n  background-color: #fff;\n  font-size: 14px;\n}\n\n.bordered {\n  border: 1px solid black;\n}\n\n.h1 {\n  font-size: 40px;\n}\n\n.h2 {\n  font-size: 30px;\n}\n\n.h3 {\n  font-size: 20px;\n}\n\n.w-250 {\n  width: 250px;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.brand {\n  text-align: center;\n  line-height: 25px;\n}\n\n.px-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n} \n\n.img-cover {\n  background-size: cover;\n}\n\n.hero {\n  background-position: center;\n  height: 400px; \n  width: 100%;\n}\n\n@media (min-width: 1200px) {\n  .hero {\n    width: 1000px;\n    margin: 0 auto;\n  }\n}\n\n.d-block {\n  display: block;\n}\n\nhtml {\n  background-color: whitesmoke;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n  color: white;\n  padding: 10px 20px;\n}\n\n.logo {\n  margin-left: 10px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.nav-links {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-link {\n  margin-right: 20px;\n  text-decoration: none;\n  color: white;\n}\n\n.drawer-icon {\n  font-size: 28px;\n  width: 66px;\n  cursor: pointer;\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n    flex-direction: column;\n    position: absolute;\n    top: 60px;\n    right: 0;\n    background-color: #333;\n    width: 100%;\n  }\n  \n  .nav-link {\n    margin: 0;\n    padding: 10px 20px;\n    text-align: center;\n  }\n  \n  .drawer-icon {\n    display: block;\n  }\n\n}\n\nbutton, a {\n  min-width: 44px;\n  min-height: 44px;\n  line-height: 250%;\n  display: block;\n}\n\n.logo-dropdown {\n  display: none;\n}\n\n.show-dropdown .logo-dropdown {\n  display: block;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.dropdown {\n  margin-top: 86px;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.nav-link-dropdown {\n  color: white;\n  text-decoration: none;\n  padding: 10px 20px;\n}\n\n.my-15 {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.bg-primary {\n  background-color: #333;\n}\n\nfooter {\n  color: #fff;\n  padding: 10px;\n}\n\n.text-center {\n  text-align: center;\n}"],sourceRoot:""}]);const c=a}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.m=t,n=[],r.O=(t,e,o,i)=>{if(!e){var a=1/0;for(u=0;u<n.length;u++){for(var[e,o,i]=n[u],c=!0,A=0;A<e.length;A++)(!1&i||a>=i)&&Object.keys(r.O).every((n=>r.O[n](e[A])))?e.splice(A--,1):(c=!1,i<a&&(a=i));if(c){n.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[e,o,i]},r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n={847:0};r.O.j=t=>0===n[t];var t=(t,e)=>{var o,i,[a,c,A]=e,l=0;if(a.some((t=>0!==n[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(A)var u=A(r)}for(t&&t(e);l<a.length;l++)i=a[l],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(u)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})(),r.nc=void 0;var o=r.O(void 0,[150,902,394,2,893,418],(()=>r(290)));o=r.O(o)})();
//# sourceMappingURL=app~6b882012.bundle.js.map