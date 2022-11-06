import{o as t,b as n,q as s,a as b,E as V,a5 as M,u as a,c as r,m as c,l as d,Y as k,y as _,F as f,s as v,au as x,aa as w,a8 as h,w as A,at as B,t as C}from"./entry.d78a7e75.js";import{P as S,I,V as U,M as H,A as N}from"./listbox.8b314c99.js";const T={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},j=s("path",{fill:"currentColor",d:"M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z"},null,-1),z=[j];function D(l,i){return t(),n("svg",T,z)}const E={name:"uil-clock",render:D},F={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},L=s("path",{fill:"currentColor",d:"M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z"},null,-1),P=[L];function R(l,i){return t(),n("svg",F,P)}const q={name:"uil-laptop",render:R},Y={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},G=s("path",{fill:"currentColor",d:"M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"},null,-1),J=[G];function K(l,i){return t(),n("svg",Y,J)}const O={name:"uil-moon",render:K},Q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},W=s("path",{fill:"currentColor",d:"m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"},null,-1),X=[W];function e1(l,i){return t(),n("svg",Q,X)}const t1={name:"uil-sun",render:e1},a1={class:"flex items-center"},n1={class:"flex justify-center items-center dark:hidden"},o1={class:"justify-center items-center hidden dark:flex"},s1={class:"text-sm mr-2 flex items-center"},r1=["value"],c1=b({__name:"ThemeSwitcher",props:{type:{type:String,default:"dropdown-right-top"}},setup(l){const i=l,o=V("theme.setting"),m=M(i,"type");return(p,u)=>{const g=t1,y=O,Z=q,$=E;return t(),n("div",a1,[a(m)==="dropdown-right-top"?(t(),r(a(H),{key:0,modelValue:a(o),"onUpdate:modelValue":u[0]||(u[0]=e=>w(o)?o.value=e:null),as:"div",class:"relative flex items-center"},{default:c(()=>[d(a(S),{class:"sr-only"},{default:c(()=>[k(_(p.$t("components.theme_switcher.theme")),1)]),_:1}),d(a(I),{type:"button",title:p.$t("components.theme_switcher.change_theme"),class:"transition-colors duration-300"},{default:c(()=>[s("span",n1,[d(g)]),s("span",o1,[d(y)])]),_:1},8,["title"]),d(a(U),{class:"p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"},{default:c(()=>[(t(!0),n(f,null,v(a(x),e=>(t(),r(a(N),{key:e.key,value:e.key,class:C({"py-2 px-2 flex items-center cursor-pointer":!0,"text-sky-500 bg-gray-100 dark:bg-gray-600/30":a(o)===e.key,"hover:bg-gray-50 dark:hover:bg-gray-700/30":a(o)!==e.key})},{default:c(()=>[s("span",s1,[e.key==="light"?(t(),r(g,{key:0})):e.key==="dark"?(t(),r(y,{key:1})):e.key==="system"?(t(),r(Z,{key:2})):e.key==="realtime"?(t(),r($,{key:3})):h("",!0)]),k(" "+_(e.text),1)]),_:2},1032,["value","class"]))),128))]),_:1})]),_:1},8,["modelValue"])):h("",!0),a(m)==="select-box"?A((t(),n("select",{key:1,"onUpdate:modelValue":u[1]||(u[1]=e=>w(o)?o.value=e:null),class:"w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"},[(t(!0),n(f,null,v(a(x),e=>(t(),n("option",{key:e.key,value:e.key},_(e.text),9,r1))),128))],512)),[[B,a(o)]]):h("",!0)])}}});export{c1 as _};
