(this.webpackJsonpdanielopes=this.webpackJsonpdanielopes||[]).push([[0],{23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(16),r=a.n(c),i=(a(23),a(3)),s=a(4),o=a.n(s),l=a(7),d=a(2),u=(a(25),a.p+"static/media/logo.6ee6ff71.svg"),j=a(0);function b(){return Object(j.jsx)("header",{className:"container-header",children:Object(j.jsx)("img",{src:u,alt:"logo Dindin"})})}var h=a.p+"static/media/filter-icon.8fb5dc56.svg",m=a.p+"static/media/add-icon.d2eca107.svg",O=a.p+"static/media/remove-icon.4790512a.svg";a(27);function f(e){var t=e.title,a=e.selected,n=e.handleSelectFilter;return Object(j.jsxs)("div",{className:"container-chip ".concat(a&&"selected"),onClick:function(){return n(t)},children:[Object(j.jsx)("span",{children:t}),Object(j.jsx)("img",{className:"icon-filter",src:a?O:m,alt:t})]})}a(28);function p(e){var t=e.handleAtualizaListaTransactions,a=e.refreshTransactions,c=e.setRefreshTransactions,r=Object(n.useState)(!1),s=Object(d.a)(r,2),u=s[0],b=s[1],m=Object(n.useState)([]),O=Object(d.a)(m,2),p=O[0],g=O[1],y=Object(n.useState)(""),N=Object(d.a)(y,2),k=N[0],w=N[1],C=Object(n.useState)(""),S=Object(d.a)(C,2),D=S[0],T=S[1],E=Object(n.useState)([]),F=Object(d.a)(E,2),L=F[0],M=F[1],R=Object(n.useState)([].concat(v)),A=Object(d.a)(R,2),I=A[0],q=A[1];function z(e){var t=Object(i.a)(I),a=t.find((function(t){return t.nome===e}));a.aplicar=!a.aplicar,q(Object(i.a)(t))}function _(e){var t=Object(i.a)(L),a=t.find((function(t){return t.nome===e}));a.aplicar=!a.aplicar,M(Object(i.a)(t))}return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3334/transactions");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Falha ao carregar transa\xe7\xf5es!");case 6:return e.next=8,t.json();case 8:a=e.sent,g(Object(i.a)(a)),n=x(a,L),M(Object(i.a)(n)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Erro inesperado.");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("button",{className:"open-filters-button",onClick:function(){return b(!u)},children:[Object(j.jsx)("img",{src:h,alt:"Filter icon"}),"Filtrar"]}),u&&Object(j.jsxs)("div",{className:"container-filters",children:[Object(j.jsxs)("div",{className:"filter-item",children:[Object(j.jsx)("strong",{children:"Dia da semana"}),Object(j.jsx)("div",{className:"container-chips",children:I.map((function(e){return Object(j.jsx)(f,{title:e.nome,selected:e.aplicar,handleSelectFilter:z},e.nome)}))})]}),Object(j.jsx)("div",{className:"vertical-line custom-line"}),Object(j.jsxs)("div",{className:"filter-item",children:[Object(j.jsx)("strong",{children:"Categoria"}),Object(j.jsx)("div",{className:"container-chips",children:L.map((function(e){return Object(j.jsx)(f,{title:e.nome,selected:e.aplicar,handleSelectFilter:_},e.nome)}))})]}),Object(j.jsx)("div",{className:"vertical-line custom-line"}),Object(j.jsxs)("div",{className:"filter-item",children:[Object(j.jsx)("strong",{children:"Valor"}),Object(j.jsx)("div",{className:"container-input-filter",children:Object(j.jsxs)("label",{htmlFor:"min-value",children:["Min.",Object(j.jsx)("input",{id:"min-value",type:"number",onChange:function(e){return w(e.target.value)},value:k})]})}),Object(j.jsx)("div",{className:"container-input-filter",children:Object(j.jsxs)("label",{htmlFor:"max-value",children:["Max.",Object(j.jsx)("input",{id:"max-value",type:"number",onChange:function(e){return T(e.target.value)},value:D})]})})]}),Object(j.jsxs)("div",{className:"container-actions",children:[Object(j.jsx)("button",{className:"btn-clear-filters",onClick:function(){return function(){var e=Object(i.a)(I);e.map((function(e){return e.aplicar=!1})),q(Object(i.a)(e));var t=Object(i.a)(L);t.map((function(e){return e.aplicar=!1})),M(Object(i.a)(t)),c(!a),w(0),T(0)}()},children:"Limpar filtros"}),Object(j.jsx)("button",{onClick:function(){return function(){var e=I.filter((function(e){return e.aplicar})).map((function(e){return e.nome.toLocaleLowerCase()})),n=L.filter((function(e){return e.aplicar})).map((function(e){return e.nome.toLocaleLowerCase()}));if(e.length||n.length||k||D){var r=Object(i.a)(p);k&&(r=r.filter((function(e){return Math.abs(e.value)>=k}))),D&&(r=r.filter((function(e){return Math.abs(e.value)<=D}))),e.length&&(r=r.filter((function(t){return e.includes(t.week_day)}))),n.length&&(r=r.filter((function(e){return n.includes(e.category.toLowerCase())}))),t(r)}else c(!a)}()},className:"btn btn-apply-filters",children:"Aplicar filtros"})]})]})]})}var v=[{nome:"Domingo",aplicar:!1},{nome:"Segunda",aplicar:!1},{nome:"Ter\xe7a",aplicar:!1},{nome:"Quarta",aplicar:!1},{nome:"Quinta",aplicar:!1},{nome:"Sexta",aplicar:!1},{nome:"S\xe1bado",aplicar:!1}];function x(e,t){var a=e.map((function(e){return e.category})),n=t.map((function(e){return e.aplicar}));return Object(i.a)(new Set(a)).map((function(e){return{nome:e,aplicar:n.includes(e)}}))}var g=a.p+"static/media/delete-icon.d638ee0d.svg",y=a.p+"static/media/edit-icon.025aaee4.svg",N=a(37),k=a(13);function w(e){return e.toLocaleString("pt-br",{style:"currency",currency:"BRL"})}function C(e){var t=new Date("".concat(e));return{data:Object(N.a)(t,"dd/MM/yyyy"),semana:S(Object(N.a)(t,"eee",{locale:k.a}))}}function S(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}a(29);function D(e){var t=e.show,a=e.handleChooseToDelete,n=e.setItemToDelete;return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsxs)("div",{className:"container-confirm-delete",children:[Object(j.jsx)("div",{className:"arrow-up"}),Object(j.jsx)("span",{children:"Apagar item?"}),Object(j.jsx)("button",{className:"btn-actions-confirm-delete blue",onClick:function(){return a()},children:"Sim"}),Object(j.jsx)("button",{className:"btn-actions-confirm-delete red",onClick:function(){return n(!1)},children:"N\xe3o"})]})})}var T=a.p+"static/media/triangle-down.86d7faca.svg",E=a.p+"static/media/triangle-up.6b45ee3f.svg";a(30);function F(e){var t=e.transactions,a=e.handleAtualizaListaTransactions,c=Object(n.useState)("data"),r=Object(d.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)("asc"),u=Object(d.a)(l,2),b=u[0],h=u[1];function m(e){if(e===s)return h("asc"===b?"desc":"asc");o(e)}return Object(n.useEffect)((function(){"desc"!==b?function(e){var n=Object(i.a)(t);n.sort((function(t,a){return function(e,t,a){switch(a){case"data":return new Date(e.date)-new Date(t.date);case"diaDaSemana":return L[e.week_day]-L[t.week_day];case"descricao":return e.description.localeCompare(t.description);case"categoria":return e.category.localeCompare(t.category);case"valor":return e.value-t.value}}(t,a,e)})),a(n)}(s):function(e){var n=Object(i.a)(t);n.sort((function(t,a){return function(e,t,a){switch(a){case"data":return new Date(t.date)-new Date(e.date);case"diaDaSemana":return L[t.week_day]-L[e.week_day];case"descricao":return t.description.localeCompare(e.description);case"categoria":return t.category.localeCompare(e.category);case"valor":return t.value-e.value}}(t,a,e)})),a(n)}(s)}),[b,s]),Object(j.jsxs)("div",{className:"table-head",children:[Object(j.jsxs)("div",{id:"date",className:"column-title cursor-pointer",onClick:function(){return m("data")},children:[Object(j.jsx)("span",{children:"Data"}),"data"===s&&Object(j.jsx)("img",{src:"asc"===b?E:T,alt:"triangle"})]}),Object(j.jsxs)("div",{id:"week-day",className:"column-title cursor-pointer",onClick:function(){return m("diaDaSemana")},children:[Object(j.jsx)("span",{children:"Dia da semana"}),"diaDaSemana"===s&&Object(j.jsx)("img",{src:"asc"===b?E:T,alt:"triangle"})]}),Object(j.jsxs)("div",{id:"description",className:"column-title cursor-pointer",onClick:function(){return m("descricao")},children:[Object(j.jsx)("span",{children:"Descri\xe7\xe3o"}),"descricao"===s&&Object(j.jsx)("img",{src:"asc"===b?E:T,alt:"triangle"})]}),Object(j.jsxs)("div",{id:"category",className:"column-title cursor-pointer",onClick:function(){return m("categoria")},children:[Object(j.jsx)("span",{children:"Categoria"}),"categoria"===s&&Object(j.jsx)("img",{src:"asc"===b?E:T,alt:"triangle"})]}),Object(j.jsxs)("div",{id:"value",className:"column-title cursor-pointer",onClick:function(){return m("valor")},children:[Object(j.jsx)("span",{children:"Valor"}),"valor"===s&&Object(j.jsx)("img",{src:"asc"===b?E:T,alt:"triangle"})]}),Object(j.jsx)("div",{className:"column-title"})]})}var L={domingo:1,segunda:2,"ter\xe7a":3,quarta:4,quinta:5,sexta:6,"s\xe1bado":7};a(31);function M(e){var t=e.transactions,a=e.handleEditItem,c=e.handleAtualizaListaTransactions,r=e.refreshTransactions,i=e.setRefreshTransactions,s=Object(n.useState)(null),u=Object(d.a)(s,2),b=u[0],h=u[1];function m(){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="http://localhost:3334/transactions/".concat(b),e.next=4,fetch(t,{method:"DELETE"});case 4:if(e.sent.ok){e.next=7;break}throw new Error("Falha ao excluir transa\xe7\xe3o!");case 7:i(!r),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:return e.prev=12,h(null),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,10,12,15]])})))).apply(this,arguments)}return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"table",children:[Object(j.jsx)(F,{transactions:t,handleAtualizaListaTransactions:c}),Object(j.jsx)("div",{className:"table-body",children:t.map((function(e){return Object(j.jsxs)("div",{className:"table-line",children:[Object(j.jsx)("div",{className:"line-items bold",children:C(e.date).data}),Object(j.jsx)("div",{className:"line-items",children:C(e.date).semana}),Object(j.jsx)("div",{className:"line-items",children:Object(j.jsx)("span",{children:e.description})}),Object(j.jsx)("div",{className:"line-items",children:e.category}),Object(j.jsx)("div",{className:"credit"===e.type?"purple line-items bold":"orange line-items bold",children:w("credit"===e.type?e.value:-1*e.value)}),Object(j.jsxs)("div",{className:"line-items action-buttons",children:[Object(j.jsx)("img",{onClick:function(){return a(e)},className:"edit-icon",src:y,alt:"Icon edit"}),Object(j.jsx)("img",{onClick:function(){return t=e.id,void h(t);var t},className:"delete-icon",src:g,alt:"Delete edit"}),Object(j.jsx)(D,{show:b===e.id,setItemToDelete:h,handleChooseToDelete:m})]})]},e.id)}))})]})})}a(32);function R(e){var t=e.transactions,a=e.setOpenModal,c=Object(n.useState)({credito:0,debito:0,saldo:0}),r=Object(d.a)(c,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){var e=t.reduce((function(e,t){return"credit"===t.type?e+t.value:e+0}),0),a=t.reduce((function(e,t){return"debit"===t.type?e+t.value:e+0}),0);s({credito:e,debito:a,saldo:e-a})}),[t]),Object(j.jsxs)("div",{className:"container-resume",children:[Object(j.jsx)("h3",{children:"Resumo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Entradas"}),Object(j.jsx)("strong",{className:"in",children:w(i.credito)})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Sa\xeddas"}),Object(j.jsx)("strong",{className:"out",children:w(i.debito)})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"Saldo"}),Object(j.jsx)("strong",{className:"balance",children:w(i.saldo)})]}),Object(j.jsx)("button",{className:"btn-add",onClick:function(){return a(!0)},children:"Adicionar Registro"})]})}var A=a(12),I=a(14),q=a(17),z=a.n(q),_=a.p+"static/media/close-icon.596dfa7c.svg",V=(a(34),{value:"",category:"",date:"",description:""});function J(e){var t=e.openModal,a=e.handleClose,c=e.editItem,r=e.refreshTransactions,i=e.setRefreshTransactions,s=Object(n.useState)("debit"),u=Object(d.a)(s,2),b=u[0],h=u[1],m=Object(n.useState)(V),O=Object(d.a)(m,2),f=O[0],p=O[1];function v(e){var t=e.target;p(Object(I.a)(Object(I.a)({},f),{},Object(A.a)({},t.name,t.value)))}function x(){return(x=Object(l.a)(o.a.mark((function e(t){var n,s,l,u,j,h,m,O,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,n=f.date.split("/"),s=Object(d.a)(n,3),l=s[0],u=s[1],j=s[2],h=new Date("".concat(u,"/").concat(l,"/").concat(j)),f.description&&f.value&&f.category&&b){e.next=6;break}return e.abrupt("return");case 6:return m={date:h,week_day:Object(N.a)(h,"eee",{locale:k.a}),description:S(f.description),value:parseFloat(f.value),category:S(f.category),type:b},O=c?"PUT":"POST",p=c?"http://localhost:3334/transactions/".concat(c.id):"http://localhost:3334/transactions",e.next=11,fetch(p,{method:O,headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});case 11:if(e.sent.ok){e.next=14;break}throw new Error("Falha ao adicionar transa\xe7\xe3o!");case 14:i(!r),a(),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(1);case 20:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){return function(){p(V)}}),[t]),Object(n.useEffect)((function(){if(c){var e={value:c.value,category:c.category,description:c.description,type:c.type,date:Object(N.a)(new Date(c.date),"dd/MM/yyyy")};h(e.type),p(Object(I.a)({},e))}}),[c]),Object(j.jsx)("div",{className:"backdrop",style:{display:!t&&"none"},children:Object(j.jsxs)("div",{className:"modal-container",children:[Object(j.jsx)("img",{className:"close-icon",src:_,alt:"Close icon",onClick:function(){return a()}}),Object(j.jsx)("h2",{children:c?"Editar Registro":"Adicionar Registro"}),Object(j.jsxs)("div",{className:"container-buttons",children:[Object(j.jsx)("button",{id:"credit-button",className:"btn-new-transaction ".concat("credit"===b&&"credit"),onClick:function(){return h("credit")},children:"Entrada"}),Object(j.jsx)("button",{id:"debit-button",className:"btn-new-transaction ".concat("debit"===b&&"debit"),onClick:function(){return h("debit")},children:"Sa\xedda"})]}),Object(j.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(j.jsx)("div",{children:Object(j.jsxs)("label",{htmlFor:"value",children:["Valor",Object(j.jsx)("input",{onChange:function(e){return v(e)},value:f.value,name:"value",id:"imputValue",title:"Valor da transa\xe7\xe3o em reais",type:"number",placeholder:"99,99",required:!0})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{htmlFor:"category",children:["Categoria",Object(j.jsx)("input",{onChange:function(e){return v(e)},value:f.category,name:"category",id:"imputCategory",title:"Categoria da transa\xe7\xe3o",placeholder:"Mercado",required:!0})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{htmlFor:"date",children:["Data",Object(j.jsx)(z.a,{mask:"99/99/9999",onChange:function(e){return v(e)},value:f.date,name:"date",id:"imputDate",title:"Data da transa\xe7\xe3o",placeholder:"10/10/2021",required:!0})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("label",{htmlFor:"description",children:["Descri\xe7\xe3o",Object(j.jsx)("input",{onChange:function(e){return v(e)},value:f.description,name:"description",id:"imputDescription",title:"Descri\xe7\xe3o da transa\xe7\xe3o",placeholder:"Compra de comida",required:!0})]})}),Object(j.jsx)("div",{className:"container-btn-insert",children:Object(j.jsx)("button",{className:"btn-insert",children:"Confirmar"})})]})]})})}a(35);var B=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),u=s[0],h=s[1],m=Object(n.useState)(!1),O=Object(d.a)(m,2),f=O[0],v=O[1],x=Object(n.useState)([]),g=Object(d.a)(x,2),y=g[0],N=g[1];function k(e){N(Object(i.a)(e))}return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3334/transactions");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("N\xe3o foi poss\xedvel carregar as transa\xe7\xf5es!");case 6:return e.next=8,t.json();case 8:a=e.sent,N(a),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),Object(j.jsxs)("div",{className:"container-dashboard",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{refreshTransactions:f,setRefreshTransactions:v,handleAtualizaListaTransactions:k}),Object(j.jsx)(M,{transactions:y,handleEditItem:function(e){c(e),h(!0)},handleAtualizaListaTransactions:k,refreshTransactions:f,setRefreshTransactions:v})]}),Object(j.jsx)("aside",{className:"aside-right",children:Object(j.jsx)(R,{transactions:y,setOpenModal:h})})]}),Object(j.jsx)(J,{refreshTransactions:f,setRefreshTransactions:v,openModal:u,handleClose:function(){h(!1),c(null)},editItem:a,transactions:y})]})};r.a.render(Object(j.jsx)(B,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.dc6910a8.chunk.js.map