(this["webpackJsonpgoit-react-hw-07-phonebook-1"]=this["webpackJsonpgoit-react-hw-07-phonebook-1"]||[]).push([[0],{18:function(t,e,n){"use strict";e.a={isAuthenticated:function(t){return t.auth.token},getUserName:function(t){return t.auth.user.name},getUserEmail:function(t){return t.auth.user.email}}},20:function(t,e,n){"use strict";var c=n(25);n.d(e,"a",(function(){return c.a}));var r=n(18);n.d(e,"b",(function(){return r.a}));n(27),n(4)},22:function(t,e,n){t.exports={container:"UserMenu_container__3h5p9",name:"UserMenu_name__29edx",user_item:"UserMenu_user_item__ort25",button:"UserMenu_button__2u_Dc"}},25:function(t,e,n){"use strict";var c=n(14),r=n.n(c),a=n(4);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var o=function(t){r.a.defaults.headers.common.Authorization="Bearer ".concat(t)},u=function(){r.a.defaults.headers.common.Authorization=""};e.a={register:function(t){return function(e){console.log("register - before dispatch",t),e(a.a.registerRequest()),console.log("register - after dispatch",t),r.a.post("/users/signup",t).then((function(t){o(t.data.token),e(a.a.registerSuccess(t.data))})).catch((function(t){return e(a.a.registerError(t))}))}},logOut:function(){return function(t){t(a.a.logoutRequest()),r.a.post("users/logout").then((function(){u(),t(a.a.logoutSuccess())})).catch((function(e){return t(a.a.logoutError(e))}))}},logIn:function(t){return function(e){e(a.a.loginRequest()),r.a.post("/users/login",t).then((function(t){o(t.data.token),e(a.a.loginSuccess(t.data))})).catch((function(t){return e(a.a.loginError(t))}))}},onGetCurrentUser:function(){return function(t,e){var n=e().auth.token;n&&(o(n),t(a.a.getCurrentUserRequest()),r.a.get("users/current").then((function(e){var n=e.data;return t(a.a.getCurrentUserSuccess(n))})).catch((function(e){return t(a.a.getCurrentUserError(e))})))}}}},27:function(t,e,n){"use strict";var c,r,a,o=n(6),u=n(2),s=n(7),i=n(4),l={name:null,email:null},b=Object(u.c)(l,(c={},Object(o.a)(c,i.a.registerSuccess,(function(t,e){return e.payload.user})),Object(o.a)(c,i.a.loginSuccess,(function(t,e){return e.payload.user})),Object(o.a)(c,i.a.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(o.a)(c,i.a.logoutSuccess,(function(){return l})),c)),j=Object(u.c)(null,(r={},Object(o.a)(r,i.a.registerSuccess,(function(t,e){return e.payload.token})),Object(o.a)(r,i.a.loginSuccess,(function(t,e){return e.payload.token})),Object(o.a)(r,i.a.logoutSuccess,(function(){return null})),r)),d=Object(u.c)(null,(a={},Object(o.a)(a,i.a.registerError,(function(t,e){return e.payload})),Object(o.a)(a,i.a.loginError,(function(t,e){return e.payload})),Object(o.a)(a,i.a.logoutError,(function(t,e){return e.payload})),Object(o.a)(a,i.a.getCurrentUserError,(function(t,e){return e.payload})),a));e.a=Object(s.c)({user:b,token:j,error:d})},39:function(t,e,n){"use strict";var c=n(14),r=n.n(c),a=n(9);r.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";e.a={onAddContact:function(t){var e=t.name,n=t.number;return function(t){t(a.a.addContactRequest()),r.a.post("/contacts",{name:e,number:n}).then((function(e){t(a.a.addContactSuccess(e.data))})).catch((function(e){return t(a.a.addContactError(e))}))}},onFetchContacts:function(){return function(t){t(a.a.fetchContactRequest()),r.a.get("/contacts").then((function(e){return t(a.a.fetchContactSuccess(e.data))})).catch((function(e){return t(a.a.fetchContactError(e))}))}},onRemoveContacts:function(t){return function(e){e(a.a.removeContactRequest()),r.a.delete("/contacts/".concat(t)).then((function(){return e(a.a.removeContactSuccess(t))})).catch((function(t){return e(a.a.removeContactError(t))}))}}}},4:function(t,e,n){"use strict";var c=n(2),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),o=Object(c.b)("auth/registerError"),u=Object(c.b)("auth/loginRequest"),s=Object(c.b)("auth/loginSuccess"),i=Object(c.b)("auth/loginError"),l=Object(c.b)("auth/logoutRequest"),b=Object(c.b)("auth/logoutSuccess"),j=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),f=Object(c.b)("auth/getCurrentUserSuccess"),h=Object(c.b)("auth/getCurrentUserError");e.a={registerRequest:r,registerSuccess:a,registerError:o,loginRequest:u,loginSuccess:s,loginError:i,logoutRequest:l,logoutSuccess:b,logoutError:j,getCurrentUserRequest:d,getCurrentUserSuccess:f,getCurrentUserError:h}},59:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n(23),o=n.n(a),u=(n(59),n(16)),s=n(37),i=n(38),l=n(41),b=n(40),j=n(17),d=n(5),f=n(8),h=[{path:"/",label:"Home",exact:!0,component:Object(r.lazy)((function(){return n.e(5).then(n.bind(null,95))})),private:!1,restricted:!1},{path:"/register",label:"Register",exact:!0,component:Object(r.lazy)((function(){return n.e(7).then(n.bind(null,96))})),private:!1,restricted:!0},{path:"/login",label:"Login",exact:!0,component:Object(r.lazy)((function(){return n.e(6).then(n.bind(null,97))})),private:!1,restricted:!0},{path:"/contacts",label:"Contacts",exact:!0,component:Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,98))})),private:!0,restricted:!1}],O=n(29),g=n(18),p=Object(f.b)((function(t){return{isAuthenticated:g.a.isAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=Object(O.a)(t,["component","isAuthenticated"]);return Object(c.jsx)(d.b,Object(u.a)(Object(u.a)({},r),{},{render:function(t){return n?Object(c.jsx)(e,Object(u.a)({},t)):Object(c.jsx)(d.a,{to:"/login"})}}))})),m=Object(f.b)((function(t){return{isAuthenticated:g.a.isAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=Object(O.a)(t,["component","isAuthenticated"]);return Object(c.jsx)(d.b,Object(u.a)(Object(u.a)({},r),{},{render:function(t){return n&&r.restricted?Object(c.jsx)(d.a,{to:"/contacts"}):Object(c.jsx)(e,Object(u.a)({},t))}}))})),v={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#8fc1e3"},activeLink:{color:"#ffffff",textDecoration:"underline"}},C=function(t){return Object(c.jsx)("div",{className:"NavBarWrapper",children:Object(c.jsxs)("ul",{className:v.navbar,children:[Object(c.jsx)("li",{className:v.navbarItem,children:Object(c.jsx)(j.b,{exact:!0,to:"/login",className:"Navigation-link",activeClassName:v.activeLink,children:"Log In"})}),Object(c.jsxs)("li",{className:v.navbarItem,children:[" ",Object(c.jsx)(j.b,{to:"/register",className:"Navigation-link",activeClassName:"Navigation-link-active",children:"Register"})]})]})})};C.defaultProps={};var x,k=Object(f.b)((function(t){return{}}),(function(t){return{}}))(C),S=n(20),y=n(22),E=n.n(y),R={onLogout:S.a.logOut},U=Object(f.b)((function(t){return{name:S.b.getUserName(t),email:S.b.getUserEmail(t)}}),R)((function(t){var e=t.name,n=t.email,r=t.onLogout;return Object(c.jsxs)("div",{className:E.a.container,children:[Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:E.a.user_item,children:["Hello, ",e]}),Object(c.jsxs)("li",{className:E.a.user_item,children:["Email: ",n]})]}),Object(c.jsx)("button",{className:E.a.button,type:"button",onClick:r,children:"Log Out"})]})})),q={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#8fc1e3"},activeLink:{color:"#ffffff",textDecoration:"underline"}},A=Object(f.b)((function(t){return{isAuthenticated:g.a.isAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(c.jsxs)("nav",{children:[Object(c.jsx)(j.b,{to:"/",exact:!0,style:q.link,activeStyle:q.activeLink,children:"Home"}),e&&Object(c.jsx)(j.b,{to:"/contacts",exact:!0,style:q.link,activeStyle:q.activeLink,children:"Contacts"})]})})),N={header:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#5085A5",color:"#ffffff"}},_=Object(f.b)((function(t){return{isAuthenticated:S.b.isAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(c.jsxs)("header",{style:N.header,children:[Object(c.jsx)(A,{}),e?Object(c.jsx)(U,{}):Object(c.jsx)(k,{})]})})),L={container:{width:"80vw",marginLeft:"auto",marginRight:"auto",padding:"0 24px"}},w=function(t){var e=t.children;return Object(c.jsxs)("div",{style:L.container,children:[Object(c.jsx)(_,{}),e]})},z=n(39),D=n(25),F=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts(),this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(c.jsx)(j.a,{children:Object(c.jsx)(w,{children:Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("h1",{children:"Loading..."}),children:Object(c.jsx)(d.d,{children:h.map((function(t){return t.private?Object(c.jsx)(p,Object(u.a)({},t),t.label):Object(c.jsx)(m,Object(u.a)({},t),t.label)}))})})})})}}]),n}(r.Component),I={onFetchContacts:z.a.onFetchContacts,onGetCurrentUser:D.a.onGetCurrentUser},M=Object(f.b)((function(t){return console.log("App.mapStateToProps"),{contacts:t.contacts}}),I)(F),G=n(51),B=n(28),H=n(2),P=n(36),W=n(52),J=n.n(W),T=n(6),K=n(7),Q=n(9),V=Object(H.c)([],(x={},Object(T.a)(x,Q.a.fetchContactSuccess,(function(t,e){return e.payload})),Object(T.a)(x,Q.a.addContactSuccess,(function(t,e){return[].concat(Object(B.a)(t),[e.payload])})),Object(T.a)(x,Q.a.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),x)),X=Object(H.c)("",Object(T.a)({},Q.a.onChangeFilter,(function(t,e){return e.payload.filter}))),Y=Object(K.c)({items:V,filter:X}),Z=n(53),$=n.n(Z),tt=n(27),et=Object(H.d)(),nt={key:"auth",storage:J.a,whitelist:["token"]},ct=Object(H.a)({reducer:{contacts:Y,auth:Object(P.a)(nt,tt.a)},middleware:[].concat(Object(B.a)(et),[$.a])}),rt=Object(P.b)(ct);o.a.render(Object(c.jsx)(f.a,{store:ct,children:Object(c.jsx)(G.a,{loading:null,persistor:rt,children:Object(c.jsx)(M,{})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";var c=n(2),r=Object(c.b)("contacts/addRequest"),a=Object(c.b)("contacts/addSuccess"),o=Object(c.b)("contacts/addError"),u=Object(c.b)("contacts/fetchRequest"),s=Object(c.b)("contacts/fetchSuccess"),i=Object(c.b)("contacts/fetchError"),l=Object(c.b)("contacts/removeRequest"),b=Object(c.b)("contacts/removeSuccess"),j=Object(c.b)("contacts/removeError"),d=Object(c.b)("contact/filter",(function(t){return{payload:{filter:t}}}));e.a={addContactRequest:r,addContactSuccess:a,addContactError:o,fetchContactRequest:u,fetchContactSuccess:s,fetchContactError:i,removeContactRequest:l,removeContactSuccess:b,removeContactError:j,onChangeFilter:d}}},[[84,1,2]]]);
//# sourceMappingURL=main.b115ad43.chunk.js.map