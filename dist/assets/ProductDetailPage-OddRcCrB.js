import{_ as C,a as y,d as B,i as T,g as D,b as I,s as _,c as k,r as g,u as W,j as e,e as E,f as $,h as U,k as w,l as v,m as R,R as j,n as F,o as S,p as L,q as X,t as O,v as Y,w as q,x as z,y as V,z as Z,B as b,A as G,C as H,N as J}from"./index-ZFNVfenZ.js";import{d as K}from"./dayjs.min-r6Uj1Wjx.js";import{S as Q,P as ee}from"./StarIcon-68oWVzl7.js";import{U as se}from"./UserCircleIcon-WB8GtYAj.js";const te=["sx"],ae=a=>{var t,r;const s={systemProps:{},otherProps:{}},c=(t=a==null||(r=a.theme)==null?void 0:r.unstable_sxConfig)!=null?t:B;return Object.keys(a).forEach(l=>{c[l]?s.systemProps[l]=a[l]:s.otherProps[l]=a[l]}),s};function re(a){const{sx:t}=a,r=C(a,te),{systemProps:s,otherProps:c}=ae(r);let l;return Array.isArray(t)?l=[s,...t]:typeof t=="function"?l=(...o)=>{const d=t(...o);return T(d)?y({},s,d):s}:l=y({},s,t),y({},c,{sx:l})}function le(a){return D("MuiTypography",a)}I("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const ie=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ne=a=>{const{align:t,gutterBottom:r,noWrap:s,paragraph:c,variant:l,classes:o}=a,d={root:["root",l,a.align!=="inherit"&&`align${k(t)}`,r&&"gutterBottom",s&&"noWrap",c&&"paragraph"]};return $(d,le,o)},oe=_("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${k(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>y({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),N={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ce={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},de=a=>ce[a]||a,ge=g.forwardRef(function(t,r){const s=W({props:t,name:"MuiTypography"}),c=de(s.color),l=re(y({},s,{color:c})),{align:o="inherit",className:d,component:n,gutterBottom:m=!1,noWrap:i=!1,paragraph:h=!1,variant:p="body1",variantMapping:u=N}=l,f=C(l,ie),x=y({},l,{align:o,color:c,className:d,component:n,gutterBottom:m,noWrap:i,paragraph:h,variant:p,variantMapping:u}),M=n||(h?"p":u[p]||N[p])||"span",A=ne(x);return e.jsx(oe,y({as:M,ref:r,ownerState:x,className:E(A.root,d)},f))}),P=ge;function me({title:a,titleId:t,...r},s){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),a?g.createElement("title",{id:t},a):null,g.createElement("path",{fillRule:"evenodd",d:"M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",clipRule:"evenodd"}))}const he=g.forwardRef(me),ue=he;function pe({productId:a,setWriteReview:t}){const{register:r,handleSubmit:s,watch:c,formState:{errors:l}}=U(),o=w(),d=v(R),[n,m]=g.useState(2),[i,h]=g.useState(null),p=(u,f)=>{f.preventDefault();const x=new FormData;x.append("photo",i),x.append("reviewUser",d.name),x.append("productId",a),x.append("reviewRating",n),x.append("reviewMessage",u.reviewMessage),o(F(x)),t(!1)};return e.jsx("div",{children:e.jsxs("form",{className:"space-y-6",onSubmit:s((u,f)=>{p(u,f)}),children:[e.jsxs("div",{children:[e.jsx(P,{component:"legend",children:"Rating"}),e.jsx(j,{name:"simple-controlled",value:n,onChange:(u,f)=>{m(f)}})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"upload",className:"cursor-pointer flex items-center gap-1",children:[" ",e.jsx(ue,{className:"h-5 w-5"}),i==null?"Upload Image":i==null?void 0:i.name]}),e.jsx("input",{type:"file",id:"upload",onChange:u=>h(u.target.files[0]),className:"hidden"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"reviewMessage",className:"block text-sm font-medium leading-6 text-gray-900",children:e.jsx(P,{component:"legend",children:"Review"})}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"reviewMessage",...r("reviewMessage"),type:"text",autoComplete:"reviewMessage",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),e.jsxs("div",{className:"flex justify-around gap-4",children:[e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Add Review"}),e.jsx("button",{onClick:()=>t(!1),className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Cancel"})]})]})})}function xe({id:a}){const t=w(),r=v(S),s=v(L),[c,l]=g.useState(null),o=X(),d=(n,m)=>{l(null),o(`/detail/${m}`)};return g.useEffect(()=>{r&&t(O(r==null?void 0:r.category))},[r]),g.useEffect(()=>{if(s){const n=s.filter(m=>a!==m._id);l(n)}},[s]),e.jsx("div",{children:s&&e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-2 py-0 sm:px-2 sm:py-0 lg:max-w-7xl lg:px-2",children:[e.jsx("h2",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Customers also purchased related products"}),e.jsx("div",{className:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:c==null?void 0:c.map(n=>e.jsxs("div",{onClick:m=>d(m,n._id),className:"group relative",children:[e.jsx("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",children:e.jsx("img",{src:n.thumbnail,alt:n.title,className:"h-full w-full object-cover object-center lg:h-full lg:w-full"})}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm text-gray-700",children:e.jsxs("p",{children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0"}),n.title]})}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:n.brand})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"mt-1 text-sm text-gray-500",children:["$ ",n.price]}),e.jsxs("p",{className:"mt-1 text-sm text-gray-500 flex",children:[e.jsx(Q,{className:"w-4 h-4"})," ",n.rating]})]})]})]},n._id))})]})})})}const fe={name:"Basic Tee 6-Pack",price:"$192",href:"#",breadcrumbs:[{id:1,name:"Men",href:"#"},{id:2,name:"Clothing",href:"#"}],images:[{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",alt:"Two each of gray, white, and black shirts laying flat."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",alt:"Model wearing plain black basic tee."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",alt:"Model wearing plain gray basic tee."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",alt:"Model wearing plain white basic tee."}],colors:[{name:"White",class:"bg-white",selectedClass:"ring-gray-400"},{name:"Gray",class:"bg-gray-200",selectedClass:"ring-gray-400"},{name:"Black",class:"bg-gray-900",selectedClass:"ring-gray-900"}],sizes:[{name:"XXS",inStock:!1},{name:"XS",inStock:!0},{name:"S",inStock:!0},{name:"M",inStock:!0},{name:"L",inStock:!0},{name:"XL",inStock:!0},{name:"2XL",inStock:!0},{name:"3XL",inStock:!0}],description:'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',highlights:["Hand cut and sewn locally","Dyed with our proprietary colors","Pre-washed & pre-shrunk","Ultra-soft 100% cotton"],details:'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'};function ve(){const{id:a}=Y(),[t,r]=g.useState(!1),s=v(S),c=v(R),l=v(q),o=v(z);console.log(o);const d=w(),n=(i,h)=>{i.preventDefault(),d(H({name:c.name,userId:c._id,itemId:h,quantity:1}))},m=()=>{const i=o.map(p=>p.reviewRating),h=i.reduce((p,u)=>p+u,0)/i.length;return Math.round(h)};return g.useEffect(()=>{d(V(a)),d(Z(a))},[a]),g.useEffect(()=>{l=="Success"?b.success("Cart Added"):l=="Fail"&&b.error("Cart Not Added"),d(G())},[l]),e.jsxs("div",{children:[s&&e.jsxs("div",{className:"bg-white",children:[e.jsxs("div",{className:"mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8",children:[e.jsx("div",{className:"aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block",children:e.jsx("img",{src:s.images[2],alt:fe.images[0].alt,className:"h-full w-full object-cover object-center"})}),e.jsxs("div",{className:"hidden lg:grid lg:grid-cols-1 lg:gap-y-8",children:[e.jsx("div",{className:"aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",children:e.jsx("img",{src:s.images[0],alt:s.title,className:"h-full w-full object-cover object-center"})}),e.jsx("div",{className:"aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",children:e.jsx("img",{src:s.images[1],alt:s.title,className:"h-full w-full object-cover object-center"})})]}),e.jsx("div",{className:"lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg border-solid border-2 flex items-center justify-center",children:e.jsx("img",{src:s.thumbnail,alt:s.title,className:"w-80 h-80 md:h-full md:w-full object-cover object-center"})})]}),e.jsxs("div",{className:"mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16",children:[e.jsx("div",{className:"lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",children:e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",children:s.title})}),e.jsxs("div",{className:"mt-4 lg:row-span-3 lg:mt-0",children:[e.jsx("h2",{className:"sr-only",children:"Product information"}),e.jsxs("p",{className:"text-3xl tracking-tight text-gray-900",children:["$ ",s.price]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[o.length>0?e.jsx(j,{name:"simple-controlled",value:m()}):e.jsx(j,{name:"simple-controlled",value:s.rating}),e.jsxs("p",{className:"sr-only",children:[o.average," out of 5 stars"]}),o.length," reviews"]})]}),e.jsx("form",{className:"mt-10",children:e.jsx("button",{onClick:i=>n(i,s._id),type:"submit",className:"mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Add to Cart"})})]}),e.jsxs("div",{className:"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-6 lg:pr-8 lg:pt-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"sr-only",children:"Description"}),e.jsx("div",{className:"space-y-6",children:e.jsx("p",{className:"text-base text-gray-900",children:s.description})})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"mt-4",children:["Brand : ",s.brand]}),e.jsxs("div",{className:"mt-4",children:["Category : ",s.category]}),e.jsxs("div",{className:"mt-4",children:["Stock : ",s.stock]})]})]}),e.jsxs("div",{className:"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-2xl",children:"REVIEWS"}),e.jsx("p",{onClick:()=>r(!0),className:"text-2xl cursor-pointer",children:e.jsx(ee,{className:"h-8 w-8"})})]}),t&&e.jsx(pe,{productId:a,setWriteReview:r}),o.length>0?e.jsx(e.Fragment,{children:o.map(i=>{var h;return e.jsxs("div",{className:"mt-8 flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("h3",{className:"flex items-center gap-1",children:[e.jsx(se,{className:"w-5 h-5"}),i.reviewUser]}),e.jsx("p",{className:"text-base text-gray-900",children:K(i.reviewDate).format("DD/MM/YYYY")})]}),e.jsxs("div",{className:"flex flex-col gap-2 ml-5",children:[e.jsx("span",{children:e.jsx(j,{name:"simple-controlled",value:i.reviewRating})}),e.jsx("span",{children:i.reviewMessage})]}),e.jsx("div",{children:(h=i.reviewImage)!=null&&h.startsWith("http")?e.jsx("img",{className:"h-40 w-40",src:i.reviewImage,alt:"",srcSet:""}):""})]},i._id)})}):e.jsx("h1",{children:"No Review"})]})]})]}),s&&e.jsx(xe,{id:a})]})}function Ne(){return e.jsx("div",{children:e.jsx(J,{children:e.jsx(ve,{})})})}export{Ne as default};