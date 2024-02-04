import{R as b,r as n}from"./index-l59xxIeI.js";import{i as O,U as C,y as $,T as F,o as v,w as K,u as R,k as D,C as w,I as L,x as j,z as U,j as N,A as X,r as S,v as H}from"./transition-38_58jiG.js";var B;let z=(B=b.startTransition)!=null?B:function(e){e()};var Q=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Q||{}),V=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(V||{});let W={0:e=>({...e,disclosureState:R(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},T=n.createContext(null);T.displayName="DisclosureContext";function x(e){let t=n.useContext(T);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,x),o}return t}let h=n.createContext(null);h.displayName="DisclosureAPIContext";function A(e){let t=n.useContext(h);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,A),o}return t}let M=n.createContext(null);M.displayName="DisclosurePanelContext";function Y(){return n.useContext(M)}function Z(e,t){return R(t.type,W,e,t)}let _=n.Fragment;function q(e,t){let{defaultOpen:o=!1,...s}=e,m=n.useRef(null),l=$(t,F(i=>{m.current=i},e.as===void 0||e.as===n.Fragment)),r=n.useRef(null),f=n.useRef(null),u=n.useReducer(Z,{disclosureState:o?0:1,linkedPanel:!1,buttonRef:f,panelRef:r,buttonId:null,panelId:null}),[{disclosureState:p,buttonId:c},k]=u,d=v(i=>{k({type:1});let I=X(m);if(!I||!c)return;let a=i?i instanceof HTMLElement?i:i.current instanceof HTMLElement?i.current:I.getElementById(c):I.getElementById(c);a==null||a.focus()}),y=n.useMemo(()=>({close:d}),[d]),P=n.useMemo(()=>({open:p===0,close:d}),[p,d]),E={ref:l};return b.createElement(T.Provider,{value:u},b.createElement(h.Provider,{value:y},b.createElement(K,{value:R(p,{0:D.Open,1:D.Closed})},w({ourProps:E,theirProps:s,slot:P,defaultTag:_,name:"Disclosure"}))))}let G="button";function J(e,t){let o=L(),{id:s=`headlessui-disclosure-button-${o}`,...m}=e,[l,r]=x("Disclosure.Button"),f=Y(),u=f===null?!1:f===l.panelId,p=n.useRef(null),c=$(p,t,u?null:l.buttonRef),k=j();n.useEffect(()=>{if(!u)return r({type:2,buttonId:s}),()=>{r({type:2,buttonId:null})}},[s,r,u]);let d=v(a=>{var g;if(u){if(l.disclosureState===1)return;switch(a.key){case S.Space:case S.Enter:a.preventDefault(),a.stopPropagation(),r({type:0}),(g=l.buttonRef.current)==null||g.focus();break}}else switch(a.key){case S.Space:case S.Enter:a.preventDefault(),a.stopPropagation(),r({type:0});break}}),y=v(a=>{switch(a.key){case S.Space:a.preventDefault();break}}),P=v(a=>{var g;H(a.currentTarget)||e.disabled||(u?(r({type:0}),(g=l.buttonRef.current)==null||g.focus()):r({type:0}))}),E=n.useMemo(()=>({open:l.disclosureState===0}),[l]),i=U(e,p),I=u?{ref:c,type:i,onKeyDown:d,onClick:P}:{ref:c,id:s,type:i,"aria-expanded":l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:d,onKeyUp:y,onClick:P};return w({mergeRefs:k,ourProps:I,theirProps:m,slot:E,defaultTag:G,name:"Disclosure.Button"})}let ee="div",te=O.RenderStrategy|O.Static;function ne(e,t){let o=L(),{id:s=`headlessui-disclosure-panel-${o}`,...m}=e,[l,r]=x("Disclosure.Panel"),{close:f}=A("Disclosure.Panel"),u=j(),p=$(t,l.panelRef,P=>{z(()=>r({type:P?4:5}))});n.useEffect(()=>(r({type:3,panelId:s}),()=>{r({type:3,panelId:null})}),[s,r]);let c=N(),k=c!==null?(c&D.Open)===D.Open:l.disclosureState===0,d=n.useMemo(()=>({open:l.disclosureState===0,close:f}),[l,f]),y={ref:p,id:s};return b.createElement(M.Provider,{value:l.panelId},w({mergeRefs:u,ourProps:y,theirProps:m,slot:d,defaultTag:ee,features:te,visible:k,name:"Disclosure.Panel"}))}let le=C(q),re=C(J),ae=C(ne),ce=Object.assign(le,{Button:re,Panel:ae});function oe({title:e,titleId:t,...o},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},o),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const se=n.forwardRef(oe),de=se;export{ce as A,de as X};