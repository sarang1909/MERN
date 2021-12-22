webpackJsonp([0],{117:function(e,t,n){var r=n(118);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(69)(r,o);r.locals&&(e.exports=r.locals)},118:function(e,t,n){t=e.exports=n(68)(!0),t.push([e.i,".authentication__header{color:#fff;text-align:center}.authentication{width:90%;max-width:25rem;margin:7rem auto;text-align:center}.authentication form{margin-bottom:1rem}","",{version:3,sources:["/Users/SHIVANI/frontend/src/user/pages/Auth.css"],names:[],mappings:"AAAA,wBACE,WAAa,AACb,iBAAmB,CACpB,AAED,gBACE,UAAW,AACX,gBAAiB,AACjB,iBAAkB,AAClB,iBAAmB,CACpB,AAED,qBACE,kBAAoB,CACrB",file:"Auth.css",sourcesContent:[".authentication__header {\n  color: white;\n  text-align: center;\n}\n\n.authentication {\n  width: 90%;\n  max-width: 25rem;\n  margin: 7rem auto;\n  text-align: center;\n}\n\n.authentication form {\n  margin-bottom: 1rem;\n}"],sourceRoot:""}])},74:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(76),a=n.n(o),i=n(0),c=n.n(i),s=n(82),l=n(90),u=n(75),A=n(77),f=n(21),d=n(94),m=n(87),p=n(93),h=n(79),v=n(12),b=n(117),g=(n.n(b),this),C=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),B=function(){var e=Object(i.useContext)(v.a),t=Object(i.useState)(!0),n=C(t,2),o=n[0],b=n[1],B=Object(h.a)(),y=B.isLoading,E=B.error,x=B.sendRequest,w=B.clearError,k=Object(p.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),O=C(k,3),_=O[0],j=O[1],I=O[2],N=function(){o?I(Object.assign({},_.inputs,{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):I(Object.assign({},_.inputs,{name:void 0,image:void 0}),_.inputs.email.isValid&&_.inputs.password.isValid),b(function(e){return!e})},S=function(){var t=r(a.a.mark(function t(n){var r,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!o){t.next=13;break}return t.prev=2,t.next=5,x(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/users/login","POST",JSON.stringify({email:_.inputs.email.value,password:_.inputs.password.value}),{"Content-Type":"application/json"});case 5:r=t.sent,e.login(r.userId,r.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,i=new FormData,i.append("email",_.inputs.email.value),i.append("name",_.inputs.name.value),i.append("password",_.inputs.password.value),i.append("image",_.inputs.image.value),t.next=21,x(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/users/signup","POST",i);case 21:c=t.sent,e.login(c.userId,c.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}},t,g,[[2,9],[13,25]])}));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(A.a,{error:E,onClear:w}),c.a.createElement(s.a,{className:"authentication"},y&&c.a.createElement(f.a,{asOverlay:!0}),c.a.createElement("h2",null,"Login Required"),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:S},!o&&c.a.createElement(l.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(m.c)()],errorText:"Please enter a name.",onInput:j}),!o&&c.a.createElement(d.a,{center:!0,id:"image",onInput:j,errorText:"Please provide an image."}),c.a.createElement(l.a,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[Object(m.a)()],errorText:"Please enter a valid email address.",onInput:j}),c.a.createElement(l.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(m.b)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:j}),c.a.createElement(u.a,{type:"submit",disabled:!_.isValid},o?"LOGIN":"SIGNUP")),c.a.createElement(u.a,{inverse:!0,onClick:N},"SWITCH TO ",o?"SIGNUP":"LOGIN")))};t.default=B},75:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n(85),c=(n.n(i),function(e){return e.href?o.a.createElement("a",{className:"button button--"+(e.size||"default")+" "+(e.inverse&&"button--inverse")+" "+(e.danger&&"button--danger"),href:e.href},e.children):e.to?o.a.createElement(a.b,{to:e.to,exact:e.exact,className:"button button--"+(e.size||"default")+" "+(e.inverse&&"button--inverse")+" "+(e.danger&&"button--danger")},e.children):o.a.createElement("button",{className:"button button--"+(e.size||"default")+" "+(e.inverse&&"button--inverse")+" "+(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)});t.a=c},76:function(e,t,n){e.exports=n(80)},77:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(78),i=n(75),c=function(e){return o.a.createElement(a.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:o.a.createElement(i.a,{onClick:e.onClear},"Okay")},o.a.createElement("p",null,e.error))};t.a=c},78:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(22),s=n(23),l=n(83),u=(n.n(l),function(e){var t=o.a.createElement("div",{className:"modal "+e.className,style:e.style},o.a.createElement("header",{className:"modal__header "+e.headerClass},o.a.createElement("h2",null,e.header)),o.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"modal__content "+e.contentClass},e.children),o.a.createElement("footer",{className:"modal__footer "+e.footerClass},e.footer)));return i.a.createPortal(t,document.getElementById("modal-hook"))}),A=function(e){return o.a.createElement(o.a.Fragment,null,e.show&&o.a.createElement(s.a,{onClick:e.onCancel}),o.a.createElement(c.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},o.a.createElement(u,e)))};t.a=A},79:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}n.d(t,"a",function(){return l});var o=n(76),a=n.n(o),i=n(0),c=(n.n(i),this),s=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){var e=Object(i.useState)(!1),t=s(e,2),n=t[0],o=t[1],l=Object(i.useState)(),u=s(l,2),A=u[0],f=u[1],d=Object(i.useRef)([]),m=Object(i.useCallback)(function(){var e=r(a.a.mark(function e(t){var n,r,i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),n=new window.AbortController,d.current.push(n),e.prev=3,e.next=6,fetch(t,{method:s,body:l,headers:u,signal:n.signal});case 6:return r=e.sent,e.next=9,r.json();case 9:if(i=e.sent,d.current=d.current.filter(function(e){return e!==n}),r.ok){e.next=13;break}throw new Error(i.message);case 13:return o(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(3),f(e.t0.message),o(!1),e.t0;case 22:case"end":return e.stop()}},e,c,[[3,17]])}));return function(t){return e.apply(this,arguments)}}(),[]),p=function(){f(null)};return Object(i.useEffect)(function(){return function(){d.current.forEach(function(e){return e.abort()})}},[]),{isLoading:n,error:A,sendRequest:m,clearError:p}}},80:function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(81),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},81:function(e,t){!function(t){"use strict";function n(e,t,n,r){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),c=new d(r||[]);return i._invoke=l(e,n,c),i}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function c(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function s(e){function t(n,o,a,i){var c=r(e[n],e,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&b.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(l).then(function(e){s.value=e,a(s)},i)}i(c.arg)}function n(e,n){function r(){return new Promise(function(r,o){t(e,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(e,t,n){var o=w;return function(a,i){if(o===O)throw new Error("Generator is already running");if(o===_){if("throw"===a)throw i;return p()}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=u(c,n);if(s){if(s===j)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===w)throw o=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=O;var l=r(e,t,n);if("normal"===l.type){if(o=n.done?_:k,l.arg===j)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=_,n.method="throw",n.arg=l.arg)}}}function u(e,t){var n=e.iterator[t.method];if(n===h){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=h,u(e,t),"throw"===t.method))return j;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,j;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=h),t.delegate=null,j):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,j)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function f(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function m(e){if(e){var t=e[C];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(b.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=h,t.done=!0,t};return r.next=r}}return{next:p}}function p(){return{value:h,done:!0}}var h,v=Object.prototype,b=v.hasOwnProperty,g="function"===typeof Symbol?Symbol:{},C=g.iterator||"@@iterator",B=g.asyncIterator||"@@asyncIterator",y=g.toStringTag||"@@toStringTag",E="object"===typeof e,x=t.regeneratorRuntime;if(x)return void(E&&(e.exports=x));x=t.regeneratorRuntime=E?e.exports:{},x.wrap=n;var w="suspendedStart",k="suspendedYield",O="executing",_="completed",j={},I={};I[C]=function(){return this};var N=Object.getPrototypeOf,S=N&&N(N(m([])));S&&S!==v&&b.call(S,C)&&(I=S);var D=i.prototype=o.prototype=Object.create(I);a.prototype=D.constructor=i,i.constructor=a,i[y]=a.displayName="GeneratorFunction",x.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},x.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,y in e||(e[y]="GeneratorFunction")),e.prototype=Object.create(D),e},x.awrap=function(e){return{__await:e}},c(s.prototype),s.prototype[B]=function(){return this},x.AsyncIterator=s,x.async=function(e,t,r,o){var a=new s(n(e,t,r,o));return x.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},c(D),D[y]="Generator",D[C]=function(){return this},D.toString=function(){return"[object Generator]"},x.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},x.values=m,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(f),!e)for(var t in this)"t"===t.charAt(0)&&b.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=h)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return a.type="throw",a.arg=e,n.next=t,r&&(n.method="next",n.arg=h),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=b.call(o,"catchLoc"),c=b.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&b.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),j},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),f(n),j}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;f(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:m(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=h),j}}}(function(){return this}()||Function("return this")())},82:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(88),i=(n.n(a),function(e){return o.a.createElement("div",{className:"card "+e.className,style:e.style},e.children)});t.a=i},83:function(e,t,n){var r=n(84);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(69)(r,o);r.locals&&(e.exports=r.locals)},84:function(e,t,n){t=e.exports=n(68)(!0),t.push([e.i,".modal{z-index:100;position:fixed;top:22vh;left:10%;width:80%;background:#fff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);border-radius:8px}.modal__header{width:100%;padding:1rem .5rem;background:#2a006e;color:#fff}.modal__header h2{margin:.5rem}.modal__content,.modal__footer{padding:1rem .5rem}@media (min-width:768px){.modal{left:calc(50% - 20rem);width:40rem}}.modal-enter{-webkit-transform:translateY(-10rem);-ms-transform:translateY(-10rem);transform:translateY(-10rem);opacity:0}.modal-enter-active{-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}.modal-enter-active,.modal-exit{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1}.modal-exit-active{-webkit-transform:translateY(-10rem);-ms-transform:translateY(-10rem);transform:translateY(-10rem);opacity:0;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}","",{version:3,sources:["/Users/SHIVANI/frontend/src/shared/components/UIElements/Modal.css"],names:[],mappings:"AAAA,OACE,YAAa,AACb,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAW,AACX,gBAAkB,AAClB,6CAAkD,AAC1C,qCAA0C,AAClD,iBAAmB,CACpB,AAED,eACE,WAAY,AACZ,mBAAqB,AACrB,mBAAoB,AACpB,UAAa,CACd,AAED,kBACE,YAAe,CAChB,AAMD,+BACE,kBAAqB,CACtB,AAED,yBACE,OACE,uBAAwB,AACxB,WAAa,CACd,CACF,AAED,aACE,qCAAsC,AAClC,iCAAkC,AAC9B,6BAA8B,AACtC,SAAW,CACZ,AAED,oBAKE,2BAA8B,AAC9B,sBAAyB,AACzB,kBAAsB,CACvB,AAED,gCATE,gCAAiC,AAC7B,4BAA6B,AACzB,wBAAyB,AACjC,SAAW,CAWZ,AAED,mBACE,qCAAsC,AAClC,iCAAkC,AAC9B,6BAA8B,AACtC,UAAW,AACX,2BAA8B,AAC9B,sBAAyB,AACzB,kBAAsB,CACvB",file:"Modal.css",sourcesContent:[".modal {\n  z-index: 100;\n  position: fixed;\n  top: 22vh;\n  left: 10%;\n  width: 80%;\n  background: white;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  border-radius: 8px;\n}\n\n.modal__header {\n  width: 100%;\n  padding: 1rem 0.5rem;\n  background: #2a006e;\n  color: white;\n}\n\n.modal__header h2 {\n  margin: 0.5rem;\n}\n\n.modal__content {\n  padding: 1rem 0.5rem;\n}\n\n.modal__footer {\n  padding: 1rem 0.5rem;\n}\n\n@media (min-width: 768px) {\n  .modal {\n    left: calc(50% - 20rem);\n    width: 40rem;\n  }\n}\n\n.modal-enter {\n  -webkit-transform: translateY(-10rem);\n      -ms-transform: translateY(-10rem);\n          transform: translateY(-10rem);\n  opacity: 0;\n}\n\n.modal-enter-active {\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 200ms;\n  -o-transition: all 200ms;\n  transition: all 200ms;\n}\n\n.modal-exit {\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n}\n\n.modal-exit-active {\n  -webkit-transform: translateY(-10rem);\n      -ms-transform: translateY(-10rem);\n          transform: translateY(-10rem);\n  opacity: 0;\n  -webkit-transition: all 200ms;\n  -o-transition: all 200ms;\n  transition: all 200ms;\n}\n"],sourceRoot:""}])},85:function(e,t,n){var r=n(86);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(69)(r,o);r.locals&&(e.exports=r.locals)},86:function(e,t,n){t=e.exports=n(68)(!0),t.push([e.i,".button{font:inherit;padding:.5rem 1.5rem;border:1px solid #f05;border-radius:4px;background:#f05;color:#fff;cursor:pointer;margin-right:1rem;text-decoration:none;display:inline-block}.button:focus{outline:none}.button:active,.button:hover{background:#ff4382;border-color:#ff4382}.button--inverse{background:transparent;color:#f05}.button--inverse:active,.button--inverse:hover{color:#fff;background:#f05}.button--danger{background:#830000;border-color:#830000}.button--danger:active,.button--danger:hover{background:#f34343;border-color:#f34343}.button:active:disabled,.button:disabled,.button:hover:disabled{background:#ccc;color:#979797;border-color:#ccc;cursor:not-allowed}.button--small{font-size:.8rem}.button--big{font-size:1.5rem}","",{version:3,sources:["/Users/SHIVANI/frontend/src/shared/components/FormElements/Button.css"],names:[],mappings:"AAAA,QACE,aAAc,AACd,qBAAuB,AACvB,sBAA0B,AAC1B,kBAAmB,AACnB,gBAAoB,AACpB,WAAa,AACb,eAAgB,AAChB,kBAAmB,AACnB,qBAAsB,AACtB,oBAAsB,CACvB,AAED,cACE,YAAc,CACf,AAED,6BAEE,mBAAoB,AACpB,oBAAsB,CACvB,AAED,iBACE,uBAAwB,AACxB,UAAe,CAChB,AAED,+CAEE,WAAa,AACb,eAAoB,CACrB,AAED,gBACE,mBAAoB,AACpB,oBAAsB,CACvB,AAED,6CAEE,mBAAoB,AACpB,oBAAsB,CACvB,AAED,gEAGE,gBAAiB,AACjB,cAAe,AACf,kBAAmB,AACnB,kBAAoB,CACrB,AAED,eACE,eAAkB,CACnB,AAED,aACE,gBAAkB,CACnB",file:"Button.css",sourcesContent:[".button {\n  font: inherit;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #ff0055;\n  border-radius: 4px;\n  background: #ff0055;\n  color: white;\n  cursor: pointer;\n  margin-right: 1rem;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.button:focus {\n  outline: none;\n}\n\n.button:hover,\n.button:active {\n  background: #ff4382;\n  border-color: #ff4382;\n}\n\n.button--inverse {\n  background: transparent;\n  color: #ff0055;\n}\n\n.button--inverse:hover,\n.button--inverse:active {\n  color: white;\n  background: #ff0055;\n}\n\n.button--danger {\n  background: #830000;\n  border-color: #830000;\n}\n\n.button--danger:hover,\n.button--danger:active {\n  background: #f34343;\n  border-color: #f34343;\n}\n\n.button:disabled,\n.button:hover:disabled,\n.button:active:disabled {\n  background: #ccc;\n  color: #979797;\n  border-color: #ccc;\n  cursor: not-allowed;\n}\n\n.button--small {\n  font-size: 0.8rem;\n}\n\n.button--big {\n  font-size: 1.5rem;\n}"],sourceRoot:""}])},87:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return i});var r=function(){return{type:"REQUIRE"}},o=function(e){return{type:"MINLENGTH",val:e}},a=function(){return{type:"EMAIL"}},i=function(e,t){var n=!0,r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;"REQUIRE"===s.type&&(n=n&&e.trim().length>0),"MINLENGTH"===s.type&&(n=n&&e.trim().length>=s.val),"MAXLENGTH"===s.type&&(n=n&&e.trim().length<=s.val),"MIN"===s.type&&(n=n&&+e>=s.val),"MAX"===s.type&&(n=n&&+e<=s.val),"EMAIL"===s.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}},88:function(e,t,n){var r=n(89);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(69)(r,o);r.locals&&(e.exports=r.locals)},89:function(e,t,n){t=e.exports=n(68)(!0),t.push([e.i,".card{position:relative;margin:0;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);border-radius:6px;padding:1rem;overflow:hidden;background:#fff}","",{version:3,sources:["/Users/SHIVANI/frontend/src/shared/components/UIElements/Card.css"],names:[],mappings:"AAAA,MACE,kBAAmB,AACnB,SAAU,AACV,6CAAkD,AAC1C,qCAA0C,AAClD,kBAAmB,AACnB,aAAc,AACd,gBAAiB,AACjB,eAAkB,CACnB",file:"Card.css",sourcesContent:[".card {\n  position: relative;\n  margin: 0;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  border-radius: 6px;\n  padding: 1rem;\n  overflow: hidden;\n  background: white;\n}\n"],sourceRoot:""}])},90:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(87),i=n(91),c=(n.n(i),function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),s=function(e,t){switch(t.type){case"CHANGE":return Object.assign({},e,{value:t.val,isValid:Object(a.d)(t.val,t.validators)});case"TOUCH":return Object.assign({},e,{isTouched:!0});default:return e}},l=function(e){var t=Object(r.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=c(t,2),a=n[0],i=n[1],l=e.id,u=e.onInput,A=a.value,f=a.isValid;Object(r.useEffect)(function(){u(l,A,f)},[l,A,f,u]);var d=function(t){i({type:"CHANGE",val:t.target.value,validators:e.validators})},m=function(){i({type:"TOUCH"})},p="input"===e.element?o.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:m,value:a.value}):o.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:m,value:a.value});return o.a.createElement("div",{className:"form-control "+(!a.isValid&&a.isTouched&&"form-control--invalid")},o.a.createElement("label",{htmlFor:e.id},e.label),p,!a.isValid&&a.isTouched&&o.a.createElement("p",null,e.errorText))};t.a=l},91:function(e,t,n){var r=n(92);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(69)(r,o);r.locals&&(e.exports=r.locals)},92:function(e,t,n){t=e.exports=n(68)(!0),t.push([e.i,".form-control{margin:1rem 0}.form-control input,.form-control label,.form-control textarea{display:block}.form-control label{font-weight:700;margin-bottom:.5rem}.form-control input,.form-control textarea{width:100%;font:inherit;border:1px solid #ccc;background:#f8f8f8;padding:.15rem .25rem}.form-control input:focus,.form-control textarea:focus{outline:none;background:#ebebeb;border-color:#510077}.form-control--invalid label,.form-control--invalid p{color:red}.form-control--invalid input,.form-control--invalid textarea{border-color:red;background:#ffd1d1}","",{version:3,sources:["/Users/SHIVANI/frontend/src/shared/components/FormElements/Input.css"],names:[],mappings:"AAAA,cACE,aAAe,CAChB,AAED,+DAGE,aAAe,CAChB,AAED,oBACE,gBAAkB,AAClB,mBAAsB,CACvB,AAED,2CAEE,WAAY,AACZ,aAAc,AACd,sBAAuB,AACvB,mBAAoB,AACpB,qBAAyB,CAC1B,AAED,uDAEE,aAAc,AACd,mBAAoB,AACpB,oBAAsB,CACvB,AAED,sDAEE,SAAW,CACZ,AAED,6DAEE,iBAAkB,AAClB,kBAAoB,CACrB",file:"Input.css",sourcesContent:[".form-control {\n  margin: 1rem 0;\n}\n\n.form-control label,\n.form-control input,\n.form-control textarea {\n  display: block;\n}\n\n.form-control label {\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.form-control input,\n.form-control textarea {\n  width: 100%;\n  font: inherit;\n  border: 1px solid #ccc;\n  background: #f8f8f8;\n  padding: 0.15rem 0.25rem;\n}\n\n.form-control input:focus,\n.form-control textarea:focus {\n  outline: none;\n  background: #ebebeb;\n  border-color: #510077;\n}\n\n.form-control--invalid label,\n.form-control--invalid p {\n  color: red;\n}\n\n.form-control--invalid input,\n.form-control--invalid textarea {\n  border-color: red;\n  background: #ffd1d1;\n}"],sourceRoot:""}])},93:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return c});var o=n(0),a=(n.n(o),function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),i=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var o in e.inputs)e.inputs[o]&&(n=o===t.inputId?n&&t.isValid:n&&e.inputs[o].isValid);return Object.assign({},e,{inputs:Object.assign({},e.inputs,r({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},c=function(e,t){var n=Object(o.useReducer)(i,{inputs:e,isValid:t}),r=a(n,2),c=r[0],s=r[1];return[c,Object(o.useCallback)(function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})},[]),Object(o.useCallback)(function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})},[])]}},94:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(75),i=n(95),c=(n.n(i),function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),s=function(e){var t=Object(r.useState)(),n=c(t,2),i=n[0],s=n[1],l=Object(r.useState)(),u=c(l,2),A=u[0],f=u[1],d=Object(r.useState)(!1),m=c(d,2),p=m[0],h=m[1],v=Object(r.useRef)();Object(r.useEffect)(function(){if(i){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(i)}},[i]);var b=function(t){var n=void 0,r=p;t.target.files&&1===t.target.files.length?(n=t.target.files[0],s(n),h(!0),r=!0):(h(!1),r=!1),e.onInput(e.id,n,r)},g=function(){v.current.click()};return o.a.createElement("div",{className:"form-control"},o.a.createElement("input",{id:e.id,ref:v,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:b}),o.a.createElement("div",{className:"image-upload "+(e.center&&"center")},o.a.createElement("div",{className:"image-upload__preview"},A&&o.a.createElement("img",{src:A,alt:"Preview"}),!A&&o.a.createElement("p",null,"Please pick an image.")),o.a.createElement(a.a,{type:"button",onClick:g},"PICK IMAGE")),!p&&o.a.createElement("p",null,e.errorText))};t.a=s},95:function(e,t,n){var r=n(96);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(69)(r,o);r.locals&&(e.exports=r.locals)},96:function(e,t,n){t=e.exports=n(68)(!0),t.push([e.i,".image-upload.center{-ms-flex-direction:column;flex-direction:column}.image-upload.center,.image-upload__preview{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.image-upload__preview{width:13rem;height:13rem;border:1px solid #ccc;text-align:center;margin-bottom:1rem}.image-upload__preview img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}","",{version:3,sources:["/Users/SHIVANI/frontend/src/shared/components/FormElements/ImageUpload.css"],names:[],mappings:"AAAA,qBAOE,0BAA2B,AACvB,qBAAuB,CAC5B,AAED,4CAVE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CAiBzB,AAZD,uBACE,YAAa,AACb,aAAc,AACd,sBAAuB,AAOvB,kBAAmB,AACnB,kBAAoB,CACrB,AAED,2BACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AAClB,gBAAkB,CACtB",file:"ImageUpload.css",sourcesContent:[".image-upload.center {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.image-upload__preview {\n  width: 13rem;\n  height: 13rem;\n  border: 1px solid #ccc;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.image-upload__preview img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=0.36abcf15.chunk.js.map