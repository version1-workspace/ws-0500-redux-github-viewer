(this["webpackJsonpredux-github-viewer"]=this["webpackJsonpredux-github-viewer"]||[]).push([[0],{41:function(e,n,t){e.exports=t(61)},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(17),u=t.n(c),l=t(12),i=t(8),o=t(35),d={name:"jjoo",email:"hoge@example.com",profileUrl:"https://avatars1.githubusercontent.com/u/25723193?s=60&u=5f2d871352830fdf1a79ee285e0712044105ca91&v=4"},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;arguments.length>1&&arguments[1];return e},s=t(19),p=t(5),m={addIssue:function(e){return{type:"ISSUE_ADD",payload:{issue:e.issue}}},removeIssue:function(e){return{type:"ISSUE_REMOVE",payload:{issue:e.issue}}},updateIssue:function(e){return{type:"ISSUE_UPDATE",payload:{issue:e.issue}}},showModal:function(e){return{type:"MODAL_PUSH",payload:{component:e.component}}},removeModal:function(){return{type:"MODAL_POP",payload:{}}},hideModal:function(){return{type:"MODAL_HIDE",payload:{}}}},f={1:{id:1,title:"A bug in Top Page",status:0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",createBy:""},2:{id:2,title:"A problem of performance in Top Page",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",status:0,createBy:""},3:{id:3,title:"fix layout",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",status:1,createBy:""}},v={index:Object.keys(f).length,data:f},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0,t=e.index,a=e.data,r=n.payload||{},c=r.issue,u=Object(p.a)({},e.data),l=t+1;switch(n.type){case"ISSUE_ADD":return u[l]=Object(p.a)({},c,{id:l}),Object(p.a)({},e,{index:l,data:u});case"ISSUE_UPDATE":return Object(p.a)({},e,{data:Object(p.a)({},a,Object(s.a)({},c.id,c))});case"ISSUE_REMOVE":return delete u[c.id],Object(p.a)({},e,{data:u});default:return e}},h={data:{}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;arguments.length>1&&arguments[1];return e},O=t(40),g={show:!1,stack:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MODAL_HIDE":return Object(p.a)({},e,{show:!1});case"MODAL_PUSH":return Object(p.a)({},e,{stack:[].concat(Object(O.a)(e.stack),[n.payload.component]),show:!0});case"MODAL_POP":return Object(p.a)({},e,{stack:e.stack.slice(0,-1),show:!1});default:return e}},k=Object(i.combineReducers)({user:b,issue:E,pullRequest:x,ui:Object(i.combineReducers)({modal:j})}),y=t(1),w=t(2),C=t(16),S=t(14),D="#333",I="white",M="#586069",A="#e1e4e8",P="#42c360",T="#d73a49",L="#0366d6",_="#c6dae640";function U(){var e=Object(y.a)(["\n  html {\n    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n    line-height: 1.5;\n    font-size: 14px;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n  }\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n\n  h1 {\n    font-size: 2rem;\n    padding: 0;\n    margin: 0;\n  }\n\n  ul, p {\n    padding: 0;\n    margin: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n\n  .ReactModal__Content {\n    margin: auto;\n    width: 60%;\n\n    @media "," {\n      width: 100%;\n      right: 0 !important;\n      left: 0 !important;\n    }\n  }\n"]);return U=function(){return e},e}var q="768px",z="1200px",R="2560px",Y={mobile:"(max-width: ".concat("576px",")"),tablet:"(max-width: ".concat(q,")"),laptop:"(max-width: ".concat(z,")"),desktop:"(max-width: ".concat(R,")")},B=Object(w.a)(U(),L,Y.mobile),H=t(4);function N(){var e=Object(y.a)(["\n  background: ",";\n  border-bottom: 2px solid #af1c2a;\n  &:hover {\n    background: #af1c2a;\n    border-bottom: 2px solid #671019;\n  }\n\n  &:active {\n    border-bottom: 0;\n  }\n"]);return N=function(){return e},e}function F(){var e=Object(y.a)(["\n  background: ",";\n  border-bottom: 2px solid #28a745;\n\n  &:hover {\n    background: #28a745;\n    border-bottom: 2px solid #208437;\n  }\n\n  &:active {\n    border-bottom: 0;\n  }\n"]);return F=function(){return e},e}function V(){var e=Object(y.a)(["\n  cursor: pointer;\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 4px 16px;\n  margin: 4px;\n  min-width: 100px;\n  border-radius: 6px;\n  color: white;\n  font-size: 1rem;\n"]);return V=function(){return e},e}var G=w.b.a(V()),J={default:G,primary:Object(w.b)(G)(F(),P),danger:Object(w.b)(G)(N(),T)},K=function(e){var n=e.type,t=e.onClick,a=e.children,c=J[n]||J.default;return r.a.createElement(c,{onClick:t},a)};function Q(){var e=Object(y.a)(["\n  padding: 8px;\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 1rem;\n  width: 100%;\n"]);return Q=function(){return e},e}function W(){var e=Object(y.a)(["\n  border-radius: 6px;\n  border: ",";\n"]);return W=function(){return e},e}var X="1px solid ".concat(A),Z=w.b.div(W(),X),$=w.b.input(Q()),ee=function(e){var n=e.value,t=e.placeholder,c=e.onChange,u=e.onChangeText,l=Object(a.useCallback)((function(e){c&&c(e),u&&u(e.target.value)}),[c,u]);return r.a.createElement(Z,{className:"text-field-container"},r.a.createElement($,{type:"input",value:n,placeholder:t,onChange:l}))},ne=t(24),te=t.n(ne);function ae(){var e=Object(y.a)(["\n  cursor: pointer;\n\n  &:hover {\n    background: ",";\n  }\n"]);return ae=function(){return e},e}var re={0:"Open",1:"Close"},ce=w.b.tr(ae(),_),ue=function(e){var n=e.checked,t=e.onClick,c=e.onCheck,u=e.issue,l=u.id,i=u.title,o=u.status,d=u.createBy,b=u.createdAt,s=u.updatedAt,p=Object(a.useCallback)((function(e){t(u)}),[u,t]),m=Object(a.useCallback)((function(e){e.stopPropagation(),c(u)}),[u,c]);return r.a.createElement(ce,{key:l,onClick:p},r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:n,onClick:m})),r.a.createElement("td",{className:"outline"},i),r.a.createElement("td",null,re[o]),r.a.createElement("td",null,d),r.a.createElement("td",null,te()(b).format("MM-DD-YYYY")),r.a.createElement("td",null,te()(s).format("MM-DD-YYYY")))};function le(){var e=Object(y.a)(["\n  padding: 8px;\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 1rem;\n  width: 100%;\n"]);return le=function(){return e},e}function ie(){var e=Object(y.a)(["\n  border-radius: 6px;\n  border: ",";\n"]);return ie=function(){return e},e}var oe="1px solid ".concat(A),de=w.b.div(ie(),oe),be=w.b.textarea(le()),se=function(e){var n=e.value,t=e.placeholder,c=e.onChange,u=e.onChangeText,l=Object(a.useCallback)((function(e){c&&c(e),u&&u(e.target.value)}),[c,u]);return r.a.createElement(de,null,r.a.createElement(be,{value:n,placeholder:t,onChange:l}))};function pe(){var e=Object(y.a)(["\n  cursor: pointer;\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 4px 16px;\n  margin: 4px;\n  min-width: 100px;\n  border-radius: 6px;\n  font-size: 1rem;\n"]);return pe=function(){return e},e}var me=w.b.a(pe()),fe=function(e){var n=e.onClick,t=e.children;return r.a.createElement(me,{onClick:n},t)};function ve(){var e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(y.a)(["\n  color: ",";\n  background: #d73a4959;\n  padding: 8px;\n  border-radius: 6px;\n"]);return Ee=function(){return e},e}function he(){var e=Object(y.a)(["\n  padding: 16px;\n  min-height: 100px;\n"]);return he=function(){return e},e}function xe(){var e=Object(y.a)(["\n  display: block;\n  padding: 8px 0;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(y.a)(["\n  padding: 16px;\n"]);return Oe=function(){return e},e}function ge(){var e=Object(y.a)(["\n  padding: 32px 0;\n  padding-bottom: 16px;\n"]);return ge=function(){return e},e}function je(){var e=Object(y.a)(["\n  padding: 0 8px;\n"]);return je=function(){return e},e}function ke(){var e=Object(y.a)(["\n  max-width: 598px;\n  margin: auto;\n  a {\n    width: auto;\n  }\n\n  textarea {\n    min-height: 150px;\n  }\n"]);return ke=function(){return e},e}var ye=w.b.div(ke()),we=w.b.h2(je()),Ce=w.b.div(ge()),Se=w.b.div(Oe()),De=w.b.label(xe()),Ie=w.b.div(he()),Me=w.b.p(Ee(),T),Ae=w.b.div(ve()),Pe=function(e){var n=e.user,t=e.onSubmit,c=e.onClose,u=Object(a.useState)(""),l=Object(H.a)(u,2),i=l[0],o=l[1],d=Object(a.useState)(""),b=Object(H.a)(d,2),s=b[0],p=b[1],m=Object(a.useState)(""),f=Object(H.a)(m,2),v=f[0],E=f[1],h=Object(a.useCallback)((function(){if(s)if(v){var e=new Date;t({issue:{title:s,description:v,createBy:n.name,status:0,createdAt:e,updatedAt:e}})}else o("\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044");else o("\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")}),[n,s,v,t,o]);return r.a.createElement(ye,null,r.a.createElement(we,null,"Issue\u3092\u8ffd\u52a0"),r.a.createElement(Ce,null,r.a.createElement(Se,null,r.a.createElement(De,null,"\u30bf\u30a4\u30c8\u30eb"),r.a.createElement(ee,{value:s,placeholder:"\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChangeText:p})),r.a.createElement(Se,null,r.a.createElement(De,null,"\u8aac\u660e"),r.a.createElement(se,{value:v,placeholder:"\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChangeText:E}))),r.a.createElement(Ie,null,i&&r.a.createElement(Me,null,i)),r.a.createElement(Ae,null,r.a.createElement(K,{type:"primary",onClick:h},"\u4f5c\u6210"),r.a.createElement(fe,{onClick:c},"\u9589\u3058\u308b")))};function Te(){var e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 8px;\n"]);return Te=function(){return e},e}function Le(){var e=Object(y.a)(["\n  color: ",";\n  background: #d73a4959;\n  padding: 8px;\n  border-radius: 6px;\n"]);return Le=function(){return e},e}function _e(){var e=Object(y.a)(["\n  padding: 16px;\n  min-height: 100px;\n"]);return _e=function(){return e},e}function Ue(){var e=Object(y.a)(["\n  display: block;\n  padding: 8px 0;\n"]);return Ue=function(){return e},e}function qe(){var e=Object(y.a)(["\n  padding: 16px;\n"]);return qe=function(){return e},e}function ze(){var e=Object(y.a)(["\n  padding: 32px 0;\n  padding-bottom: 16px;\n"]);return ze=function(){return e},e}function Re(){var e=Object(y.a)(["\n  padding: 0 8px;\n"]);return Re=function(){return e},e}function Ye(){var e=Object(y.a)(["\n  max-width: 598px;\n  margin: auto;\n  a {\n    width: auto;\n  }\n\n  textarea {\n    min-height: 150px;\n  }\n"]);return Ye=function(){return e},e}var Be=w.b.div(Ye()),He=w.b.h2(Re()),Ne=w.b.div(ze()),Fe=w.b.div(qe()),Ve=w.b.label(Ue()),Ge=w.b.div(_e()),Je=w.b.p(Le(),T),Ke=w.b.div(Te()),Qe=function(e){var n=e.issue,t=e.onSubmit,c=e.onClose,u=Object(a.useState)(""),l=Object(H.a)(u,2),i=l[0],o=l[1],d=Object(a.useState)(n.title),b=Object(H.a)(d,2),s=b[0],m=b[1],f=Object(a.useState)(n.status),v=Object(H.a)(f,2),E=v[0],h=v[1],x=Object(a.useState)(n.description),O=Object(H.a)(x,2),g=O[0],j=O[1],k=Object(a.useCallback)((function(e){h(e.target.value)}),[h]),y=Object(a.useCallback)((function(){if(s)if(g){var e=new Date;t({issue:Object(p.a)({},n,{title:s,description:g,status:E,updatedAt:e})}),c()}else o("\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044");else o("\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")}),[n,s,E,g,t,c,o]);return r.a.createElement(Be,null,r.a.createElement(He,null,"Issue\u3092\u8ffd\u52a0"),r.a.createElement(Ne,null,r.a.createElement(Fe,null,r.a.createElement(Ve,null,"\u30bf\u30a4\u30c8\u30eb"),r.a.createElement(ee,{value:s,placeholder:"\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChangeText:m})),r.a.createElement(Fe,null,r.a.createElement(Ve,null,"\u8aac\u660e"),r.a.createElement(se,{value:g,placeholder:"\u8aac\u660e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChangeText:j})),r.a.createElement(Fe,null,r.a.createElement(Ve,null,"\u30b9\u30c6\u30fc\u30bf\u30b9"),r.a.createElement("select",{value:E,onChange:k},r.a.createElement("option",{value:"0"},"Open"),r.a.createElement("option",{value:"1"},"Close")))),r.a.createElement(Ge,null,i&&r.a.createElement(Je,null,i)),r.a.createElement(Ke,null,r.a.createElement(K,{type:"primary",onClick:y},"\u66f4\u65b0"),r.a.createElement(fe,{onClick:c},"\u9589\u3058\u308b")))};function We(){var e=Object(y.a)(["\n  border: ",";\n  border-radius: 6px;\n  .outline {\n    width: 140rem;\n  }\n\n  th,\n  td {\n    padding: 8px;\n    text-align: left;\n    min-width: 10rem;\n    border-bottom: ",";\n  }\n\n  th:first-child,\n  td:first-child {\n    min-width: auto;\n  }\n\n  .no-divider {\n    border-bottom: 0;\n  }\n"]);return We=function(){return e},e}function Xe(){var e=Object(y.a)(["\n  display: flex;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(y.a)(["\n  padding: 8px 16px;\n  display: flex;\n  width: 100%;\n\n  .text-field-container {\n    width: 100%;\n  }\n"]);return Ze=function(){return e},e}function $e(){var e=Object(y.a)([""]);return $e=function(){return e},e}function en(){var e=Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]);return en=function(){return e},e}function nn(){var e=Object(y.a)(["\n  overflow: scroll;\n"]);return nn=function(){return e},e}function tn(){var e=Object(y.a)(["\n  padding: 16px;\n  margin-top: 16px;\n"]);return tn=function(){return e},e}var an="1px solid ".concat(A),rn=w.b.div(tn()),cn=w.b.div(nn()),un=w.b.div(en()),ln=w.b.div($e()),on=w.b.div(Ze()),dn=w.b.div(Xe()),bn=w.b.table(We(),an,an),sn=function(e){var n=e.data,t=e.user,c=e.showModal,u=e.addIssue,l=e.removeIssue,i=e.updateIssue,o=e.removeModal,d=Object(a.useState)(""),b=Object(H.a)(d,2),s=b[0],m=b[1],f=Object(a.useMemo)((function(){var e=Object.values(n);return s?e.filter((function(e){return e.title.includes(s)})):e}),[n,s]),v=Object(a.useState)({}),E=Object(H.a)(v,2),h=E[0],x=E[1],O=Object(a.useMemo)((function(){return Object.keys(n).length&&Object.keys(h).length===Object.keys(n).length}),[n,h]),g=Object(a.useCallback)((function(){x(O?{}:n)}),[O,n]),j=Object(a.useCallback)((function(e){var t=e.id,a=Object(p.a)({},h);h[t]?delete a[t]:a[t]=n[t],x(a)}),[n,h]),k=Object(a.useCallback)((function(){c({component:r.a.createElement(Pe,{user:t,onSubmit:function(e){u(e),o()},onClose:o})})}),[t,c,o,u]),y=Object(a.useCallback)((function(e){c({component:r.a.createElement(Qe,{issue:e,onSubmit:i,onClose:o})})}),[c,o,i]),w=Object(a.useCallback)((function(){Object.values(h).forEach((function(e){l({issue:e})}))}),[h,l]);return r.a.createElement(rn,null,r.a.createElement(un,null,r.a.createElement(ln,null,r.a.createElement("h2",null,"Issue")),r.a.createElement(on,null,r.a.createElement(ee,{value:s,placeholder:"issue\u540d\u3067\u691c\u7d22",onChangeText:m})),r.a.createElement(dn,null,r.a.createElement(K,{type:"primary",onClick:k},"New"),r.a.createElement(K,{type:"danger",onClick:w},"Delete"))),r.a.createElement(cn,null,r.a.createElement(bn,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("input",{type:"checkbox",defaultChecked:O,onClick:g})),r.a.createElement("th",null),r.a.createElement("th",null,"\u30b9\u30c6\u30fc\u30bf\u30b9"),r.a.createElement("th",null,"\u4f5c\u6210\u8005"),r.a.createElement("th",null,"\u4f5c\u6210\u65e5\u4ed8"),r.a.createElement("th",null,"\u66f4\u65b0\u65e5\u4ed8"))),r.a.createElement("tbody",null,f.length?f.map((function(e){return r.a.createElement(ue,{key:e.id,issue:e,checked:h[e.id],onClick:y,onCheck:j})})):r.a.createElement(r.a.Fragment,null),!f.length&&r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},"\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093"))))))},pn=Object(l.b)((function(e){var n=e.user;return{data:e.issue.data,user:n}}),(function(e){return Object(i.bindActionCreators)(m,e)}))(sn);function mn(){var e=Object(y.a)(["\n  padding: 16px;\n  margin-top: 128px;\n\n  h1 {\n    text-align: center;\n  }\n"]);return mn=function(){return e},e}var fn=w.b.div(mn()),vn=function(){return r.a.createElement(fn,null,r.a.createElement("h1",null,"PullRequest"))};function En(){var e=Object(y.a)(["\n  font-size: 1.2rem;\n  width: 100%;\n  text-align: center;\n  border-radius: 6px 6px 0px 0px;\n  border-top: ",";\n  border-right: ",";\n  border-left: ",";\n  border-bottom: ",";\n"]);return En=function(){return e},e}function hn(){var e=Object(y.a)(["\n  display: flex;\n\n  li {\n    padding: 0;\n  }\n\n  span {\n    cursor: pointer;\n    color: ",";\n    padding: 16px;\n    display: block;\n    width: 100%;\n  }\n"]);return hn=function(){return e},e}function xn(){var e=Object(y.a)([""]);return xn=function(){return e},e}var On=w.b.div(xn()),gn=w.b.ul(hn(),M),jn="1px solid ".concat(A),kn=w.b.li(En(),(function(e){return e.active?jn:""}),(function(e){return e.active?jn:""}),(function(e){return e.active?jn:""}),(function(e){return e.active?"":jn})),yn=function(e){var n=e.tabs,t=e.selected,a=e.onChange;return r.a.createElement(On,null,r.a.createElement(gn,null,n.map((function(e){var n=e.key,c=(e.to,e.label),u=n===t;return r.a.createElement(kn,{active:u,key:n},r.a.createElement("span",{onClick:function(){return a(n)}},c))}))))};function wn(){var e=Object(y.a)([""]);return wn=function(){return e},e}function Cn(){var e=Object(y.a)([""]);return Cn=function(){return e},e}var Sn=[{key:"issue",label:"Issue"},{key:"pull-requests",label:"Pull Request"}],Dn=w.b.div(Cn()),In=w.b.div(wn()),Mn=[{key:"issue",component:r.a.createElement(pn,null)},{key:"pull-requests",component:r.a.createElement(vn,null)}],An=function(){var e=Object(a.useState)("issue"),n=Object(H.a)(e,2),t=n[0],c=n[1];return r.a.createElement(Dn,null,r.a.createElement(In,null,r.a.createElement(yn,{selected:t,onChange:c,tabs:Sn}),Mn.map((function(e){return t===e.key?e.component:r.a.createElement(r.a.Fragment,null)}))))};function Pn(){var e=Object(y.a)(["\n  padding: 16px 0;\n  font-size: 1.2rem;\n"]);return Pn=function(){return e},e}function Tn(){var e=Object(y.a)(["\n  color: ",";\n"]);return Tn=function(){return e},e}function Ln(){var e=Object(y.a)([""]);return Ln=function(){return e},e}function _n(){var e=Object(y.a)(["\n  padding: 16px;\n  width: 50%;\n"]);return _n=function(){return e},e}function Un(){var e=Object(y.a)(["\n  padding: 16px;\n  width: 50%;\n"]);return Un=function(){return e},e}function qn(){var e=Object(y.a)(["\n  margin: 32px 0;\n  display: flex;\n  border-radius: 6px;\n  border: ",";\n"]);return qn=function(){return e},e}function zn(){var e=Object(y.a)([""]);return zn=function(){return e},e}function Rn(){var e=Object(y.a)(["\n  padding: 16px;\n  margin: auto;\n"]);return Rn=function(){return e},e}var Yn=w.b.div(Rn()),Bn="1px solid ".concat(A),Hn=w.b.h1(zn()),Nn=w.b.div(qn(),Bn),Fn=w.b.div(Un()),Vn=w.b.div(_n()),Gn=w.b.div(Ln()),Jn=w.b.label(Tn(),M),Kn=w.b.p(Pn()),Qn=function(e){var n=e.user;return r.a.createElement(Yn,null,r.a.createElement(Hn,null,"Profile"),r.a.createElement(Nn,null,r.a.createElement(Fn,null,r.a.createElement(Gn,null,r.a.createElement(Jn,null,"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb"),r.a.createElement(Kn,null,r.a.createElement("img",{src:n.profileUrl,alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb"})))),r.a.createElement(Vn,null,r.a.createElement(Gn,null,r.a.createElement(Jn,null,"\u30e6\u30fc\u30b6\u540d"),r.a.createElement(Kn,null,n.name)),r.a.createElement(Gn,null,r.a.createElement(Jn,null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),r.a.createElement(Kn,null,n.email)))))},Wn=Object(l.b)((function(e){return{user:e.user}}),(function(e){return Object(i.bindActionCreators)(m,e)}))(Qn);function Xn(){var e=Object(y.a)(["\n  padding: 16px;\n"]);return Xn=function(){return e},e}var Zn=w.b.div(Xn()),$n=function(){return r.a.createElement(Zn,null,r.a.createElement(pn,null))};function et(){var e=Object(y.a)(["\n  padding: 16px;\n\n  h1 {\n    text-align: center;\n  }\n"]);return et=function(){return e},e}var nt=w.b.div(et()),tt=function(){return r.a.createElement(nt,null,r.a.createElement(vn,null))};function at(){var e=Object(y.a)(["\n  padding: 0;\n\n  a {\n    display: block;\n    color: ",";\n    padding: 8px;\n    font-size: 1rem;\n  }\n\n  a:hover {\n    background: ",";\n    color: white;\n  }\n"]);return at=function(){return e},e}function rt(){var e=Object(y.a)(["\n  position: absolute;\n  margin-top: 16px;\n  right: 16px;\n  width: 200px;\n  border-radius: 2px;\n  padding: 8px 0px;\n  background: white;\n  color: ",";\n  box-shadow: 1px 1px 4px 1px #33333326;\n"]);return rt=function(){return e},e}function ct(){var e=Object(y.a)(["\n  cursor: pointer;\n"]);return ct=function(){return e},e}function ut(){var e=Object(y.a)([""]);return ut=function(){return e},e}var lt=w.b.div(ut()),it=w.b.i(ct()),ot=w.b.div(rt(),D),dt=w.b.li(at(),D,L),bt=function(e){var n=e.menu,t=Object(a.useState)(!1),c=Object(H.a)(t,2),u=c[0],l=c[1],i=Object(a.useCallback)((function(){setTimeout((function(){return l(!1)})),document.querySelector("#root").removeEventListener("click",i)}),[]),o=Object(a.useCallback)((function(){l(!0),document.querySelector("#root").addEventListener("click",i)}),[i]);return r.a.createElement(lt,null,r.a.createElement(it,{className:"fa fa-bars",onClick:o}),u&&r.a.createElement(ot,null,r.a.createElement("ul",null,n.map((function(e){var n=e.to,t=e.label;return r.a.createElement(dt,{key:n},r.a.createElement(C.b,{to:n},t))})))))};function st(){var e=Object(y.a)(["\n  white-space: nowrap;\n"]);return st=function(){return e},e}function pt(){var e=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  padding: 0 32px;\n\n  li {\n    margin-right: 16px;\n  }\n  li > a {\n    color: ",";\n    font-size: 1.1rem;\n  }\n"]);return pt=function(){return e},e}function mt(){var e=Object(y.a)(["\n  padding: 8px;\n  font-size: 1.2rem;\n"]);return mt=function(){return e},e}function ft(){var e=Object(y.a)(["\n  a {\n    color: white;\n  }\n"]);return ft=function(){return e},e}function vt(){var e=Object(y.a)(["\n  display: flex;\n  padding: 16px;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  color: white;\n"]);return vt=function(){return e},e}var Et=w.b.div(vt(),D),ht=w.b.div(ft()),xt=w.b.div(mt()),Ot=w.b.ul(pt(),I),gt=w.b.h1(st()),jt=[{to:"/",label:"Top"},{to:"/profile",label:"Your Profile"},{to:"/issue",label:"Issue"},{to:"/pull-request",label:"Pull Request"}],kt=[{to:"/issue",label:"Issue"},{to:"/pull-request",label:"Pull Request"}],yt=function(){return r.a.createElement(Et,null,r.a.createElement(ht,null,r.a.createElement(C.b,{to:"/"},r.a.createElement(gt,null,"Github Viewer"))),r.a.createElement(Ot,null,kt.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(C.b,{to:e.to},e.label))}))),r.a.createElement(xt,null,r.a.createElement(bt,{menu:jt})))},wt=t(27),Ct=t.n(wt);Ct.a.setAppElement("#root");var St=function(e){var n=e.show,t=e.component;return n?r.a.createElement(Ct.a,{isOpen:n},t):r.a.createElement(r.a.Fragment,null)},Dt=Object(l.b)((function(e){var n=e.ui.modal;return{show:n.show,component:n.stack.slice(-1)[0]}}),(function(e){return{}}))(St);function It(){var e=Object(y.a)(["\n  max-width: 896px;\n  margin: 0 auto;\n  padding: 32px 16px;\n"]);return It=function(){return e},e}function Mt(){var e=Object(y.a)([""]);return Mt=function(){return e},e}var At=w.b.div(Mt()),Pt=w.b.div(It()),Tt=function(){return r.a.createElement(C.a,null,r.a.createElement(At,null,r.a.createElement(B,null),r.a.createElement(yt,null),r.a.createElement(Pt,null,r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/profile"},r.a.createElement(Wn,null)),r.a.createElement(S.a,{path:"/issue"},r.a.createElement($n,null)),r.a.createElement(S.a,{path:"/pull-request"},r.a.createElement(tt,null)),r.a.createElement(S.a,{exact:!0,path:"/"},r.a.createElement(An,null)))),r.a.createElement(Dt,null)))},Lt=Object(i.createStore)(k,Object(o.devToolsEnhancer)());u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:Lt},r.a.createElement(Tt,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.05fb81bc.chunk.js.map