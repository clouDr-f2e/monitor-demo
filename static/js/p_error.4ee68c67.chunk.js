(this["webpackJsonpmonitor-demo"]=this["webpackJsonpmonitor-demo"]||[]).push([[2],{292:function(t,e,n){"use strict";var r=n(297),c=n(10);e.a=function(t){var e=t.title;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-3xl font-semibold",children:e}),Object(c.jsx)(r.a,{type:"horizontal"})]})}},293:function(t,e,n){"use strict";var r=n(29),c=n(10);e.a=function(t){return function(e){return Object(c.jsx)("div",{className:"flex-1 p-5 overflow-auto",children:Object(c.jsx)(t,Object(r.a)({},e))})}}},332:function(t,e,n){"use strict";n.r(e);var r=n(29),c=n(287),i=n(329),o=n(336),s=n(65),a=n(340),u=n(292),l=n(293),j=n(72),h=n(10),b=c.a.Content,f=[{title:"\u8df3\u8f6c\u9875\u9762",action:function(){return j.a._history.push("/")}},{title:"\u89e6\u53d1Xhr\u8bf7\u6c42"},{title:"\u89e6\u53d1Fetch\u8bf7\u6c42"},{title:"\u89e6\u53d1Js Error",action:function(){throw new x("js error")}},{title:"\u89e6\u53d1unhandledrejection",action:function(){return new Promise((function(t){t("reject")})).then((function(){throw new x("reject")}))}},{title:"\u89e6\u53d1\u7528\u6237\u4e8b\u4ef6",action:function(){i.b.success({content:"hello",className:"monitor-message"}).then((function(t){}))}}];function d(t){var e=t.title,n=t.action;return Object(h.jsx)(o.a,{title:e,children:Object(h.jsx)(s.a,{type:"primary",onClick:n,children:"have a try"})})}function x(){return Object(h.jsxs)(b,{className:"overflow-auto",children:[Object(h.jsx)(u.a,{title:"Error"}),Object(h.jsx)(a.b,{grid:{gutter:16,xs:1,sm:2,md:2,lg:2,xl:3,xxl:3},dataSource:f,renderItem:function(t){return Object(h.jsx)(a.b.Item,{children:Object(h.jsx)(d,Object(r.a)({},t))})}})]})}e.default=Object(l.a)(x)}}]);
//# sourceMappingURL=p_error.4ee68c67.chunk.js.map