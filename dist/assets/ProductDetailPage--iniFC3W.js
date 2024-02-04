import{o as C,_ as y,z as B,A as D,i as T,k as I,l as _,m as k,r as m,n as E,j as e,p as W,q as $,B as U,u as w,a as v,s as R,C as F,D as S,E as L,c as X,F as O,x as Y,G as q,H as z,I as G,J as H,K as b,L as V,M as Z}from"./index-l59xxIeI.js";import{N as J}from"./Navbar-Cm3gOVaz.js";import{d as K}from"./dayjs.min-kcJXmsW-.js";import{R as j}from"./Rating-Svp1pEA_.js";import{S as Q,P as ee}from"./StarIcon-21cztRn-.js";import{U as se}from"./UserCircleIcon-VzgpIkp4.js";import"./CompareArrows-XjogsOLW.js";import"./XMarkIcon-8E3edP_Q.js";import"./transition-38_58jiG.js";const te=["sx"],ae=a=>{var t,r;const s={systemProps:{},otherProps:{}},o=(t=a==null||(r=a.theme)==null?void 0:r.unstable_sxConfig)!=null?t:B;return Object.keys(a).forEach(i=>{o[i]?s.systemProps[i]=a[i]:s.otherProps[i]=a[i]}),s};function re(a){const{sx:t}=a,r=C(a,te),{systemProps:s,otherProps:o}=ae(r);let i;return Array.isArray(t)?i=[s,...t]:typeof t=="function"?i=(...c)=>{const d=t(...c);return D(d)?y({},s,d):s}:i=y({},s,t),y({},o,{sx:i})}function ie(a){return T("MuiTypography",a)}I("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const le=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ne=a=>{const{align:t,gutterBottom:r,noWrap:s,paragraph:o,variant:i,classes:c}=a,d={root:["root",i,a.align!=="inherit"&&`align${k(t)}`,r&&"gutterBottom",s&&"noWrap",o&&"paragraph"]};return $(d,ie,c)},oe=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${k(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>y({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),N={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ce={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},de=a=>ce[a]||a,me=m.forwardRef(function(t,r){const s=E({props:t,name:"MuiTypography"}),o=de(s.color),i=re(y({},s,{color:o})),{align:c="inherit",className:d,component:n,gutterBottom:g=!1,noWrap:l=!1,paragraph:h=!1,variant:p="body1",variantMapping:u=N}=i,f=C(i,le),x=y({},i,{align:c,color:o,className:d,component:n,gutterBottom:g,noWrap:l,paragraph:h,variant:p,variantMapping:u}),M=n||(h?"p":u[p]||N[p])||"span",A=ne(x);return e.jsx(oe,y({as:M,ref:r,ownerState:x,className:W(A.root,d)},f))}),P=me;function ge({title:a,titleId:t,...r},s){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),a?m.createElement("title",{id:t},a):null,m.createElement("path",{fillRule:"evenodd",d:"M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",clipRule:"evenodd"}))}const he=m.forwardRef(ge),ue=he;function pe({productId:a,setWriteReview:t}){const{register:r,handleSubmit:s,watch:o,formState:{errors:i}}=U(),c=w(),d=v(R),[n,g]=m.useState(2),[l,h]=m.useState(null),p=(u,f)=>{f.preventDefault();const x=new FormData;x.append("photo",l),x.append("reviewUser",d.name),x.append("productId",a),x.append("reviewRating",n),x.append("reviewMessage",u.reviewMessage),c(F(x)),t(!1)};return e.jsx("div",{children:e.jsxs("form",{className:"space-y-6",onSubmit:s((u,f)=>{p(u,f)}),children:[e.jsxs("div",{children:[e.jsx(P,{component:"legend",children:"Rating"}),e.jsx(j,{name:"simple-controlled",value:n,onChange:(u,f)=>{g(f)}})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"upload",className:"cursor-pointer flex items-center gap-1",children:[" ",e.jsx(ue,{className:"h-5 w-5"}),l==null?"Upload Image":l==null?void 0:l.name]}),e.jsx("input",{type:"file",id:"upload",onChange:u=>h(u.target.files[0]),className:"hidden"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"reviewMessage",className:"block text-sm font-medium leading-6 text-gray-900",children:e.jsx(P,{component:"legend",children:"Review"})}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"reviewMessage",...r("reviewMessage"),type:"text",autoComplete:"reviewMessage",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"flex justify-around gap-4",children:[e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add Review"}),e.jsx("button",{onClick:()=>t(!1),className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Cancel"})]})]})})}function xe({id:a}){const t=w(),r=v(S),s=v(L),[o,i]=m.useState(null),c=X(),d=(n,g)=>{i(null),c(`/detail/${g}`)};return m.useEffect(()=>{r&&t(O(r==null?void 0:r.category))},[r]),m.useEffect(()=>{if(s){const n=s.filter(g=>a!==g._id);i(n)}},[s]),e.jsx("div",{children:s&&e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-2 py-0 sm:px-2 sm:py-0 lg:max-w-7xl lg:px-2",children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Customers also purchased related products"}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:o==null?void 0:o.map(n=>e.jsxs("div",{onClick:g=>d(g,n._id),className:"group relative",children:[e.jsx("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",children:e.jsx("img",{src:n.thumbnail,alt:n.title,className:"h-full w-full object-cover object-center lg:h-full lg:w-full"})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm text-gray-700",children:e.jsxs("p",{children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0"}),n.title]})}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:n.brand})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mt-1 text-sm text-gray-500",children:["$ ",n.price]}),e.jsxs("p",{className:"mt-1 text-sm text-gray-500 flex",children:[e.jsx(Q,{className:"w-4 h-4"})," ",n.rating]})]})]})]},n._id))})]})})})}const fe={name:"Basic Tee 6-Pack",price:"$192",href:"#",breadcrumbs:[{id:1,name:"Men",href:"#"},{id:2,name:"Clothing",href:"#"}],images:[{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",alt:"Two each of gray, white, and black shirts laying flat."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",alt:"Model wearing plain black basic tee."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",alt:"Model wearing plain gray basic tee."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",alt:"Model wearing plain white basic tee."}],colors:[{name:"White",class:"bg-white",selectedClass:"ring-gray-400"},{name:"Gray",class:"bg-gray-200",selectedClass:"ring-gray-400"},{name:"Black",class:"bg-gray-900",selectedClass:"ring-gray-900"}],sizes:[{name:"XXS",inStock:!1},{name:"XS",inStock:!0},{name:"S",inStock:!0},{name:"M",inStock:!0},{name:"L",inStock:!0},{name:"XL",inStock:!0},{name:"2XL",inStock:!0},{name:"3XL",inStock:!0}],description:'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',highlights:["Hand cut and sewn locally","Dyed with our proprietary colors","Pre-washed & pre-shrunk","Ultra-soft 100% cotton"],details:'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'};function ve(){const{id:a}=Y(),[t,r]=m.useState(!1),s=v(S),o=v(R),i=v(q),c=v(z),d=w(),n=(l,h)=>{l.preventDefault(),d(Z({name:o.name,userId:o._id,itemId:h,quantity:1}))},g=()=>{const l=c.map(p=>p.reviewRating),h=l.reduce((p,u)=>p+u,0)/l.length;return Math.round(h)};return m.useEffect(()=>{d(G(a)),d(H(a))},[a]),m.useEffect(()=>{i=="Success"?b.success("Cart Added"):i=="Fail"&&b.error("Cart Not Added"),d(V())},[i]),e.jsxs("div",{children:[s&&e.jsxs("div",{className:"bg-white",children:[e.jsxs("div",{className:"mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8",children:[e.jsx("div",{className:"aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block",children:e.jsx("img",{src:s.images[2],alt:fe.images[0].alt,className:"h-full w-full object-cover object-center"})}),e.jsxs("div",{className:"hidden lg:grid lg:grid-cols-1 lg:gap-y-8",children:[e.jsx("div",{className:"aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",children:e.jsx("img",{src:s.images[0],alt:s.title,className:"h-full w-full object-cover object-center"})}),e.jsx("div",{className:"aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",children:e.jsx("img",{src:s.images[1],alt:s.title,className:"h-full w-full object-cover object-center"})})]}),e.jsx("div",{className:"lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg border-solid border-2 flex items-center justify-center",children:e.jsx("img",{src:s.thumbnail,alt:s.title,className:"w-80 h-80 md:h-full md:w-full object-cover object-center"})})]}),e.jsxs("div",{className:"mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16",children:[e.jsx("div",{className:"lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",children:e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",children:s.title})}),e.jsxs("div",{className:"mt-4 lg:row-span-3 lg:mt-0",children:[e.jsx("h2",{className:"sr-only",children:"Product information"}),e.jsxs("p",{className:"text-3xl tracking-tight text-gray-900",children:["$ ",s.price]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[c.length>0?e.jsx(j,{name:"simple-controlled",value:g()}):e.jsx(j,{name:"simple-controlled",value:s.rating}),e.jsxs("p",{className:"sr-only",children:[c.average," out of 5 stars"]}),c.length," reviews"]})]}),e.jsx("form",{className:"mt-10",children:e.jsx("button",{onClick:l=>n(l,s._id),type:"submit",className:"mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Add to Cart"})})]}),e.jsxs("div",{className:"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-6 lg:pr-8 lg:pt-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"sr-only",children:"Description"}),e.jsx("div",{className:"space-y-6",children:e.jsx("p",{className:"text-base text-gray-900",children:s.description})})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"mt-4",children:["Brand : ",s.brand]}),e.jsxs("div",{className:"mt-4",children:["Category : ",s.category]}),e.jsxs("div",{className:"mt-4",children:["Stock : ",s.stock]})]})]}),e.jsxs("div",{className:"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-2xl",children:"REVIEWS"}),e.jsx("p",{onClick:()=>r(!0),className:"text-2xl cursor-pointer",children:e.jsx(ee,{className:"h-8 w-8"})})]}),t&&e.jsx(pe,{productId:a,setWriteReview:r}),c.length>0?e.jsx(e.Fragment,{children:c.map(l=>{var h;return e.jsxs("div",{className:"mt-8 flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("h3",{className:"flex items-center gap-1",children:[e.jsx(se,{className:"w-5 h-5"}),l.reviewUser]}),e.jsx("p",{className:"text-base text-gray-900",children:K(l.reviewDate).format("DD/MM/YYYY")})]}),e.jsxs("div",{className:"flex flex-col gap-2 ml-5",children:[e.jsx("span",{children:e.jsx(j,{name:"simple-controlled",value:l.reviewRating})}),e.jsx("span",{children:l.reviewMessage})]}),e.jsx("div",{children:(h=l.reviewImage)!=null&&h.startsWith("http")?e.jsx("img",{className:"h-40 w-40",src:l.reviewImage,alt:"",srcSet:""}):""})]},l._id)})}):e.jsx("h1",{children:"No Review"})]})]})]}),s&&e.jsx(xe,{id:a})]})}function Se(){return e.jsx("div",{children:e.jsx(J,{children:e.jsx(ve,{})})})}export{Se as default};