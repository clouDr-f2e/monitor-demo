(this["webpackJsonpmonitor-demo"]=this["webpackJsonpmonitor-demo"]||[]).push([[2],{310:function(e,t,n){"use strict";var a=n(318),c=n(11);t.a=function(e){var t=e.title;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-3xl font-semibold",children:t}),Object(c.jsx)(a.a,{type:"horizontal"})]})}},311:function(e,t,n){"use strict";var a=n(30),c=n(11);t.a=function(e){return function(t){return Object(c.jsx)("div",{className:"flex-1 p-5 overflow-auto",children:Object(c.jsx)(e,Object(a.a)({},t))})}}},313:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)({});t.a=c},317:function(e,t,n){"use strict";var a=n(3),c=n(2),r=n(10),o=n(0),i=n(4),s=n.n(i),l=n(313),u=n(35),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};var f=["xs","sm","md","lg","xl","xxl"],d=o.forwardRef((function(e,t){var n,i=o.useContext(u.b),d=i.getPrefixCls,j=i.direction,p=o.useContext(l.a),m=p.gutter,O=p.wrap,v=p.supportFlexGap,h=e.prefixCls,x=e.span,y=e.order,g=e.offset,w=e.push,S=e.pull,C=e.className,N=e.children,E=e.flex,P=e.style,M=b(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=d("col",h),A={};f.forEach((function(t){var n,o={},i=e[t];"number"===typeof i?o.span=i:"object"===Object(r.a)(i)&&(o=i||{}),delete M[t],A=Object(c.a)(Object(c.a)({},A),(n={},Object(a.a)(n,"".concat(k,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(a.a)(n,"".concat(k,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(a.a)(n,"".concat(k,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(a.a)(n,"".concat(k,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(a.a)(n,"".concat(k,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(a.a)(n,"".concat(k,"-rtl"),"rtl"===j),n))}));var I=s()(k,(n={},Object(a.a)(n,"".concat(k,"-").concat(x),void 0!==x),Object(a.a)(n,"".concat(k,"-order-").concat(y),y),Object(a.a)(n,"".concat(k,"-offset-").concat(g),g),Object(a.a)(n,"".concat(k,"-push-").concat(w),w),Object(a.a)(n,"".concat(k,"-pull-").concat(S),S),n),C,A),R={};if(m&&m[0]>0){var G=m[0]/2;R.paddingLeft=G,R.paddingRight=G}if(m&&m[1]>0&&!v){var D=m[1]/2;R.paddingTop=D,R.paddingBottom=D}return E&&(R.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),"auto"!==E||!1!==O||R.minWidth||(R.minWidth=0)),o.createElement("div",Object(c.a)({},M,{style:Object(c.a)(Object(c.a)({},R),P),className:I,ref:t}),N)}));d.displayName="Col",t.a=d},318:function(e,t,n){"use strict";var a=n(2),c=n(3),r=n(0),o=n(4),i=n.n(o),s=n(35),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};t.a=function(e){return r.createElement(s.a,null,(function(t){var n,o=t.getPrefixCls,s=t.direction,u=e.prefixCls,b=e.type,f=void 0===b?"horizontal":b,d=e.orientation,j=void 0===d?"center":d,p=e.className,m=e.children,O=e.dashed,v=e.plain,h=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),x=o("divider",u),y=j.length>0?"-".concat(j):j,g=!!m,w=i()(x,"".concat(x,"-").concat(f),(n={},Object(c.a)(n,"".concat(x,"-with-text"),g),Object(c.a)(n,"".concat(x,"-with-text").concat(y),g),Object(c.a)(n,"".concat(x,"-dashed"),!!O),Object(c.a)(n,"".concat(x,"-plain"),!!v),Object(c.a)(n,"".concat(x,"-rtl"),"rtl"===s),n),p);return r.createElement("div",Object(a.a)({className:w},h,{role:"separator"}),m&&r.createElement("span",{className:"".concat(x,"-inner-text")},m))}))}},328:function(e,t,n){"use strict";var a=n(330);t.a=a.a},329:function(e,t,n){"use strict";var a=n(317);t.a=a.a},330:function(e,t,n){"use strict";var a,c=n(2),r=n(3),o=n(10),i=n(5),s=n(0),l=n(4),u=n.n(l),b=n(35),f=n(313),d=n(45),j=n(57),p=n(44),m=function(){return Object(p.a)()&&window.document.documentElement},O=function(){var e=s.useState(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return s.useEffect((function(){c(function(){if(!m())return!1;if(void 0!==a)return a;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=1===e.scrollHeight,document.body.removeChild(e),a}())}),[]),n},v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},h=(Object(d.a)("top","middle","bottom","stretch"),Object(d.a)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var n,a=e.prefixCls,l=e.justify,d=e.align,p=e.className,m=e.style,h=e.children,x=e.gutter,y=void 0===x?0:x,g=e.wrap,w=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),S=s.useContext(b.b),C=S.getPrefixCls,N=S.direction,E=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=Object(i.a)(E,2),M=P[0],k=P[1],A=O(),I=s.useRef(y);s.useEffect((function(){var e=j.a.subscribe((function(e){var t=I.current||0;(!Array.isArray(t)&&"object"===Object(o.a)(t)||Array.isArray(t)&&("object"===Object(o.a)(t[0])||"object"===Object(o.a)(t[1])))&&k(e)}));return function(){return j.a.unsubscribe(e)}}),[]);var R=C("row",a),G=function(){var e=[0,0];return(Array.isArray(y)?y:[y,0]).forEach((function(t,n){if("object"===Object(o.a)(t))for(var a=0;a<j.b.length;a++){var c=j.b[a];if(M[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t||0})),e}(),D=u()(R,(n={},Object(r.a)(n,"".concat(R,"-no-wrap"),!1===g),Object(r.a)(n,"".concat(R,"-").concat(l),l),Object(r.a)(n,"".concat(R,"-").concat(d),d),Object(r.a)(n,"".concat(R,"-rtl"),"rtl"===N),n),p),F={},L=G[0]>0?G[0]/-2:void 0,T=G[1]>0?G[1]/-2:void 0;if(L&&(F.marginLeft=L,F.marginRight=L),A){var V=Object(i.a)(G,2);F.rowGap=V[1]}else T&&(F.marginTop=T,F.marginBottom=T);var W=s.useMemo((function(){return{gutter:G,wrap:g,supportFlexGap:A}}),[G,g,A]);return s.createElement(f.a.Provider,{value:W},s.createElement("div",Object(c.a)({},w,{className:D,style:Object(c.a)(Object(c.a)({},F),m),ref:t}),h))})));h.displayName="Row";t.a=h},354:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(64),r=n(0),o=n(304),i=n(97),s=n(328),l=n(329),u=n(318),b=n(310),f=n(311),d=n(169),j=n(90),p=n(145),m=n(140);var O=n(148);function v(e){return function(e){if(Array.isArray(e))return Object(m.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(O.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=n(305),x={fcp:"first-contentful-paint",act:"api-complete-time",ccp:"custom-contentful-paint"},y=n(11);var g=function(e){var t=e.metricsData,n=void 0===t?[]:t,c=e.onScoreChange,o=e.onValueChange,i=Object(r.useMemo)((function(){var e=Math.max.apply(Math,v(n.map((function(e){return e.metricScoring.weight}))));return n.map((function(t,n){return Object(a.a)(Object(a.a)({},t),{},{weightMax:e,key:n})}))}),[n]),s=[{title:"metrics",dataIndex:"metrics",key:"metrics",render:function(e,t){return Object(y.jsx)("div",{children:"".concat(x[t.name],"\uff08").concat(t.name,"\uff09")})}},{title:"Value",dataIndex:"value",key:"value",render:function(e,t){var n=t.name,a=t.metricScoring,c=t.value,r=Object(p.a)(a),i=r.min,s=r.max,l=r.step;return Object(y.jsxs)("div",{className:"flex flex-col",children:[Object(y.jsx)("input",{type:"range",min:i,value:c,max:s,step:l,className:"",onInput:function(e){return o(n,e.target.valueAsNumber)}}),Object(y.jsx)("output",{className:"text-right",children:"".concat(c.toLocaleString(),"ms")})]})}},{title:"Metric Score",dataIndex:"score",key:"score",render:function(e,t){var n=t.name,a=t.metricScoring,r=t.score,o=t.weightMax;return Object(y.jsxs)("div",{className:"flex flex-col items-end",children:[Object(y.jsx)("input",{type:"range",style:{width:"".concat(a.weight/o*100,"%")},value:r,onInput:function(e){return c(n,e.target.valueAsNumber)}}),Object(y.jsx)("output",{className:"text-right",children:r})]})}},{title:"Weighting",dataIndex:"weight",key:"weight",align:"right",render:function(e,t){var n=t.metricScoring;return Object(y.jsxs)("span",{children:[100*n.weight,"%"]})}}];return Object(y.jsx)(h.a,{pagination:!1,columns:s,dataSource:i})},w=o.a.Content,S=i.a.Option,C=["4g","3g"],N=["pc","mobile"];t.default=Object(f.a)((function(){var e=Object(r.useState)("4g"),t=Object(c.a)(e,2),n=t[0],o=t[1],f=Object(r.useState)("pc"),m=Object(c.a)(f,2),O=m[0],v=m[1],h=Object(r.useState)([]),x=Object(c.a)(h,2),E=x[0],P=x[1],M=Object(r.useCallback)((function(e,t){var n=E.map((function(n){return n.name===e?Object(a.a)(Object(a.a)({},n),{},{value:t,score:Math.round(100*Object(j.a)(n.metricScoring,t))}):n}));P(n)}),[E]),k=Object(r.useCallback)((function(e,t){var n=E.map((function(n){if(n.name===e){var c=Object(p.a)(n.metricScoring),r=c.min,o=c.max,i=Object(j.b)(n.metricScoring,t/100);return i=Math.max(Math.min(i,o),r),Object(a.a)(Object(a.a)({},n),{},{value:Math.round(i),score:t})}return n}));P(n)}),[E]);return Object(r.useEffect)((function(){var e=Object.entries(d.a).map((function(e){var t=Object(c.a)(e,2),a=t[0],r=t[1];return{name:a,metricScoring:r[n][O],value:r[n][O].median,score:Math.round(100*Object(j.a)(r[n][O],r[n][O].median))}}));P(e)}),[n,O]),Object(y.jsxs)(w,{children:[Object(y.jsx)(b.a,{title:"Calculator"}),Object(y.jsxs)(w,{children:[Object(y.jsxs)(s.a,{className:"mb-5",gutter:16,children:[Object(y.jsx)(l.a,{className:"flex items-center",span:2,children:"Network"}),Object(y.jsx)(l.a,{span:6,children:Object(y.jsx)(i.a,{style:{width:200},value:n,onSelect:function(e){return o(e)},children:C.map((function(e){return Object(y.jsx)(S,{value:e,children:e},e)}))})}),Object(y.jsx)(l.a,{className:"flex items-center",span:2,children:"End"}),Object(y.jsx)(l.a,{span:6,children:Object(y.jsx)(i.a,{style:{width:200},value:O,onSelect:function(e){return v(e)},children:N.map((function(e){return Object(y.jsx)(S,{value:e,children:e},e)}))})})]}),Object(y.jsx)(u.a,{}),Object(y.jsx)(g,{metricsData:E,onScoreChange:k,onValueChange:M})]})]})}))}}]);
//# sourceMappingURL=p_calculator.a2f3aa50.chunk.js.map