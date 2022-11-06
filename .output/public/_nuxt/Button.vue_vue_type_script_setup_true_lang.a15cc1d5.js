import{a as b,X as g,D as l,o as u,c as k,m as v,r as f,Y as y,y as h,t as p,u as o,b as S,Z as $,K as w}from"./entry.d78a7e75.js";const z=["href"],C=b({__name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"primary"},size:{type:String,default:"md"},to:{type:[String,Object],default:void 0},href:{type:String,default:void 0}},setup(e){const t=e,a=`
  cursor-pointer
  border transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-semibold
`,s=g({none:"",primary:"text-white bg-primary-500 hover:bg-primary-400 border-primary-500",secondary:"text-slate-800 bg-gray-200 border-gray-200 hover:bg-gray-300 dark:text-white dark:border-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700",opposite:"text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white"}),n=g({lg:"h-13 px-8 text-lg rounded-lg",md:"h-10 px-6 text-base rounded",sm:"h-9 px-4 text-sm rounded",xs:"h-6 px-3 text-xs rounded"}),i=l(()=>s[t.type]||s.primary),d=l(()=>n[t.size]||n.lg),x=r=>{const c=$();t.to&&c.push(t.to),t.href||r.preventDefault()};return(r,c)=>{const m=w;return e.to?(u(),k(m,{key:0,tag:"a",to:e.to,class:p(`${a} ${o(i)} ${o(d)}`)},{default:v(()=>[f(r.$slots,"default",{},()=>[y(h(e.text),1)])]),_:3},8,["to","class"])):(u(),S("a",{key:1,class:p(`${a} ${o(i)} ${o(d)}`),href:e.href,onClick:x},[f(r.$slots,"default",{},()=>[y(h(e.text),1)])],10,z))}}});export{C as _};
