parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"1aSo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=D,exports.hydrate=T,exports.h=exports.createElement=s,exports.Fragment=a,exports.createRef=f,exports.Component=h,exports.cloneElement=A,exports.createContext=W,exports.toChildArray=g,exports.options=void 0;var e,t,n,l,r,o={},u=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function _(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n){var l,r,o,u,i=arguments;if(t=_({},t),arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(i[l]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===t[r]&&(t[r]=e.defaultProps[r]);return(o=t.ref)&&delete t.ref,(u=t.key)&&delete t.key,c(e,t,null,u,o)}function c(t,n,l,r,o){var u={type:t,props:n,text:l,key:r,ref:o,__k:null,__e:null,l:null,__c:null};return u._=u,e.vnode&&e.vnode(u),u}function f(){return{}}function a(){}function d(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return c(null,null,e,null,null);if(Array.isArray(e))return s(a,null,e);if(null!=e.__e||null!=e.__c){var t=c(e.type,e.props,e.text,e.key,null);return t.__e=e.__e,t}return e}function h(e,t){this.props=e,this.context=t}function y(l){!l.__d&&(l.__d=!0)&&1===t.push(l)&&(e.debounceRendering||n)(m)}function m(){var e;for(t.sort(function(e,t){return t.__b-e.__b});e=t.pop();)e.__d&&e.forceUpdate(!1)}function v(e,t,n,l,r,i,_,s,c){var f,h,y,m,v,x,k,b=t.__k||g(t.props.children,t.__k=[],d,!0),w=null!=n&&n.__k||u,P=w.length;if(c==o)if(c=null,null!=i)for(h=0;null==c&&h<i.length;h++)c=i[h];else for(h=0;null==c&&h<P;h++)c=w[h]&&w[h].__e,k=w[h];for(h=0;h<b.length;h++)if(null!=(f=b[h]=d(b[h]))){if(null===(m=w[h])||null!=m&&(null==f.key&&null==m.key?f.type===m.type:f.key===m.key))w[h]=void 0;else for(y=0;y<P;y++){if(null!=(m=w[y])&&(null==f.key&&null==m.key?f.type===m.type:f.key===m.key)){w[y]=void 0,P!==b.length&&m.type!==(k&&k.type)&&(c=m.__e);break}m=null}if(null!=(v=C(e,f,m,l,r,i,_,s,null,c))){if(null!=f.l)v=f.l;else if(i==m||v!=c||null==v.parentNode)e:if(null==c||c.parentNode!==e)e.appendChild(v);else{for(x=c,y=0;(x=x.nextSibling)&&y++<P/2;)if(x===v)break e;e.insertBefore(v,c)}c=v.nextSibling}}if(null!=i&&t.type!==a)for(h=i.length;h--;)null!=i[h]&&p(i[h]);for(h=P;h--;)null!=w[h]&&N(w[h],s)}function g(e,t,n,l){if(null==t&&(t=[]),null==e||"boolean"==typeof e)l&&t.push(null);else if(Array.isArray(e))for(var r=0;r<e.length;r++)g(e[r],t,n,l);else t.push(n?n(e):e);return t}function x(e,t,n,l){var r,o,u=Object.keys(t).sort();for(r=0;r<u.length;r++)"children"===u[r]||"key"===u[r]||n&&("value"===u[r]||"checked"===u[r]?e:n)[u[r]]===t[u[r]]||k(e,u[r],t[u[r]],n[u[r]],l);for(o in n)"children"===o||"key"===o||t&&o in t||k(e,o,null,n[o],l)}function k(e,t,n,r,o){var u,_,p,s,c,f;if("class"!==t&&"className"!==t||(t=o?"class":"className"),"style"===t)if(_=e.style,"string"==typeof n)_.cssText=n;else{if("string"==typeof r)_.cssText="";else for(p in r)null!=n&&p in n||_.setProperty(p.replace(l,"-"),"");for(s in n)u=n[s],null!=r&&u===r[s]||_.setProperty(s.replace(l,"-"),"number"==typeof u&&!1===i.test(s)?u+"px":u)}else{if("dangerouslySetInnerHTML"===t)return;"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),f=t.toLowerCase(),t=(f in self?f:t).substring(2),n?r||e.addEventListener(t,b,c):e.removeEventListener(t,b,c),(e.u||(e.u={}))[t]=n):"list"!==t&&"tagName"!==t&&!o&&t in e?e[t]=null==n?"":n:null==n||!1===n?t!==(t=t.replace(/^xlink:?/,""))?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof n&&(t!==(t=t.replace(/^xlink:?/,""))?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):e.setAttribute(t,n))}}function b(t){return this.u[t.type](e.event?e.event(t):t)}function C(t,n,l,r,u,i,p,s,c,f){var y,m,g,x,k,b,w,D,T,A,W,L,M,F;if(null==l||null==n||l.type!==n.type||l.key!==n.key){if(null!=l&&N(l,s),null==n)return null;l=o}if(n._!==n)return null;e.diff&&e.diff(n),g=!1,w=n.type;try{e:if(l.type===a||w===a){if(v(t,n,l,r,u,i,p,y,f),n.__k.length&&null!=n.__k[0])for(n.__e=n.__k[0].__e,T=n.__k.length;T--&&(n.l=(m=n.__k[T])&&(m.l||m.__e),!n.l););}else if("function"==typeof w){if(W=(A=w.contextType)&&r[A.__c],L=null!=A?W?W.props.value:A.__p:r,l.__c?(D=(y=n.__c=l.__c).__p=y.__E,n.__e=l.__e):(w.prototype&&w.prototype.render?n.__c=y=new w(n.props,L):(n.__c=y=new h(n.props,L),y.constructor=w,y.render=U),y.__a=s,W&&W.sub(y),y.props=n.props,y.state||(y.state={}),y.context=L,y.__n=r,g=y.__d=!0,y.__h=[]),y.__v=n,null==y.__s&&(y.__s=y.state),null!=w.getDerivedStateFromProps&&_(y.__s==y.state?y.__s=_({},y.__s):y.__s,w.getDerivedStateFromProps(n.props,y.__s)),g)null==w.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&p.push(y);else{if(null==w.getDerivedStateFromProps&&null==c&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(n.props,L),!c&&null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(n.props,y.__s,L)){y.props=n.props,y.state=y.__s,y.__d=!1,n.l=l.l;break e}null!=y.componentWillUpdate&&y.componentWillUpdate(n.props,y.__s,L)}for(x=y.props,k=y.state,y.context=L,y.props=n.props,y.state=y.__s,e.render&&e.render(n),M=y.__t||null,y.__d=!1,F=y.__t=d(y.render(y.props,y.state,y.context)),null!=y.getChildContext&&(r=_(_({},r),y.getChildContext())),g||null==y.getSnapshotBeforeUpdate||(b=y.getSnapshotBeforeUpdate(x,k)),y.__b=s?(s.__b||0)+1:0,y.base=n.__e=C(t,F,M,r,u,i,p,y,null,f),null!=F&&(n.l=F.l),y.__P=t,n.ref&&S(n.ref,y,s);m=y.__h.pop();)m.call(y);g||null==x||null==y.componentDidUpdate||y.componentDidUpdate(x,k,b)}else n.__e=P(l.__e,n,l,r,u,i,p,s),n.ref&&l.ref!==n.ref&&S(n.ref,n.__e,s);D&&(y.__E=y.__p=null),e.diffed&&e.diffed(n)}catch(e){E(e,s)}return n.__e}function w(t,n){for(var l;l=t.pop();)try{l.componentDidMount()}catch(e){E(e,l.__a)}e.commit&&e.commit(n)}function P(e,t,n,l,r,i,_,p){var s,c,f,a,d,h,y,m,g=e;if(r="svg"===t.type||r,null==e&&null!=i)for(s=0;s<i.length;s++)if(null!=(c=i[s])&&(null===t.type?3===c.nodeType:c.localName===t.type)){e=c,i[s]=null;break}if(null==e&&(e=null===t.type?document.createTextNode(t.text):r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=null),null===t.type)null!=g&&e!==g||t.text===n.text||(e.data=t.text);else if(null!=i&&null!=e.childNodes&&(i=u.slice.call(e.childNodes)),t!==n){if(a=t.props,null==(f=n.props)&&(f={},null!=i))for(h=0;h<e.attributes.length;h++)f["class"==(d=e.attributes[h].name)&&a.className?"className":d]=e.attributes[h].value;y=f.dangerouslySetInnerHTML,((m=a.dangerouslySetInnerHTML)||y)&&(m&&y&&m.__html==y.__html||(e.innerHTML=m&&m.__html||"")),a.multiple&&(e.multiple=a.multiple),v(e,t,n,l,"foreignObject"!==t.type&&r,i,_,p,o),x(e,a,f,r)}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){E(e,n)}}function N(t,n,l){var r,o,u;if(e.unmount&&e.unmount(t),(r=t.ref)&&S(r,null,n),l||null!=t.l||(l=null!=(o=t.__e)),t.__e=t.l=null,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){E(e,n)}r.base=r.__P=null,(r=r.__t)&&N(r,n,l)}else if(r=t.__k)for(u=0;u<r.length;u++)r[u]&&N(r[u],n,l);null!=o&&p(o)}function U(e,t,n){return this.constructor(e,n)}function E(e,t){for(;t;t=t.__a)if(!t.__p)try{if(null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(e));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(e)}return y(t.__E=t)}catch(t){e=t}throw e}function D(t,n,l){var r,i;e.root&&e.root(t,n),r=n.__t,t=s(a,null,[t]),i=[],v(n,l?t:n.__t=t,l?void 0:r,o,void 0!==n.ownerSVGElement,l?[l]:r?null:u.slice.call(n.childNodes),i,t,l||o),w(i,t)}function T(e,t){t.__t=null,D(e,t)}function A(e,t){return t=_(_({},e.props),t),arguments.length>2&&(t.children=u.slice.call(arguments,2)),c(e.type,t,null,t.key||e.key,t.ref||e.ref)}function W(e){var t,n={__c:"__cC"+r++,__p:e};function l(e,t){return e.children(t)}return l.contextType=n,n.Consumer=l,t={},n.Provider=function(e){var l,r;return this.getChildContext||(r=[],(l=this).getChildContext=function(){return t[n.__c]=l,t},l.shouldComponentUpdate=function(e){r.map(function(t){t.__P&&(t.context=e.value,y(t))})},l.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t()}}),e.children},n}exports.options=e,exports.options=e={},h.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=_({},this.state));("function"!=typeof e||(e=e(n,this.props)))&&_(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},h.prototype.forceUpdate=function(e){var t,n=this.__v,l=this.__v.__e,r=this.__P;r&&(null!=(l=C(r,n,n,this.__n,void 0!==r.ownerSVGElement,null,t=[],this.__a,!1!==e,l))&&l.parentNode!==r&&r.appendChild(l),w(t,n)),e&&e()},h.prototype.render=a,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=/-?(?=[A-Z])/g,r=0;
},{}],"Mw+g":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useState=f,exports.useReducer=s,exports.useEffect=a,exports.useLayoutEffect=_,exports.useRef=p,exports.useImperativeHandle=v,exports.useMemo=l,exports.useCallback=m,exports.useContext=d,exports.useDebugValue=x;var n,t,o=require("preact"),u=[],e=o.options.render;o.options.render=function(o){e&&e(o),n=0,(t=o.__c).__H&&(t.__H.t=E(t.__H.t))};var r=o.options.diffed;o.options.diffed=function(n){r&&r(n);var t=n.__c;if(t){var o=t.__H;o&&(o.u=E(o.u))}};var i=o.options.unmount;function c(n){o.options.hook&&o.options.hook(t);var u=t.__H||(t.__H={i:[],t:[],u:[]});return n>=u.i.length&&u.i.push({}),u.i[n]}function f(n){return s(k,n)}function s(o,u,e){var r=c(n++);return null==r.__c&&(r.__c=t,r.o=[null==e?k(null,u):e(u),function(n){var t=o(r.o[0],n);r.o[0]!==t&&(r.o[0]=t,r.__c.setState({}))}]),r.o}function a(o,u){var e=c(n++);q(e.v,u)&&(e.o=o,e.v=u,t.__H.t.push(e),H(t))}function _(o,u){var e=c(n++);q(e.v,u)&&(e.o=o,e.v=u,t.__H.u.push(e))}function p(t){var o=c(n++);return null==o.o&&(o.o={current:t}),o.o}function v(t,o,u){var e=c(n++);q(e.v,u)&&(e.v=u,t.current=o())}function l(t,o){var u=c(n++);return q(u.v,o)?(u.v=o,u.l=t,u.o=t()):u.o}function m(n,t){return l(function(){return n},t)}function d(o){var u=t.context[o.__c];if(null==u)return o.__p;var e=c(n++);return null==e.o&&(e.o=!0,u.sub(t)),u.props.value}function x(n,t){o.options.useDebugValue&&o.options.useDebugValue(t?t(n):n)}o.options.unmount=function(n){i&&i(n);var t=n.__c;if(t){var o=t.__H;o&&o.i.forEach(function(n){return n.p&&n.p()})}};var H=function(){};function h(){u.forEach(function(n){n.m=!1,n.__P&&(n.__H.t=E(n.__H.t))}),u=[]}function b(){setTimeout(h,0)}function E(n){return n.forEach(y),n.forEach(g),[]}function y(n){n.p&&n.p()}function g(n){var t=n.o();"function"==typeof t&&(n.p=t)}function q(n,t){return null==n||t.some(function(t,o){return t!==n[o]})}function k(n,t){return"function"==typeof t?t(n):t}"undefined"!=typeof window&&(H=function(n){!n.m&&(n.m=!0)&&1===u.push(n)&&(o.options.requestAnimationFrame?o.options.requestAnimationFrame(h):requestAnimationFrame(b))});
},{"preact":"1aSo"}],"DOAq":[function(require,module,exports) {

},{}],"vvYI":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0}),exports.TimeoutError=exports.HTTPError=exports.default=void 0;const e=e=>"undefined"!=typeof self&&self&&e in self?self[e]:"undefined"!=typeof window&&window&&e in window?window[e]:void 0!==t&&t&&e in t?t[e]:"undefined"!=typeof globalThis&&globalThis?globalThis[e]:void 0,o=e("document"),r=e("Headers"),s=e("Response"),n=e("ReadableStream"),i=e("fetch"),a=e("AbortController"),h=e("FormData"),p=t=>null!==t&&"object"==typeof t,c="function"==typeof a,u="function"==typeof n,f="function"==typeof h,l=(...t)=>{let e={};for(const o of t)if(Array.isArray(o))Array.isArray(e)||(e=[]),e=[...e,...o];else if(p(o))for(let[t,r]of Object.entries(o))p(r)&&Reflect.has(e,t)&&(r=l(e[t],r)),e={...e,[t]:r};return e},d=["get","post","put","patch","head","delete"],w={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},y=new Set(["get","put","head","delete","options","trace"]),_=new Set([408,413,429,500,502,503,504]),m=new Set([413,429,503]);class b extends Error{constructor(t){super(t.statusText),this.name="HTTPError",this.response=t}}exports.HTTPError=b;class g extends Error{constructor(){super("Request timed out"),this.name="TimeoutError"}}exports.TimeoutError=g;const T=t=>new Promise((e,o)=>{t>2147483647?o(new RangeError("The `timeout` option cannot be greater than 2147483647")):setTimeout(e,t)}),x=(t,e,o)=>new Promise((r,s)=>{t.then(r).catch(s),T(e).then(()=>{c&&o.abort(),s(new g)}).catch(s)}),E=t=>d.includes(t)?t.toUpperCase():t;class R{constructor(t,{timeout:e=1e4,hooks:n,throwHttpErrors:i=!0,searchParams:p,json:d,..._}){if(this._retryCount=0,this._options={method:"get",credentials:"same-origin",retry:2,..._},c&&(this.abortController=new a,this._options.signal&&this._options.signal.addEventListener("abort",()=>{this.abortController.abort()}),this._options.signal=this.abortController.signal),this._options.method=E(this._options.method),this._options.prefixUrl=String(this._options.prefixUrl||""),this._input=String(t||""),this._options.prefixUrl&&this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");if(this._options.prefixUrl&&!this._options.prefixUrl.endsWith("/")&&(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input,p){const t=new URL(this._input,o&&o.baseURI);if("string"==typeof p||URLSearchParams&&p instanceof URLSearchParams)t.search=p;else{if(!Object.values(p).every(t=>"number"==typeof t||"string"==typeof t))throw new Error("The `searchParams` option must be either a string, `URLSearchParams` instance or an object with string and number values");t.search=new URLSearchParams(p).toString()}this._input=t.toString()}this._timeout=e,this._hooks=l({beforeRequest:[],afterResponse:[]},n),this._throwHttpErrors=i;const m=new r(this._options.headers||{});if((f&&this._options.body instanceof h||this._options.body instanceof URLSearchParams)&&m.has("content-type"))throw new Error(`The \`content-type\` header cannot be used with a ${this._options.body.constructor.name} body. It will be set automatically.`);if(d){if(this._options.body)throw new Error("The `json` option cannot be used with the `body` option");m.set("content-type","application/json"),this._options.body=JSON.stringify(d)}this._options.headers=m;const g=async()=>{await T(1);let t=await this._fetch();for(const e of this._hooks.afterResponse){const o=await e(t.clone());o instanceof s&&(t=o)}if(!t.ok&&this._throwHttpErrors)throw new b(t);if(this._options.onDownloadProgress){if("function"!=typeof this._options.onDownloadProgress)throw new TypeError("The `onDownloadProgress` option must be a function");if(!u)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return this._stream(t.clone(),this._options.onDownloadProgress)}return t},x=y.has(this._options.method.toLowerCase())?this._retry(g):g();for(const[o,r]of Object.entries(w))x[o]=(async()=>(m.set("accept",r),(await x).clone()[o]()));return x}_calculateRetryDelay(t){if(this._retryCount++,this._retryCount<this._options.retry&&!(t instanceof g)){if(t instanceof b){if(!_.has(t.response.status))return 0;const e=t.response.headers.get("Retry-After");if(e&&m.has(t.response.status)){let t=Number(e);return Number.isNaN(t)?t=Date.parse(e)-Date.now():t*=1e3,t}if(413===t.response.status)return 0}return.3*2**(this._retryCount-1)*1e3}return 0}async _retry(t){try{return await t()}catch(e){const o=this._calculateRetryDelay(e);if(0!==o&&this._retryCount>0)return await T(o),this._retry(t);if(this._throwHttpErrors)throw e}}async _fetch(){for(const t of this._hooks.beforeRequest)await t(this._options);return!1===this._timeout?i(this._input,this._options):x(i(this._input,this._options),this._timeout,this.abortController)}_stream(t,e){const o=Number(t.headers.get("content-length"))||0;let r=0;return new s(new n({start(s){const n=t.body.getReader();e&&e({percent:0,transferredBytes:0,totalBytes:o},new Uint8Array),async function t(){const{done:i,value:a}=await n.read();i?s.close():(e&&(r+=a.byteLength,e({percent:0===o?0:r/o,transferredBytes:r,totalBytes:o},a)),s.enqueue(a),t())}()}}))}}const P=(...t)=>{for(const e of t)if((!p(e)||Array.isArray(e))&&void 0!==e)throw new TypeError("The `options` argument must be an object");return l({},...t)},U=t=>{const e=(e,o)=>new R(e,P(t,o));for(const o of d)e[o]=((e,r)=>new R(e,P(t,r,{method:o})));return e.create=(t=>U(P(t))),e.extend=(e=>U(P(t,e))),e};var S=U();exports.default=S;
},{}],"8IfV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("preact"),t=require("preact/hooks"),n=r(require("ky"));function r(e){return e&&e.__esModule?e:{default:e}}const a="https://cors.louismerl.in";function o({name:r}){const[o,l]=(0,t.useState)("loading");(0,t.useEffect)(()=>{!async function(){const e=await n.default.get(`${a}/https://ewa.epfl.ch/room/Default.aspx?room=${r}`).text(),t=JSON.parse(e.split("\n").find(e=>e.includes("v.events")).replace("v.events = ","").replace(/;/g,"").replace(/<br>/g,"").replace(/ISA - /g,"").replace(/\\/g,"")),o=t.find(({Start:e,End:t})=>{const n=new Date,r=new Date(e),a=new Date(t);return n>r&&n<a}),s=t.find(({Start:e,End:t})=>{const n=new Date(Date.now()+27e5),r=new Date(Date.now()+36e5),a=new Date(e),o=new Date(t);return n>a&&r<o||r>a&&r<o});l(o?o.Text:s&&"occupied soon")}()},[]);let s="👍 ";return"loading"===o?s="🔄":"occupied soon"===o?s="⏳":o&&(s="⛔"),(0,e.h)("tr",null,(0,e.h)("td",null,s),(0,e.h)("td",null,(0,e.h)("strong",null," ",r.toUpperCase())),(0,e.h)("td",{class:"text-right fullwidth"},o))}var l=o;exports.default=l;
},{"preact":"1aSo","preact/hooks":"Mw+g","ky":"vvYI"}],"ExWE":[function(require,module,exports) {
module.exports={in:["inm10","inm11","inm200","inm201","inm202","inm203","inr113","inf211","inf213"],bc:["bc01","bc02","bc03","bc04","bc05","bc06"]};
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("preact"),s=require("preact/hooks");require("normalize.css"),require("concrete.css");var r=a(require("./Room"));require("./main.css");var t=a(require("./rooms.json"));function a(e){return e&&e.__esModule?e:{default:e}}const l=Object.keys(t.default);function h(){const[a,h]=(0,s.useState)("all");return(0,e.h)("main",{class:"container"},(0,e.h)("header",null,(0,e.h)("h1",{class:"less-margin title"},"rEPFL"),(0,e.h)("h3",{class:"less-margin"},"find a free room @ EPFL")),(0,e.h)("p",{class:"button-list"},["all"].concat(l).map(s=>(0,e.h)(e.Fragment,null,(0,e.h)("button",{onClick:()=>h(s),class:a===s?"filled":""},s.toUpperCase())," "))),l.map(s=>(0,e.h)("div",{className:"all"!==a&&a!==s&&"hidden"},(0,e.h)("h2",{class:"text-center table-h2"},s.toUpperCase()),(0,e.h)("hr",{class:"table-hr"}),(0,e.h)("table",null,(0,e.h)("tbody",null,t.default[s].map(s=>(0,e.h)(r.default,{key:s,name:s})))))),(0,e.h)("footer",null,(0,e.h)("h5",{class:"less-margin"},"made with ","<3"," by ",(0,e.h)("a",{href:"https://louismerl.in"},"Louis Merlin")),(0,e.h)("h5",{class:"less-margin"},"using ",(0,e.h)("a",{href:"https://preactjs.com"},"preact")," and ",(0,e.h)("a",{href:"https://concrete.style"},"concrete.css")),(0,e.h)("h5",{class:"less-margin"},"need more rooms ? ",(0,e.h)("a",{href:"https://github.com/louismerlin/repfl/blob/master/src/rooms.json"},"add them")," or ",(0,e.h)("a",{href:"mailto:louis.merlin@epfl.ch"},"email me")),(0,e.h)("h5",{class:"less-margin"},"don't hesitate to ",(0,e.h)("a",{href:"https://github.com/louismerlin/repfl"},"star and/or contribute"))))}(0,e.render)((0,e.h)(h,null),document.body);
},{"preact":"1aSo","preact/hooks":"Mw+g","normalize.css":"DOAq","concrete.css":"DOAq","./Room":"8IfV","./main.css":"DOAq","./rooms.json":"ExWE"}]},{},["Focm"], null)
//# sourceMappingURL=src.cf54b107.js.map