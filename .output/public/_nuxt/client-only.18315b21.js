import{a as o,f as p,k as h,b as g,q as f,z as i}from"./entry.d78a7e75.js";const k=o({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(l,{slots:a}){const r=p(!1);return h(()=>{r.value=!0}),t=>{var d;if(r.value)return(d=a.default)==null?void 0:d.call(a);const n=a.fallback||a.placeholder;if(n)return n();const e=t.fallback||t.placeholder||"",s=t.fallbackTag||t.placeholderTag||"span";return g(s,null,e)}}}),c=new WeakMap;function m(l){if(c.has(l))return c.get(l);const a={...l};return a.render?a.render=(r,...t)=>{var n;if(r.mounted$){const e=l.render(r,...t);return e.children===null||typeof e.children=="string"?f(e.type,e.props,e.children,e.patchFlag,e.dynamicProps,e.shapeFlag):i(e)}else return i("div",(n=r.$attrs)!=null?n:r._.attrs)}:a.template&&(a.template=`
      <template v-if="mounted$">${l.template}</template>
      <template v-else><div></div></template>
    `),a.setup=(r,t)=>{var e;const n=p(!1);return h(()=>{n.value=!0}),Promise.resolve(((e=l.setup)==null?void 0:e.call(l,r,t))||{}).then(s=>typeof s!="function"?{...s,mounted$:n}:(...d)=>{if(n.value){const u=s(...d);return u.children===null||typeof u.children=="string"?f(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):i(u)}else return i("div",t.attrs)})},c.set(l,a),a}export{m as createClientOnly,k as default};
