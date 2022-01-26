(this["webpackJsonpmonitor-demo"]=this["webpackJsonpmonitor-demo"]||[]).push([[3],{117:function(e,t,n){"use strict";t.a={fcp:{weight:.2,median:2500,p10:900},act:{weight:.3,median:2800,p10:1300},ccp:{weight:.5,median:3100,p10:1600}}},162:function(e,t,n){"use strict";var a=n(246),r=n(83),c=n(117),i=new a.a({appId:"monitor-demo",version:"1.0.0",immediately:!0,reportCallback:function(e){var t=r.a._store;console.log("metrics",e);var n=e.data,a=n.name,c=n.value,i=n.score;"first-contentful-paint"!==a&&"api-complete-time"!==a&&"custom-contentful-paint"!==a||t.dispatch({type:"performance/calcScore",payload:{name:a,value:c,score:i}}),t.dispatch({type:"performance/addMetrics",payload:e})},isCustomEvent:!0,logFpsCount:20,hashHistory:!0,maxWaitCCPDuration:6e4,scoreConfig:c.a});t.a=i},273:function(e,t,n){},278:function(e,t,n){},338:function(e,t,n){},584:function(e,t){},594:function(e,t,n){"use strict";n.r(t);n(273),n(0);var a=n(33),r=n.n(a),c=(n(162),n(38)),i=(n(270),n(103)),o=n.n(i),s=n(255),l=n(83);Object(s.a)({dsn:"https://chryseis.cn/api",maxBreadcrumbs:100,beforeAppAjaxSend:function(e,t){e.method;var n=e.url;if(/(http(?:s|):).*/.test(n)){var a=n.replace(/(http(?:s|):).*/,"$1");window.location.protocol!==a&&o.a.error({content:"\u8d44\u6e90\u4e0e\u7ad9\u70b9\u534f\u8bae\u4e0d\u4e00\u81f4",className:"monitor-message"})}},beforePushBreadcrumb:function(e,t){l.a._store.dispatch({type:"error/addItem",payload:Object(c.a)(Object(c.a)({},t),{},{time:+new Date})})}});var u=n(12);r.a.render(Object(u.jsx)(l.b,{}),document.getElementById("root"))},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return Z}));var a={};n.r(a),n.d(a,"performance",(function(){return X})),n.d(a,"error",(function(){return Y}));var r=n(115),c=n(39),i=(n(278),n(38)),o=n(0),s=n.n(o),l=(n(279),n(247)),u=n.n(l),d=n(162),m=n(12);var f=function(){return Object(o.useEffect)((function(){return function(){d.a.customContentfulPaint()}}),[]),Object(m.jsx)("div",{className:"flex-1 p-5",children:Object(m.jsx)(u.a,{})})},b=function(e){var t=s.a.lazy(e);return function(e){return Object(m.jsx)(o.Suspense,{fallback:Object(m.jsx)(f,{}),children:Object(m.jsx)(t,Object(i.a)({},e))})}},j=[{title:"Performance",exact:!0,path:"/",component:b((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(11),n.e(7)]).then(n.bind(null,704))}))},{title:"Error",exact:!0,path:"/error",component:b((function(){return Promise.all([n.e(0),n.e(1),n.e(10),n.e(5)]).then(n.bind(null,705))}))},{title:"Calculator",exact:!0,path:"/calculator",component:b((function(){return Promise.all([n.e(0),n.e(2),n.e(4)]).then(n.bind(null,702))}))},{title:"Example",exact:!0,path:"/example",component:b((function(){return Promise.all([n.e(12),n.e(6)]).then(n.bind(null,703))}))}],p=n(68),x=(n(126),n(53)),h=n.n(x),O=(n(338),n(166)),v=(n(167),n(101)),y=n.n(v),g=n(76),w=(n(194),n(44)),I=n.n(w),N=n(46),S=n(124),k=h.a.Content,z=h.a.Header,C={"page-information":"\u9875\u9762\u4fe1\u606f","network-information":"\u7f51\u7edc\u4fe1\u606f","device-information":"\u8bbe\u5907\u4fe1\u606f","navigation-timing":"\u5bfc\u822a\u52a0\u8f7d\u65f6\u95f4","first-paint":"\u7b2c\u4e00\u4e2a\u50cf\u7d20\u6e32\u67d3\u65f6\u95f4","first-contentful-paint":"\u7b2c\u4e00\u4e2a\u5143\u7d20\u6e32\u67d3\u65f6\u95f4","first-input-delay":"\u7528\u6237\u7b2c\u4e00\u6b21\u8f93\u5165\u5ef6\u8fdf","largest-contentful-paint":"\u6700\u5927\u5143\u7d20\u6e32\u67d3\u65f6\u95f4","custom-contentful-paint":"\u9875\u9762\u5b8c\u6210\u65f6\u6e32\u67d3\u65f6\u95f4",fps:"\u9875\u9762\u5237\u65b0\u7387","api-complete-time":"\u9996\u5c4f\u63a5\u53e3\u8bf7\u6c42\u5b8c\u6210\u65f6\u95f4","resource-flow":"\u8d44\u6e90\u52a0\u8f7d\u5217\u8868","cumulative-layout-shift":"\u9875\u9762\u610f\u5916\u4f4d\u79fb\u91cf"},M=[{title:"\u6307\u6807",dataIndex:"metrics",key:"metrics"},{title:"\u63cf\u8ff0",dataIndex:"describe",key:"describe"},{title:"\u4f1a\u8bddid",dataIndex:"sectionId",key:"sectionId"},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"time",key:"time"}];function P(e){var t=e.data,n=e.contentStyle,a=e.size;return isNaN(Number(t))?Array.isArray(t)?t.map((function(e,t){return Object(m.jsx)(I.a,{className:"mb-5",bordered:!0,contentStyle:n,size:a,title:e.name,children:Object.entries(JSON.parse(JSON.stringify(e))).map((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(I.a.Item,{label:n,children:a},n)}))},t)})):Object(m.jsx)(I.a,{bordered:!0,contentStyle:n,size:a,children:Object.entries(t).map((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(I.a.Item,{label:n,children:a},n)}))}):Object(m.jsx)(I.a,{bordered:!0,contentStyle:n,size:a,children:Object(m.jsx)(I.a.Item,{label:"value",children:t})})}function H(e){var t=e.name,n=e.value;return Object(m.jsx)(P,{name:t,data:n,contentStyle:{backgroundColor:"#fff"},size:"small"})}var R=Object(N.c)((function(e){return{performance:e.performance}}))((function(e){var t=e.performance,n=Object(o.useMemo)((function(){return t.metricsItems.map((function(e,t){var n=e.sectionId,a=e.appId,r=e.data,c=r.name,i=r.value,o=e.timestamp;return{key:t,appId:a,sectionId:n,metrics:c,describe:C[c],value:i,time:Object(S.a)(o,"yyyy-MM-dd HH:mm:ss")}}))}),[t]);return Object(m.jsxs)(k,{className:"flex flex-col w-full",children:[Object(m.jsx)(z,{className:"flex items-center text-white text-2xl bg-blue-200 shadow-sm",children:"Performance Metrics"}),Object(m.jsx)("div",{className:"flex-1 overflow-auto",children:Object(m.jsx)(y.a,{pagination:!1,columns:M,dataSource:n,sticky:!0,expandable:{expandedRowRender:function(e){return Object(m.jsx)(H,Object(i.a)({},e))}}})})]})})),E=(n(553),n(251)),A=n.n(E),B=n(3),F=n.n(B),J=n(250),D=h.a.Header,_=h.a.Content,W=[{title:"\u7c7b\u522b",dataIndex:"category",key:"category",render:function(e){return Object(m.jsx)("i",{className:F()("icon","iconfont",{user:"icon-actions",http:"icon-http",exception:"icon-Exception",debug:"icon-debug"}[e],"text-xl")})}},{title:"\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u7b49\u7ea7",dataIndex:"level",key:"level",render:function(e){return Object(m.jsx)(A.a,{color:"#93C5FD",children:e})}},{title:"\u65f6\u95f4",dataIndex:"time",key:"time"}];function $(e){var t=e.data,n=e.contentStyle,a=e.size;return Object(J.isString)(t)?Object(m.jsx)(I.a,{bordered:!0,contentStyle:n,size:a,children:Object(m.jsx)(I.a.Item,{label:"value",children:t})}):Object(m.jsx)(I.a,{bordered:!0,contentStyle:n,size:a,children:Object.entries(t).map((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(I.a.Item,{label:n,children:JSON.stringify(a)},n)}))})}function L(e){var t=e.data;return Object(m.jsx)($,{data:t,contentStyle:{backgroundColor:"#fff"},size:"small"})}var q=Object(N.c)((function(e){return{actionItems:e.error.actionItems}}))((function(e){var t=e.actionItems,n=Object(o.useMemo)((function(){return t.map((function(e,t){var n=e.type,a=e.category,r=e.data,c=e.level,i=e.time;return{key:t,type:n,category:a,level:c,time:Object(S.a)(i,"yyyy-MM-dd HH:mm:ss"),data:r}}))}),[t]);return Object(m.jsxs)(_,{className:"flex flex-col w-full h-full ",children:[Object(m.jsx)(D,{className:"flex items-center text-white text-2xl bg-blue-200 shadow-sm",children:"Action List"}),Object(m.jsx)("div",{className:"flex-1 overflow-auto",children:Object(m.jsx)(y.a,{pagination:!1,columns:W,dataSource:n,sticky:!0,expandable:{expandedRowRender:function(e){return Object(m.jsx)(L,Object(i.a)({},e))}}})})]})})),G=h.a.Header,K=h.a.Content;var Q=function(e){var t=e.children;return Object(m.jsxs)(h.a,{className:"flex flex-col h-screen",children:[Object(m.jsxs)(G,{className:"flex items-center justify-between  h-16 px-5 text-2xl text-red-50 bg-blue-300 shadow-xl",children:[Object(m.jsx)("div",{children:"Monitor"}),Object(m.jsx)("a",{href:"https://github.com/clouDr-f2e/monitor",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"icon iconfont icon-github-fill text-3xl text-white"})})]}),Object(m.jsx)(h.a,{className:"relative flex flex-1 split-wrapper",children:Object(m.jsxs)(O.a,{split:"vertical",minSize:200,defaultSize:"40%",children:[Object(m.jsx)(K,{className:"h-full rounded-l-md bg-white split-wrapper",children:Object(m.jsxs)(O.a,{split:"horizontal",minSize:300,maxSize:600,defaultSize:"50%",pane2Style:{overflow:"hidden"},children:[Object(m.jsx)(R,{}),Object(m.jsx)(q,{})]})}),Object(m.jsx)(K,{className:"flex flex-col h-full rounded-r-md bg-white",children:t})]})})]})};var T=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)([]),n=Object(p.e)(),a=Object(p.f)(),r=Object(o.useState)({}),c=Object(g.a)(r,2),i=c[0],s=c[1],l=Object(o.useCallback)((function(e){n.push(e.path)}),[n]);return Object(o.useEffect)((function(){if(e.current){var n=e.current.getBoundingClientRect().x,r=t.current.find((function(e){return e.id===a.pathname}));if(r){var c=r.getBoundingClientRect().x-n;s({width:r.clientWidth+"px",transform:"translate3d(".concat(c,"px,0px,0px)")})}}}),[a.pathname]),Object(m.jsxs)("div",{className:"relative flex items-center h-16 shadow-sm",ref:e,children:[j.map((function(e,n){return Object(m.jsx)("div",{ref:function(e){return t.current[n]=e},id:e.path,className:F()("px-3 py-2","text-xl",{"text-blue-300":a.pathname===e.path,"text-gray-800":a.pathname!==e.path},"cursor-pointer","hover:text-blue-300"),onClick:function(){return l(e)},children:e.title},e.path)})),Object(m.jsx)("div",{className:"absolute z-10 left-0 bottom-0 h-0.5 bg-blue-300 transition-transform transition-all duration-200 ease-linear",style:i}),Object(m.jsx)("div",{className:"absolute left-0 bottom-0 w-full h-px bg-bg-gray-10"})]})};var U=function(e){var t=e.history;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(Q,{children:Object(m.jsxs)(p.b,{history:t,children:[Object(m.jsx)(T,{}),Object(m.jsxs)(p.c,{children:[j.map((function(e){return Object(m.jsx)(p.a,Object(i.a)({},e),e.path)})),Object(m.jsx)(p.a,{component:function(){return Object(m.jsx)("div",{children:"404"})}})]})]})})})},V=n(117),X={namespace:"performance",state:{metricsItems:[],scores:[]},reducers:{addMetrics:function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),{},{metricsItems:e.metricsItems.concat(n)})},calcScore:function(e,t){var n=t.payload,a=n.name,r=n.value,c=n.score,o="number"!==typeof r?r.time:r,s=V.a[null===a||void 0===a?void 0:a.replace(/(-|)([a-z])[a-z]*/g,"$2")].weight;return Object(i.a)(Object(i.a)({},e),{},{scores:e.scores.concat({title:a,score:c.toFixed(2),value:o.toFixed(2),weight:s,key:a})})}},effects:{}},Y={namespace:"error",state:{actionItems:[]},reducers:{addItem:function(e,t){var n=t.payload;return{actionItems:e.actionItems.concat(n)}}}},Z=Object(r.a)({history:Object(c.a)()});for(var ee in a)Z.model(a[ee]);Z.router(U);var te=Z.start();t.b=te}},[[594,8,9]]]);
//# sourceMappingURL=main.e6641d55.chunk.js.map