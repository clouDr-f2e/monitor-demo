(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{292:function(e,t,n){"use strict";var c=n(297),r=n(10);t.a=function(e){var t=e.title;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"text-3xl font-semibold",children:t}),Object(r.jsx)(c.a,{type:"horizontal"})]})}},293:function(e,t,n){"use strict";var c=n(29),r=n(10);t.a=function(e){return function(t){return Object(r.jsx)("div",{className:"flex-1 p-5 overflow-auto",children:Object(r.jsx)(e,Object(c.a)({},t))})}}},338:function(e,t,n){"use strict";n.r(t);var c=n(29),r=n(287),a=n(331),s=n(292),o=n(293),i=n(10),l=r.a.Content;function m(e){var t=e.code;return Object(i.jsx)(a.a,Object(c.a)(Object(c.a)({},a.b),{},{code:t,language:"jsx",children:function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,s=e.getTokenProps;return Object(i.jsx)("pre",{className:t,style:Object(c.a)(Object(c.a)({},n),{},{padding:10}),children:r.map((function(e,t){return Object(i.jsxs)("div",Object(c.a)(Object(c.a)({className:"table-row"},a({line:e,key:t})),{},{children:[Object(i.jsx)("div",{className:"table-cell text-right pr-3 select-none opacity-50",children:t+1}),Object(i.jsx)("div",{className:"table-cell",children:e.map((function(e,t){return Object(i.jsx)("span",Object(c.a)({},s({token:e,key:t})))}))})]}),t)}))})}}))}t.default=Object(o.a)((function(){return Object(i.jsxs)(l,{className:"overflow-auto",children:[Object(i.jsx)(s.a,{title:"Example"}),Object(i.jsxs)(l,{children:[Object(i.jsxs)("section",{className:"flex flex-col mb-5",children:[Object(i.jsx)("h1",{className:"mb-4 text-2xl text-gray-700",children:" Performance "}),Object(i.jsx)("div",{className:"block mb-5",children:Object(i.jsx)("a",{className:"underline",href:"https://github.com/clouDr-f2e/monitor-demo/blob/main/src/utils/reportPerf.js",target:"_blank",children:"source code"})}),Object(i.jsx)(m,{code:"import { WebVitals } from '@zyf2e/monitor-web-performance'\nimport { app } from 'src/App'\n\nconst wv = new WebVitals({\n    appId: 'monitor-demo',\n    version: '1.0.0',\n    immediately: true,\n    reportCallback: (metrics) => {\n        const store = app._store\n\n        const {\n            data: { name, value },\n        } = metrics\n\n        if (name === 'first-contentful-paint' || name === 'api-complete-time' || name === 'custom-contentful-paint') {\n            store.dispatch({\n                type: 'performance/calcScore',\n                payload: {\n                    name,\n                    value,\n                },\n            })\n        }\n\n        store.dispatch({\n            type: 'performance/addMetrics',\n            payload: metrics,\n        })\n    },\n    needCCP: true,\n    logFpsCount: 20,\n    hashHistory: true,\n})\n\nexport default wv\n"})]}),Object(i.jsxs)("section",{className:"flex flex-col mb-5",children:[Object(i.jsx)("h1",{className:"mb-4 text-2xl text-gray-700",children:" Error "}),Object(i.jsx)("div",{className:"block mb-5",children:Object(i.jsx)("a",{className:"underline",href:"https://github.com/clouDr-f2e/monitor-demo/blob/main/src/utils/reportError.js",target:"_blank",children:"source code"})}),Object(i.jsx)(m,{code:"import { init } from '@zyf2e/monitor-web'\nimport { app } from 'src/App'\n\ninit({\n    dsn: 'https://chryseis.com/api',\n    maxBreadcrumbs: 100,\n    beforePushBreadcrumb(breadcrumb, data) {\n        app._store.dispatch({\n            type: 'error/addItem',\n            payload: { ...data, time: +new Date() },\n        })\n    },\n})\n"})]})]})]})}))}}]);
//# sourceMappingURL=p_example.8c6371b9.bundle.js.map