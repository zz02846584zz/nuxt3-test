import{o as d,u as b,V as h}from"./open-closed.4dbeda2a.js";import{f as E,k as N,a6 as x,a as y}from"./entry.d78a7e75.js";var A=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(A||{});function p(e,t){if(e)return e;let r=t!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function W(e,t){let r=E(p(e.value.type,e.value.as));return N(()=>{r.value=p(e.value.type,e.value.as)}),x(()=>{var n;r.value||!d(t)||d(t)instanceof HTMLButtonElement&&!((n=d(t))!=null&&n.hasAttribute("type"))&&(r.value="button")}),r}const P=typeof window>"u"||typeof document>"u";function g(e){if(P)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=d(e);if(t)return t.ownerDocument}return document}let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),O=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(O||{}),D=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(D||{});function S(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f))}var L=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(L||{});function _(e,t=0){var r;return e===((r=g(e))==null?void 0:r.body)?!1:b(t,{[0](){return e.matches(f)},[1](){let n=e;for(;n!==null;){if(n.matches(f))return!0;n=n.parentElement}return!1}})}let M=["textarea","input"].join(",");function H(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,M))!=null?r:!1}function U(e,t=r=>r){return e.slice().sort((r,n)=>{let a=t(r),i=t(n);if(a===null||i===null)return 0;let o=a.compareDocumentPosition(i);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function $(e,t,r=!0,n=null){var a;let i=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?r?U(e):e:S(e);n=n!=null?n:i.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(n))-1;if(t&4)return Math.max(0,o.indexOf(n))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),w=t&32?{preventScroll:!0}:{},c=0,l=o.length,u;do{if(c>=l||c+l<=0)return 0;let s=v+c;if(t&16)s=(s+l)%l;else{if(s<0)return 3;if(s>=l)return 1}u=o[s],u==null||u.focus(w),c+=m}while(u!==i.activeElement);return t&6&&H(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}var T=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(T||{});let j=y({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:n,...a}=e,i={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return h({ourProps:i,theirProps:a,slot:{},attrs:r,slots:t,name:"Hidden"})}}});export{L as F,F as M,U as O,$ as P,T as a,W as b,P as e,j as f,_ as h,A as o};
