(this["webpackJsonpmonitor-demo"]=this["webpackJsonpmonitor-demo"]||[]).push([[3],{320:function(t,e,n){"use strict";var c=n(328),r=n(11);e.a=function(t){var e=t.title;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"text-3xl font-semibold",children:e}),Object(r.jsx)(c.a,{type:"horizontal"})]})}},321:function(t,e,n){"use strict";var c=n(37),r=n(11);e.a=function(t){return function(e){return Object(r.jsx)("div",{className:"flex-1 p-5 overflow-auto",children:Object(r.jsx)(t,Object(c.a)({},e))})}}},326:function(t,e,n){"use strict";var c=n(329),r=n.n(c).a.create(),o={get:function(t,e){return r.get(t,e)},post:function(t,e,n){return r.post(t,e,n)}};e.a=o},368:function(t,e,n){"use strict";n.r(e);var c=n(37),r=n(314),o=n(199),s=n(361),i=n(60),a=n(366),u=n(320),f=n(321),l=n(82),h=n(326),j={get:function(t){return fetch(t).then((function(t){return t.json()}))}},m=n(11),b=r.a.Content,d=[{title:"\u8df3\u8f6c\u9875\u9762",action:function(){return l.a._history.push("/")}},{title:"\u89e6\u53d1Xhr\u8bf7\u6c42",action:function(){h.a.get("http://blingtron.chryseis.cn/performance.json").then((function(t){o.b.success({content:"request success",className:"monitor-message"}).then((function(t){}))}))}},{title:"\u89e6\u53d1Xhr\u8bf7\u6c42Error",action:function(){h.a.get("https://blingtron.chryseis.cn/performance.json").catch((function(t){o.b.error({content:"request error",className:"monitor-message"}).then((function(t){}))}))}},{title:"\u89e6\u53d1Fetch\u8bf7\u6c42",action:function(){j.get("./data/performance.json").then((function(t){o.b.success({content:"fetch success",className:"monitor-message"}).then((function(t){}))}))}},{title:"\u89e6\u53d1Fetch\u8bf7\u6c42Error",action:function(){j.get("https://blingtron.chryseis.cn/performance.json").catch((function(t){o.b.error({content:"fetch error",className:"monitor-message"}).then((function(t){}))}))}},{title:"\u89e6\u53d1Js Error",action:function(){throw new p("js error")}},{title:"\u89e6\u53d1unhandledrejection",action:function(){return new Promise((function(t){t("reject")})).then((function(){throw new p("reject")}))}},{title:"\u89e6\u53d1\u7528\u6237\u4e8b\u4ef6",action:function(){o.b.success({content:"hello world",className:"monitor-message"}).then((function(t){}))}}];function g(t){var e=t.title,n=t.action;return Object(m.jsx)(s.a,{title:e,children:Object(m.jsx)(i.a,{type:"primary",onClick:n,children:"have a try"})})}function p(){return Object(m.jsxs)(b,{className:"overflow-auto",children:[Object(m.jsx)(u.a,{title:"Error"}),Object(m.jsx)(a.b,{grid:{gutter:16,xs:1,sm:2,md:2,lg:2,xl:3,xxl:3},dataSource:d,renderItem:function(t){return Object(m.jsx)(a.b.Item,{children:Object(m.jsx)(g,Object(c.a)({},t))})}})]})}e.default=Object(f.a)(p)}}]);
//# sourceMappingURL=p_error.b305bc0e.chunk.js.map