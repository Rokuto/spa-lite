(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{20:function(e,t,n){"use strict";var r,o,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=(r=["<style>","</style>",""],o=["<style>","</style>",""],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),c=n(21),l=n(30),s=n(29),p=(a=s)&&a.__esModule?a:{default:a};var f=window,b=f.HTMLElement,d=f.customElements,y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,c.ElementLiteLitOnly)(b)),i(t,[{key:"render",value:function(){return(0,c.html)(u,p.default.toString(),(0,l.template)(this))}}],[{key:"is",get:function(){return"page-home"}}]),t}();d.get(y.is)?console.warn(y.is+" is already defined somewhere. Please check your code."):d.define(y.is,y)},23:function(e,t,n){"use strict";var r,o,a=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=(r=["<slot></slot>"],o=["<slot></slot>"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),c=n(21),l=n(2);var s=window,p=s.HTMLElement,f=s.customElements,b=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._boundRouteChanged=e._routeChanged.bind(e),e._boundRouteParamObjectChanged=e._routeParamObjectChanged.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,c.ElementLite)(p)),i(t,null,[{key:"is",get:function(){return"smart-text-wrapper"}},{key:"properties",get:function(){return{text:{type:String,value:"hello",observer:"_textChanged"},params:{type:Object,value:{},observer:"_paramsChanged"}}}}]),i(t,[{key:"connectedCallback",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this._textChanged(this.text),(0,l.subscribe)("currentRoute",this._boundRouteChanged),(0,l.subscribe)("routeParamObject",this._boundRouteParamObjectChanged)}},{key:"disconnectedCallback",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),(0,l.unsubscribe)("currentRoute",this._boundRouteChanged),(0,l.unsubscribe)("routeParamObject",this._boundRouteParamObjectChanged)}},{key:"render",value:function(){return(0,c.html)(u)}},{key:"_textChanged",value:function(e){for(var t=0;t<this.children.length;t++)this.children[t].text=e}},{key:"_paramsChanged",value:function(e){this.querySelector("text-wrapper").params=e}},{key:"_routeChanged",value:function(e){this.text="/"===e?"Home":"Elsewhere"}},{key:"_routeParamObjectChanged",value:function(e){this.params=e}}]),t}();f.get(b.is)?console.warn(b.is+" is already defined somewhere. Please check your code."):f.define(b.is,b)},24:function(e,t,n){(e.exports=n(22)(!1)).push([e.i,"",""])},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.template=void 0;var r,o,a=(r=["\n  <span>\n    Hey! "," ","\n  </span>\n"],o=["\n  <span>\n    Hey! "," ","\n  </span>\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),i=n(21);t.template=function(e){return(0,i.html)(a,e.text,e.params.id)}},26:function(e,t,n){"use strict";var r,o,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=(r=["<style>","</style>",""],o=["<style>","</style>",""],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),c=n(21),l=n(25),s=n(24),p=(a=s)&&a.__esModule?a:{default:a};var f=window,b=f.HTMLElement,d=f.customElements,y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,c.ElementLite)(b)),i(t,[{key:"render",value:function(){return(0,c.html)(u,p.default.toString(),(0,l.template)(this))}}],[{key:"is",get:function(){return"text-wrapper"}},{key:"properties",get:function(){return{text:{type:String,value:"hi"},params:{type:Object,value:{}}}}}]),t}();d.get(y.is)?console.warn(y.is+" is already defined somewhere. Please check your code."):d.define(y.is,y)},29:function(e,t,n){(e.exports=n(22)(!1)).push([e.i,".red {\n  color: #f00;\n}\n",""])},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.template=void 0;var r,o,a=(r=['\n  <div class="red">\n    Hello World\n    <a href="/page/tj">\n      Click\n    </a>\n    <smart-text-wrapper>\n      <text-wrapper></text-wrapper>\n    </smart-text-wrapper>\n  </div>\n'],o=['\n  <div class="red">\n    Hello World\n    <a href="/page/tj">\n      Click\n    </a>\n    <smart-text-wrapper>\n      <text-wrapper></text-wrapper>\n    </smart-text-wrapper>\n  </div>\n'],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),i=n(21);n(26),n(23);t.template=function(e){return(0,i.html)(a)}}}]);