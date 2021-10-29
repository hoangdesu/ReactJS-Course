(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),i=n.n(c),a=(n(13),n(8)),s=n(2),r=n(3),l=n(1),o=(n(14),n(15),n(16),n(0)),u=function(e){var t=e.date.getFullYear(),n=e.date.toLocaleString("en-US",{month:"long"}),c=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__year",children:t}),Object(o.jsx)("div",{className:"expense-date__month",children:n}),Object(o.jsx)("div",{className:"expense-date__date",children:c})]})},j=(n(18),function(e){var t="card ".concat(e.className);return Object(o.jsx)("div",{className:t,children:e.children})});var d=function(e){var t=e.expense.price.toLocaleString("vi-VI",{style:"currency",currency:"VND"});return Object(o.jsxs)(j,{className:"expense-item",children:[Object(o.jsx)(u,{date:e.expense.date}),Object(o.jsxs)("div",{onClick:function(){console.log("Clicked on",e.expense.item,"- Price:",e.expense.price)},className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.expense.item}),Object(o.jsx)("div",{className:"expense-item__price",children:t})]})]})},p=(n(19),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{onChange:function(t){e.onYearChange(t.target.value)},defaultValue:e.selected,children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"}),Object(o.jsx)("option",{value:"all",children:"Show all"})]})]})})}),x=function(e){var t=Object(l.useState)("all"),n=Object(r.a)(t,2),c=n[0],i=n[1],a=[];return a="all"===c?e.expenses:e.expenses.filter((function(e){return e.date.getFullYear()===parseInt(c)})),Object(o.jsx)("div",{children:Object(o.jsxs)(j,{className:"expenses",children:[Object(o.jsx)(p,{selected:c,onYearChange:function(e){i(e)}}),a.map((function(e){return Object(o.jsx)(d,{expense:e},e.id)}))]})})},b=(n(20),n(21),function(e){var t=Object(l.useState)({inputItem:"",inputPrice:"",inputDate:""}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={item:c.inputItem,price:parseInt(c.inputPrice),date:new Date(c.inputDate)};e.onFormSubmitToNewExpense(n),i({inputItem:"",inputPrice:"",inputDate:""})},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Item"}),Object(o.jsx)("input",{type:"text",onChange:function(e){i((function(t){return Object(s.a)(Object(s.a)({},t),{},{inputItem:e.target.value})}))},value:c.inputItem})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Price"}),Object(o.jsx)("input",{type:"number",min:"1",step:"1",onChange:function(e){i((function(t){return Object(s.a)(Object(s.a)({},t),{},{inputPrice:e.target.value})}))},value:c.inputPrice})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2018-01-01",max:"2022-12-31",onChange:function(e){i((function(t){return Object(s.a)(Object(s.a)({},t),{},{inputDate:e.target.value})}))},value:c.inputDate})]})]}),Object(o.jsx)("div",{className:"new-expense__actions",children:Object(o.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),O=function(e){return Object(o.jsx)("div",{className:"new-expense",children:Object(o.jsx)(b,{onFormSubmitToNewExpense:function(t){e.onNewExpenseSubmitToApp(t)}})})},h=(n(22),function(){var e=(new Date).getFullYear();return Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"https://github.com/hoangdesu/",target:"_blank",rel:"noreferrer",children:["Hoang Nguyen\xa9",e]})})}),m=[{id:"e1",item:"Curnon watch",price:3e6,date:new Date(2021,1,26)},{id:"e2",item:"Keychron K2",price:55e5,date:new Date(2020,11,15)},{id:"e3",item:"Delux mouse",price:25e4,date:new Date(2021,6,10)},{id:"e4",item:"Razer Blackwidow",price:345e4,date:new Date(2019,7,15)},{id:"e5",item:"AirPods 2",price:5e6,date:new Date(2021,5,30)},{id:"e6",item:"Razer DeathAdder",price:279e4,date:new Date(2019,8,9)},{id:"e7",item:"Macbook Pro 2015",price:15e6,date:new Date(2020,9,9)},{id:"e8",item:"iPhone 6 Plus",price:32e5,date:new Date(2020,4,12)}],f=function(){var e=Object(l.useState)(m),t=Object(r.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{align:"center",children:"Expense Tracker"}),Object(o.jsx)(O,{onNewExpenseSubmitToApp:function(e){var t=Object(s.a)(Object(s.a)({},e),{},{id:Date.now()});c((function(e){return[t].concat(Object(a.a)(e))}))}}),Object(o.jsx)(x,{expenses:n}),Object(o.jsx)(h,{})]})};i.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.2bbdd5a2.chunk.js.map