(window["webpackJsonpgogo-react"]=window["webpackJsonpgogo-react"]||[]).push([[11],{240:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},243:function(t,e,n){var o=n(478),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},250:function(t,e,n){var o=n(240),r=n(347),i=NaN,s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return i;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=c.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):a.test(t)?i:+t}},279:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},306:function(t,e,n){var o=n(324),r=n(553),i=n(554),s="[object Null]",a="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:s:c&&c in Object(t)?r(t):i(t)}},324:function(t,e,n){var o=n(243).Symbol;t.exports=o},347:function(t,e,n){var o=n(306),r=n(279),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||r(t)&&o(t)==i}},478:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(30))},553:function(t,e,n){var o=n(324),r=Object.prototype,i=r.hasOwnProperty,s=r.toString,a=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var o=!0}catch(c){}var r=s.call(t);return o&&(e?t[a]=n:delete t[a]),r}},554:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},582:function(t,e,n){var o=n(240),r=n(583),i=n(250),s="Expected a function",a=Math.max,c=Math.min;t.exports=function(t,e,n){var u,f,l,p,y,v,h=0,b=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError(s);function w(e){var n=u,o=f;return u=f=void 0,h=e,p=t.apply(o,n)}function g(t){var n=t-v;return void 0===v||n>=e||n<0||d&&t-h>=l}function O(){var t=r();if(g(t))return x(t);y=setTimeout(O,function(t){var n=e-(t-v);return d?c(n,l-(t-h)):n}(t))}function x(t){return y=void 0,m&&u?w(t):(u=f=void 0,p)}function j(){var t=r(),n=g(t);if(u=arguments,f=this,v=t,n){if(void 0===y)return function(t){return h=t,y=setTimeout(O,e),b?w(t):p}(v);if(d)return clearTimeout(y),y=setTimeout(O,e),w(v)}return void 0===y&&(y=setTimeout(O,e)),p}return e=i(e)||0,o(n)&&(b=!!n.leading,l=(d="maxWait"in n)?a(i(n.maxWait)||0,e):l,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==y&&clearTimeout(y),h=0,u=v=f=y=void 0},j.flush=function(){return void 0===y?p:x(r())},j}},583:function(t,e,n){var o=n(243);t.exports=function(){return o.Date.now()}},727:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=n(5),p=n(964),y=p.canvasStyle,v=p.mirrorProps,h=n(965).omit;function b(t,e){for(;t&&e--;)t=t.previousElementSibling;return t}var d={basedOn:void 0,className:"",component:"div",ellipsis:"\u2026",maxLine:1,onReflow:function(){},text:"",trimRight:!0,winWidth:void 0},m=Object.keys(d),w=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=a(this,u(e).call(this,t))).state={text:t.text,clamped:!1},n.units=[],n.maxLine=0,n.canvas=null,n}var n,o,p;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,l.Component),n=e,(o=[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentDidUpdate",value:function(t){t.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==t&&this.reflow(this.props)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"setState",value:function(t,n){return"undefined"!==typeof t.clamped&&(this.clamped=t.clamped),c(u(e.prototype),"setState",this).call(this,t,n)}},{key:"initCanvas",value:function(){if(!this.canvas){var t=this.canvas=document.createElement("div");t.className="LinesEllipsis-canvas ".concat(this.props.className),t.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(y).forEach(function(e){t.style[e]=y[e]}),document.body.appendChild(t)}}},{key:"copyStyleToCanvas",value:function(){var t=this,e=window.getComputedStyle(this.target);v.forEach(function(n){t.canvas.style[n]=e[n]})}},{key:"reflow",value:function(t){var e=t.basedOn||(/^[\x00-\x7F]+$/.test(t.text)?"words":"letters");switch(e){case"words":this.units=t.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(t.text);break;default:throw new Error("Unsupported options basedOn: ".concat(e))}this.maxLine=+t.maxLine||1,this.canvas.innerHTML=this.units.map(function(t){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")}).join("");var n=this.putEllipsis(this.calcIndexes()),o=n>-1,r={clamped:o,text:o?this.units.slice(0,n).join(""):t.text};this.setState(r,t.onReflow.bind(this,r))}},{key:"calcIndexes",value:function(){var t=[0],e=this.canvas.firstElementChild;if(!e)return t;for(var n=0,o=1,r=e.offsetTop;(e=e.nextElementSibling)&&(e.offsetTop>r&&(o++,t.push(n),r=e.offsetTop),n++,!(o>this.maxLine)););return t}},{key:"putEllipsis",value:function(t){if(t.length<=this.maxLine)return-1;var e=t[this.maxLine],n=this.units.slice(0,e),o=this.canvas.children[e].offsetTop;this.canvas.innerHTML=n.map(function(t,e){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")}).join("")+"<wbr><span class='LinesEllipsis-ellipsis'>".concat(this.props.ellipsis,"</span>");for(var r=this.canvas.lastElementChild,i=b(r,2);i&&(r.offsetTop>o||r.offsetHeight>i.offsetHeight||r.offsetTop>i.offsetTop);)this.canvas.removeChild(i),i=b(r,2),n.pop();return n.length}},{key:"isClamped",value:function(){return this.clamped}},{key:"render",value:function(){var t=this,e=this.state,n=e.text,o=e.clamped,s=this.props,a=s.component,c=s.ellipsis,u=s.trimRight,f=s.className,p=i(s,["component","ellipsis","trimRight","className"]);return l.createElement(a,r({className:"LinesEllipsis ".concat(o?"LinesEllipsis--clamped":""," ").concat(f),ref:function(e){return t.target=e}},h(p,m)),o&&u?n.replace(/[\s\uFEFF\xA0]+$/,""):n,l.createElement("wbr",null),o&&l.createElement("span",{className:"LinesEllipsis-ellipsis"},c))}}])&&s(n.prototype,o),p&&s(n,p),e}();w.defaultProps=d,t.exports=w},728:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=n(5),l=n(582),p="undefined"!==typeof window;t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:150,e=arguments.length>1?arguments[1]:void 0;return function(n){var y=function(y){function v(n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v),(r=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?c(t):e}(this,a(v).call(this,n))).state={winWidth:p?window.innerWidth:0},r.onResize=l(r.onResize.bind(c(r)),t,e),r}var h,b,d;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(v,f.Component),h=v,(b=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.onResize.cancel()}},{key:"onResize",value:function(){this.setState({winWidth:window.innerWidth})}},{key:"render",value:function(){var t=this.props,e=t.innerRef,o=i(t,["innerRef"]);return f.createElement(n,r({ref:e},o,this.state))}}])&&s(h.prototype,b),d&&s(h,d),v}();return y.displayName="Responsive(".concat(n.displayName||n.name,")"),y.defaultProps={innerRef:function(){}},y}}},964:function(t,e,n){"use strict";t.exports={canvasStyle:{position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},mirrorProps:["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"]}},965:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports={omit:function(t,e){if(!t||"object"!==o(t))return t;var n={};return Object.keys(t).forEach(function(o){e.indexOf(o)>-1||(n[o]=t[o])}),n}}}}]);