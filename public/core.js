!function(e){function t(t){for(var n,o,i=t[0],a=t[1],u=0,s=[];u<i.length;u++)o=i[u],r[o]&&s.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);s.length;)s.shift()()}var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=i);var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=12e4,o.nc&&u.setAttribute("nonce",o.nc),u.src=o.p+""+{0:"035f422cb8ad852acf9a",1:"8f41918d6aa37c326ca2"}[e]+".fragment.js";var c=setTimeout(function(){s({type:"timeout",target:u})},12e4);function s(t){u.onerror=u.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}}u.onerror=u.onload=s,a.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=a;o(o.s=15)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={"/":function(){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=n(16);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})}};t.fragments=r},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__templateInitialized=!1,e.attachShadow({mode:"open"}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),r(t,null,[{key:"is",get:function(){return"template-container-lite"}}]),r(t,[{key:"connectedCallback",value:function(){this.__templateInitialized||this.shadowRoot.appendChild(document.createElement("slot")),this.__templateInitialized=!0}},{key:"setContent",value:function(e){for(;this.firstChild;)this.removeChild(this.firstChild);this.appendChild(e)}}]),t}();window.customElements.get(o.is)?console.warn(o.is+" is already defined somewhere. Please check your code."):window.customElements.define(o.is,o)},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__data={},e.__templateInitialized=!1,e.attachShadow({mode:"open"}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),r(t,null,[{key:"is",get:function(){return"template-viewer-lite"}}]),r(t,[{key:"connectedCallback",value:function(){this.__templateInitialized||this.shadowRoot.appendChild(document.createElement("slot")),this.__templateInitialized=!0,this._templateChanged(this.template||this.getAttribute("template"))}},{key:"_closeTemplate",value:function(e){var t=this,n=this.querySelector("template-container-lite[active]");n?(n.setAttribute("closing",""),setTimeout(function(){t.removeChild(n),t._openTemplate(e)},200)):this._openTemplate(e)}},{key:"_openTemplate",value:function(e){var t=document.createElement("template-container-lite");t.setAttribute("active",""),t.setContent(e),this.appendChild(t)}},{key:"_templateChanged",value:function(e){if(e){var t=document.importNode(e.content,!0);this._closeTemplate(t)}}},{key:"template",set:function(e){this.__data.template=e,this.__templateInitialized&&this._templateChanged(e)},get:function(){return this.__data.template}}]),t}();window.customElements.get(o.is)?console.warn(o.is+" is already defined somewhere. Please check your code."):window.customElements.define(o.is,o)},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__data={},e.__patternInitialized=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),r(t,null,[{key:"is",get:function(){return"template-loader-lite"}},{key:"observedAttributes",get:function(){return["pattern","fallback-pattern"]}}]),r(t,[{key:"connectedCallback",value:function(){this.fallbackPattern||(this.fallbackPattern="no-page"),this.hasAttribute("fallback-pattern")&&(this.__data.fallbackPattern=this.getAttribute("fallback-pattern")),this.__patternInitialized=!0,this.pattern&&this._patternChanged(this.pattern)}},{key:"_patternChanged",value:function(e){var t=this,n=this.querySelector('template[pattern="'+e+'"]');n?(this.template=n,Promise.resolve().then(function(){t.dispatchEvent(new window.CustomEvent("template-change",{detail:t.template}))})):console.warn("There's no template available for pattern: ",e)}},{key:"attributeChangedCallback",value:function(e,t,n){"fallback-pattern"===e&&this.__data.fallbackPattern!==n&&(this.__data.fallbackPattern=n),"pattern"===e&&this.__data.pattern!==n&&(this.__data.pattern=n)}},{key:"pattern",set:function(e){console.log(e),this.__data.pattern=e,this.__patternInitialized&&this._patternChanged(e)},get:function(){return this.__data.pattern}},{key:"fallbackPattern",set:function(e){this.__data.fallbackPattern=e,this.setAttribute("fallback-pattern",e)},get:function(){return this.__data.fallbackPattern}}]),t}();window.customElements.get(o.is)?console.warn(o.is+" is already defined somewhere. Please check your code."):window.customElements.define(o.is,o)},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),r(t,[{key:"route",set:function(e){this.setAttribute("route",e)},get:function(){return this.getAttribute("route")}}],[{key:"is",get:function(){return"route-data-lite"}}]),t}();window.customElements.get(o.is)?console.warn(o.is+" is already defined somewhere. Please check your code."):window.customElements.define(o.is,o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="/",i="./",a=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function u(e,t){for(var n,r=[],u=0,c=0,h="",d=t&&t.delimiter||o,f=t&&t.delimiters||i,p=!1;null!==(n=a.exec(e));){var y=n[0],_=n[1],v=n.index;if(h+=e.slice(c,v),c=v+y.length,_)h+=_[1],p=!0;else{var w="",m=e[c],b=n[2],g=n[3],E=n[4],k=n[5];if(!p&&h.length){var C=h.length-1;f.indexOf(h[C])>-1&&(w=h[C],h=h.slice(0,C))}h&&(r.push(h),h="",p=!1);var O=""!==w&&void 0!==m&&m!==w,j="+"===k||"*"===k,P="?"===k||"*"===k,R=w||d,x=g||E;r.push({name:b||u++,prefix:w,delimiter:R,optional:P,repeat:j,partial:O,pattern:x?l(x):"[^"+s(R)+"]+?"})}}return(h||c<e.length)&&r.push(h+e.substr(c)),r}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"===r(e[n])&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var c,s=n?n[u.name]:void 0;if(Array.isArray(s)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===s.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<s.length;l++){if(c=i(s[l],u),!t[a].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(0===l?u.prefix:u.delimiter)+c}}else if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(o+=u.prefix)}else{if(c=i(String(s),u),!t[a].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$/()])/g,"\\$1")}function h(e){return e&&e.sensitive?"":"i"}function d(e,t,n){for(var r=(n=n||{}).strict,a=!1!==n.end,u=s(n.delimiter||o),c=n.delimiters||i,l=[].concat(n.endsWith||[]).map(s).concat("$").join("|"),d="",f=!1,p=0;p<e.length;p++){var y=e[p];if("string"==typeof y)d+=s(y),f=p===e.length-1&&c.indexOf(y[y.length-1])>-1;else{var _=s(y.prefix),v=y.repeat?"(?:"+y.pattern+")(?:"+_+"(?:"+y.pattern+"))*":y.pattern;t&&t.push(y),y.optional?y.partial?d+=_+"("+v+")?":d+="(?:"+_+"("+v+"))?":d+=_+"("+v+")"}}return a?(r||(d+="(?:"+u+")?"),d+="$"===l?"$":"(?="+l+")"):(r||(d+="(?:"+u+"(?="+l+"))?"),f||(d+="(?="+u+"|"+l+")")),new RegExp("^"+d,h(n))}function f(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(f(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",h(n))}(e,t,n):function(e,t,n){return d(u(e,n),t,n)}(e,t,n)}t.default=f,t.parse=u,t.compile=function(e,t){return c(u(e,t))},t.tokensToFunction=c,t.tokensToRegExp=d},function(e,t,n){"use strict";var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),a=(r=i)&&r.__esModule?r:{default:r};var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__data={},e.__routeInitialized=!1,e._boundChildrenChanged=e._childrenChanged.bind(e),e.routes=[],e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),o(t,null,[{key:"is",get:function(){return"router-lite"}},{key:"observedAttributes",get:function(){return["fallback-route"]}}]),o(t,[{key:"connectedCallback",value:function(){if(this.fallbackRoute||(this.fallbackRoute="no-page"),this.children){var e=!0,t=!1,n=void 0;try{for(var r,o=Array.from(this.children)[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value;this._getRoute(i)}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}}this._observer=new window.MutationObserver(this._boundChildrenChanged),this._observer.observe(this,{childList:!0}),this.hasAttribute("fallback-route")&&(this.__data.fallbackRoute=this.getAttribute("fallback-route")),this.__routeInitialized=!0,this._pathChanged(this.path)}},{key:"disconnectedCallback",value:function(){this._observer&&this._observer.disconnect()}},{key:"_childrenChanged",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if("childList"===a.type&&a.addedNodes){var u=!0,c=!1,s=void 0;try{for(var l,h=Array.from(a.addedNodes)[Symbol.iterator]();!(u=(l=h.next()).done);u=!0){var d=l.value;this._getRoute(d)}}catch(e){c=!0,s=e}finally{try{!u&&h.return&&h.return()}finally{if(c)throw s}}}}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}},{key:"_getRoute",value:function(e){"route-data-lite"===e.nodeName.toLowerCase()?e.route&&"string"==typeof e.route&&e.route.trim()?this.routes.push(e.route):e.hasAttribute("route")&&"string"==typeof e.getAttribute("route")&&e.getAttribute("route").trim()?this.routes.push(e.getAttribute("route")):console.warn("There's no route information found in route-data ",e):console.warn("Only route-data-lite is allowed",e)}},{key:"_pathChanged",value:function(e){if(e){var t=null,n=[],r=!0,o=!1,i=void 0;try{for(var u,c=this.routes[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=u.value;if(n=[],t=(0,a.default)(s,n).exec(e))return this._routeMatched(s,t,n)}}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return this._routeMatched(this.fallbackRoute,[],[])}}},{key:"_routeMatched",value:function(e,t,n){for(var r=this,o={},i=0,a=n.length;i<a;i++){o[n[i].name]=t[i+1]||null}this.routeParamObject=o,this.currentRoute=e,Promise.resolve().then(function(){r.dispatchEvent(new window.CustomEvent("route-param-object-change",{detail:r.routeParamObject})),r.dispatchEvent(new window.CustomEvent("current-route-change",{detail:r.currentRoute}))})}},{key:"attributeChangedCallback",value:function(e,t,n){"fallback-route"===e&&this.__data.fallbackRoute!==n&&(this.__data.fallbackRoute=n)}},{key:"currentRoute",set:function(e){this.__data.currentRoute=e,this.setAttribute("current-route",e)},get:function(){return this.__data.currentRoute}},{key:"fallbackRoute",set:function(e){this.__data.fallbackRoute=e,this.setAttribute("fallback-route",e)},get:function(){return this.__data.fallbackRoute}},{key:"path",set:function(e){this.__data.path=e,this.__routeInitialized&&this._pathChanged(e)},get:function(){return this.__data.path}}]),t}();window.customElements.get(u.is)?console.warn(u.is+" is already defined somewhere. Please check your code."):window.customElements.define(u.is,u)},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__data={},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),r(t,null,[{key:"is",get:function(){return"query-lite"}}]),r(t,[{key:"connectedCallback",value:function(){this.queryObject={},this._dontReact=!1}},{key:"_queryChanged",value:function(e){var t=this;this._dontReactQuery||(this._dontReact=!0,this.queryObject=this.decodeParams(e),Promise.resolve().then(function(){t.dispatchEvent(new window.CustomEvent("query-object-change",{detail:t.queryObject}))}),this._dontReact=!1)}},{key:"_queryObjectChanged",value:function(e){var t=this;this._dontReact||(this._dontReactQuery=!0,this.query=this.encodeParams(e).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27"),Promise.resolve().then(function(){t.dispatchEvent(new window.CustomEvent("query-change",{detail:t.query}))}),this._dontReactQuery=!1)}},{key:"encodeParams",value:function(e){var t=[];for(var n in e){var r=e[n];""===r?t.push(encodeURIComponent(n)):r&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(r.toString()))}return t.join("&")}},{key:"decodeParams",value:function(e){for(var t={},n=(e=(e||"").replace(/\+/g,"%20")).split("&"),r=0;r<n.length;r++){var o=n[r].split("=");o[0]&&(t[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||""))}return t}},{key:"query",set:function(e){this.__data.query=e,this._queryChanged(e)},get:function(){return this.__data.query}},{key:"queryObject",set:function(e){this.__data.queryObject=e,this._queryObjectChanged(e)},get:function(){return this.__data.queryObject}}]),t}();window.customElements.get(o.is)?console.warn(o.is+" is already defined somewhere. Please check your code."):window.customElements.define(o.is,o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=void 0,o=void 0,i=void 0,a=void 0;t.resolveUrl=function(e,t){if(void 0===r){r=!1;try{var n=new window.URL("b","http://a");n.pathname="c%20d",r=(r="http://a/c%20d"===n.href)&&"http://www.google.com/?foo%20bar"===new window.URL("http://www.google.com/?foo bar").href}catch(e){console.error(e)}}return r?new window.URL(e,t):(o||(o=document.implementation.createHTMLDocument("url"),i=o.createElement("base"),o.head.appendChild(i),a=o.createElement("a")),i.href=t,a.href=e.replace(/ /g,"%20"),a)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LocationLite=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(8);var i=t.LocationLite=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__data={},e.__dataInvalid=!1,e._boundHashChanged=e._hashChanged.bind(e),e._boundUrlChanged=e._urlChanged.bind(e),e._boundGlobalOnClick=e._globalOnClick.bind(e),e._urlSpaceRegExp=null,e.dwellTime=2e3,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),r(t,null,[{key:"is",get:function(){return"location-lite"}}]),r(t,[{key:"connectedCallback",value:function(){window.addEventListener("hashchange",this._boundHashChanged),window.addEventListener("location-change",this._boundUrlChanged),window.addEventListener("popstate",this._boundUrlChanged),document.body.addEventListener("click",this._boundGlobalOnClick,!0),window.performance&&(this._lastChangedAt=window.performance.now()-(this.dwellTime-200)),this._initialized=!0,this._urlChanged()}},{key:"disconnectedCallback",value:function(){window.removeEventListener("hashchange",this._boundHashChanged),window.removeEventListener("location-change",this._boundUrlChanged),window.removeEventListener("popstate",this._boundUrlChanged),document.body.removeEventListener("click",this._boundGlobalOnClick),this._initialized=!1}},{key:"_invalidateProperties",value:function(){var e=this;this.__dataInvalid||(this.__dataInvalid=!0,Promise.resolve().then(function(){e.__dataInvalid&&(e.__dataInvalid=!1,e._updateUrl())}))}},{key:"_hashChanged",value:function(){var e=this;this.hash=window.decodeURIComponent(window.location.hash.slice(1)),Promise.resolve().then(function(){e.dispatchEvent(new window.CustomEvent("hash-change",{detail:e.hash}))})}},{key:"_urlChanged",value:function(){var e=this;this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(window.location.pathname),this.query=window.location.search.slice(1),Promise.resolve().then(function(){e.dispatchEvent(new window.CustomEvent("path-change",{detail:e.path})),e.dispatchEvent(new window.CustomEvent("query-change",{detail:e.query}))}),this._dontUpdateUrl=!1}},{key:"_getUrl",value:function(){var e=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),t="";this.query&&(t="?"+this.query.replace(/\#/g,"%23"));var n="";return this.hash&&(n="#"+window.encodeURI(this.hash)),e+t+n}},{key:"_updateUrl",value:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(window.location.pathname)||this.query!==window.location.search.substring(1)||this.hash!==window.decodeURIComponent(window.location.hash.substring(1)))){var e=this._getUrl(),t=(0,o.resolveUrl)(e,window.location.protocol+"//"+window.location.host).href,n=window.performance?window.performance.now():null,r=this._lastChangedAt+this.dwellTime>n;this._lastChangedAt=n,r?window.history.replaceState({},"",t):window.history.pushState({},"",t),window.dispatchEvent(new window.CustomEvent("location-change"))}}},{key:"_globalOnClick",value:function(e){if(!e.defaultPrevented){var t=this._getSameOriginLinkHref(e);t&&(e.preventDefault(),t!==window.location.href&&(window.history.pushState({},"",t),window.dispatchEvent(new window.CustomEvent("location-change"))))}}},{key:"_getSameOriginLinkHref",value:function(e){if(0!==e.button)return null;if(e.metaKey||e.ctrlKey)return null;for(var t=e.composedPath(),n=null,r=0;r<t.length;r++){var i=t[r];if("A"===i.tagName&&i.href){n=i;break}}if(!n)return null;if("_blank"===n.target)return n.href&&window.ga&&window.ga("send","event","Link","Click",n.href,1),null;if(("_top"===n.target||"_parent"===n.target)&&window.top!==window)return null;var a=n.href,u=void 0;u=null!=document.baseURI?(0,o.resolveUrl)(a,document.baseURI):(0,o.resolveUrl)(a);var c=void 0;c=window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.host;if((u.origin?u.origin:u.protocol+"//"+u.host)!==c)return null;var s=u.pathname+u.search+u.hash;return"/"!==s[0]&&(s="/"+s),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(s)?null:(0,o.resolveUrl)(s,window.location.href).href}},{key:"urlSpaceRegex",set:function(e){this.__data.urlSpaceRegex=e,this._urlSpaceRegExp=RegExp(e)},get:function(){return this.__data.urlSpaceRegex}},{key:"path",set:function(e){this.__data.path!==e&&(this.__data.path=e,this._invalidateProperties())},get:function(){return this.__data.path}},{key:"query",set:function(e){this.__data.query!==e&&(this.__data.query=e,this._invalidateProperties())},get:function(){return this.__data.query}},{key:"hash",set:function(e){this.__data.hash!==e&&(this.__data.hash=e,this._invalidateProperties())},get:function(){return this.__data.hash}}]),t}();window.customElements.get(i.is)?console.warn(i.is+" is already defined somewhere. Please check your code."):window.customElements.define(i.is,i)},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(9),n(7),n(6),n(4),n(3),n(2),n(1);var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.__initialized=!1,e._location=document.createElement("location-lite"),e._query=document.createElement("query-lite"),e._viewer=document.createElement("template-viewer-lite"),e._router=null,e._loader=null,e._boundPathChanged=e._pathChanged.bind(e),e._boundQueryChanged=e._queryChanged.bind(e),e._boundHashChanged=e._hashChanged.bind(e),e._boundQueryObjectChanged=e._queryObjectChanged.bind(e),e._boundRouterParamObjectChanged=e._routerParamObjectChanged.bind(e),e._boundCurrentRouteChanged=e._currentRouteChanged.bind(e),e._boundTemplateChanged=e._templateChanged.bind(e),e.attachShadow({mode:"open"}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,window.HTMLElement),r(t,null,[{key:"is",get:function(){return"core-lite"}}]),r(t,[{key:"connectedCallback",value:function(){this.__initialized||(this._router=this.querySelector("router-lite"),this._loader=this.querySelector("template-loader-lite"),this._router||(this._router=document.createElement("router-lite"),this.appendChild(this._router)),this._loader||(this._loader=document.createElement("template-loader-lite"),this.appendChild(this._loader)),this._location&&(this._location.addEventListener("path-change",this._boundPathChanged),this._location.addEventListener("query-change",this._boundQueryChanged),this._location.addEventListener("hash-change",this._boundHashChanged),this.shadowRoot.appendChild(this._location)),this._query&&(this._query.addEventListener("query-change",this._boundQueryChanged),this._query.addEventListener("query-object-change",this._boundQueryObjectChanged),this.shadowRoot.appendChild(this._query)),this._router&&(this._router.addEventListener("router-param-object-change",this._boundRouterParamObjectChanged),this._router.addEventListener("current-route-change",this._boundCurrentRouteChanged)),this._loader&&this._loader.addEventListener("template-change",this._boundTemplateChanged),this._viewer&&this.shadowRoot.appendChild(this._viewer),this.shadowRoot.appendChild(document.createElement("slot"))),this.__initialized=this._location&&this._query&&this._router&&this._loader&&this._viewer&&!0}},{key:"disconnectedCallback",value:function(){this._location&&(this._location.removeEventListener("path-change",this._boundPathChanged),this._location.removeEventListener("query-change",this._boundQueryChanged),this._location.removeEventListener("hash-change",this._boundHashChanged)),this._query&&(this._query.removeEventListener("query-change",this._boundQueryChanged),this._query.removeEventListener("query-object-change",this._boundQueryObjectChanged)),this._router&&(this._router.removeEventListener("router-param-object-change",this._boundRouterParamObjectChanged),this._router.removeEventListener("current-route-change",this._boundCurrentRouteChanged)),this._loader&&this._loader.removeEventListener("template-change",this._boundTemplateChanged)}},{key:"_pathChanged",value:function(e){if(this.__initialized){var t=e.detail;this._router.path=t,e.preventDefault(),e.stopPropagation(),this.path=t,this._dispatchEvent("path",this.path)}else console.warn("core-lite is not initialized")}},{key:"_queryChanged",value:function(e){if(this.__initialized){var t=e.detail;this._query.query!==t&&(this._query.query=t),this._location.query!==t&&(this._location.query=t),e.preventDefault(),e.stopPropagation(),this.query=t,this._dispatchEvent("query",this.query)}else console.warn("core-lite is not initialized")}},{key:"_hashChanged",value:function(e){if(this.__initialized){var t=e.detail;e.preventDefault(),e.stopPropagation(),this.hash=t,this._dispatchEvent("hash",this.hash)}else console.warn("core-lite is not initialized")}},{key:"_queryObjectChanged",value:function(e){if(this.__initialized){var t=e.detail;e.preventDefault(),e.stopPropagation(),this.queryObject=t,this._dispatchEvent("query-object",this.queryObject)}else console.warn("core-lite is not initialized")}},{key:"_routerParamObjectChanged",value:function(e){if(this.__initialized){var t=e.detail;e.preventDefault(),e.stopPropagation(),this.routerParamObject=t,this._dispatchEvent("router-param-object",this.routerParamObject)}else console.warn("core-lite is not initialized")}},{key:"_currentRouteChanged",value:function(e){if(this.__initialized){var t=e.detail;this._loader.pattern=t,e.preventDefault(),e.stopPropagation(),this.currentRoute=t,this._dispatchEvent("current-route",this.currentRoute)}else console.warn("core-lite is not initialized")}},{key:"_templateChanged",value:function(e){if(this.__initialized){var t=e.detail;this._viewer.template=t,e.preventDefault(),e.stopPropagation(),this.template=t,this._dispatchEvent("template",this.template)}else console.warn("core-lite is not initialized")}},{key:"_dispatchEvent",value:function(e,t){this.dispatchEvent(new window.CustomEvent(e+"-change",{detail:t}))}}]),t}();window.customElements.get(o.is)?console.warn(o.is+" is already defined somewhere. Please check your code."):window.customElements.define(o.is,o)},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";(function(e){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(n){var r,o=Object.prototype,i=o.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",l="object"===t(e),h=n.regeneratorRuntime;if(h)l&&(e.exports=h);else{(h=n.regeneratorRuntime=l?e.exports:{}).wrap=g;var d="suspendedStart",f="suspendedYield",p="executing",y="completed",_={},v={};v[u]=function(){return this};var w=Object.getPrototypeOf,m=w&&w(w(T([])));m&&m!==o&&i.call(m,u)&&(v=m);var b=O.prototype=k.prototype=Object.create(v);C.prototype=b.constructor=O,O.constructor=C,O[s]=C.displayName="GeneratorFunction",h.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===C||"GeneratorFunction"===(t.displayName||t.name))},h.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(b),e},h.awrap=function(e){return{__await:e}},j(P.prototype),P.prototype[c]=function(){return this},h.AsyncIterator=P,h.async=function(e,t,n,r){var o=new P(g(e,t,n,r));return h.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},j(b),b[s]="Generator",b[u]=function(){return this},b.toString=function(){return"[object Generator]"},h.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},h.values=T,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return u.type="throw",u.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),_},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),_}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),_}}}function g(e,t,n,r){var o=t&&t.prototype instanceof k?t:k,i=Object.create(o.prototype),a=new q(r||[]);return i._invoke=function(e,t,n){var r=d;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=R(a,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=E(e,t,n);if("normal"===c.type){if(r=n.done?y:f,c.arg===_)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=y,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function E(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function k(){}function C(){}function O(){}function j(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function P(e){var n;this._invoke=function(r,o){function a(){return new Promise(function(n,a){!function n(r,o,a,u){var c=E(e[r],e,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===(void 0===l?"undefined":t(l))&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(e){n("next",e,a,u)},function(e){n("throw",e,a,u)}):Promise.resolve(l).then(function(e){s.value=e,a(s)},u)}u(c.arg)}(r,o,n,a)})}return n=n?n.then(a,a):a()}}function R(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,R(e,t),"throw"===t.method))return _;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var o=E(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,_;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,_):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,_)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function T(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}).call(this,n(11)(e))},function(e,t,n){"use strict";var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(12),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";var r,o,i,a=n(14),u=(r=a)&&r.__esModule?r:{default:r},c=(o=u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t),!t||"function"!=typeof t){e.next=7;break}return e.next=5,t();case 5:e.next=9;break;case 7:return e.next=9,Promise.reject(new Error("No fragment found"));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}),i=function(){var e=o.apply(this,arguments);return new Promise(function(t,n){return function r(o,i){try{var a=e[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});t(u)}("next")})},function(e){return i.apply(this,arguments)});n(10);var s=n(0);document.querySelector("core-lite").addEventListener("current-route-change",function(e){var t=e.detail;return c(s.fragments[t])})}]);