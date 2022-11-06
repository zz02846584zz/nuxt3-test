import { ref, onMounted, watchEffect, defineComponent } from 'vue';
import { o as o$1, V, g as u } from '../server.mjs';

var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
function r(t, e2) {
  if (t)
    return t;
  let n = e2 != null ? e2 : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function b$1(t, e2) {
  let n = ref(r(t.value.type, t.value.as));
  return onMounted(() => {
    n.value = r(t.value.type, t.value.as);
  }), watchEffect(() => {
    var o2;
    n.value || !o$1(e2) || o$1(e2) instanceof HTMLButtonElement && !((o2 = o$1(e2)) != null && o2.hasAttribute("type")) && (n.value = "button");
  }), n;
}
function m$1(r2) {
  return null;
}
let m = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(M || {}), N = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(N || {}), b = ((r2) => (r2[r2.Previous = -1] = "Previous", r2[r2.Next = 1] = "Next", r2))(b || {});
function E(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(m));
}
var F = ((r2) => (r2[r2.Strict = 0] = "Strict", r2[r2.Loose = 1] = "Loose", r2))(F || {});
function h(e2, t = 0) {
  var r2;
  return e2 === ((r2 = m$1()) == null ? void 0 : r2.body) ? false : u(t, { [0]() {
    return e2.matches(m);
  }, [1]() {
    let l = e2;
    for (; l !== null; ) {
      if (l.matches(m))
        return true;
      l = l.parentElement;
    }
    return false;
  } });
}
let H = ["textarea", "input"].join(",");
function S(e2) {
  var t, r2;
  return (r2 = (t = e2 == null ? void 0 : e2.matches) == null ? void 0 : t.call(e2, H)) != null ? r2 : false;
}
function O(e2, t = (r2) => r2) {
  return e2.slice().sort((r2, l) => {
    let o2 = t(r2), s = t(l);
    if (o2 === null || s === null)
      return 0;
    let n = o2.compareDocumentPosition(s);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, t, r2 = true, l = null) {
  var c;
  let o2 = (c = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2 == null ? void 0 : e2.ownerDocument) != null ? c : document, s = Array.isArray(e2) ? r2 ? O(e2) : e2 : E(e2);
  l = l != null ? l : o2.activeElement;
  let n = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(l)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(l)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = t & 32 ? { preventScroll: true } : {}, a2 = 0, i = s.length, u2;
  do {
    if (a2 >= i || a2 + i <= 0)
      return 0;
    let f2 = x + a2;
    if (t & 16)
      f2 = (f2 + i) % i;
    else {
      if (f2 < 0)
        return 3;
      if (f2 >= i)
        return 1;
    }
    u2 = s[f2], u2 == null || u2.focus(p), a2 += n;
  } while (u2 !== o2.activeElement);
  return t & 6 && S(u2) && u2.select(), u2.hasAttribute("tabindex") || u2.setAttribute("tabindex", "0"), 2;
}
var a = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(a || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r2, { slots: t, attrs: d }) {
  return () => {
    let { features: e2, ...o2 } = r2, n = { "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return V({ ourProps: n, theirProps: o2, slot: {}, attrs: d, slots: t, name: "Hidden" });
  };
} });

export { F, M, O, P, a, b$1 as b, f, h, o };
//# sourceMappingURL=hidden.53ffa532.mjs.map
