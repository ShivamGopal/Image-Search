(this["webpackJsonpimage-search"]=this["webpackJsonpimage-search"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),r=(n(10),n(2)),o=(n(11),n(5)),u=n(0),j=function(e){var t=e.inp,n=e.fetchImages;e.images,e.query;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"input-style",type:"text",placeholder:"Search for photos",onChange:t}),Object(u.jsx)("button",{type:"submit",className:"btn",onClick:n,children:Object(u.jsx)(o.a,{color:"white"})})]})},l=function(e){var t=e.images,n=e.counter;return Object(u.jsx)("div",{className:"collection",children:t.map((function(e,t){return t<n?Object(u.jsx)("img",{src:e.urls.regular,alt:e.alt_description,className:"single"},e.id):null}))})},h=function(e){var t=e.counter,n=e.increaseCounter,c=e.images;return Object(u.jsx)("div",{children:t>0&&t<c.length?Object(u.jsx)("button",{className:"btn-load",onClick:n,children:"Load More"}):Object(u.jsx)("div",{})})},b=function(e){var t=e.showInfo,n=e.copy,c=e.images;return Object(u.jsx)("div",{children:!0===t?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"info-header",children:n.toUpperCase()}),Object(u.jsxs)("p",{className:"info-details",children:[c.length," images have been found"]})]}):Object(u.jsx)("div",{})})};var d=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("random"),i=Object(r.a)(a,2),o=i[0],d=i[1],p=Object(c.useState)("false"),f=Object(r.a)(p,2),m=f[0],O=f[1],g=Object(c.useState)(0),x=Object(r.a)(g,2),v=x[0],N=x[1],w=Object(c.useState)([]),S=Object(r.a)(w,2),y=S[0],C=S[1];return Object(c.useEffect)((function(){s("random"),fetch("https://api.unsplash.com/search/photos/?client_id=ZrWKw5ISTwv1nN_9iQFwi3NMWSpTPwmFNx6_r86Aex4&query=random&per_page=30").then((function(e){return e.json()})).then((function(e){C(e.results),N(8),O(!0)}))}),[1]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{inp:function(e){s(e.target.value)},fetchImages:function(){fetch("https://api.unsplash.com/search/photos/?client_id=ZrWKw5ISTwv1nN_9iQFwi3NMWSpTPwmFNx6_r86Aex4&query=".concat(n,"&per_page=30")).then((function(e){return e.json()})).then((function(e){C(e.results),N(8),O(!0)})),d(n)},images:y,query:n}),Object(u.jsx)(b,{showInfo:m,copy:o,images:y}),Object(u.jsx)(l,{images:y,counter:v}),Object(u.jsx)(h,{counter:v,increaseCounter:function(){N(v+8)},images:y})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.03eaaac8.chunk.js.map