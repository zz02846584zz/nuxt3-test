import{o as a,b as r,q as n,a as b,a5 as k,E as V,u as t,c as p,m as l,l as c,Y as g,F as h,s as m,as as _,aa as y,a8 as f,w,at as z,t as C,y as o}from"./entry.d78a7e75.js";import{P as S,I as H,V as L,M as B,A as M}from"./listbox.8b314c99.js";const N={viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A=n("path",{fill:"currentColor",d:"M4 4v18h6v6h18V10h-6V4zm2 2h14v4.563L10.562 20H6zm5 2v1H8v2h4.938c-.13 1.148-.481 2.055-1.063 2.688a4.544 4.544 0 0 1-.906-.407C10.266 12.863 10 12.418 10 12H8c0 1.191.734 2.184 1.719 2.844A8.267 8.267 0 0 1 8 15v2c1.773 0 3.25-.406 4.375-1.156c.523.09 1.055.156 1.625.156v-1.875c.543-.91.832-1.973.938-3.125H16V9h-3V8zm10.438 4H26v14H12v-4.563zM20 13.844l-.938 2.844l-2 6l-.062.156V24h2v-.875l.031-.125h1.938l.031.125V24h2v-1.156l-.063-.157l-2-6zm0 6.281l.281.875h-.562z"},null,-1),I=[A];function $(d,v){return a(),r("svg",N,I)}const D={name:"la-language",render:$},E={class:"flex items-center"},F={class:"justify-center items-center flex"},P={class:"text-sm mr-2"},R={class:"flex-1 truncate"},T={class:"text-xs"},U=["value"],G=b({__name:"LanguageSwitcher",props:{type:{type:String,default:"dropdown-right-top"}},setup(d){const u=k(d,"type"),s=V("locale.setting");return(j,i)=>{const x=D;return a(),r("div",E,[t(u)==="dropdown-right-top"?(a(),p(t(B),{key:0,modelValue:t(s),"onUpdate:modelValue":i[0]||(i[0]=e=>y(s)?s.value=e:null),as:"div",class:"relative flex items-center"},{default:l(()=>[c(t(S),{class:"sr-only"},{default:l(()=>[g("Theme")]),_:1}),c(t(H),{type:"button",title:"Change Language",class:"transition-colors duration-300"},{default:l(()=>[n("span",F,[c(x)])]),_:1}),c(t(L),{class:"p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"},{default:l(()=>[(a(!0),r(h,null,m(t(_),e=>(a(),p(t(M),{key:e.iso,value:e.iso,class:C({"py-2 px-2 flex items-center cursor-pointer":!0,"text-sky-500 bg-gray-100 dark:bg-gray-600/30":t(s)===e.iso,"hover:bg-gray-50 dark:hover:bg-gray-700/30":t(s)!==e.iso})},{default:l(()=>[n("span",P,o(e.flag),1),n("span",R,[g(o(e.name)+" ",1),n("span",T,"("+o(e.iso)+")",1)])]),_:2},1032,["value","class"]))),128))]),_:1})]),_:1},8,["modelValue"])):f("",!0),t(u)==="select-box"?w((a(),r("select",{key:1,"onUpdate:modelValue":i[1]||(i[1]=e=>y(s)?s.value=e:null),class:"w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"},[(a(!0),r(h,null,m(t(_),e=>(a(),r("option",{key:e.iso,value:e.iso,class:"flex items-center space-x-2"},o(e.flag)+" "+o(e.name)+" ("+o(e.iso)+") ",9,U))),128))],512)),[[z,t(s)]]):f("",!0)])}}});export{G as _};
