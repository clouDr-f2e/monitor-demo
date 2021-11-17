(this["webpackJsonpmonitor-demo"]=this["webpackJsonpmonitor-demo"]||[]).push([[1],{139:function(e,t,n){"use strict";var a=n(175),r=n(78),c=new a.a({appId:"monitor-demo",version:"1.0.0",immediately:!0,reportCallback:function(e){var t=r.a._store,n=e.data,a=n.name,c=n.value;"first-contentful-paint"!==a&&"api-complete-time"!==a&&"custom-contentful-paint"!==a||t.dispatch({type:"performance/calcScore",payload:{name:a,value:c}}),t.dispatch({type:"performance/addMetrics",payload:e})},needCCP:!0,logFpsCount:20,hashHistory:!0});t.a=c},145:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(90),r=function(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,a=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),c=/(?:iPad|PlayBook)/.test(e)||a&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),i=/(?:iPhone)/.test(e)&&!c;return{isTablet:c,isPhone:i,isAndroid:a,isPc:!i&&!a&&!n}}();function c(e){var t=Object(a.b)(e,.995),n=Object(a.b)(e,.05),r=1e3*Math.floor(t/1e3),c=1e3*Math.ceil(n/1e3),i=10;return"unitless"===e.units&&(r=0,c=Math.ceil(100*n)/100,i=.01),{min:r,max:c,step:i}}},169:function(e,t,n){"use strict";t.a={fcp:{"4g":{mobile:{weight:.3,median:4500,p10:1500},pc:{weight:.3,median:4e3,p10:1e3}},"3g":{mobile:{weight:.3,median:6e3,p10:3e3},pc:{weight:.3,median:6e3,p10:2500}}},act:{"4g":{mobile:{weight:.3,median:6500,p10:2500},pc:{weight:.3,median:6e3,p10:2e3}},"3g":{mobile:{weight:.3,median:8e3,p10:4e3},pc:{weight:.3,median:7500,p10:3500}}},ccp:{"4g":{mobile:{weight:.4,median:7500,p10:3500},pc:{weight:.4,median:7e3,p10:3e3}},"3g":{mobile:{weight:.4,median:9e3,p10:5e3},pc:{weight:.4,median:8500,p10:4500}}}}},192:function(e,t,n){},197:function(e,t,n){},199:function(e,t,n){},298:function(e,t){},302:function(e,t,n){"use strict";n.r(t);n(192),n(0);var a=n(28),r=n.n(a),c=(n(139),n(30)),i=n(189),o=n(188),s=n(78);Object(o.a)({dsn:"https://chryseis.com/api",maxBreadcrumbs:100,beforeAppAjaxSend:function(e){e.method;var t=e.url.replace(/(http(?:s|):).*/,"$1");window.location.protocol!==t&&i.b.error("\u8bf7\u6c42\u8d44\u6e90\u4e0e\u7ad9\u70b9\u534f\u8bae\u4e0d\u4e00\u81f4")},beforePushBreadcrumb:function(e,t){s.a._store.dispatch({type:"error/addItem",payload:Object(c.a)(Object(c.a)({},t),{},{time:+new Date})})}});var l=n(11);r.a.render(Object(l.jsx)(s.b,{}),document.getElementById("root"))},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));var a={};n.r(a),n.d(a,"performance",(function(){return K})),n.d(a,"error",(function(){return U}));var r=n(106),c=n(31),i=(n(197),n(30)),o=n(0),s=n.n(o),l=n(306),u=n(139),d=n(11);var m=function(){return Object(o.useEffect)((function(){return function(){u.a.customContentfulPaint()}}),[]),Object(d.jsx)("div",{className:"flex-1 p-5",children:Object(d.jsx)(l.a,{})})},b=function(e){var t=s.a.lazy(e);return function(e){return Object(d.jsx)(o.Suspense,{fallback:Object(d.jsx)(m,{}),children:Object(d.jsx)(t,Object(i.a)({},e))})}},f=[{title:"Performance",exact:!0,path:"/",component:b((function(){return Promise.all([n.e(0),n.e(9),n.e(5)]).then(n.bind(null,358))}))},{title:"Error",exact:!0,path:"/error",component:b((function(){return Promise.all([n.e(0),n.e(8),n.e(3)]).then(n.bind(null,350))}))},{title:"Calculator",exact:!0,path:"/calculator",component:b((function(){return n.e(2).then(n.bind(null,354))}))},{title:"Example",exact:!0,path:"/example",component:b((function(){return Promise.all([n.e(10),n.e(4)]).then(n.bind(null,355))}))}],p=n(54),j=(n(199),n(304)),h=n(142),x=n(64),O=n(307),v=n(305),y=n(37),g=n(124),w=j.a.Content,M=j.a.Header,I={"page-information":"\u9875\u9762\u4fe1\u606f","network-information":"\u7f51\u7edc\u4fe1\u606f","device-information":"\u8bbe\u5907\u4fe1\u606f","navigation-timing":"\u5bfc\u822a\u52a0\u8f7d\u65f6\u95f4","first-paint":"\u7b2c\u4e00\u4e2a\u50cf\u7d20\u6e32\u67d3\u65f6\u95f4","first-contentful-paint":"\u7b2c\u4e00\u4e2a\u5143\u7d20\u6e32\u67d3\u65f6\u95f4","first-input-delay":"\u7528\u6237\u7b2c\u4e00\u6b21\u8f93\u5165\u5ef6\u8fdf","largest-contentful-paint":"\u6700\u5927\u5143\u7d20\u6e32\u67d3\u65f6\u95f4","custom-contentful-paint":"\u9875\u9762\u5b8c\u6210\u65f6\u6e32\u67d3\u65f6\u95f4",fps:"\u9875\u9762\u5237\u65b0\u7387","api-complete-time":"\u9996\u5c4f\u63a5\u53e3\u8bf7\u6c42\u5b8c\u6210\u65f6\u95f4","resource-flow":"\u8d44\u6e90\u52a0\u8f7d\u5217\u8868","cumulative-layout-shift":"\u9875\u9762\u610f\u5916\u4f4d\u79fb\u91cf"},S=[{title:"\u6307\u6807",dataIndex:"metrics",key:"metrics"},{title:"\u63cf\u8ff0",dataIndex:"describe",key:"describe"},{title:"\u4f1a\u8bddid",dataIndex:"sectionId",key:"sectionId"},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"time",key:"time"}];function k(e){var t=e.data,n=e.contentStyle,a=e.size;return isNaN(Number(t))?Array.isArray(t)?t.map((function(e,t){return Object(d.jsx)(O.b,{className:"mb-5",bordered:!0,contentStyle:n,size:a,title:"resource-".concat(t+1),children:Object.entries(JSON.parse(JSON.stringify(e))).map((function(e){var t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(d.jsx)(O.b.Item,{label:n,children:a},n)}))},t)})):Object(d.jsx)(O.b,{bordered:!0,contentStyle:n,size:a,children:Object.entries(t).map((function(e){var t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(d.jsx)(O.b.Item,{label:n,children:a},n)}))}):Object(d.jsx)(O.b,{bordered:!0,contentStyle:n,size:a,children:Object(d.jsx)(O.b.Item,{label:"value",children:t})})}function N(e){var t=e.name,n=e.value;return Object(d.jsx)(k,{name:t,data:n,contentStyle:{backgroundColor:"#fff"},size:"small"})}var z=Object(y.c)((function(e){return{performance:e.performance}}))((function(e){var t=e.performance,n=Object(o.useMemo)((function(){return t.metricsItems.map((function(e,t){var n=e.sectionId,a=e.appId,r=e.data,c=r.name,i=r.value,o=e.timestamp;return{key:t,appId:a,sectionId:n,metrics:c,describe:I[c],value:i,time:Object(g.a)(o,"yyyy-MM-dd HH:mm:ss")}}))}),[t]);return Object(d.jsxs)(w,{className:"flex flex-col w-full",children:[Object(d.jsx)(M,{className:"flex items-center text-white text-2xl bg-blue-200 shadow-sm",children:"Performance Metrics"}),Object(d.jsx)("div",{className:"flex-1 overflow-auto",children:Object(d.jsx)(v.a,{pagination:!1,columns:S,dataSource:n,sticky:!0,expandable:{expandedRowRender:function(e){return Object(d.jsx)(N,Object(i.a)({},e))}}})})]})})),C=n(308),P=n(4),R=n.n(P),A=n(181),H=j.a.Header,q=j.a.Content,B=[{title:"\u7c7b\u522b",dataIndex:"category",key:"category",render:function(e){return Object(d.jsx)("i",{className:R()("icon","iconfont",{user:"icon-actions",http:"icon-http",exception:"icon-Exception",debug:"icon-debug"}[e],"text-xl")})}},{title:"\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u7b49\u7ea7",dataIndex:"level",key:"level",render:function(e){return Object(d.jsx)(C.a,{color:"#93C5FD",children:e})}},{title:"\u65f6\u95f4",dataIndex:"time",key:"time"}];function E(e){var t=e.data,n=e.contentStyle,a=e.size;return Object(A.isString)(t)?Object(d.jsx)(O.b,{bordered:!0,contentStyle:n,size:a,children:Object(d.jsx)(O.b.Item,{label:"value",children:t})}):Object(d.jsx)(O.b,{bordered:!0,contentStyle:n,size:a,children:Object.entries(t).map((function(e){var t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(d.jsx)(O.b.Item,{label:n,children:JSON.stringify(a)},n)}))})}function T(e){var t=e.data;return Object(d.jsx)(E,{data:t,contentStyle:{backgroundColor:"#fff"},size:"small"})}var F=Object(y.c)((function(e){return{actionItems:e.error.actionItems}}))((function(e){var t=e.actionItems,n=Object(o.useMemo)((function(){return t.map((function(e,t){var n=e.type,a=e.category,r=e.data,c=e.level,i=e.time;return{key:t,type:n,category:a,level:c,time:Object(g.a)(i,"yyyy-MM-dd HH:mm:ss"),data:r}}))}),[t]);return Object(d.jsxs)(q,{className:"flex flex-col w-full h-full ",children:[Object(d.jsx)(H,{className:"flex items-center text-white text-2xl bg-blue-200 shadow-sm",children:"Action List"}),Object(d.jsx)("div",{className:"flex-1 overflow-auto",children:Object(d.jsx)(v.a,{pagination:!1,columns:B,dataSource:n,sticky:!0,expandable:{expandedRowRender:function(e){return Object(d.jsx)(T,Object(i.a)({},e))}}})})]})})),J=j.a.Header,D=j.a.Content;var Q=function(e){var t=e.children;return Object(d.jsxs)(j.a,{className:"flex flex-col h-screen dark",children:[Object(d.jsxs)(J,{className:"flex items-center justify-between  h-16 px-5 text-2xl text-red-50 bg-blue-300 shadow-xl",children:[Object(d.jsx)("div",{children:"Monitor"}),Object(d.jsx)("a",{href:"https://github.com/clouDr-f2e/monitor",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"icon iconfont icon-github-fill text-3xl"})})]}),Object(d.jsx)(j.a,{className:"relative flex flex-1 split-wrapper",children:Object(d.jsxs)(h.a,{split:"vertical",minSize:200,defaultSize:"40%",children:[Object(d.jsx)(D,{className:"h-full rounded-l-md bg-white split-wrapper",children:Object(d.jsxs)(h.a,{split:"horizontal",minSize:300,maxSize:600,defaultSize:"50%",pane2Style:{overflow:"hidden"},children:[Object(d.jsx)(z,{}),Object(d.jsx)(F,{})]})}),Object(d.jsx)(D,{className:"flex flex-col h-full rounded-r-md bg-white",children:t})]})})]})};var _=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)([]),n=Object(p.e)(),a=Object(p.f)(),r=Object(o.useState)({}),c=Object(x.a)(r,2),i=c[0],s=c[1],l=Object(o.useCallback)((function(e){n.push(e.path)}),[n]);return Object(o.useEffect)((function(){if(e.current){var n=e.current.getBoundingClientRect().x,r=t.current.find((function(e){return e.id===a.pathname}));if(r){var c=r.getBoundingClientRect().x-n;s({width:r.clientWidth+"px",transform:"translate3d(".concat(c,"px,0px,0px)")})}}}),[a.pathname]),Object(d.jsxs)("div",{className:"relative flex items-center h-16 shadow-sm",ref:e,children:[f.map((function(e,n){return Object(d.jsx)("div",{ref:function(e){return t.current[n]=e},id:e.path,className:R()("px-3 py-2","text-xl",{"text-blue-300":a.pathname===e.path,"text-gray-800":a.pathname!==e.path},"cursor-pointer","hover:text-blue-300"),onClick:function(){return l(e)},children:e.title},e.path)})),Object(d.jsx)("div",{className:"absolute z-10 left-0 bottom-0 h-0.5 bg-blue-300 transition-transform transition-all duration-200 ease-linear",style:i}),Object(d.jsx)("div",{className:"absolute left-0 bottom-0 w-full h-px bg-bg-gray-10"})]})};var W=function(e){var t=e.history;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Q,{children:Object(d.jsxs)(p.b,{history:t,children:[Object(d.jsx)(_,{}),Object(d.jsxs)(p.c,{children:[f.map((function(e){return Object(d.jsx)(p.a,Object(i.a)({},e),e.path)})),Object(d.jsx)(p.a,{component:function(){return Object(d.jsx)("div",{children:"404"})}})]})]})})})},$=n(90),L=n(169),G=n(145),K={namespace:"performance",state:{metricsItems:[],scores:[]},reducers:{addMetrics:function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),{},{metricsItems:e.metricsItems.concat(n)})},calcScore:function(e,t){var n=t.payload,a=n.name,r=n.value,c=e.metricsItems.find((function(e){return"network-information"===e.data.name})).data.value.effectiveType,o=void 0===c?"4g":c,s=L.a[null===a||void 0===a?void 0:a.replace(/(-|)([a-z])[a-z]*/g,"$2")][o][G.b.isPc?"pc":"mobile"],l=s.median,u=s.p10,d=s.weight,m=(100*Object($.a)({median:l,p10:u},r)).toFixed(2);return Object(i.a)(Object(i.a)({},e),{},{scores:e.scores.concat({title:a,score:m,value:r,weight:d,key:a})})}},effects:{}},U={namespace:"error",state:{actionItems:[]},reducers:{addItem:function(e,t){var n=t.payload;return{actionItems:e.actionItems.concat(n)}}}},V=Object(r.a)({history:Object(c.a)()});for(var X in a)V.model(a[X]);V.router(W);var Y=V.start();t.b=Y},90:function(e,t,n){"use strict";function a(e,t){var n=e.median,a=e.podr,r=e.p10;a||(a=c(n,r));var i=Math.log(n),o=Math.log(a/n),s=Math.sqrt(1-3*o-Math.sqrt((o-3)*(o-3)-8))/2;return(1-function(e){var t=e<0?-1:1,n=1/(1+.3275911*(e=Math.abs(e)));return t*(1-n*(.254829592+n*(n*(1.421413741+n*(1.061405429*n-1.453152027))-.284496736))*Math.exp(-e*e))}((Math.log(t)-i)/(Math.SQRT2*s)))/2}function r(e,t){var n=e.median,a=e.podr,r=e.p10;a||(a=c(n,r));var i=Math.log(n),o=Math.log(a/n),s=Math.sqrt(1-3*o-Math.sqrt((o-3)*(o-3)-8))/2;return Math.exp(i+s*Math.SQRT2*function(e){var t=e<0?-1:1,n=Math.log(1-e*e),a=2/(.147*Math.PI)+n/2,r=Math.sqrt(a*a-n/.147);return t*Math.sqrt(r-a)}(1-2*t))}function c(e,t){var n=Math.log(e),a=Math.abs(Math.log(t)-n)/(.9061938024368232*Math.SQRT2),r=-3*a-Math.sqrt(4+a*a);return Math.exp(n+a/2*r)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))}},[[302,6,7]]]);
//# sourceMappingURL=main.b4b86d50.chunk.js.map