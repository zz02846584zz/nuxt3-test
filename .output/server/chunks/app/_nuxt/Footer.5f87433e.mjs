import { defineComponent, ref, computed, toRaw, provide, h as h$1, Fragment, onMounted, onUnmounted, watch, watchEffect, nextTick, mergeProps, useSSRContext, unref, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, toRef, isRef, openBlock, createBlock, renderList, createCommentVNode, inject, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderTeleport, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { g as u, o, h as c, l as l$1, P, V as V$1, w as w$1, t, p as p$1, R, _ as _export_sfc, i as fe$1, j as oe, k as useAppConfig, b as useState, m as availableLocales, n as availableThemes, e as __nuxt_component_0$2 } from '../server.mjs';
import __nuxt_component_1 from './client-only.02e4e1d5.mjs';
import { h, F, f as f$2, a as a$1, b as b$1, O, o as o$1 } from './hidden.53ffa532.mjs';
import 'ohmyfetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'cookie-es';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'defu';
import 'fs';
import 'pathe';
import 'url';
import 'axios';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'unist-util-position';
import 'html-tags';
import 'slugify';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'vue-router';
import 'property-information';
import '@intlify/message-compiler';

function f$1(r) {
  throw new Error("Unexpected object: " + r);
}
var a = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a || {});
function x(r, n) {
  let t2 = n.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d2 = (() => {
    switch (r.focus) {
      case 0:
        return t2.findIndex((e2) => !n.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i) => i <= s2 ? false : !n.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i) => !n.resolveDisabled(i));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n.resolveId(e2) === r.id);
      case 5:
        return null;
      default:
        f$1(r);
    }
  })();
  return d2 === -1 ? l2 : d2;
}
function y(a2, f2, l2 = computed(() => true)) {
  ref(null);
}
function e(n = {}, r = null, t2 = []) {
  for (let [i, o2] of Object.entries(n))
    f(t2, s(r, i), o2);
  return t2;
}
function s(n, r) {
  return n ? n + "[" + r + "]" : r;
}
function f(n, r, t2) {
  if (Array.isArray(t2))
    for (let [i, o2] of t2.entries())
      f(n, s(r, i.toString()), o2);
  else
    t2 instanceof Date ? n.push([r, t2.toISOString()]) : typeof t2 == "boolean" ? n.push([r, t2 ? "1" : "0"]) : typeof t2 == "string" ? n.push([r, t2]) : typeof t2 == "number" ? n.push([r, `${t2}`]) : t2 == null ? n.push([r, ""]) : e(t2, r, n);
}
function d(u2, e2, r) {
  let i = ref(r == null ? void 0 : r.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i.value), function(t2) {
    return f2.value || (i.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function ue(o2, m) {
  return o2 === m;
}
var re = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(re || {}), se = ((l2) => (l2[l2.Single = 0] = "Single", l2[l2.Multi = 1] = "Multi", l2))(se || {}), de = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(de || {});
function fe(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let H = Symbol("ListboxContext");
function V(o2) {
  let m = inject(H, null);
  if (m === null) {
    let l2 = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, V), l2;
  }
  return m;
}
let Me = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => ue }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o$12, { slots: m, attrs: l$1$1, emit: L }) {
  let e$12 = ref(1), p2 = ref(null), s2 = ref(null), O$1 = ref(null), d$1 = ref([]), S = ref(""), t2 = ref(null), i = ref(1);
  function k(a2 = (n) => n) {
    let n = t2.value !== null ? d$1.value[t2.value] : null, u2 = O(a2(d$1.value.slice()), (y2) => o(y2.dataRef.domRef)), c2 = n ? u2.indexOf(n) : null;
    return c2 === -1 && (c2 = null), { options: u2, activeOptionIndex: c2 };
  }
  let h$2 = computed(() => o$12.multiple ? 1 : 0), [w$1$1, r] = d(computed(() => o$12.modelValue), (a2) => L("update:modelValue", a2), computed(() => o$12.defaultValue)), f2 = { listboxState: e$12, value: w$1$1, mode: h$2, compare(a2, n) {
    if (typeof o$12.by == "string") {
      let u2 = o$12.by;
      return (a2 == null ? void 0 : a2[u2]) === (n == null ? void 0 : n[u2]);
    }
    return o$12.by(a2, n);
  }, orientation: computed(() => o$12.horizontal ? "horizontal" : "vertical"), labelRef: p2, buttonRef: s2, optionsRef: O$1, disabled: computed(() => o$12.disabled), options: d$1, searchQuery: S, activeOptionIndex: t2, activationTrigger: i, closeListbox() {
    o$12.disabled || e$12.value !== 1 && (e$12.value = 1, t2.value = null);
  }, openListbox() {
    o$12.disabled || e$12.value !== 0 && (e$12.value = 0);
  }, goToOption(a$12, n, u2) {
    if (o$12.disabled || e$12.value === 1)
      return;
    let c2 = k(), y2 = x(a$12 === a.Specific ? { focus: a.Specific, id: n } : { focus: a$12 }, { resolveItems: () => c2.options, resolveActiveIndex: () => c2.activeOptionIndex, resolveId: (T) => T.id, resolveDisabled: (T) => T.dataRef.disabled });
    S.value = "", t2.value = y2, i.value = u2 != null ? u2 : 1, d$1.value = c2.options;
  }, search(a2) {
    if (o$12.disabled || e$12.value === 1)
      return;
    let u2 = S.value !== "" ? 0 : 1;
    S.value += a2.toLowerCase();
    let y2 = (t2.value !== null ? d$1.value.slice(t2.value + u2).concat(d$1.value.slice(0, t2.value + u2)) : d$1.value).find((A) => A.dataRef.textValue.startsWith(S.value) && !A.dataRef.disabled), T = y2 ? d$1.value.indexOf(y2) : -1;
    T === -1 || T === t2.value || (t2.value = T, i.value = 1);
  }, clearSearch() {
    o$12.disabled || e$12.value !== 1 && S.value !== "" && (S.value = "");
  }, registerOption(a2, n) {
    let u2 = k((c2) => [...c2, { id: a2, dataRef: n }]);
    d$1.value = u2.options, t2.value = u2.activeOptionIndex;
  }, unregisterOption(a2) {
    let n = k((u2) => {
      let c2 = u2.findIndex((y2) => y2.id === a2);
      return c2 !== -1 && u2.splice(c2, 1), u2;
    });
    d$1.value = n.options, t2.value = n.activeOptionIndex, i.value = 1;
  }, select(a2) {
    o$12.disabled || r(u(h$2.value, { [0]: () => a2, [1]: () => {
      let n = toRaw(f2.value.value).slice(), u2 = toRaw(a2), c2 = n.findIndex((y2) => f2.compare(u2, toRaw(y2)));
      return c2 === -1 ? n.push(u2) : n.splice(c2, 1), n;
    } }));
  } };
  return y([s2, O$1], (a2, n) => {
    var u2;
    f2.closeListbox(), h(n, F.Loose) || (a2.preventDefault(), (u2 = o(s2)) == null || u2.focus());
  }, computed(() => e$12.value === 0)), provide(H, f2), c(computed(() => u(e$12.value, { [0]: l$1.Open, [1]: l$1.Closed }))), () => {
    let { name: a2, modelValue: n, disabled: u2, ...c2 } = o$12, y2 = { open: e$12.value === 0, disabled: u2, value: w$1$1.value };
    return h$1(Fragment, [...a2 != null && w$1$1.value != null ? e({ [a2]: w$1$1.value }).map(([T, A]) => h$1(f$2, P({ features: a$1.Hidden, key: T, as: "input", type: "hidden", hidden: true, readOnly: true, name: T, value: A }))) : [], V$1({ ourProps: {}, theirProps: { ...l$1$1, ...w$1(c2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: y2, slots: m, attrs: l$1$1, name: "Listbox" })]);
  };
} }), Pe = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" } }, setup(o$12, { attrs: m, slots: l2 }) {
  let L = V("ListboxLabel"), e2 = `headlessui-listbox-label-${t()}`;
  function p2() {
    var s2;
    (s2 = o(L.buttonRef)) == null || s2.focus({ preventScroll: true });
  }
  return () => {
    let s2 = { open: L.listboxState.value === 0, disabled: L.disabled.value }, O2 = { id: e2, ref: L.labelRef, onClick: p2 };
    return V$1({ ourProps: O2, theirProps: o$12, slot: s2, attrs: m, slots: l2, name: "ListboxLabel" });
  };
} }), Ie = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" } }, setup(o$2, { attrs: m, slots: l2, expose: L }) {
  let e2 = V("ListboxButton"), p2 = `headlessui-listbox-button-${t()}`;
  L({ el: e2.buttonRef, $el: e2.buttonRef });
  function s2(t2) {
    switch (t2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        t2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a.First);
        });
        break;
      case o$1.ArrowUp:
        t2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a.Last);
        });
        break;
    }
  }
  function O2(t2) {
    switch (t2.key) {
      case o$1.Space:
        t2.preventDefault();
        break;
    }
  }
  function d2(t2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var i;
      return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })) : (t2.preventDefault(), e2.openListbox(), fe(() => {
      var i;
      return (i = o(e2.optionsRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })));
  }
  let S = b$1(computed(() => ({ as: o$2.as, type: m.type })), e2.buttonRef);
  return () => {
    var k, h2;
    let t2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, i = { ref: e2.buttonRef, id: p2, type: S.value, "aria-haspopup": true, "aria-controls": (k = o(e2.optionsRef)) == null ? void 0 : k.id, "aria-expanded": e2.disabled.value ? void 0 : e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(h2 = o(e2.labelRef)) == null ? void 0 : h2.id, p2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: s2, onKeyup: O2, onClick: d2 };
    return V$1({ ourProps: i, theirProps: o$2, slot: t2, attrs: m, slots: l2, name: "ListboxButton" });
  };
} }), Ve = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(o$2, { attrs: m, slots: l$1$1, expose: L }) {
  let e2 = V("ListboxOptions"), p2 = `headlessui-listbox-options-${t()}`, s2 = ref(null);
  L({ el: e2.optionsRef, $el: e2.optionsRef });
  function O2(t2) {
    switch (s2.value && clearTimeout(s2.value), t2.key) {
      case o$1.Space:
        if (e2.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e2.search(t2.key);
      case o$1.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let i = e2.options.value[e2.activeOptionIndex.value];
          e2.select(i.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        }));
        break;
      case u(e2.orientation.value, { vertical: o$1.ArrowDown, horizontal: o$1.ArrowRight }):
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a.Next);
      case u(e2.orientation.value, { vertical: o$1.ArrowUp, horizontal: o$1.ArrowLeft }):
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a.First);
      case o$1.End:
      case o$1.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToOption(a.Last);
      case o$1.Escape:
        t2.preventDefault(), t2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        t2.preventDefault(), t2.stopPropagation();
        break;
      default:
        t2.key.length === 1 && (e2.search(t2.key), s2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let d2 = p$1(), S = computed(() => d2 !== null ? d2.value === l$1.Open : e2.listboxState.value === 0);
  return () => {
    var h2, w2, r, f2;
    let t2 = { open: e2.listboxState.value === 0 }, i = { "aria-activedescendant": e2.activeOptionIndex.value === null || (h2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : h2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (f2 = (w2 = o(e2.labelRef)) == null ? void 0 : w2.id) != null ? f2 : (r = o(e2.buttonRef)) == null ? void 0 : r.id, "aria-orientation": e2.orientation.value, id: p2, onKeydown: O2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return V$1({ ourProps: i, theirProps: o$2, slot: t2, attrs: m, slots: l$1$1, features: R.RenderStrategy | R.Static, visible: S.value, name: "ListboxOptions" });
  };
} }), Ae = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(o$12, { slots: m, attrs: l2, expose: L }) {
  let e2 = V("ListboxOption"), p2 = `headlessui-listbox-option-${t()}`, s2 = ref(null);
  L({ el: s2, $el: s2 });
  let O2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === p2 : false), d2 = computed(() => u(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o$12.value)), [1]: () => toRaw(e2.value.value).some((r) => e2.compare(toRaw(r), toRaw(o$12.value))) })), S = computed(() => u(e2.mode.value, { [1]: () => {
    var f2;
    let r = toRaw(e2.value.value);
    return ((f2 = e2.options.value.find((a2) => r.some((n) => e2.compare(toRaw(n), toRaw(a2.dataRef.value))))) == null ? void 0 : f2.id) === p2;
  }, [0]: () => d2.value })), t$1 = computed(() => ({ disabled: o$12.disabled, value: o$12.value, textValue: "", domRef: s2 }));
  onMounted(() => {
    var f2, a2;
    let r = (a2 = (f2 = o(s2)) == null ? void 0 : f2.textContent) == null ? void 0 : a2.toLowerCase().trim();
    r !== void 0 && (t$1.value.textValue = r);
  }), onMounted(() => e2.registerOption(p2, t$1)), onUnmounted(() => e2.unregisterOption(p2)), onMounted(() => {
    watch([e2.listboxState, d2], () => {
      e2.listboxState.value === 0 && (!d2.value || u(e2.mode.value, { [1]: () => {
        S.value && e2.goToOption(a.Specific, p2);
      }, [0]: () => {
        e2.goToOption(a.Specific, p2);
      } }));
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && (!O2.value || e2.activationTrigger.value !== 0 && nextTick(() => {
      var r, f2;
      return (f2 = (r = o(s2)) == null ? void 0 : r.scrollIntoView) == null ? void 0 : f2.call(r, { block: "nearest" });
    }));
  });
  function i(r) {
    if (o$12.disabled)
      return r.preventDefault();
    e2.select(o$12.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var f2;
      return (f2 = o(e2.buttonRef)) == null ? void 0 : f2.focus({ preventScroll: true });
    }));
  }
  function k() {
    if (o$12.disabled)
      return e2.goToOption(a.Nothing);
    e2.goToOption(a.Specific, p2);
  }
  function h2() {
    o$12.disabled || O2.value || e2.goToOption(a.Specific, p2, 0);
  }
  function w$1$1() {
    o$12.disabled || !O2.value || e2.goToOption(a.Nothing);
  }
  return () => {
    let { disabled: r } = o$12, f2 = { active: O2.value, selected: d2.value, disabled: r }, a2 = { id: p2, ref: s2, role: "option", tabIndex: r === true ? void 0 : -1, "aria-disabled": r === true ? true : void 0, "aria-selected": d2.value, disabled: void 0, onClick: i, onFocus: k, onPointermove: h2, onMousemove: h2, onPointerleave: w$1$1, onMouseleave: w$1$1 };
    return V$1({ ourProps: a2, theirProps: w$1(o$12, ["value", "disabled"]), slot: f2, attrs: l2, slots: m, name: "ListboxOption" });
  };
} });
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100/[0.8] dark:bg-slate-800/[0.8] backdrop-blur supports-backdrop-blur:bg-white/60 p-4 rounded overflow-y-auto" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Body.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const Body = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-xs font-bold text-center mb-2" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Header.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bg-black opacity-70 z-50 top-0 left-0 w-screen h-screen" }, _attrs))}></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/Overlay.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const Overlay = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["onClose"],
  setup(__props, { emit }) {
    const show = ref(false);
    const close = () => {
      show.value = false;
      setTimeout(() => emit("onClose"), 100);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionSheetOverlay = __nuxt_component_0;
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(unref(fe$1), {
          show: show.value,
          appear: ""
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<div${_scopeId}>`);
              _push3(ssrRenderComponent(_component_ActionSheetOverlay, { onClick: close }, null, _parent2, _scopeId));
              _push3(ssrRenderComponent(unref(oe), {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "duration-300 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                  if (_push4) {
                    _push4(`<div class="fixed bottom-0 w-screen z-50 flex" style="${ssrRenderStyle({ "max-height": "66.666667%" })}"${_scopeId2}><div class="relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent3, _scopeId2);
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "fixed bottom-0 w-screen z-50 flex",
                        style: { "max-height": "66.666667%" }
                      }, [
                        createVNode("div", { class: "relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end" }, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_ActionSheetOverlay, { onClick: close }),
                  createVNode(unref(oe), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-300 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "fixed bottom-0 w-screen z-50 flex",
                        style: { "max-height": "66.666667%" }
                      }, [
                        createVNode("div", { class: "relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end" }, [
                          renderSlot(_ctx.$slots, "default")
                        ])
                      ])
                    ]),
                    _: 3
                  })
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSheet/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$8 = {
  viewBox: "0 0 192 512",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8S24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
const __unplugin_components_3$1 = { name: "fa-solid-ellipsis-v", render: render$8 };
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513l-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const __unplugin_components_2$1 = { name: "simple-icons-nuxtdotjs", render: render$7 };
const _hoisted_1$6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
const __unplugin_components_1$1 = { name: "uil-times", render: render$6 };
const _hoisted_1$5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const __unplugin_components_0$2 = { name: "uil-bars", render: render$5 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useAppConfig();
    const navbar = ref(null);
    const showDrawer = useState("navbar.showDrawer", () => false);
    useState("navbar.showOptions", () => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconUil58bars = __unplugin_components_0$2;
      const _component_IconUil58times = __unplugin_components_1$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_IconSimpleIcons58nuxtdotjs = __unplugin_components_2$1;
      const _component_icon_fa_solid58ellipsis_v = __unplugin_components_3$1;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
      }, _attrs))}><div id="navbar-banner" class="banner">`);
      ssrRenderSlot(_ctx.$slots, "banner", {}, null, _push, _parent);
      _push(`</div><div class="max-w-8xl w-full mx-auto"><div class="py-3 lg:px-8 mx-4 lg:mx-0"><div class="relative flex items-center">`);
      if (_ctx.$slots["drawer"]) {
        _push(`<div class="lg:hidden flex items-center self-center justify-center mr-2"><button class="flex items-center focus:outline-none" aria-label="Toggle Drawer Menu"><span class="flex items-center text-gray-600 dark:text-gray-300 text-lg" aria-hidden="true">`);
        if (!unref(showDrawer)) {
          _push(ssrRenderComponent(_component_IconUil58bars, null, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_IconUil58times, null, null, _parent));
        }
        _push(`</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          tag: "a",
          class: "mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200",
          to: { name: "index" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>home</span><span class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_IconSimpleIcons58nuxtdotjs, { class: "inline-block mr-2 text-lg text-primary-500" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(app).name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "sr-only" }, "home"),
                createVNode("span", { class: "flex items-center" }, [
                  createVNode(_component_IconSimpleIcons58nuxtdotjs, { class: "inline-block mr-2 text-lg text-primary-500" }),
                  createTextVNode(" " + toDisplayString(unref(app).name), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "menu", {}, null, _push, _parent);
      if (_ctx.$slots["options"]) {
        _push(`<div class="flex-1 flex justify-end lg:hidden"><button class="flex items-center focus:outline-none" aria-label="Toggle Options Menu"><span class="flex items-center text-gray-600 dark:text-gray-300 text-sm" aria-hidden="true">`);
        _push(ssrRenderComponent(_component_icon_fa_solid58ellipsis_v, null, null, _parent));
        _push(`</span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Builder/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$4 = {
  viewBox: "0 0 32 32",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M4 4v18h6v6h18V10h-6V4zm2 2h14v4.563L10.562 20H6zm5 2v1H8v2h4.938c-.13 1.148-.481 2.055-1.063 2.688a4.544 4.544 0 0 1-.906-.407C10.266 12.863 10 12.418 10 12H8c0 1.191.734 2.184 1.719 2.844A8.267 8.267 0 0 1 8 15v2c1.773 0 3.25-.406 4.375-1.156c.523.09 1.055.156 1.625.156v-1.875c.543-.91.832-1.973.938-3.125H16V9h-3V8zm10.438 4H26v14H12v-4.563zM20 13.844l-.938 2.844l-2 6l-.062.156V24h2v-.875l.031-.125h1.938l.031.125V24h2v-1.156l-.063-.157l-2-6zm0 6.281l.281.875h-.562z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const __unplugin_components_0$1 = { name: "la-language", render: render$4 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "dropdown-right-top"
    }
  },
  setup(__props) {
    const props = __props;
    const currentStyle = toRef(props, "type");
    const localeSetting = useState("locale.setting");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconLa58language = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      if (unref(currentStyle) === "dropdown-right-top") {
        _push(ssrRenderComponent(unref(Me), {
          modelValue: unref(localeSetting),
          "onUpdate:modelValue": ($event) => isRef(localeSetting) ? localeSetting.value = $event : null,
          as: "div",
          class: "relative flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Pe), { class: "sr-only" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Theme`);
                  } else {
                    return [
                      createTextVNode("Theme")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ie), {
                type: "button",
                title: "Change Language",
                class: "transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="justify-center items-center flex"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconLa58language, null, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "justify-center items-center flex" }, [
                        createVNode(_component_IconLa58language)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(availableLocales), (lang) => {
                      _push3(ssrRenderComponent(unref(Ae), {
                        key: lang.iso,
                        value: lang.iso,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(localeSetting) === lang.iso,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(localeSetting) !== lang.iso
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-sm mr-2"${_scopeId3}>${ssrInterpolate(lang.flag)}</span><span class="flex-1 truncate"${_scopeId3}>${ssrInterpolate(lang.name)} <span class="text-xs"${_scopeId3}>(${ssrInterpolate(lang.iso)})</span></span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-sm mr-2" }, toDisplayString(lang.flag), 1),
                              createVNode("span", { class: "flex-1 truncate" }, [
                                createTextVNode(toDisplayString(lang.name) + " ", 1),
                                createVNode("span", { class: "text-xs" }, "(" + toDisplayString(lang.iso) + ")", 1)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(availableLocales), (lang) => {
                        return openBlock(), createBlock(unref(Ae), {
                          key: lang.iso,
                          value: lang.iso,
                          class: {
                            "py-2 px-2 flex items-center cursor-pointer": true,
                            "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(localeSetting) === lang.iso,
                            "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(localeSetting) !== lang.iso
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm mr-2" }, toDisplayString(lang.flag), 1),
                            createVNode("span", { class: "flex-1 truncate" }, [
                              createTextVNode(toDisplayString(lang.name) + " ", 1),
                              createVNode("span", { class: "text-xs" }, "(" + toDisplayString(lang.iso) + ")", 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Pe), { class: "sr-only" }, {
                  default: withCtx(() => [
                    createTextVNode("Theme")
                  ]),
                  _: 1
                }),
                createVNode(unref(Ie), {
                  type: "button",
                  title: "Change Language",
                  class: "transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "justify-center items-center flex" }, [
                      createVNode(_component_IconLa58language)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(availableLocales), (lang) => {
                      return openBlock(), createBlock(unref(Ae), {
                        key: lang.iso,
                        value: lang.iso,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(localeSetting) === lang.iso,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(localeSetting) !== lang.iso
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm mr-2" }, toDisplayString(lang.flag), 1),
                          createVNode("span", { class: "flex-1 truncate" }, [
                            createTextVNode(toDisplayString(lang.name) + " ", 1),
                            createVNode("span", { class: "text-xs" }, "(" + toDisplayString(lang.iso) + ")", 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStyle) === "select-box") {
        _push(`<select class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"><!--[-->`);
        ssrRenderList(unref(availableLocales), (lang) => {
          _push(`<option${ssrRenderAttr("value", lang.iso)} class="flex items-center space-x-2">${ssrInterpolate(lang.flag)} ${ssrInterpolate(lang.name)} (${ssrInterpolate(lang.iso)}) </option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguageSwitcher.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LanguageSwitcher = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_3 = { name: "uil-clock", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_2 = { name: "uil-laptop", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_1 = { name: "uil-moon", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "uil-sun", render };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "dropdown-right-top"
    }
  },
  setup(__props) {
    const props = __props;
    const themeSetting = useState("theme.setting");
    const currentStyle = toRef(props, "type");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconUil58sun = __unplugin_components_0;
      const _component_IconUil58moon = __unplugin_components_1;
      const _component_IconUil58laptop = __unplugin_components_2;
      const _component_IconUil58clock = __unplugin_components_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      if (unref(currentStyle) === "dropdown-right-top") {
        _push(ssrRenderComponent(unref(Me), {
          modelValue: unref(themeSetting),
          "onUpdate:modelValue": ($event) => isRef(themeSetting) ? themeSetting.value = $event : null,
          as: "div",
          class: "relative flex items-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Pe), { class: "sr-only" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("components.theme_switcher.theme"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("components.theme_switcher.theme")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ie), {
                type: "button",
                title: _ctx.$t("components.theme_switcher.change_theme"),
                class: "transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="flex justify-center items-center dark:hidden"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconUil58sun, null, null, _parent3, _scopeId2));
                    _push3(`</span><span class="justify-center items-center hidden dark:flex"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_IconUil58moon, null, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                        createVNode(_component_IconUil58sun)
                      ]),
                      createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                        createVNode(_component_IconUil58moon)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(availableThemes), (theme) => {
                      _push3(ssrRenderComponent(unref(Ae), {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(themeSetting) === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(themeSetting) !== theme.key
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-sm mr-2 flex items-center"${_scopeId3}>`);
                            if (theme.key === "light") {
                              _push4(ssrRenderComponent(_component_IconUil58sun, null, null, _parent4, _scopeId3));
                            } else if (theme.key === "dark") {
                              _push4(ssrRenderComponent(_component_IconUil58moon, null, null, _parent4, _scopeId3));
                            } else if (theme.key === "system") {
                              _push4(ssrRenderComponent(_component_IconUil58laptop, null, null, _parent4, _scopeId3));
                            } else if (theme.key === "realtime") {
                              _push4(ssrRenderComponent(_component_IconUil58clock, null, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</span> ${ssrInterpolate(theme.text)}`);
                          } else {
                            return [
                              createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                                theme.key === "light" ? (openBlock(), createBlock(_component_IconUil58sun, { key: 0 })) : theme.key === "dark" ? (openBlock(), createBlock(_component_IconUil58moon, { key: 1 })) : theme.key === "system" ? (openBlock(), createBlock(_component_IconUil58laptop, { key: 2 })) : theme.key === "realtime" ? (openBlock(), createBlock(_component_IconUil58clock, { key: 3 })) : createCommentVNode("", true)
                              ]),
                              createTextVNode(" " + toDisplayString(theme.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(availableThemes), (theme) => {
                        return openBlock(), createBlock(unref(Ae), {
                          key: theme.key,
                          value: theme.key,
                          class: {
                            "py-2 px-2 flex items-center cursor-pointer": true,
                            "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(themeSetting) === theme.key,
                            "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(themeSetting) !== theme.key
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                              theme.key === "light" ? (openBlock(), createBlock(_component_IconUil58sun, { key: 0 })) : theme.key === "dark" ? (openBlock(), createBlock(_component_IconUil58moon, { key: 1 })) : theme.key === "system" ? (openBlock(), createBlock(_component_IconUil58laptop, { key: 2 })) : theme.key === "realtime" ? (openBlock(), createBlock(_component_IconUil58clock, { key: 3 })) : createCommentVNode("", true)
                            ]),
                            createTextVNode(" " + toDisplayString(theme.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Pe), { class: "sr-only" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("components.theme_switcher.theme")), 1)
                  ]),
                  _: 1
                }),
                createVNode(unref(Ie), {
                  type: "button",
                  title: _ctx.$t("components.theme_switcher.change_theme"),
                  class: "transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "flex justify-center items-center dark:hidden" }, [
                      createVNode(_component_IconUil58sun)
                    ]),
                    createVNode("span", { class: "justify-center items-center hidden dark:flex" }, [
                      createVNode(_component_IconUil58moon)
                    ])
                  ]),
                  _: 1
                }, 8, ["title"]),
                createVNode(unref(Ve), { class: "p-1 absolute z-50 top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(availableThemes), (theme) => {
                      return openBlock(), createBlock(unref(Ae), {
                        key: theme.key,
                        value: theme.key,
                        class: {
                          "py-2 px-2 flex items-center cursor-pointer": true,
                          "text-sky-500 bg-gray-100 dark:bg-gray-600/30": unref(themeSetting) === theme.key,
                          "hover:bg-gray-50 dark:hover:bg-gray-700/30": unref(themeSetting) !== theme.key
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-sm mr-2 flex items-center" }, [
                            theme.key === "light" ? (openBlock(), createBlock(_component_IconUil58sun, { key: 0 })) : theme.key === "dark" ? (openBlock(), createBlock(_component_IconUil58moon, { key: 1 })) : theme.key === "system" ? (openBlock(), createBlock(_component_IconUil58laptop, { key: 2 })) : theme.key === "realtime" ? (openBlock(), createBlock(_component_IconUil58clock, { key: 3 })) : createCommentVNode("", true)
                          ]),
                          createTextVNode(" " + toDisplayString(theme.text), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStyle) === "select-box") {
        _push(`<select class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"><!--[-->`);
        ssrRenderList(unref(availableThemes), (theme) => {
          _push(`<option${ssrRenderAttr("value", theme.key)}>${ssrInterpolate(theme.text)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeSwitcher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ThemeSwitcher = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const name = "nuxt3-awesome-starter";
const version = "0.1.0";
const description = "a Nuxt 3 starter template or boilerplate with a lot of useful features. Nuxt3 + Tailwindcss 3";
const repository = {
  type: "git",
  url: "git://github.com/viandwi24/nuxt3-awesome-starter"
};
const author = "viandwi24";
const license = "MIT";
const scripts = {
  build: "nuxt build",
  dev: "nuxt dev",
  generate: "nuxt generate",
  preview: "nuxt preview",
  start: "node .output/server/index.mjs",
  serve: "serve dist/",
  postinstall: "husky install",
  lint: 'eslint --ext ".ts,.js,.vue" --ignore-path .eslintignore .',
  lintfix: 'eslint --fix --ext ".ts,.js,.vue" --ignore-path .eslintignore .',
  prepare: "husky install",
  clean: "rm -rf .nuxt dist .output",
  "generate:locales": "node tools/translator.js ./locales en.yml"
};
const devDependencies = {
  "@babel/core": ">=7.13.0 <8.0.0",
  "@commitlint/cli": "^17.0.3",
  "@commitlint/config-conventional": "^17.0.3",
  "@headlessui/vue": "^1.7.2",
  "@iconify/json": "^2.1.70",
  "@intlify/nuxt3": "^0.2.4",
  "@nuxt/content": "^2.2.0",
  "@nuxt/test-utils-edge": "3.0.0-rc.13-27772354.a0a59e2",
  "@nuxtjs/eslint-config-typescript": "^10.0.0",
  "@nuxtjs/eslint-module": "3.1.0",
  "@pinia/nuxt": "^0.4.2",
  "@types/multer": "^1.4.7",
  "@types/store": "^2.0.2",
  "@vueuse/nuxt": "^9.2.0",
  eslint: "^8.23.1",
  "eslint-config-prettier": "^8.5.0",
  "eslint-plugin-nuxt": "^3.2.0",
  "eslint-plugin-prettier": "^4.2.1",
  husky: "^8.0.1",
  "js-yaml": "^4.1.0",
  "lint-staged": "^13.0.3",
  nuxt: "npm:nuxt3@3.0.0-rc.13-27772354.a0a59e2",
  "nuxt-windicss": "^2.5.1",
  pinia: "^2.0.18",
  postcss: "8.4.14",
  "postcss-loader": "^7.0.0",
  prettier: "^2.7.1",
  sass: "1.53.0",
  "sass-loader": "^13.0.2",
  serve: "^13.0.2",
  three: "^0.143.0",
  translate: "^1.4.1",
  typescript: "^4.8.3",
  "unplugin-icons": "^0.14.12",
  "unplugin-vue-components": "^0.22.8",
  vite: ">=2.9.0 <3.0.0 || >=3.0.0-0 <3.0.0",
  vitest: "^0.23.4",
  vue: "^3.2.41",
  "vue-tsc": "^1.0.9",
  webpack: ">=5.0.0 <6.0.0"
};
const dependencies = {
  axios: "^1.1.3",
  "form-data": "^4.0.0",
  multer: "1.4.5-lts.1",
  store: "^2.0.12"
};
const p = {
  name,
  version,
  description,
  repository,
  author,
  license,
  scripts,
  devDependencies,
  "lint-staged": {
    "**/*.{js,ts,vue,html}": [
      "pnpm lintfix"
    ]
  },
  dependencies
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]" }, _attrs))}><section class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"><div class="w-full py-4 text-center md:text-left"><div class="mb-1">${ssrInterpolate(unref(app).name)}</div><div class="text-xs text-gray-600 dark:text-gray-400"> Copyright \xA9 2022 <a${ssrRenderAttr("href", unref(app).author.link)}>${ssrInterpolate(unref(app).author.name)}</a>. All rights reserved. Made with <span class="text-red-500">\u2764</span><div class="flex flex-col md:flex-row space-x-2 items-center md:float-right"><span class="text-center md:text-right"> design by <a href="https://github.com/viandwi24">viandwi24</a></span><span class="block bg-blue-500 rounded px-1 py-0.5 text-white text-xs">${ssrInterpolate(unref(p).devDependencies.nuxt)}</span></div></div></div></section></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { Body as B, Footer as F, Header as H, LanguageSwitcher as L, Navbar as N, Overlay as O, ThemeSwitcher as T, _sfc_main$3 as _, _sfc_main$2 as a, _sfc_main$1 as b, _sfc_main$4 as c, __nuxt_component_6 as d, _sfc_main$6 as e, _sfc_main as f, index as i };
//# sourceMappingURL=Footer.5f87433e.mjs.map
