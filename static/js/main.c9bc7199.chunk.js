(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contact:"ContactEditorElement_contact__3PWq6",form:"ContactEditorElement_form__nkBvH"}},12:function(t,e,n){t.exports={search:"Filter_search__39RyG"}},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n(11),r=n.n(o),s=(n(18),n(2)),i=n(7),u=n(4),j=n(21),b=n(9),l=n.n(b),m=function(t){var e=t.contacts,n=t.onDelete;return Object(a.jsxs)("div",{className:l.a.contactList,children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("ul",{className:l.a.contactData,children:e.map((function(t,e){var c=t.id,o=t.name,r=t.number;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[" ",e+1,". Name: ",o]}),Object(a.jsxs)("p",{children:[" Number: ",r]}),Object(a.jsx)("button",{type:"button",onClick:n,"data-id":c,children:"Delete"})]},c)}))})]})},O=n(12),d=n.n(O);function h(t){var e=t.value,n=t.onChange;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:d.a.search,type:"text",value:e,placeholder:"Search by name",onChange:n})})}var f=n(5),x=n(10),g=n.n(x),p=function(t){var e=t.name,n=t.number,c=t.onChange,o=t.onHandelChange;return Object(a.jsxs)("div",{className:g.a.contact,children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsxs)("form",{className:g.a.form,onSubmit:c,children:[Object(a.jsxs)("label",{children:[" Name",Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:o})]}),Object(a.jsxs)("label",{children:[" Number",Object(a.jsx)("input",{type:"tel",name:"number",value:n,onChange:o})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact "})]})]})},v={name:"",number:""},C=function(t){var e=t.onAddForm,n=Object(c.useState)(Object(s.a)({},v)),o=Object(u.a)(n,2),r=o[0],i=o[1];return Object(a.jsx)(p,{name:r.name,number:r.number,onChange:function(t){t.preventDefault(),e({name:r.name,number:r.number}),i(Object(s.a)({},v))},onHandelChange:function(t){var e=t.target.name;i(Object(s.a)(Object(s.a)({},r),{},Object(f.a)({},e,t.target.value)))}})},_=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),b=Object(u.a)(r,2),l=b[0],O=b[1];Object(c.useEffect)((function(){localStorage.getItem("contacts")&&o(JSON.parse(localStorage.getItem("contacts")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C,{onAddForm:function(t){n.map((function(t){return t.name})).includes(t.name)?alert("".concat(t.name," is already in contacts")):o([].concat(Object(i.a)(n),[Object(s.a)({id:Object(j.a)()},t)]))}}),n.length&&Object(a.jsx)(h,{value:l,onChange:function(t){O(t.target.value)}}),n.length&&Object(a.jsx)(m,{contacts:Object(i.a)(n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())}))),onDelete:function(t){var e=t.target.dataset.id;o(Object(i.a)(n.filter((function(t){return t.id!==e}))))}})]})};r.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__2jI8q",contactData:"ContactList_contactData__2Gm-_"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c9bc7199.chunk.js.map