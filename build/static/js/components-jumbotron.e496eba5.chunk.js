(window["webpackJsonpgogo-react"]=window["webpackJsonpgogo-react"]||[]).push([[33],{1122:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return v});var s=t(196),n=t(195),r=t(198),c=t(197),l=t(199),o=t(5),u=t.n(o),i=t(213),m=t(214),d=t(218),b=t(648),p=t(353),f=t(200),g=t(201),j=t(203),v=function(e){function a(){return Object(s.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return u.a.createElement(o.Fragment,null,u.a.createElement(i.a,null,u.a.createElement(g.a,{xxs:"12"},u.a.createElement(j.a,{heading:"menu.jumbotron",match:this.props.match}),u.a.createElement(g.b,{className:"mb-5"}))),u.a.createElement(i.a,null,u.a.createElement(g.a,{xxs:"12",className:"mb-4"},u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement("h1",{className:"display-4"},u.a.createElement(f.a,{id:"jumbotron.hello-world"})),u.a.createElement("p",{className:"lead"},u.a.createElement(f.a,{id:"jumbotron.lead"})),u.a.createElement("hr",{className:"my-4"}),u.a.createElement("p",null,u.a.createElement(f.a,{id:"jumbotron.lead-detail"})),u.a.createElement("p",{className:"lead mb-0"},u.a.createElement(p.a,{color:"primary",size:"lg"},u.a.createElement(f.a,{id:"jumbotron.learn-more"})))))))))}}]),a}(o.Component)},201:function(e,a,t){"use strict";t.d(a,"a",function(){return c}),t.d(a,"b",function(){return l});var s=t(5),n=t.n(s),r=t(212),c=function(e){return n.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},l=function(e){return n.a.createElement("div",{className:"separator ".concat(e.className)})}},203:function(e,a,t){"use strict";var s=t(5),n=t.n(s),r=t(215),c=t(216),l=t(202),o=t(200),u=function(e){return n.a.createElement(o.a,{id:"menu.".concat(e)})},i=function(e,a,t){return 0===t?"":e.split(a)[0]+a},m=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter(function(e){return-1===e.indexOf(":")})),n.a.createElement(s.Fragment,null,n.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map(function(e,s){return n.a.createElement(c.a,{key:s,active:t.length===s+1},t.length!==s+1?n.a.createElement(l.b,{to:"/"+i(a,e,s)},u(e)):u(e))})))};a.a=function(e){var a=e.heading,t=e.match;return n.a.createElement(s.Fragment,null,a&&n.a.createElement("h1",null,n.a.createElement(o.a,{id:a})),n.a.createElement(m,{match:t}))}},212:function(e,a,t){"use strict";var s=t(11),n=t(20),r=t(211),c=t.n(r),l=t(5),o=t.n(l),u=t(25),i=t.n(u),m=t(192),d=t.n(m),b=t(193),p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),g={tag:b.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},N=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,u=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach(function(a,s){var n=e[a];if(delete u[a],n||""===n){var r=!s;if(c()(n)){var l,o=r?"-":"-"+a+"-",m=v(r,a,n.size);i.push(Object(b.mapToCssModules)(d()(((l={})[m]=n.size||""===n.size,l["order"+o+n.order]=n.order||0===n.order,l["offset"+o+n.offset]=n.offset||0===n.offset,l)),t))}else{var p=v(r,a,n);i.push(p)}}}),i.length||i.push("col");var m=Object(b.mapToCssModules)(d()(a,i),t);return o.a.createElement(l,Object(s.a)({},u,{className:m}))};N.propTypes=g,N.defaultProps=j,a.a=N},213:function(e,a,t){"use strict";var s=t(11),n=t(20),r=t(5),c=t.n(r),l=t(25),o=t.n(l),u=t(192),i=t.n(u),m=t(193),d={tag:m.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},b=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,o=e.form,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.mapToCssModules)(i()(a,r?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(l,Object(s.a)({},u,{className:d}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},214:function(e,a,t){"use strict";var s=t(11),n=t(20),r=t(5),c=t.n(r),l=t(25),o=t.n(l),u=t(192),i=t.n(u),m=t(193),d={tag:m.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,o=e.inverse,u=e.outline,d=e.tag,b=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(m.mapToCssModules)(i()(a,"card",!!o&&"text-white",!!l&&"card-body",!!r&&(u?"border":"bg")+"-"+r),t);return c.a.createElement(d,Object(s.a)({},p,{className:f,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},215:function(e,a,t){"use strict";var s=t(11),n=t(20),r=t(5),c=t.n(r),l=t(25),o=t.n(l),u=t(192),i=t.n(u),m=t(193),d={tag:m.tagPropType,listTag:m.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},b=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,l=e.children,o=e.tag,u=e.listTag,d=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(m.mapToCssModules)(i()(a),r),f=Object(m.mapToCssModules)(i()("breadcrumb",t),r);return c.a.createElement(o,Object(s.a)({},b,{className:p,"aria-label":d}),c.a.createElement(u,{className:f},l))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},216:function(e,a,t){"use strict";var s=t(11),n=t(20),r=t(5),c=t.n(r),l=t(25),o=t.n(l),u=t(192),i=t.n(u),m=t(193),d={tag:m.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.active,l=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),u=Object(m.mapToCssModules)(i()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(l,Object(s.a)({},o,{className:u,"aria-current":r?"page":void 0}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b},218:function(e,a,t){"use strict";var s=t(11),n=t(20),r=t(5),c=t.n(r),l=t(25),o=t.n(l),u=t(192),i=t.n(u),m=t(193),d={tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(m.mapToCssModules)(i()(a,"card-body"),t);return c.a.createElement(l,Object(s.a)({},o,{className:u,ref:r}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},648:function(e,a,t){"use strict";var s=t(11),n=t(20),r=t(5),c=t.n(r),l=t(25),o=t.n(l),u=t(192),i=t.n(u),m=t(193),d={tag:m.tagPropType,fluid:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=e.fluid,o=Object(n.a)(e,["className","cssModule","tag","fluid"]),u=Object(m.mapToCssModules)(i()(a,"jumbotron",!!l&&"jumbotron-fluid"),t);return c.a.createElement(r,Object(s.a)({},o,{className:u}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b}}]);