(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log(1),i.trim().length>0&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(encodeURI(e),"&api_key=lyhpZo0KxkQZGNWvPvnNYCwtBYl7Isvi"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsxs)("p",{children:[" ",e," "]})]})},O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:[" ",e," "]}),i&&Object(r.jsx)("p",{children:"Loading"}),Object(r.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(r.jsx)(f,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["Peru"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GitExpertApp"}),Object(r.jsx)(o,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{children:n.map((function(t){return Object(r.jsx)(O,{category:t},t)}))})]})};n(17);i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3b7dc0a8.chunk.js.map