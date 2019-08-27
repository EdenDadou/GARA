(window["webpackJsonpgogo-react"]=window["webpackJsonpgogo-react"]||[]).push([[6],{258:function(e,t,n){"use strict";var o=n(11),a=n(20),r=n(5),s=n.n(r),i=n(25),l=n.n(i),u=n(192),c=n.n(u),d=n(193),p={color:l.a.string,pill:l.a.bool,tag:d.tagPropType,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,r=e.color,i=e.innerRef,l=e.pill,u=e.tag,p=Object(a.a)(e,["className","cssModule","color","innerRef","pill","tag"]),f=Object(d.mapToCssModules)(c()(t,"badge","badge-"+r,!!l&&"badge-pill"),n);return p.href&&"span"===u&&(u="a"),s.a.createElement(u,Object(o.a)({},p,{className:f,ref:i}))};f.propTypes=p,f.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=f},285:function(e,t,n){"use strict";var o=n(5),a=n.n(o),r=n(25),s=n.n(r),i=n(192),l=n.n(i),u=n(75),c=n.n(u);function d(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"===typeof e&&e.apply(void 0,n)}function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var f="react-contextmenu",h="react-contextmenu--visible",m="react-contextmenu-wrapper",b="react-contextmenu-item",y="react-contextmenu-item--active",v="react-contextmenu-item--disabled",g="react-contextmenu-item--divider",M="react-contextmenu-item--selected",O="react-contextmenu-submenu",C={},w=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),T="REACT_CONTEXTMENU_SHOW",k="REACT_CONTEXTMENU_HIDE";function E(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=void 0;"function"===typeof window.CustomEvent?o=new window.CustomEvent(e,{detail:t}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!0,t),n&&(n.dispatchEvent(o),c()(C,t))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];E(T,c()({},e,{type:T}),t)}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];E(k,c()({},e,{type:k}),t)}var _=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleShowEvent=function(e){for(var n in t.callbacks)p(t.callbacks,n)&&t.callbacks[n].show(e)},this.handleHideEvent=function(e){for(var n in t.callbacks)p(t.callbacks,n)&&t.callbacks[n].hide(e)},this.register=function(e,n){var o=Math.random().toString(36).substring(7);return t.callbacks[o]={show:e,hide:n},o},this.unregister=function(e){e&&t.callbacks[e]&&delete t.callbacks[e]},this.callbacks={},w&&(window.addEventListener(T,this.handleShowEvent),window.addEventListener(k,this.handleHideEvent))},P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var L=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return n=o=I(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o.handleClick=function(e){0!==e.button&&1!==e.button&&e.preventDefault(),o.props.disabled||o.props.divider||(d(o.props.onClick,e,c()({},o.props.data,C.data),C.target),o.props.preventClose||N())},I(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),x(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.disabled,r=n.divider,s=n.children,i=n.attributes,u=n.selected,c=l()(b,i.className,(S(e={},l()(v,i.disabledClassName),o),S(e,l()(g,i.dividerClassName),r),S(e,l()(M,i.selectedClassName),u),e));return a.a.createElement("div",P({},i,{className:c,role:"menuitem",tabIndex:"-1","aria-disabled":o?"true":"false","aria-orientation":r?"horizontal":null,ref:function(e){t.ref=e},onMouseMove:this.props.onMouseMove,onMouseLeave:this.props.onMouseLeave,onTouchEnd:this.handleClick,onClick:this.handleClick}),r?null:s)}}]),t}();L.propTypes={children:s.a.node,attributes:s.a.object,data:s.a.object,disabled:s.a.bool,divider:s.a.bool,preventClose:s.a.bool,onClick:s.a.func,selected:s.a.bool,onMouseMove:s.a.func,onMouseLeave:s.a.func},L.defaultProps={disabled:!1,data:{},divider:!1,attributes:{},preventClose:!1,onClick:function(){return null},children:null,selected:!1,onMouseMove:function(){return null},onMouseLeave:function(){return null}};var D=L;var R=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return H.call(n),n.seletedItemRef=null,n.state={selectedItem:null,forceSubMenuOpen:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),t}();R.propTypes={children:s.a.node.isRequired};var H=function(){var e=this;this.handleKeyNavigation=function(t){if(!1!==e.state.isVisible)switch(t.keyCode){case 37:case 27:t.preventDefault(),e.hideMenu(t);break;case 38:t.preventDefault(),e.selectChildren(!0);break;case 40:t.preventDefault(),e.selectChildren(!1);break;case 39:e.tryToOpenSubMenu(t);break;case 13:t.preventDefault(),e.tryToOpenSubMenu(t);var n=e.seletedItemRef&&e.seletedItemRef.props&&e.seletedItemRef.props.disabled;e.seletedItemRef&&e.seletedItemRef.ref instanceof HTMLElement&&!n?e.seletedItemRef.ref.click():e.hideMenu(t)}},this.handleForceClose=function(){e.setState({forceSubMenuOpen:!1})},this.tryToOpenSubMenu=function(t){e.state.selectedItem&&e.state.selectedItem.type===e.getSubMenuType()&&(t.preventDefault(),e.setState({forceSubMenuOpen:!0}))},this.selectChildren=function(t){var n=e.state.selectedItem,o=[],r=0,s={};if(a.a.Children.forEach(e.props.children,function t(n,i){n&&([D,e.getSubMenuType()].indexOf(n.type)<0?a.a.Children.forEach(n.props.children,t):n.props.divider||(n.props.disabled&&(++r,s[i]=!0),o.push(n)))}),r!==o.length){var i=function(e){var n=e;do{t?--n:++n,n<0?n=o.length-1:n>=o.length&&(n=0)}while(n!==e&&s[n]);return n===e?null:n}(o.indexOf(n));null!==i&&e.setState({selectedItem:o[i],forceSubMenuOpen:!1})}},this.onChildMouseMove=function(t){e.state.selectedItem!==t&&e.setState({selectedItem:t,forceSubMenuOpen:!1})},this.onChildMouseLeave=function(){e.setState({selectedItem:null,forceSubMenuOpen:!1})},this.renderChildren=function(t){return a.a.Children.map(t,function(t){var n={};return a.a.isValidElement(t)?[D,e.getSubMenuType()].indexOf(t.type)<0?(n.children=e.renderChildren(t.props.children),a.a.cloneElement(t,n)):(n.onMouseLeave=e.onChildMouseLeave.bind(e),t.type===e.getSubMenuType()&&(n.forceOpen=e.state.forceSubMenuOpen&&e.state.selectedItem===t,n.forceClose=e.handleForceClose,n.parentKeyNavigationHandler=e.handleKeyNavigation),t.props.divider||e.state.selectedItem!==t?(n.onMouseMove=function(){return e.onChildMouseMove(t)},a.a.cloneElement(t,n)):(n.selected=!0,n.ref=function(t){e.seletedItemRef=t},a.a.cloneElement(t,n))):t})}},A=R,K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getMenuPosition=function(){var e=window,t=e.innerWidth,o=e.innerHeight,a=n.subMenu.getBoundingClientRect(),r={};return a.bottom>o?r.bottom=0:r.top=0,a.right<t?r.left="100%":r.right="100%",r},n.getRTLMenuPosition=function(){var e=window.innerHeight,t=n.subMenu.getBoundingClientRect(),o={};return t.bottom>e?o.bottom=0:o.top=0,t.left<0?o.left="100%":o.right="100%",o},n.hideMenu=function(e){e.detail&&e.detail.id&&n.menu&&e.detail.id!==n.menu.id||(n.props.forceOpen&&n.props.forceClose(),n.setState({visible:!1,selectedItem:null}),n.unregisterHandlers())},n.handleClick=function(e){e.preventDefault(),n.props.disabled||d(n.props.onClick,e,c()({},n.props.data,C.data),C.target)},n.handleMouseEnter=function(){n.closetimer&&clearTimeout(n.closetimer),n.props.disabled||n.state.visible||(n.opentimer=setTimeout(function(){return n.setState({visible:!0,selectedItem:null})},n.props.hoverDelay))},n.handleMouseLeave=function(){n.opentimer&&clearTimeout(n.opentimer),n.state.visible&&(n.closetimer=setTimeout(function(){return n.setState({visible:!1,selectedItem:null})},n.props.hoverDelay))},n.menuRef=function(e){n.menu=e},n.subMenuRef=function(e){n.subMenu=e},n.registerHandlers=function(){document.removeEventListener("keydown",n.props.parentKeyNavigationHandler),document.addEventListener("keydown",n.handleKeyNavigation)},n.unregisterHandlers=function(e){document.removeEventListener("keydown",n.handleKeyNavigation),e||document.addEventListener("keydown",n.props.parentKeyNavigationHandler)},n.state=c()({},n.state,{visible:!1}),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,A),F(t,[{key:"componentDidMount",value:function(){this.listenId=_.register(function(){},this.hideMenu)}},{key:"getSubMenuType",value:function(){return t}},{key:"shouldComponentUpdate",value:function(e,t){return this.isVisibilityChange=(this.state.visible!==t.visible||this.props.forceOpen!==e.forceOpen)&&!(this.state.visible&&e.forceOpen)&&!(this.props.forceOpen&&t.visible),!0}},{key:"componentDidUpdate",value:function(){var e=this;if(this.isVisibilityChange)if(this.props.forceOpen||this.state.visible){(window.requestAnimationFrame||setTimeout)(function(){var t=e.props.rtl?e.getRTLMenuPosition():e.getMenuPosition();e.subMenu.style.removeProperty("top"),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("left"),e.subMenu.style.removeProperty("right"),p(t,"top")&&(e.subMenu.style.top=t.top),p(t,"left")&&(e.subMenu.style.left=t.left),p(t,"bottom")&&(e.subMenu.style.bottom=t.bottom),p(t,"right")&&(e.subMenu.style.right=t.right),e.subMenu.classList.add(h),e.registerHandlers(),e.setState({selectedItem:null})})}else{this.subMenu.addEventListener("transitionend",function t(){e.subMenu.removeEventListener("transitionend",t),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("right"),e.subMenu.style.top=0,e.subMenu.style.left="100%",e.unregisterHandlers()}),this.subMenu.classList.remove(h)}}},{key:"componentWillUnmount",value:function(){this.listenId&&_.unregister(this.listenId),this.opentimer&&clearTimeout(this.opentimer),this.closetimer&&clearTimeout(this.closetimer),this.unregisterHandlers(!0)}},{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.attributes,r=t.disabled,s=t.title,i=t.selected,u=this.state.visible,c={ref:this.menuRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:l()(b,O,o.listClassName),style:{position:"relative"}},d={className:l()(b,o.className,(e={},B(e,l()(v,o.disabledClassName),r),B(e,l()(y,o.visibleClassName),u),B(e,l()(M,o.selectedClassName),i),e)),onMouseMove:this.props.onMouseMove,onMouseOut:this.props.onMouseOut,onClick:this.handleClick},p={ref:this.subMenuRef,style:{position:"absolute",transition:"opacity 1ms",top:0,left:"100%"},className:l()(f,this.props.className)};return a.a.createElement("nav",K({},c,{role:"menuitem",tabIndex:"-1","aria-haspopup":"true"}),a.a.createElement("div",K({},o,d),s),a.a.createElement("nav",K({},p,{role:"menu",tabIndex:"-1"}),this.renderChildren(n)))}}]),t}();q.propTypes={children:s.a.node.isRequired,attributes:s.a.object,title:s.a.node.isRequired,className:s.a.string,disabled:s.a.bool,hoverDelay:s.a.number,rtl:s.a.bool,selected:s.a.bool,onMouseMove:s.a.func,onMouseOut:s.a.func,forceOpen:s.a.bool,forceClose:s.a.func,parentKeyNavigationHandler:s.a.func},q.defaultProps={disabled:!1,hoverDelay:500,attributes:{},className:"",rtl:!1,selected:!1,onMouseMove:function(){return null},onMouseOut:function(){return null},forceOpen:!1,forceClose:function(){return null},parentKeyNavigationHandler:function(){return null}};var U=q,z=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var V=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.registerHandlers=function(){document.addEventListener("mousedown",n.handleOutsideClick),document.addEventListener("touchstart",n.handleOutsideClick),document.addEventListener("scroll",n.handleHide),document.addEventListener("contextmenu",n.handleHide),document.addEventListener("keydown",n.handleKeyNavigation),window.addEventListener("resize",n.handleHide)},n.unregisterHandlers=function(){document.removeEventListener("mousedown",n.handleOutsideClick),document.removeEventListener("touchstart",n.handleOutsideClick),document.removeEventListener("scroll",n.handleHide),document.removeEventListener("contextmenu",n.handleHide),document.removeEventListener("keydown",n.handleKeyNavigation),window.removeEventListener("resize",n.handleHide)},n.handleShow=function(e){if(e.detail.id===n.props.id&&!n.state.isVisible){var t=e.detail.position,o=t.x,a=t.y;n.setState({isVisible:!0,x:o,y:a}),n.registerHandlers(),d(n.props.onShow,e)}},n.handleHide=function(e){!n.state.isVisible||e.detail&&e.detail.id&&e.detail.id!==n.props.id||(n.unregisterHandlers(),n.setState({isVisible:!1,selectedItem:null,forceSubMenuOpen:!1}),d(n.props.onHide,e))},n.handleOutsideClick=function(e){n.menu.contains(e.target)||N()},n.handleMouseLeave=function(e){e.preventDefault(),d(n.props.onMouseLeave,e,c()({},n.props.data,C.data),C.target),n.props.hideOnLeave&&N()},n.handleContextMenu=function(e){e.preventDefault(),n.handleHide(e)},n.hideMenu=function(e){27!==e.keyCode&&13!==e.keyCode||N()},n.getMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var a=window,r=a.innerWidth,s=a.innerHeight,i=n.menu.getBoundingClientRect();return t+i.height>s&&(o.top-=i.height),e+i.width>r&&(o.left-=i.width),o.top<0&&(o.top=i.height<s?(s-i.height)/2:0),o.left<0&&(o.left=i.width<r?(r-i.width)/2:0),o},n.getRTLMenuPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o={top:t,left:e};if(!n.menu)return o;var a=window,r=a.innerWidth,s=a.innerHeight,i=n.menu.getBoundingClientRect();return o.left=e-i.width,t+i.height>s&&(o.top-=i.height),o.left<0&&(o.left+=i.width),o.top<0&&(o.top=i.height<s?(s-i.height)/2:0),o.left+i.width>r&&(o.left=i.width<r?(r-i.width)/2:0),o},n.menuRef=function(e){n.menu=e},n.state=c()({},n.state,{x:0,y:0,isVisible:!1}),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,A),z(t,[{key:"getSubMenuType",value:function(){return U}},{key:"componentDidMount",value:function(){this.listenId=_.register(this.handleShow,this.handleHide)}},{key:"componentDidUpdate",value:function(){var e=this;if(this.state.isVisible){var t=window.requestAnimationFrame||setTimeout;t(function(){var n=e.state,o=n.x,a=n.y,r=e.props.rtl?e.getRTLMenuPosition(o,a):e.getMenuPosition(o,a),s=r.top,i=r.left;t(function(){e.menu&&(e.menu.style.top=s+"px",e.menu.style.left=i+"px",e.menu.style.opacity=1,e.menu.style.pointerEvents="auto")})})}else{if(!this.menu)return;this.menu.style.opacity=0,this.menu.style.pointerEvents="none"}}},{key:"componentWillUnmount",value:function(){this.listenId&&_.unregister(this.listenId),this.unregisterHandlers()}},{key:"render",value:function(){var e,t,n,o=this.props,r=o.children,s=o.className,i=o.style,u=this.state.isVisible,d=c()({},i,{position:"fixed",opacity:0,pointerEvents:"none"}),p=l()(f,s,(n=u,(t=h)in(e={})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return a.a.createElement("nav",{role:"menu",tabIndex:"-1",ref:this.menuRef,style:d,className:p,onContextMenu:this.handleContextMenu,onMouseLeave:this.handleMouseLeave},this.renderChildren(r))}}]),t}();V.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,data:s.a.object,className:s.a.string,hideOnLeave:s.a.bool,rtl:s.a.bool,onHide:s.a.func,onMouseLeave:s.a.func,onShow:s.a.func,style:s.a.object},V.defaultProps={className:"",data:{},hideOnLeave:!1,rtl:!1,onHide:function(){return null},onMouseLeave:function(){return null},onShow:function(){return null},style:{}};var W=V,X=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function Y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var J=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return n=o=Y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o.touchHandled=!1,o.handleMouseDown=function(e){o.props.holdToDisplay>=0&&0===e.button&&(e.persist(),e.stopPropagation(),o.mouseDownTimeoutId=setTimeout(function(){return o.handleContextClick(e)},o.props.holdToDisplay)),d(o.props.attributes.onMouseDown,e)},o.handleMouseUp=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),d(o.props.attributes.onMouseUp,e)},o.handleMouseOut=function(e){0===e.button&&clearTimeout(o.mouseDownTimeoutId),d(o.props.attributes.onMouseOut,e)},o.handleTouchstart=function(e){o.touchHandled=!1,o.props.holdToDisplay>=0&&(e.persist(),e.stopPropagation(),o.touchstartTimeoutId=setTimeout(function(){o.handleContextClick(e),o.touchHandled=!0},o.props.holdToDisplay)),d(o.props.attributes.onTouchStart,e)},o.handleTouchEnd=function(e){o.touchHandled&&e.preventDefault(),clearTimeout(o.touchstartTimeoutId),d(o.props.attributes.onTouchEnd,e)},o.handleContextMenu=function(e){o.handleContextClick(e),d(o.props.attributes.onContextMenu,e)},o.handleContextClick=function(e){if(!o.props.disable&&(!o.props.disableIfShiftIsPressed||!e.shiftKey)){e.preventDefault(),e.stopPropagation();var t=e.clientX||e.touches&&e.touches[0].pageX,n=e.clientY||e.touches&&e.touches[0].pageY;o.props.posX&&(t-=o.props.posX),o.props.posY&&(n-=o.props.posY),N();var a=d(o.props.collect,o.props),r={position:{x:t,y:n},target:o.elem,id:o.props.id};a&&"function"===typeof a.then?a.then(function(t){r.data=c()({},t,{target:e.target}),j(r)}):(r.data=c()({},a,{target:e.target}),j(r))}},o.elemRef=function(e){o.elem=e},Y(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),X(t,[{key:"render",value:function(){var e=this.props,t=e.renderTag,n=e.attributes,o=e.children,r=c()({},n,{className:l()(m,n.className),onContextMenu:this.handleContextMenu,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchstart,onTouchEnd:this.handleTouchEnd,onMouseOut:this.handleMouseOut,ref:this.elemRef});return a.a.createElement(t,r,o)}}]),t}();J.propTypes={id:s.a.string.isRequired,children:s.a.node.isRequired,attributes:s.a.object,collect:s.a.func,disable:s.a.bool,holdToDisplay:s.a.number,posX:s.a.number,posY:s.a.number,renderTag:s.a.oneOfType([s.a.node,s.a.func]),disableIfShiftIsPressed:s.a.bool},J.defaultProps={attributes:{},collect:function(){return null},disable:!1,holdToDisplay:1e3,renderTag:"div",posX:0,posY:0,disableIfShiftIsPressed:!1};var $=J;Object.assign,function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}}();[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Object.keys($.propTypes)),["children"]);n.d(t,"a",function(){return W}),n.d(t,"b",function(){return $}),n.d(t,"c",function(){return D})},302:function(e,t,n){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return o})},307:function(e,t,n){"use strict";var o=n(11),a=n(20),r=n(5),s=n.n(r),i=n(25),l=n.n(i),u=n(192),c=n.n(u),d=n(193),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=Object(a.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(c()(t,"card-subtitle"),n);return s.a.createElement(r,Object(o.a)({},i,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},329:function(e,t,n){"use strict";var o=n(11),a=n(5),r=n.n(a),s=n(25),i=n.n(s),l=n(286),u={children:i.a.node},c=function(e){return r.a.createElement(l.a,Object(o.a)({group:!0},e))};c.propTypes=u,t.a=c},398:function(e,t,n){"use strict";var o=n(11),a=n(20),r=n(5),s=n.n(r),i=n(25),l=n.n(i),u=n(192),c=n.n(u),d=n(193),p={tag:d.tagPropType,wrapTag:d.tagPropType,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},f=function(e){var t,n=e.className,r=e.cssModule,i=e.children,l=e.toggle,u=e.tag,p=e.wrapTag,f=e.closeAriaLabel,h=e.charCode,m=e.close,b=Object(a.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),y=Object(d.mapToCssModules)(c()(n,"modal-header"),r);if(!m&&l){var v="number"===typeof h?String.fromCharCode(h):h;t=s.a.createElement("button",{type:"button",onClick:l,className:Object(d.mapToCssModules)("close",r),"aria-label":f},s.a.createElement("span",{"aria-hidden":"true"},v))}return s.a.createElement(p,Object(o.a)({},b,{className:y}),s.a.createElement(u,{className:Object(d.mapToCssModules)("modal-title",r)},i),m||t)};f.propTypes=p,f.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=f},399:function(e,t,n){"use strict";var o=n(11),a=n(20),r=n(5),s=n.n(r),i=n(25),l=n.n(i),u=n(192),c=n.n(u),d=n(193),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=Object(a.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(c()(t,"modal-body"),n);return s.a.createElement(r,Object(o.a)({},i,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},400:function(e,t,n){"use strict";var o=n(11),a=n(20),r=n(5),s=n.n(r),i=n(25),l=n.n(i),u=n(192),c=n.n(u),d=n(193),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=Object(a.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(c()(t,"modal-footer"),n);return s.a.createElement(r,Object(o.a)({},i,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},401:function(e,t,n){"use strict";var o=n(11),a=n(20),r=n(5),s=n.n(r),i=n(25),l=n.n(i),u=n(192),c=n.n(u),d=n(193),p={tag:d.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=Object(a.a)(e,["className","cssModule","tag"]),l=Object(d.mapToCssModules)(c()(t,"card-text"),n);return s.a.createElement(r,Object(o.a)({},i,{className:l}))};f.propTypes=p,f.defaultProps={tag:"p"},t.a=f},409:function(e,t,n){"use strict";var o=n(246),a=n(11),r=n(72),s=n(73),i=n(5),l=n.n(i),u=n(25),c=n.n(u),d=n(192),p=n.n(d),f=n(39),h=n.n(f),m=n(193),b={children:c.a.node.isRequired,node:c.a.any},y=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},n.render=function(){return m.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);y.propTypes=b;var v=y,g=n(288);function M(){}var O=c.a.shape(g.a.propTypes),C={isOpen:c.a.bool,autoFocus:c.a.bool,centered:c.a.bool,scrollable:c.a.bool,size:c.a.string,toggle:c.a.func,keyboard:c.a.bool,role:c.a.string,labelledBy:c.a.string,backdrop:c.a.oneOfType([c.a.bool,c.a.oneOf(["static"])]),onEnter:c.a.func,onExit:c.a.func,onOpened:c.a.func,onClosed:c.a.func,children:c.a.node,className:c.a.string,wrapClassName:c.a.string,modalClassName:c.a.string,backdropClassName:c.a.string,contentClassName:c.a.string,external:c.a.node,fade:c.a.bool,cssModule:c.a.object,zIndex:c.a.oneOfType([c.a.number,c.a.string]),backdropTransition:O,modalTransition:O,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func]),unmountOnClose:c.a.bool,returnFocusAfterClose:c.a.bool},w=Object.keys(C),T={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:M,onClosed:M,modalTransition:{timeout:m.TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:!0,timeout:m.TransitionTimeouts.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},k=function(e){function t(t){var n;return(n=e.call(this,t)||this)._element=null,n._originalBodyPadding=null,n.getFocusableChildren=n.getFocusableChildren.bind(Object(r.a)(n)),n.handleBackdropClick=n.handleBackdropClick.bind(Object(r.a)(n)),n.handleBackdropMouseDown=n.handleBackdropMouseDown.bind(Object(r.a)(n)),n.handleEscape=n.handleEscape.bind(Object(r.a)(n)),n.handleTab=n.handleTab.bind(Object(r.a)(n)),n.onOpened=n.onOpened.bind(Object(r.a)(n)),n.onClosed=n.onClosed.bind(Object(r.a)(n)),n.manageFocusAfterClose=n.manageFocusAfterClose.bind(Object(r.a)(n)),n.state={isOpen:!1},n}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.isOpen,n=e.autoFocus,o=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),n&&this.setFocus()),o&&o(),this._isMounted=!0},n.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},n.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.state.isOpen&&this.close()),this._isMounted=!1},n.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||M)(e,t)},n.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||M)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},n.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},n.getFocusableChildren=function(){return this._element.querySelectorAll(m.focusableElements.join(", "))},n.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(n){e=t[0]}return e},n.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},n.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),n=t.length;if(0!==n){for(var o=this.getFocusedChild(),a=0,r=0;r<n;r+=1)if(t[r]===o){a=r;break}e.shiftKey&&0===a?(e.preventDefault(),t[n-1].focus()):e.shiftKey||a!==n-1||(e.preventDefault(),t[0].focus())}}},n.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},n.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},n.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(m.getOriginalBodyPadding)(),Object(m.conditionallyUpdateScrollbar)(),0===t.openCount&&(document.body.className=p()(document.body.className,Object(m.mapToCssModules)("modal-open",this.props.cssModule))),t.openCount+=1},n.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},n.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},n.close=function(){if(t.openCount<=1){var e=Object(m.mapToCssModules)("modal-open",this.props.cssModule),n=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(n," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(m.setScrollbarWidth)(this._originalBodyPadding)},n.renderModalDialog=function(){var e,t=this,n=Object(m.omit)(this.props,w);return l.a.createElement("div",Object(a.a)({},n,{className:Object(m.mapToCssModules)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(m.mapToCssModules)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},n.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var n=this.props,r=n.wrapClassName,s=n.modalClassName,i=n.backdropClassName,u=n.cssModule,c=n.isOpen,d=n.backdrop,f=n.role,h=n.labelledBy,b=n.external,y=n.innerRef,M={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:f,tabIndex:"-1"},O=this.props.fade,C=Object(o.a)({},g.a.defaultProps,this.props.modalTransition,{baseClass:O?this.props.modalTransition.baseClass:"",timeout:O?this.props.modalTransition.timeout:0}),w=Object(o.a)({},g.a.defaultProps,this.props.backdropTransition,{baseClass:O?this.props.backdropTransition.baseClass:"",timeout:O?this.props.backdropTransition.timeout:0}),T=d&&(O?l.a.createElement(g.a,Object(a.a)({},w,{in:c&&!!d,cssModule:u,className:Object(m.mapToCssModules)(p()("modal-backdrop",i),u)})):l.a.createElement("div",{className:Object(m.mapToCssModules)(p()("modal-backdrop","show",i),u)}));return l.a.createElement(v,{node:this._element},l.a.createElement("div",{className:Object(m.mapToCssModules)(r)},l.a.createElement(g.a,Object(a.a)({},M,C,{in:c,onEntered:this.onOpened,onExited:this.onClosed,cssModule:u,className:Object(m.mapToCssModules)(p()("modal",s),u),innerRef:y}),b,this.renderModalDialog()),T))}return null},t}(l.a.Component);k.propTypes=C,k.defaultProps=T,k.openCount=0;t.a=k},444:function(e,t,n){"use strict";var o=n(11),a=n(20),r=n(5),s=n.n(r),i=n(25),l=n.n(i),u=n(192),c=n.n(u),d=n(193),p={tag:d.tagPropType,top:l.a.bool,bottom:l.a.bool,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,r=e.top,i=e.bottom,l=e.tag,u=Object(a.a)(e,["className","cssModule","top","bottom","tag"]),p="card-img";r&&(p="card-img-top"),i&&(p="card-img-bottom");var f=Object(d.mapToCssModules)(c()(t,p),n);return s.a.createElement(l,Object(o.a)({},u,{className:f}))};f.propTypes=p,f.defaultProps={tag:"img"},t.a=f},566:function(e,t,n){var o;!function(a,r,s){if(a){for(var i,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},u={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},c={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},d={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p=1;p<20;++p)l[111+p]="f"+p;for(p=0;p<=9;++p)l[p+96]=p.toString();v.prototype.bind=function(e,t,n){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,n),this},v.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},v.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},v.prototype.reset=function(){return this._callbacks={},this._directMap={},this},v.prototype.stopCallback=function(e,t){if((" "+t.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function e(t,n){return null!==t&&t!==r&&(t===n||e(t.parentNode,n))}(t,this.target))return!1;if("composedPath"in e&&"function"===typeof e.composedPath){var n=e.composedPath()[0];n!==e.target&&(t=n)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},v.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},v.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);i=null},v.init=function(){var e=v(r);for(var t in e)"_"!==t.charAt(0)&&(v[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},v.init(),a.Mousetrap=v,e.exports&&(e.exports=v),void 0===(o=function(){return v}.call(t,n,t,e))||(e.exports=o)}function f(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function h(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return l[e.which]?l[e.which]:u[e.which]?u[e.which]:String.fromCharCode(e.which).toLowerCase()}function m(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function b(e,t,n){return n||(n=function(){if(!i)for(var e in i={},l)e>95&&e<112||l.hasOwnProperty(e)&&(i[l[e]]=e);return i}()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function y(e,t){var n,o,a,r=[];for(n=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),a=0;a<n.length;++a)o=n[a],d[o]&&(o=d[o]),t&&"keypress"!=t&&c[o]&&(o=c[o],r.push("shift")),m(o)&&r.push(o);return{key:o,modifiers:r,action:t=b(o,r,t)}}function v(e){var t=this;if(e=e||r,!(t instanceof v))return new v(e);t.target=e,t._callbacks={},t._directMap={};var n,o={},a=!1,s=!1,i=!1;function l(e){e=e||{};var t,n=!1;for(t in o)e[t]?n=!0:o[t]=0;n||(i=!1)}function u(e,n,a,r,s,i){var l,u,c,d,p=[],f=a.type;if(!t._callbacks[e])return[];for("keyup"==f&&m(e)&&(n=[e]),l=0;l<t._callbacks[e].length;++l)if(u=t._callbacks[e][l],(r||!u.seq||o[u.seq]==u.level)&&f==u.action&&("keypress"==f&&!a.metaKey&&!a.ctrlKey||(c=n,d=u.modifiers,c.sort().join(",")===d.sort().join(",")))){var h=!r&&u.combo==s,b=r&&u.seq==r&&u.level==i;(h||b)&&t._callbacks[e].splice(l,1),p.push(u)}return p}function c(e,n,o,a){t.stopCallback(n,n.target||n.srcElement,o,a)||!1===e(n,o)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(n),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(n))}function d(e){"number"!==typeof e.which&&(e.which=e.keyCode);var n=h(e);n&&("keyup"!=e.type||a!==n?t.handleKey(n,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):a=!1)}function p(e,t,r,s){function u(t){return function(){i=t,++o[e],clearTimeout(n),n=setTimeout(l,1e3)}}function d(t){c(r,t,e),"keyup"!==s&&(a=h(t)),setTimeout(l,10)}o[e]=0;for(var p=0;p<t.length;++p){var f=p+1===t.length?d:u(s||y(t[p+1]).action);b(t[p],f,s,e,p)}}function b(e,n,o,a,r){t._directMap[e+":"+o]=n;var s,i=(e=e.replace(/\s+/g," ")).split(" ");i.length>1?p(e,i,n,o):(s=y(e,o),t._callbacks[s.key]=t._callbacks[s.key]||[],u(s.key,s.modifiers,{type:s.action},a,e,r),t._callbacks[s.key][a?"unshift":"push"]({callback:n,modifiers:s.modifiers,action:s.action,seq:a,level:r,combo:e}))}t._handleKey=function(e,t,n){var o,a=u(e,t,n),r={},d=0,p=!1;for(o=0;o<a.length;++o)a[o].seq&&(d=Math.max(d,a[o].level));for(o=0;o<a.length;++o)if(a[o].seq){if(a[o].level!=d)continue;p=!0,r[a[o].seq]=1,c(a[o].callback,n,a[o].combo,a[o].seq)}else p||c(a[o].callback,n,a[o].combo);var f="keypress"==n.type&&s;n.type!=i||m(e)||f||l(r),s=p&&"keydown"==n.type},t._bindMultiple=function(e,t,n){for(var o=0;o<e.length;++o)b(e[o],t,n)},f(e,"keypress",d),f(e,"keydown",d),f(e,"keyup",d)}}("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null)}}]);