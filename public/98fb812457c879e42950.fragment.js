(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{19:function(e,t,r){"use strict";var n,o,a,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=(n=["<style>","</style>",""],o=["<style>","</style>",""],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))),c=r(21),s=r(28),l=r(27),p=(a=l)&&a.__esModule?a:{default:a};var f=window,b=f.HTMLElement,y=f.customElements,d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,c.ElementLiteLitOnly)(b)),i(t,[{key:"render",value:function(){return(0,c.html)(u,p.default.toString(),(0,s.template)(this))}}],[{key:"is",get:function(){return"page-params"}}]),t}();y.get(d.is)?console.warn(d.is+" is already defined somewhere. Please check your code."):y.define(d.is,d)},23:function(e,t,r){"use strict";var n,o,a=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=(n=["<slot></slot>"],o=["<slot></slot>"],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))),c=r(21),s=r(2);var l=window,p=l.HTMLElement,f=l.customElements,b=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._boundRouteChanged=e._routeChanged.bind(e),e._boundRouteParamObjectChanged=e._routeParamObjectChanged.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,c.ElementLite)(p)),i(t,null,[{key:"is",get:function(){return"smart-text-wrapper"}},{key:"properties",get:function(){return{text:{type:String,value:"hello",observer:"_textChanged"},params:{type:Object,value:{},observer:"_paramsChanged"}}}}]),i(t,[{key:"connectedCallback",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this._textChanged(this.text),(0,s.subscribe)("currentRoute",this._boundRouteChanged),(0,s.subscribe)("routeParamObject",this._boundRouteParamObjectChanged)}},{key:"disconnectedCallback",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this)&&a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),(0,s.unsubscribe)("currentRoute",this._boundRouteChanged),(0,s.unsubscribe)("routeParamObject",this._boundRouteParamObjectChanged)}},{key:"render",value:function(){return(0,c.html)(u)}},{key:"_textChanged",value:function(e){for(var t=0;t<this.children.length;t++)this.children[t].text=e}},{key:"_paramsChanged",value:function(e){this.querySelector("text-wrapper").params=e}},{key:"_routeChanged",value:function(e){this.text="/"===e?"Home":"Elsewhere"}},{key:"_routeParamObjectChanged",value:function(e){this.params=e}}]),t}();f.get(b.is)?console.warn(b.is+" is already defined somewhere. Please check your code."):f.define(b.is,b)},24:function(e,t,r){(e.exports=r(22)(!1)).push([e.i,"",""])},25:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.template=void 0;var n,o,a=(n=["\n  <span>\n    Hey! "," ","\n  </span>\n"],o=["\n  <span>\n    Hey! "," ","\n  </span>\n"],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))),i=r(21);t.template=function(e){return(0,i.html)(a,e.text,e.params.id)}},26:function(e,t,r){"use strict";var n,o,a,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=(n=["<style>","</style>",""],o=["<style>","</style>",""],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))),c=r(21),s=r(25),l=r(24),p=(a=l)&&a.__esModule?a:{default:a};var f=window,b=f.HTMLElement,y=f.customElements,d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,c.ElementLite)(b)),i(t,[{key:"render",value:function(){return(0,c.html)(u,p.default.toString(),(0,s.template)(this))}}],[{key:"is",get:function(){return"text-wrapper"}},{key:"properties",get:function(){return{text:{type:String,value:"hi"},params:{type:Object,value:{}}}}}]),t}();y.get(d.is)?console.warn(d.is+" is already defined somewhere. Please check your code."):y.define(d.is,d)},27:function(e,t,r){(e.exports=r(22)(!1)).push([e.i,".red {\n  color: #f00;\n}\n",""])},28:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.template=void 0;var n,o,a=(n=['\n  <div class="red">\n    Page Params\n    <smart-text-wrapper>\n      <text-wrapper></text-wrapper>\n    </smart-text-wrapper>\n  </div>\n'],o=['\n  <div class="red">\n    Page Params\n    <smart-text-wrapper>\n      <text-wrapper></text-wrapper>\n    </smart-text-wrapper>\n  </div>\n'],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))),i=r(21);r(26),r(23);t.template=function(e){return(0,i.html)(a)}}}]);