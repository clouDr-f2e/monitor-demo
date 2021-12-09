(this["webpackJsonpmonitor-demo"]=this["webpackJsonpmonitor-demo"]||[]).push([[2],{162:function(e,t,n){"use strict";var a=n(248),r=n(83),c=new a.a({appId:"monitor-demo",version:"1.0.0",immediately:!0,reportCallback:function(e){var t=r.a._store,n=e.data,a=n.name,c=n.value;"first-contentful-paint"!==a&&"api-complete-time"!==a&&"custom-contentful-paint"!==a||t.dispatch({type:"performance/calcScore",payload:{name:a,value:c}}),t.dispatch({type:"performance/addMetrics",payload:e})},needCCP:!0,logFpsCount:20,hashHistory:!0,maxWaitCCPDuration:6e4});t.a=c},178:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(94),r=function(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,a=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),c=/(?:iPad|PlayBook)/.test(e)||a&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),i=/(?:iPhone)/.test(e)&&!c;return{isTablet:c,isPhone:i,isAndroid:a,isPc:!i&&!a&&!n}}();function c(e){var t=Object(a.b)(e,.995),n=Object(a.b)(e,.05),r=1e3*Math.floor(t/1e3),c=1e3*Math.ceil(n/1e3),i=10;return"unitless"===e.units&&(r=0,c=Math.ceil(100*n)/100,i=.01),{min:r,max:c,step:i}}},243:function(e,t,n){"use strict";t.a={fcp:{"4g":{mobile:{weight:.2,median:3e3,p10:1e3},pc:{weight:.2,median:3e3,p10:1e3}},"3g":{mobile:{weight:.2,median:6500,p10:2500},pc:{weight:.2,median:6500,p10:2500}}},act:{"4g":{mobile:{weight:.3,median:4e3,p10:1500},pc:{weight:.3,median:4e3,p10:1500}},"3g":{mobile:{weight:.3,median:7500,p10:3500},pc:{weight:.3,median:7500,p10:3500}}},ccp:{"4g":{mobile:{weight:.5,median:4300,p10:1800},pc:{weight:.5,median:4300,p10:1800}},"3g":{mobile:{weight:.5,median:8500,p10:4500},pc:{weight:.5,median:8500,p10:4500}}}}},273:function(e,t,n){},278:function(e,t,n){},339:function(e,t,n){},586:function(e,t){},596:function(e,t,n){"use strict";n.r(t);n(273),n(0);var a=n(33),r=n.n(a),c=(n(162),n(38)),i=(n(270),n(103)),o=n.n(i),s=n(257),l=n(83);Object(s.a)({dsn:"https://chryseis.cn/api",maxBreadcrumbs:100,beforeAppAjaxSend:function(e){e.method;var t=e.url;if(/(http(?:s|):).*/.test(t)){var n=t.replace(/(http(?:s|):).*/,"$1");window.location.protocol!==n&&o.a.error({content:"\u8d44\u6e90\u4e0e\u7ad9\u70b9\u534f\u8bae\u4e0d\u4e00\u81f4",className:"monitor-message"})}},beforePushBreadcrumb:function(e,t){l.a._store.dispatch({type:"error/addItem",payload:Object(c.a)(Object(c.a)({},t),{},{time:+new Date})})}});var u=n(12);r.a.render(Object(u.jsx)(l.b,{}),document.getElementById("root"))},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return te}));var a={};n.r(a),n.d(a,"performance",(function(){return Z})),n.d(a,"error",(function(){return ee}));var r=n(116),c=n(39),i=(n(278),n(38)),o=n(0),s=n.n(o),l=(n(279),n(249)),u=n.n(l),d=n(162),m=n(12);var b=function(){return Object(o.useEffect)((function(){return function(){d.a.customContentfulPaint()}}),[]),Object(m.jsx)("div",{className:"flex-1 p-5",children:Object(m.jsx)(u.a,{})})},f=function(e){var t=s.a.lazy(e);return function(e){return Object(m.jsx)(o.Suspense,{fallback:Object(m.jsx)(b,{}),children:Object(m.jsx)(t,Object(i.a)({},e))})}},p=[{title:"Performance",exact:!0,path:"/",component:f((function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(6)]).then(n.bind(null,704))}))},{title:"Error",exact:!0,path:"/error",component:f((function(){return Promise.all([n.e(0),n.e(1),n.e(10),n.e(4)]).then(n.bind(null,705))}))},{title:"Calculator",exact:!0,path:"/calculator",component:f((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,702))}))},{title:"Example",exact:!0,path:"/example",component:f((function(){return Promise.all([n.e(11),n.e(5)]).then(n.bind(null,703))}))}],j=n(68),h=(n(126),n(53)),x=n.n(h),O=(n(339),n(166)),v=(n(168),n(106)),g=n.n(v),y=n(76),w=(n(196),n(44)),M=n.n(w),I=n(46),S=n(124),N=x.a.Content,k=x.a.Header,z={"page-information":"\u9875\u9762\u4fe1\u606f","network-information":"\u7f51\u7edc\u4fe1\u606f","device-information":"\u8bbe\u5907\u4fe1\u606f","navigation-timing":"\u5bfc\u822a\u52a0\u8f7d\u65f6\u95f4","first-paint":"\u7b2c\u4e00\u4e2a\u50cf\u7d20\u6e32\u67d3\u65f6\u95f4","first-contentful-paint":"\u7b2c\u4e00\u4e2a\u5143\u7d20\u6e32\u67d3\u65f6\u95f4","first-input-delay":"\u7528\u6237\u7b2c\u4e00\u6b21\u8f93\u5165\u5ef6\u8fdf","largest-contentful-paint":"\u6700\u5927\u5143\u7d20\u6e32\u67d3\u65f6\u95f4","custom-contentful-paint":"\u9875\u9762\u5b8c\u6210\u65f6\u6e32\u67d3\u65f6\u95f4",fps:"\u9875\u9762\u5237\u65b0\u7387","api-complete-time":"\u9996\u5c4f\u63a5\u53e3\u8bf7\u6c42\u5b8c\u6210\u65f6\u95f4","resource-flow":"\u8d44\u6e90\u52a0\u8f7d\u5217\u8868","cumulative-layout-shift":"\u9875\u9762\u610f\u5916\u4f4d\u79fb\u91cf"},C=[{title:"\u6307\u6807",dataIndex:"metrics",key:"metrics"},{title:"\u63cf\u8ff0",dataIndex:"describe",key:"describe"},{title:"\u4f1a\u8bddid",dataIndex:"sectionId",key:"sectionId"},{title:"\u4e0a\u62a5\u65f6\u95f4",dataIndex:"time",key:"time"}];function P(e){var t=e.data,n=e.contentStyle,a=e.size;return isNaN(Number(t))?Array.isArray(t)?t.map((function(e,t){return Object(m.jsx)(M.a,{className:"mb-5",bordered:!0,contentStyle:n,size:a,title:"resource-".concat(t+1),children:Object.entries(JSON.parse(JSON.stringify(e))).map((function(e){var t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(M.a.Item,{label:n,children:a},n)}))},t)})):Object(m.jsx)(M.a,{bordered:!0,contentStyle:n,size:a,children:Object.entries(t).map((function(e){var t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(M.a.Item,{label:n,children:a},n)}))}):Object(m.jsx)(M.a,{bordered:!0,contentStyle:n,size:a,children:Object(m.jsx)(M.a.Item,{label:"value",children:t})})}function R(e){var t=e.name,n=e.value;return Object(m.jsx)(P,{name:t,data:n,contentStyle:{backgroundColor:"#fff"},size:"small"})}var A=Object(I.c)((function(e){return{performance:e.performance}}))((function(e){var t=e.performance,n=Object(o.useMemo)((function(){return t.metricsItems.map((function(e,t){var n=e.sectionId,a=e.appId,r=e.data,c=r.name,i=r.value,o=e.timestamp;return{key:t,appId:a,sectionId:n,metrics:c,describe:z[c],value:i,time:Object(S.a)(o,"yyyy-MM-dd HH:mm:ss")}}))}),[t]);return Object(m.jsxs)(N,{className:"flex flex-col w-full",children:[Object(m.jsx)(k,{className:"flex items-center text-white text-2xl bg-blue-200 shadow-sm",children:"Performance Metrics"}),Object(m.jsx)("div",{className:"flex-1 overflow-auto",children:Object(m.jsx)(g.a,{pagination:!1,columns:C,dataSource:n,sticky:!0,expandable:{expandedRowRender:function(e){return Object(m.jsx)(R,Object(i.a)({},e))}}})})]})})),H=(n(555),n(253)),q=n.n(H),B=n(3),E=n.n(B),T=n(252),F=x.a.Header,J=x.a.Content,D=[{title:"\u7c7b\u522b",dataIndex:"category",key:"category",render:function(e){return Object(m.jsx)("i",{className:E()("icon","iconfont",{user:"icon-actions",http:"icon-http",exception:"icon-Exception",debug:"icon-debug"}[e],"text-xl")})}},{title:"\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u7b49\u7ea7",dataIndex:"level",key:"level",render:function(e){return Object(m.jsx)(q.a,{color:"#93C5FD",children:e})}},{title:"\u65f6\u95f4",dataIndex:"time",key:"time"}];function Q(e){var t=e.data,n=e.contentStyle,a=e.size;return Object(T.isString)(t)?Object(m.jsx)(M.a,{bordered:!0,contentStyle:n,size:a,children:Object(m.jsx)(M.a.Item,{label:"value",children:t})}):Object(m.jsx)(M.a,{bordered:!0,contentStyle:n,size:a,children:Object.entries(t).map((function(e){var t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(M.a.Item,{label:n,children:JSON.stringify(a)},n)}))})}function W(e){var t=e.data;return Object(m.jsx)(Q,{data:t,contentStyle:{backgroundColor:"#fff"},size:"small"})}var _=Object(I.c)((function(e){return{actionItems:e.error.actionItems}}))((function(e){var t=e.actionItems,n=Object(o.useMemo)((function(){return t.map((function(e,t){var n=e.type,a=e.category,r=e.data,c=e.level,i=e.time;return{key:t,type:n,category:a,level:c,time:Object(S.a)(i,"yyyy-MM-dd HH:mm:ss"),data:r}}))}),[t]);return Object(m.jsxs)(J,{className:"flex flex-col w-full h-full ",children:[Object(m.jsx)(F,{className:"flex items-center text-white text-2xl bg-blue-200 shadow-sm",children:"Action List"}),Object(m.jsx)("div",{className:"flex-1 overflow-auto",children:Object(m.jsx)(g.a,{pagination:!1,columns:D,dataSource:n,sticky:!0,expandable:{expandedRowRender:function(e){return Object(m.jsx)(W,Object(i.a)({},e))}}})})]})})),$=x.a.Header,L=x.a.Content;var G=function(e){var t=e.children;return Object(m.jsxs)(x.a,{className:"flex flex-col h-screen",children:[Object(m.jsxs)($,{className:"flex items-center justify-between  h-16 px-5 text-2xl text-red-50 bg-blue-300 shadow-xl",children:[Object(m.jsx)("div",{children:"Monitor"}),Object(m.jsx)("a",{href:"https://github.com/clouDr-f2e/monitor",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"icon iconfont icon-github-fill text-3xl text-white"})})]}),Object(m.jsx)(x.a,{className:"relative flex flex-1 split-wrapper",children:Object(m.jsxs)(O.a,{split:"vertical",minSize:200,defaultSize:"40%",children:[Object(m.jsx)(L,{className:"h-full rounded-l-md bg-white split-wrapper",children:Object(m.jsxs)(O.a,{split:"horizontal",minSize:300,maxSize:600,defaultSize:"50%",pane2Style:{overflow:"hidden"},children:[Object(m.jsx)(A,{}),Object(m.jsx)(_,{})]})}),Object(m.jsx)(L,{className:"flex flex-col h-full rounded-r-md bg-white",children:t})]})})]})};var K=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)([]),n=Object(j.e)(),a=Object(j.f)(),r=Object(o.useState)({}),c=Object(y.a)(r,2),i=c[0],s=c[1],l=Object(o.useCallback)((function(e){n.push(e.path)}),[n]);return Object(o.useEffect)((function(){if(e.current){var n=e.current.getBoundingClientRect().x,r=t.current.find((function(e){return e.id===a.pathname}));if(r){var c=r.getBoundingClientRect().x-n;s({width:r.clientWidth+"px",transform:"translate3d(".concat(c,"px,0px,0px)")})}}}),[a.pathname]),Object(m.jsxs)("div",{className:"relative flex items-center h-16 shadow-sm",ref:e,children:[p.map((function(e,n){return Object(m.jsx)("div",{ref:function(e){return t.current[n]=e},id:e.path,className:E()("px-3 py-2","text-xl",{"text-blue-300":a.pathname===e.path,"text-gray-800":a.pathname!==e.path},"cursor-pointer","hover:text-blue-300"),onClick:function(){return l(e)},children:e.title},e.path)})),Object(m.jsx)("div",{className:"absolute z-10 left-0 bottom-0 h-0.5 bg-blue-300 transition-transform transition-all duration-200 ease-linear",style:i}),Object(m.jsx)("div",{className:"absolute left-0 bottom-0 w-full h-px bg-bg-gray-10"})]})};var U=function(e){var t=e.history;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(G,{children:Object(m.jsxs)(j.b,{history:t,children:[Object(m.jsx)(K,{}),Object(m.jsxs)(j.c,{children:[p.map((function(e){return Object(m.jsx)(j.a,Object(i.a)({},e),e.path)})),Object(m.jsx)(j.a,{component:function(){return Object(m.jsx)("div",{children:"404"})}})]})]})})})},V=n(94),X=n(243),Y=n(178),Z={namespace:"performance",state:{metricsItems:[],scores:[]},reducers:{addMetrics:function(e,t){var n=t.payload;return Object(i.a)(Object(i.a)({},e),{},{metricsItems:e.metricsItems.concat(n)})},calcScore:function(e,t){var n=t.payload,a=n.name,r=n.value,c=e.metricsItems.find((function(e){return"network-information"===e.data.name})).data.value.effectiveType,o=void 0===c?"4g":c;["4g","3g"].includes(o)||(o="4g");var s=X.a[null===a||void 0===a?void 0:a.replace(/(-|)([a-z])[a-z]*/g,"$2")][o][Y.b.isPc?"pc":"mobile"],l=s.median,u=s.p10,d=s.weight,m=(100*Object(V.a)({median:l,p10:u},r)).toFixed(2);return Object(i.a)(Object(i.a)({},e),{},{scores:e.scores.concat({title:a,score:m,value:r,weight:d,key:a})})}},effects:{}},ee={namespace:"error",state:{actionItems:[]},reducers:{addItem:function(e,t){var n=t.payload;return{actionItems:e.actionItems.concat(n)}}}},te=Object(r.a)({history:Object(c.a)()});for(var ne in a)te.model(a[ne]);te.router(U);var ae=te.start();t.b=ae},94:function(e,t,n){"use strict";function a(e,t){var n=e.median,a=e.podr,r=e.p10;a||(a=c(n,r));var i=Math.log(n),o=Math.log(a/n),s=Math.sqrt(1-3*o-Math.sqrt((o-3)*(o-3)-8))/2;return(1-function(e){var t=e<0?-1:1,n=1/(1+.3275911*(e=Math.abs(e)));return t*(1-n*(.254829592+n*(n*(1.421413741+n*(1.061405429*n-1.453152027))-.284496736))*Math.exp(-e*e))}((Math.log(t)-i)/(Math.SQRT2*s)))/2}function r(e,t){var n=e.median,a=e.podr,r=e.p10;a||(a=c(n,r));var i=Math.log(n),o=Math.log(a/n),s=Math.sqrt(1-3*o-Math.sqrt((o-3)*(o-3)-8))/2;return Math.exp(i+s*Math.SQRT2*function(e){var t=e<0?-1:1,n=Math.log(1-e*e),a=2/(.147*Math.PI)+n/2,r=Math.sqrt(a*a-n/.147);return t*Math.sqrt(r-a)}(1-2*t))}function c(e,t){var n=Math.log(e),a=Math.abs(Math.log(t)-n)/(.9061938024368232*Math.SQRT2),r=-3*a-Math.sqrt(4+a*a);return Math.exp(n+a/2*r)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))}},[[596,7,8]]]);
//# sourceMappingURL=main.30ce6eec.chunk.js.map