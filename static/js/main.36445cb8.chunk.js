(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{17:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c.n(i),n=c(6),l=c.n(n),s=(c(17),c(7),c(1)),d=function(){return Object(s.jsxs)("div",{className:"cancel_use__container",children:[Object(s.jsx)("button",{className:"show-cellphone cancelX",children:"X"}),Object(s.jsx)("button",{className:"show-web cancel",children:"cancel"}),Object(s.jsx)("button",{className:"use",children:"use this builder schedule"})]})},r=c(3),o=c(2),j=c.p+"static/media/Figures.e44de966.jpg",b=c(5),h=c(4),O=function(e){var t=e.category,c=e.cards;console.log(c.Ideation);var a=b.Ideation.concat(b.Validation),n=Object(i.useState)(a),l=Object(r.a)(n,2),d=l[0],O=l[1],u=Object(i.useState)(b.Ideation),p=Object(r.a)(u,2),m=p[0],x=p[1],v=Object(i.useState)(b.Validation),f=Object(r.a)(v,2),g=f[0],N=f[1],w=Object(i.useState)(!1),I=Object(r.a)(w,2),y=I[0],C=I[1],D=function(e){C((function(t){var c=Object(o.a)({},t);return c[e]=!t[e],c}))},S=function(e){if(e.destination)if("social"===e.source.droppableId){var t=Array.from(d),c=t.splice(e.source.index,1),i=Object(r.a)(c,1)[0];t.splice(e.destination.index,0,i),O(t)}else if("Ideation"===e.source.droppableId){var a=Array.from(m),n=a.splice(e.source.index,1),l=Object(r.a)(n,1)[0];a.splice(e.destination.index,0,l),x(a)}else{var s=Array.from(g),o=s.splice(e.source.index,1),j=Object(r.a)(o,1)[0];s.splice(e.destination.index,0,j),N(s)}};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(h.a,{onDragEnd:S,children:[Object(s.jsxs)("div",{className:"main-title",children:[Object(s.jsx)("h2",{children:"socialInnovation"===t?"Social Innovation":""}),Object(s.jsx)("p",{className:"show-web right",children:"socialInnovation"===t?"Due Date (Opcional)":""})]}),"socialInnovation"===t&&d.map((function(e,t){return Object(s.jsx)(h.c,{droppableId:"social",children:function(c){return Object(s.jsxs)("label",Object(o.a)(Object(o.a)({},c.droppableProps),{},{ref:c.innerRef,children:[Object(s.jsx)(h.b,{draggableId:e.id,index:t,children:function(t){return Object(s.jsxs)("div",Object(o.a)(Object(o.a)(Object(o.a)({className:"main-div"},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:[Object(s.jsx)("input",{className:"visible-web",id:e.id,type:"radio",name:e.title,value:e.title,onClick:function(){return D(e.title)},checked:y[e.title]}),Object(s.jsxs)("div",{className:!0===y[e.title]?"main-card card-cellphone":"main-card",children:[Object(s.jsxs)("div",{className:!0===y[e.title]?"card-border":"card",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.title}),Object(s.jsx)("p",{className:"view-builder",children:"view builder"})]}),Object(s.jsx)("img",{src:j,alt:"",className:!0===y[e.title]?"img-color":"img-gris"})]}),Object(s.jsxs)("div",{className:!0===y[e.title]?"show-date":"hidden-date",children:[Object(s.jsx)("p",{className:"show-cellphone",children:"Due Date (Opcional)"}),Object(s.jsx)("input",{type:"date",name:"date",id:""}),Object(s.jsx)("input",{type:"time",name:"",id:""})]})]})]}))}},e.id),c.placeholder]}))}})}))]}),Object(s.jsxs)(h.a,{onDragEnd:S,children:[Object(s.jsxs)("div",{className:"main-title",children:[Object(s.jsx)("h2",{children:"all"===t?"Ideation":""}),Object(s.jsx)("button",{className:"selectAllIdeation",onChange:"",children:"all"===t?"select all in ideation":""}),Object(s.jsx)("p",{className:"show-web right",children:"all"===t?"Due Date (Opcional)":""})]}),"all"===t&&m.map((function(e,t){return Object(s.jsx)(h.c,{droppableId:e.type,children:function(c){return Object(s.jsxs)("label",Object(o.a)(Object(o.a)({},c.droppableProps),{},{ref:c.innerRef,children:[Object(s.jsx)(h.b,{draggableId:e.id,index:t,children:function(t){return Object(s.jsxs)("div",Object(o.a)(Object(o.a)(Object(o.a)({className:"main-div"},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:[Object(s.jsx)("input",{className:"visible-web",id:e.id,type:"radio",name:e.title,value:e.title,onClick:function(){return D(e.title)},checked:y[e.title]}),Object(s.jsxs)("div",{className:!0===y[e.title]?"main-card card-cellphone":"main-card",children:[Object(s.jsxs)("div",{className:!0===y[e.title]?"card-border":"card",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.title}),Object(s.jsx)("p",{className:"view-builder",children:"view builder"})]}),Object(s.jsx)("img",{src:j,alt:"",className:!0===y[e.title]?"img-color":"img-gris"})]}),Object(s.jsxs)("div",{className:!0===y[e.title]?"show-date":"hidden-date",children:[Object(s.jsx)("p",{className:"show-cellphone",children:"Due Date (Opcional)"}),Object(s.jsx)("input",{type:"date",name:"date",id:""}),Object(s.jsx)("input",{type:"time",name:"",id:""})]})]})]}))}},e.id),c.placeholder]}))}})}))]}),Object(s.jsxs)(h.a,{onDragEnd:S,children:[Object(s.jsxs)("div",{className:"main-title",children:[Object(s.jsx)("h2",{children:"all"===t?"Validation":""}),Object(s.jsx)("button",{className:"selectAllValidation",onChange:"",children:"all"===t?"select all in validation":""}),Object(s.jsx)("p",{className:"show-web right",children:"all"===t?"Due Date (Opcional)":""})]}),"all"===t&&g.map((function(e,t){return Object(s.jsx)(h.c,{droppableId:e.type,children:function(c){return Object(s.jsxs)("label",Object(o.a)(Object(o.a)({},c.droppableProps),{},{ref:c.innerRef,children:[Object(s.jsx)(h.b,{draggableId:e.id,index:t,children:function(t){return Object(s.jsxs)("div",Object(o.a)(Object(o.a)(Object(o.a)({className:"main-div"},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:[Object(s.jsx)("input",{className:"visible-web",id:e.id,type:"radio",name:e.title,value:e.title,onClick:function(){return D(e.title)},checked:y[e.title]}),Object(s.jsxs)("div",{className:!0===y[e.title]?"main-card card-cellphone":"main-card",children:[Object(s.jsxs)("div",{className:!0===y[e.title]?"card-border":"card",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.title}),Object(s.jsx)("p",{className:"view-builder",children:"view builder"})]}),Object(s.jsx)("img",{src:j,alt:"",className:!0===y[e.title]?"img-color":"img-gris"})]}),Object(s.jsxs)("div",{className:!0===y[e.title]?"show-date":"hidden-date",children:[Object(s.jsx)("p",{className:"show-cellphone",children:"Due Date (Opcional)"}),Object(s.jsx)("input",{type:"date",name:"date",id:""}),Object(s.jsx)("input",{type:"time",name:"",id:""})]})]})]}))}},e.id),c.placeholder]}))}})}))]})]})},u=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(""),l=Object(r.a)(n,2),d=l[0],o=l[1];return Object(i.useEffect)((function(){o(b)}),[c]),console.log(d),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"sidebar__container",children:[Object(s.jsx)("button",{className:"all"===c?"btn-select":"btn-unselect",onClick:function(){return a("all")},children:"All"}),Object(s.jsx)("p",{className:"show-web",children:"Templates"}),Object(s.jsx)("button",{className:"socialInnovation"===c?"btn-select show-web":"btn-unselect show-web",onClick:function(){return a("socialInnovation")},children:"Social innovation"}),Object(s.jsxs)("select",{className:"show-cellphone socialSelect",onChange:function(e){return a(e.target.value)},children:[Object(s.jsx)("option",{value:"socialInnovation",children:"Social innovation"}),Object(s.jsx)("option",{value:"socialInnovation",children:"Template 1"}),Object(s.jsx)("option",{value:"socialInnovation",children:"Template 2"}),Object(s.jsx)("option",{value:"Template 3",children:"Template 3"})]})]}),Object(s.jsx)("div",{className:"schedule__container",children:Object(s.jsx)(O,{cards:d,category:c})})]})},p=function(){return Object(s.jsx)("header",{className:"header__container",children:Object(s.jsx)("h1",{children:"Select Builder Schedule - 2019 Fall Cohort"})})};var m=function(){return Object(s.jsxs)("div",{className:"contenedor",children:[Object(s.jsx)(p,{}),Object(s.jsx)(u,{}),Object(s.jsx)(d,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),i(e),a(e),n(e),l(e)}))};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),x()},5:function(e){e.exports=JSON.parse('{"Ideation":[{"title":"Problem","type":"Ideation","isChecked":false,"id":"i1"},{"title":"Solution","type":"Ideation","isChecked":false,"id":"i2"},{"title":"Team","type":"Ideation","isChecked":false,"id":"i3"}],"Validation":[{"title":"Ecosystems","type":"Validation","isChecked":false,"id":"v1"},{"title":"Results","type":"Validation","isChecked":false,"id":"v2"}]}')},7:function(e,t,c){}},[[25,1,2]]]);
//# sourceMappingURL=main.36445cb8.chunk.js.map