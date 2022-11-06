import{R as ee,f as te,O as p,t as ne,c as re,u as L,l as F,V as M,p as ae,w as le,o as j}from"./open-closed.4dbeda2a.js";import{a as z,z as N,f as b,D as T,k as g,a7 as Q,a6 as S,h as ie,p as x,i as q}from"./entry.d78a7e75.js";function V(){let e=[],t=[],a={enqueue(n){t.push(n)},addEventListener(n,i,l,r){return n.addEventListener(i,l,r),a.add(()=>n.removeEventListener(i,l,r))},requestAnimationFrame(...n){let i=requestAnimationFrame(...n);a.add(()=>cancelAnimationFrame(i))},nextFrame(...n){a.requestAnimationFrame(()=>{a.requestAnimationFrame(...n)})},setTimeout(...n){let i=setTimeout(...n);a.add(()=>clearTimeout(i))},add(n){e.push(n)},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return a}function oe(e){let t={called:!1};return(...a)=>{if(!t.called)return t.called=!0,e(...a)}}function C(e,...t){e&&t.length>0&&e.classList.add(...t)}function w(e,...t){e&&t.length>0&&e.classList.remove(...t)}var O=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(O||{});function ue(e,t){let a=V();if(!e)return a.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[l,r]=[n,i].map(o=>{let[u=0]=o.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,m)=>m-s);return u});return l!==0?a.setTimeout(()=>t("finished"),l+r):t("finished"),a.add(()=>t("cancelled")),a.dispose}function k(e,t,a,n,i,l){let r=V(),o=l!==void 0?oe(l):()=>{};return w(e,...i),C(e,...t,...a),r.nextFrame(()=>{w(e,...a),C(e,...n),r.add(ue(e,u=>(w(e,...n,...t),C(e,...i),o(u))))}),r.add(()=>w(e,...t,...a,...n,...i)),r.add(()=>o("cancelled")),r.dispose}function v(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let H=Symbol("TransitionContext");var se=(e=>(e.Visible="visible",e.Hidden="hidden",e))(se||{});function de(){return q(H,null)!==null}function fe(){let e=q(H,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function ve(){let e=q(D,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let D=Symbol("NestingContext");function A(e){return"children"in e?A(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function $(e){let t=b([]),a=b(!1);g(()=>a.value=!0),Q(()=>a.value=!1);function n(l,r=p.Hidden){let o=t.value.findIndex(({id:u})=>u===l);o!==-1&&(L(r,{[p.Unmount](){t.value.splice(o,1)},[p.Hidden](){t.value[o].state="hidden"}}),!A(t)&&a.value&&(e==null||e()))}function i(l){let r=t.value.find(({id:o})=>o===l);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:l,state:"visible"}),()=>n(l,p.Unmount)}return{children:t,register:i,unregister:n}}let G=ee.RenderStrategy,pe=z({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n,expose:i}){if(!de()&&te())return()=>N(ce,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},n);let l=b(null),r=b("visible"),o=T(()=>e.unmount?p.Unmount:p.Hidden);i({el:l,$el:l});let{show:u,appear:s}=fe(),{register:m,unregister:c}=ve(),R={value:!0},h=ne(),y={value:!1},P=$(()=>{y.value||(r.value="hidden",c(h),t("afterLeave"))});g(()=>{let d=m(h);Q(d)}),S(()=>{if(o.value===p.Hidden&&!!h){if(u&&r.value!=="visible"){r.value="visible";return}L(r.value,{hidden:()=>c(h),visible:()=>m(h)})}});let I=v(e.enter),J=v(e.enterFrom),K=v(e.enterTo),U=v(e.entered),W=v(e.leave),_=v(e.leaveFrom),X=v(e.leaveTo);g(()=>{S(()=>{if(r.value==="visible"){let d=j(l);if(d instanceof Comment&&d.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Y(d){let B=R.value&&!s.value,f=j(l);!f||!(f instanceof HTMLElement)||B||(y.value=!0,u.value&&t("beforeEnter"),u.value||t("beforeLeave"),d(u.value?k(f,I,J,K,U,E=>{y.value=!1,E===O.Finished&&t("afterEnter")}):k(f,W,_,X,U,E=>{y.value=!1,E===O.Finished&&(A(P)||(r.value="hidden",c(h),t("afterLeave")))})))}return g(()=>{ie([u],(d,B,f)=>{Y(f),R.value=!1},{immediate:!0})}),x(D,P),re(T(()=>L(r.value,{visible:F.Open,hidden:F.Closed}))),()=>{let{appear:d,show:B,enter:f,enterFrom:E,enterTo:he,entered:be,leave:ge,leaveFrom:ye,leaveTo:Ee,...Z}=e;return M({theirProps:Z,ourProps:{ref:l},slot:{},slots:n,attrs:a,features:G,visible:r.value==="visible",name:"TransitionChild"})}}}),me=pe,ce=z({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:a,slots:n}){let i=ae(),l=T(()=>e.show===null&&i!==null?L(i.value,{[F.Open]:!0,[F.Closed]:!1}):e.show);S(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=b(l.value?"visible":"hidden"),o=$(()=>{r.value="hidden"}),u=b(!0),s={show:l,appear:T(()=>e.appear||!u.value)};return g(()=>{S(()=>{u.value=!1,l.value?r.value="visible":A(o)||(r.value="hidden")})}),x(D,o),x(H,s),()=>{let m=le(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return M({ourProps:{...c,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[N(me,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...a,...c,...m},n.default)]},attrs:{},features:G,visible:r.value==="visible",name:"Transition"})}}});export{ce as f,pe as o};
