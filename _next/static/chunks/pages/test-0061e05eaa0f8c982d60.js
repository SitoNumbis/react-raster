_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"90RC":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n("VOFc")}])},VOFc:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),c=n.n(o),a=n("YFqc"),i=n.n(a),l=n("iXfv"),s=n("ZMKu");t.default=function(e){c.a.useRef();var t=c.a.useRef();return c.a.useEffect((function(){}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s.b.div,{initial:{y:50,opacity:0},children:Object(r.jsxs)(l.b,{tag:"section",breakpoints:[0,500,768,1024,1200,1400],left:"1.5vw",right:"3vw",top:"10vw",bottom:"20vw",gutterX:["0px","0px","1.5vw"],colspan:12,alignX:["center","right","left"],control:!0,style:"\n        background: blue;\n        &.bp-768 {\n          // background: black;\n        }\n      ",ref:t,children:[Object(r.jsx)(l.a,{cols:[1,2],bottom:1,style:"background: red;",children:"Hallo"}),Object(r.jsx)(l.a,{cols:[2,3],bottom:1,style:"background: red;",children:"Hallo"}),Object(r.jsx)(i.a,{href:"/",passHref:!0,children:Object(r.jsx)(l.a,{style:"background: green;",component:Object(r.jsx)(s.b.a,{initial:{y:50,opacity:0},animate:{y:0,opacity:1}}),children:Object(r.jsx)("h1",{children:"DEPP!"})})}),Object(r.jsx)(l.a,{cols:[4,5],bottom:1,style:"background: red;",children:"Hallo"})]})})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),l=n("vNVm"),s={};function u(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var w=c.Children.only(v),j=w&&"object"===typeof w&&w.ref,m=(0,l.useIntersection)({rootMargin:"200px"}),O=r(m,2),E=O[0],_=O[1],k=c.default.useCallback((function(e){E(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,E]);(0,c.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,_,g,t,n]);var x={ref:k,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:l}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,b,h,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};return(e.passHref||"a"===w.type&&!("href"in w.props))&&(x.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(w,x)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,c.useRef)(),s=(0,c.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){i||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=n("q1tI"),a=o(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var l=new Map}},[["90RC",0,1,3,2,4,5]]]);