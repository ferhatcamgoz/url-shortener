(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),s=n.n(r),i=n(7),o=n(15),u=n(11),l=n(4),j=n.n(l),d=n(13),b=n(12),O=n(14),h=n.n(O),p=function(e){return console.log(e),h.a.post("/auth",{},{auth:e})},v=function(e){var t=e.userName,n=e.password;if(e.isLoggedIn){var a="Basic ".concat(btoa(t+":"+n));h.a.defaults.headers.Authorization=a}else delete h.a.defaults.headers.Authorization},f=function(e){return h.a.post("/url",e)},x=function(e){return{type:"login-success",payload:e}},m=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={username:e.userName,password:e.password},t.next=3,p(a);case 3:return c=t.sent,r=Object(d.a)(Object(d.a)({},c.data),{},{password:e.password}),n(x(r)),console.log(e),t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c=e,h.a.post("/kayit",c);case 2:return a=t.sent,t.next=5,n(m(e));case 5:return t.abrupt("return",a);case 6:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},w=n(1),N=function(e){var t=Object(u.c)((function(e){return{isLoggedIn:e.isLoggedIn,userName:e.userName}})),n=t.isLoggedIn,c=t.userName,r=Object(a.useRef)(null),s=Object(a.useState)(!1),l=Object(i.a)(s,2),j=l[0],d=l[1];Object(a.useEffect)((function(){return document.addEventListener("click",b),function(){document.removeEventListener("click",b)}}),[n]);var b=function(e){null!==r.current&&r.current.contains(e.target)||d(!1)},O=Object(u.b)(),h=Object(w.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(w.jsx)("li",{children:Object(w.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(w.jsx)("li",{children:Object(w.jsxs)(o.b,{className:"nav-link",to:"/sign",children:[" ","Sign Up"," "]})})]});if(n){j&&" show",h=Object(w.jsx)("div",{children:Object(w.jsxs)("span",{className:"dropdown-item  d-flex p-2",onClick:function(){O({type:"logout-success"})},style:{cursor:"pointer"},children:[Object(w.jsx)("i",{className:"material-icons text-danger mr-2",children:"power_settings_new"}),c,"  ","\xc7\u0131k\u0131\u015f Yap"]})})}return Object(w.jsx)("div",{className:"shadow-sm bg-light mb-2",children:Object(w.jsxs)("nav",{className:"navbar navbar-light container navbar-expand",children:[Object(w.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Camg\xf6zUrl"}),h]})})},y=function(e){var t=e.label,n=e.error,a=e.name,c=e.onChange,r=e.type,s=e.defaultValue,i="form-control";return"file"==r&&(i+="-file"),void 0!=n&&(i+=" is-invalid"),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:t}),Object(w.jsx)("input",{className:i,name:a,type:r,onChange:c,defaultValue:s}),Object(w.jsx)("div",{className:"invalid-feedback",children:n})]})},k=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(),o=Object(i.a)(s,2),l=o[0],d=o[1],O=Object(a.useState)(),h=Object(i.a)(O,2),p=h[0],v=h[1],f=Object(u.b)(),x=function(){var t=Object(b.a)(j.a.mark((function t(n){var a,r,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={userName:c,password:l},r=e.history,s=r.push,t.prev=4,t.next=7,f(m(a));case 7:s("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),v("ad veya \u015fifre hatal\u0131");case 13:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("h1",{className:"text-center",children:"Giri\u015f Yap"}),Object(w.jsx)(y,{name:"userName",label:"Ad\u0131n\u0131z",type:"text",onChange:function(e){v(void 0),r(e.target.value)}}),Object(w.jsx)(y,{name:"password",label:"\u015eifreniz",type:"password",onChange:function(e){d(e.target.value),v(void 0)}}),Object(w.jsxs)("div",{className:"text-center",children:[Object(w.jsx)("button",{onClick:x,children:"Giri\u015f Yap"}),Object(w.jsx)("h2",{children:p&&p})]})]})})},S=n(3),C=n(22),L=function(e){var t=Object(a.useState)({userName:null,password:null}),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(),o=Object(i.a)(s,2),l=o[0],O=o[1],h=Object(u.b)(),p=function(e){var t=e.target,n=t.value,a=t.name;O(void 0),r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(C.a)({},a,n))}))},v=function(){var t=Object(b.a)(j.a.mark((function t(n){var a,r,s,i,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.history,r=a.push,s=c.userName,i=c.password,o={userName:s,password:i},t.prev=5,t.next=8,h(g(o));case 8:r("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),O("validasyon hatalar\u0131 var");case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("h1",{className:"text-center",children:"Kay\u0131t Ol"}),Object(w.jsx)(y,{name:"userName",label:"Ad\u0131n\u0131z",type:"text",onChange:p}),Object(w.jsx)(y,{name:"password",label:"\u015eifreniz",type:"password",onChange:p}),Object(w.jsxs)("div",{className:"text-center",children:[Object(w.jsx)("button",{onClick:v,children:"Kay\u0131t Ol"}),Object(w.jsx)("h2",{children:l&&l})]})]})})},I=n(28),E=function(){var e=Object(a.useState)({content:[]}),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),O=d[0],p=d[1];Object(a.useEffect)((function(){x()}),[]);var v=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={longUrl:O},e.prev=1,e.next=4,f(t);case 4:x(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u("HATALI G\u0130R\u0130\u015e");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/url");case 3:t=e.sent,c({content:[]}),c((function(e){return{content:[].concat(Object(I.a)(t.data),Object(I.a)(e.content))}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{onChange:function(e){p(e.target.value),u(void 0)}}),Object(w.jsx)("button",{onClick:v,children:"K\u0131salt"}),Object(w.jsx)("h6",{children:o&&o}),n.content.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"card p-1",children:Object(w.jsx)("div",{className:"d-flex",children:Object(w.jsxs)("div",{className:"flex-fill m-auto pl-2",children:[Object(w.jsx)("div",{children:Object(w.jsx)("a",{href:e.shortUrl,children:e.shortUrl})},e.id),Object(w.jsx)("div",{children:e.longUrl}),Object(w.jsx)("button",{className:"btn btn-delete-link",onClick:Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=e.id,h.a.delete("/url/"+n);case 2:return t.next=4,x();case 4:case"end":return t.stop()}var n}),t)}))),children:Object(w.jsx)("i",{className:"material-icons",children:"delete_outline"})})]})})})})}))]})},_=function(){var e=Object(u.c)((function(e){return{isLoggedIn:e.isLoggedIn}})).isLoggedIn;return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col",children:[e&&Object(w.jsx)(E,{}),!e&&Object(w.jsx)("h2",{children:"Giri\u015f Ya da Kay\u0131t Olunuz"})]})})})})};var z=function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(o.a,{children:[Object(w.jsx)(N,{}),Object(w.jsxs)(S.c,{children:[Object(w.jsx)(S.a,{exact:!0,path:"/",component:_}),Object(w.jsx)(S.a,{path:"/login",component:k}),Object(w.jsx)(S.a,{path:"/sign",component:L})]})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},A=(n(68),n(23)),D={isLoggedIn:!1,userName:void 0,password:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;return console.log(t.toString()),"logout-success"==t.type?D:"login-success"==t.type?Object(d.a)(Object(d.a)({},t.payload),{},{isLoggedIn:!0}):e},F=n(37),G=n.n(F),K=n(38),Y=new G.a,B=function(){var e=Y.get("state"),t={isLoggedIn:!1,userName:void 0,password:void 0};if(e)try{t=e}catch(n){}return t},P=function(){v(B());var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.b,t=Object(A.c)(T,B(),e(Object(A.a)(K.a)));return t.subscribe((function(){var e;e=t.getState(),Y.set("state",e),v(t.getState())})),t}();s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(u.a,{store:P,children:Object(w.jsx)(z,{})})}),document.getElementById("root")),U()}},[[69,1,2]]]);
//# sourceMappingURL=main.98a810a8.chunk.js.map