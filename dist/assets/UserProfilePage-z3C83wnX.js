import{r as a,a as n,s as i,j as e}from"./index-vogP14HX.js";import{N as c}from"./Navbar-cQNph-i4.js";import"./CompareArrows-d9rCAU-e.js";import"./XMarkIcon-JX13q_P6.js";import"./transition-w-0xkXdM.js";function o({title:r,titleId:s,...l},t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),r?a.createElement("title",{id:s},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const d=a.forwardRef(o),x=d;function m(){const r=n(i);return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"text-4xl flex items-center",children:[" ",e.jsx(x,{className:"w-10 h-10"})," Profile"]}),e.jsxs("div",{children:[e.jsx("p",{className:"flex items-center",children:r.name}),e.jsx("p",{className:"flex items-center",children:r.email}),e.jsxs("p",{className:"flex items-center",children:["Role : ",r.role]})]}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx("p",{className:"text-3xl",children:"Available Adresses"}),r.addresses.map((s,l)=>e.jsxs("div",{className:"flex flex-col gap-4 border-solid border-2 border-black p-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{children:[s.firstName,",",s.lastNmae]}),e.jsx("span",{children:s.country})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{children:[s.street,",",s.city,",",s.state]}),e.jsx("span",{children:s.pinCode})]})]},l))]})]})}function N(){return e.jsx("div",{children:e.jsx(c,{children:e.jsx(m,{})})})}export{N as default};