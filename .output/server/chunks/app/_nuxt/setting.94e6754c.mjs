import { o, V, w as w$1, R, u as useHead, t as t$1, g as u, E as __nuxt_component_0, J as __nuxt_component_4$2, O as _sfc_main$9, G as __nuxt_component_1$1, H as _sfc_main$j, I as __nuxt_component_3$1, Q as _sfc_main$8, S as __nuxt_component_7, T as _sfc_main$6, U as _sfc_main$5, W as __nuxt_component_10, q as _sfc_main$a, r as _sfc_main$m, X as _sfc_main$3 } from '../server.mjs';
import { u as useLang } from './useLang.011498c9.mjs';
import { defineComponent, ref, h, computed, provide, watchEffect, Fragment, onMounted, onUnmounted, withCtx, createVNode, unref, toDisplayString, createTextVNode, useSSRContext, inject, reactive, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as capitalize } from './str.e3d4e921.mjs';
import { f, a, b as b$1, o as o$1, P, M } from './hidden.53ffa532.mjs';
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

function t(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f, { as: "button", type: "button", features: a.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a2 = 50;
    function r() {
      var u2;
      if (a2-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
let O = Symbol("TabsContext");
function E(a2) {
  let u2 = inject(O, null);
  if (u2 === null) {
    let i = new Error(`<${a2} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, E), i;
  }
  return u2;
}
let le = defineComponent({ name: "TabGroup", emits: { change: (a2) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a2, { slots: u2, attrs: i, emit: f2 }) {
  let e = ref(null), o$12 = ref([]), n = ref([]), c = computed(() => a2.selectedIndex !== null), p = computed(() => c.value ? a2.selectedIndex : e.value), x = { selectedIndex: e, orientation: computed(() => a2.vertical ? "vertical" : "horizontal"), activation: computed(() => a2.manual ? "manual" : "auto"), tabs: o$12, panels: n, setSelectedIndex(t2) {
    p.value !== t2 && f2("change", t2), c.value || (e.value = t2);
  }, registerTab(t2) {
    o$12.value.includes(t2) || o$12.value.push(t2);
  }, unregisterTab(t2) {
    let r = o$12.value.indexOf(t2);
    r !== -1 && o$12.value.splice(r, 1);
  }, registerPanel(t2) {
    n.value.includes(t2) || n.value.push(t2);
  }, unregisterPanel(t2) {
    let r = n.value.indexOf(t2);
    r !== -1 && n.value.splice(r, 1);
  } };
  return provide(O, x), watchEffect(() => {
    var R2;
    if (x.tabs.value.length <= 0 || a2.selectedIndex === null && e.value !== null)
      return;
    let t2 = x.tabs.value.map((T) => o(T)).filter(Boolean), r = t2.filter((T) => !T.hasAttribute("disabled")), s = (R2 = a2.selectedIndex) != null ? R2 : a2.defaultIndex;
    if (s < 0)
      e.value = t2.indexOf(r[0]);
    else if (s > x.tabs.value.length)
      e.value = t2.indexOf(r[r.length - 1]);
    else {
      let T = t2.slice(0, s), d2 = [...t2.slice(s), ...T].find((g) => r.includes(g));
      if (!d2)
        return;
      e.value = t2.indexOf(d2);
    }
  }), () => {
    let t2 = { selectedIndex: e.value };
    return h(Fragment, [o$12.value.length <= 0 && h(d, { onFocus: () => {
      for (let r of o$12.value) {
        let s = o(r);
        if ((s == null ? void 0 : s.tabIndex) === 0)
          return s.focus(), true;
      }
      return false;
    } }), V({ theirProps: { ...i, ...w$1(a2, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: u2, attrs: i, name: "TabGroup" })]);
  };
} }), ae = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { attrs: u2, slots: i }) {
  let f2 = E("TabList");
  return () => {
    let e = { selectedIndex: f2.selectedIndex.value }, o2 = { role: "tablist", "aria-orientation": f2.orientation.value };
    return V({ ourProps: o2, theirProps: a2, slot: e, attrs: u2, slots: i, name: "TabList" });
  };
} }), ne = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false } }, setup(a2, { attrs: u$1, slots: i, expose: f2 }) {
  let e = E("Tab"), o$2 = `headlessui-tabs-tab-${t$1()}`, n = ref(null);
  f2({ el: n, $el: n }), onMounted(() => e.registerTab(n)), onUnmounted(() => e.unregisterTab(n));
  let c = computed(() => e.tabs.value.indexOf(n)), p = computed(() => c.value === e.selectedIndex.value);
  function x(l) {
    let d2 = e.tabs.value.map((g) => o(g)).filter(Boolean);
    if (l.key === o$1.Space || l.key === o$1.Enter) {
      l.preventDefault(), l.stopPropagation(), e.setSelectedIndex(c.value);
      return;
    }
    switch (l.key) {
      case o$1.Home:
      case o$1.PageUp:
        return l.preventDefault(), l.stopPropagation(), P(d2, M.First);
      case o$1.End:
      case o$1.PageDown:
        return l.preventDefault(), l.stopPropagation(), P(d2, M.Last);
    }
    if (u(e.orientation.value, { vertical() {
      if (l.key === o$1.ArrowUp)
        return P(d2, M.Previous | M.WrapAround);
      if (l.key === o$1.ArrowDown)
        return P(d2, M.Next | M.WrapAround);
    }, horizontal() {
      if (l.key === o$1.ArrowLeft)
        return P(d2, M.Previous | M.WrapAround);
      if (l.key === o$1.ArrowRight)
        return P(d2, M.Next | M.WrapAround);
    } }))
      return l.preventDefault();
  }
  function t$2() {
    var l;
    (l = o(n)) == null || l.focus();
  }
  let r = ref(false);
  function s() {
    var l;
    r.value || (r.value = true, !a2.disabled && ((l = o(n)) == null || l.focus(), e.setSelectedIndex(c.value), t(() => {
      r.value = false;
    })));
  }
  function R2(l) {
    l.preventDefault();
  }
  let T = b$1(computed(() => ({ as: a2.as, type: u$1.type })), n);
  return () => {
    var g;
    let l = { selected: p.value }, d2 = { ref: n, onKeydown: x, onFocus: e.activation.value === "manual" ? t$2 : s, onMousedown: R2, onClick: s, id: o$2, role: "tab", type: T.value, "aria-controls": (g = o(e.panels.value[c.value])) == null ? void 0 : g.id, "aria-selected": p.value, tabIndex: p.value ? 0 : -1, disabled: a2.disabled ? true : void 0 };
    return V({ ourProps: d2, theirProps: a2, slot: l, attrs: u$1, slots: i, name: "Tab" });
  };
} }), re = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { slots: u2, attrs: i }) {
  let f2 = E("TabPanels");
  return () => {
    let e = { selectedIndex: f2.selectedIndex.value };
    return V({ theirProps: a2, ourProps: {}, slot: e, attrs: i, slots: u2, name: "TabPanels" });
  };
} }), ue = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(a2, { attrs: u2, slots: i, expose: f$1 }) {
  let e = E("TabPanel"), o$12 = `headlessui-tabs-panel-${t$1()}`, n = ref(null);
  f$1({ el: n, $el: n }), onMounted(() => e.registerPanel(n)), onUnmounted(() => e.unregisterPanel(n));
  let c = computed(() => e.panels.value.indexOf(n)), p = computed(() => c.value === e.selectedIndex.value);
  return () => {
    var r;
    let x = { selected: p.value }, t2 = { ref: n, id: o$12, role: "tabpanel", "aria-labelledby": (r = o(e.tabs.value[c.value])) == null ? void 0 : r.id, tabIndex: p.value ? 0 : -1 };
    return !p.value && a2.unmount && !a2.static ? h(f, { as: "span", ...t2 }) : V({ ourProps: t2, theirProps: a2, slot: x, attrs: u2, slots: i, features: R.Static | R.RenderStrategy, visible: p.value, name: "TabPanel" });
  };
} });
var Size = /* @__PURE__ */ ((Size2) => {
  Size2["SMALL"] = "sm";
  Size2["MEDIUM"] = "md";
  Size2["LARGE"] = "lg";
  Size2["EXTRA_LARGE"] = "xl";
  return Size2;
})(Size || {});
const defaultScreenConfig = {
  ["sm"]: 576,
  ["md"]: 768,
  ["lg"]: 992,
  ["xl"]: 1200
};
const useScreen = () => {
  const screenSize = reactive({
    width: 0,
    height: 0
  });
  const current = ref("sm");
  const getSize = (width) => {
    if (width === void 0)
      width = screenSize.width;
    const {
      ["sm"]: sm,
      ["md"]: md,
      ["lg"]: lg,
      ["xl"]: xl
    } = defaultScreenConfig;
    if (width < Number(sm))
      return "sm";
    if (width < Number(md))
      return "md";
    if (width < Number(lg))
      return "lg";
    if (width < Number(xl))
      return "xl";
    return "xl";
  };
  const higherThan = (size) => {
    const {
      ["sm"]: sm,
      ["md"]: md,
      ["lg"]: lg,
      ["xl"]: xl
    } = defaultScreenConfig;
    const width = screenSize.width;
    if (size === "sm")
      return width >= Number(sm);
    if (size === "md")
      return width >= Number(md);
    if (size === "lg")
      return width >= Number(lg);
    if (size === "xl")
      return width >= Number(xl);
    return false;
  };
  onUnmounted(() => {
    return;
  });
  return {
    getSize,
    screenSize,
    current,
    higherThan
  };
};
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "ic-baseline-content-copy", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: t2 } = useLang();
    const screen = useScreen();
    useHead(() => ({
      title: capitalize(t2("pages.setting.title")),
      meta: [
        {
          name: "description",
          content: t2("pages.setting.description")
        }
      ]
    }));
    const randomToken = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let token = "";
      for (let i = 0; i < 255; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return token;
    };
    const username = ref("viandwi24");
    const id = ref(randomToken());
    const enableSpamProtection = ref(false);
    const enableDirList = ref(false);
    const enableAdvancedSetting = ref(false);
    const validate = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username.value}`
        );
        if (response.status !== 200)
          throw new Error(
            `error when fetching username : ${response.statusText} (${response.status})`
          );
        const data = await response.json();
        alert(`Found Accout Name ${data.name} with id : ${data.id}`);
      } catch (err) {
        alert(err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageSection = __nuxt_component_4$2;
      const _component_Alert = _sfc_main$9;
      const _component_PageHeader = __nuxt_component_1$1;
      const _component_PageTitle = _sfc_main$j;
      const _component_PageBody = __nuxt_component_3$1;
      const _component_Card = _sfc_main$8;
      const _component_CardContent = __nuxt_component_7;
      const _component_CardTitle = _sfc_main$6;
      const _component_FormTextInput = _sfc_main$5;
      const _component_CardFooter = __nuxt_component_10;
      const _component_Anchor = _sfc_main$a;
      const _component_Button = _sfc_main$m;
      const _component_icon_ic58baseline_content_copy = __unplugin_components_0;
      const _component_FormSwitch = _sfc_main$3;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageSection, { class: "mb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Alert, {
                    type: "success",
                    title: "This is a page for testing purposes",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    class: "mb-6"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Alert, {
                      type: "success",
                      title: "This is a page for testing purposes",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      class: "mb-6"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: _ctx.$t("pages.setting.title"),
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: _ctx.$t("pages.setting.title"),
                      class: "capitalize"
                    }, null, 8, ["text"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PageBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageSection, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(le), {
                          as: "div",
                          class: "flex flex-col md:flex-row md:space-x-4",
                          vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<button class="${ssrRenderClass([
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ])}"${_scopeId6}> General </button>`);
                                        } else {
                                          return [
                                            createVNode("button", {
                                              class: [
                                                "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                              ]
                                            }, " General ", 2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<button class="${ssrRenderClass([
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ])}"${_scopeId6}> Protection </button>`);
                                        } else {
                                          return [
                                            createVNode("button", {
                                              class: [
                                                "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                              ]
                                            }, " Protection ", 2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<button class="${ssrRenderClass([
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ])}"${_scopeId6}> Advanced </button>`);
                                        } else {
                                          return [
                                            createVNode("button", {
                                              class: [
                                                "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                                selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                              ]
                                            }, " Advanced ", 2)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(ne), { as: "template" }, {
                                        default: withCtx(({ selected }) => [
                                          createVNode("button", {
                                            class: [
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                            ]
                                          }, " General ", 2)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ne), { as: "template" }, {
                                        default: withCtx(({ selected }) => [
                                          createVNode("button", {
                                            class: [
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                            ]
                                          }, " Protection ", 2)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ne), { as: "template" }, {
                                        default: withCtx(({ selected }) => [
                                          createVNode("button", {
                                            class: [
                                              "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                              selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                            ]
                                          }, " Advanced ", 2)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(re), { class: "flex-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(ue), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.validate_username.description"))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormTextInput, {
                                                        modelValue: username.value,
                                                        "onUpdate:modelValue": ($event) => username.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        "prefix-disabled": withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="flex-1 px-4 py-2"${_scopeId9}>github.com/</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormTextInput, {
                                                            modelValue: username.value,
                                                            "onUpdate:modelValue": ($event) => username.value = $event,
                                                            class: "w-full md:w-1/3"
                                                          }, {
                                                            "prefix-disabled": withCtx(() => [
                                                              createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.validate_username.footer"))} `);
                                                      _push9(ssrRenderComponent(_component_Anchor, {
                                                        class: "underline font-bold capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_link"
                                                        ),
                                                        href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`</p>`);
                                                      _push9(ssrRenderComponent(_component_Button, {
                                                        class: "capitalize",
                                                        size: "sm",
                                                        type: "opposite",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_button"
                                                        ),
                                                        onClick: validate
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode("p", null, [
                                                          createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                          createVNode(_component_Anchor, {
                                                            class: "underline font-bold capitalize",
                                                            text: _ctx.$t(
                                                              "pages.setting.sections.validate_username.footer_link"
                                                            ),
                                                            href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                          }, null, 8, ["text"])
                                                        ]),
                                                        createVNode(_component_Button, {
                                                          class: "capitalize",
                                                          size: "sm",
                                                          type: "opposite",
                                                          text: _ctx.$t(
                                                            "pages.setting.sections.validate_username.footer_button"
                                                          ),
                                                          onClick: validate
                                                        }, null, 8, ["text"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormTextInput, {
                                                          modelValue: username.value,
                                                          "onUpdate:modelValue": ($event) => username.value = $event,
                                                          class: "w-full md:w-1/3"
                                                        }, {
                                                          "prefix-disabled": withCtx(() => [
                                                            createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, [
                                                        createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                        createVNode(_component_Anchor, {
                                                          class: "underline font-bold capitalize",
                                                          text: _ctx.$t(
                                                            "pages.setting.sections.validate_username.footer_link"
                                                          ),
                                                          href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                        }, null, 8, ["text"])
                                                      ]),
                                                      createVNode(_component_Button, {
                                                        class: "capitalize",
                                                        size: "sm",
                                                        type: "opposite",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_button"
                                                        ),
                                                        onClick: validate
                                                      }, null, 8, ["text"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.bot_id.description"))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormTextInput, {
                                                        modelValue: id.value,
                                                        "onUpdate:modelValue": ($event) => id.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        suffix: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(_component_Button, {
                                                              type: "opposite",
                                                              class: "flex space-x-1 border-none"
                                                            }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(_component_icon_ic58baseline_content_copy, null, null, _parent11, _scopeId10));
                                                                  _push11(`<span${_scopeId10}>${ssrInterpolate(_ctx.$t("others.copy"))}</span>`);
                                                                } else {
                                                                  return [
                                                                    createVNode(_component_icon_ic58baseline_content_copy),
                                                                    createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(_component_Button, {
                                                                type: "opposite",
                                                                class: "flex space-x-1 border-none"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_icon_ic58baseline_content_copy),
                                                                  createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormTextInput, {
                                                            modelValue: id.value,
                                                            "onUpdate:modelValue": ($event) => id.value = $event,
                                                            class: "w-full md:w-1/3"
                                                          }, {
                                                            suffix: withCtx(() => [
                                                              createVNode(_component_Button, {
                                                                type: "opposite",
                                                                class: "flex space-x-1 border-none"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(_component_icon_ic58baseline_content_copy),
                                                                  createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                                ]),
                                                                _: 1
                                                              })
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.bot_id.footer"))}</p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormTextInput, {
                                                          modelValue: id.value,
                                                          "onUpdate:modelValue": ($event) => id.value = $event,
                                                          class: "w-full md:w-1/3"
                                                        }, {
                                                          suffix: withCtx(() => [
                                                            createVNode(_component_Button, {
                                                              type: "opposite",
                                                              class: "flex space-x-1 border-none"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_icon_ic58baseline_content_copy),
                                                                createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                              ]),
                                                              _: 1
                                                            })
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Card, { class: "mb-4" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormTextInput, {
                                                        modelValue: username.value,
                                                        "onUpdate:modelValue": ($event) => username.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        "prefix-disabled": withCtx(() => [
                                                          createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, [
                                                      createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                      createVNode(_component_Anchor, {
                                                        class: "underline font-bold capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.validate_username.footer_link"
                                                        ),
                                                        href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                      }, null, 8, ["text"])
                                                    ]),
                                                    createVNode(_component_Button, {
                                                      class: "capitalize",
                                                      size: "sm",
                                                      type: "opposite",
                                                      text: _ctx.$t(
                                                        "pages.setting.sections.validate_username.footer_button"
                                                      ),
                                                      onClick: validate
                                                    }, null, 8, ["text"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Card, { class: "mb-4" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormTextInput, {
                                                        modelValue: id.value,
                                                        "onUpdate:modelValue": ($event) => id.value = $event,
                                                        class: "w-full md:w-1/3"
                                                      }, {
                                                        suffix: withCtx(() => [
                                                          createVNode(_component_Button, {
                                                            type: "opposite",
                                                            class: "flex space-x-1 border-none"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_icon_ic58baseline_content_copy),
                                                              createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ue), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Card, {
                                            class: {
                                              "mb-4": true,
                                              "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                            }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.protection_spam.description"))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormSwitch, {
                                                        modelValue: enableSpamProtection.value,
                                                        "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="capitalize"${_scopeId9}>${ssrInterpolate(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled"))}</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormSwitch, {
                                                            modelValue: enableSpamProtection.value,
                                                            "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<p${_scopeId8}>${ssrInterpolate(_ctx.$t("pages.setting.sections.protection_spam.footer"))}</p>`);
                                                    } else {
                                                      return [
                                                        createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormSwitch, {
                                                          modelValue: enableSpamProtection.value,
                                                          "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Card, {
                                              class: {
                                                "mb-4": true,
                                                "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                              }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormSwitch, {
                                                        modelValue: enableSpamProtection.value,
                                                        "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["class"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(ue), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Card, { class: "mb-4" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.advanced_enable_advanced.title"
                                                        )
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t(
                                                        "pages.setting.sections.advanced_enable_advanced.description"
                                                      ))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormSwitch, {
                                                        modelValue: enableAdvancedSetting.value,
                                                        "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="capitalize"${_scopeId9}>${ssrInterpolate(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled"))}</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t(
                                                            "pages.setting.sections.advanced_enable_advanced.title"
                                                          )
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                          "pages.setting.sections.advanced_enable_advanced.description"
                                                        )), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormSwitch, {
                                                            modelValue: enableAdvancedSetting.value,
                                                            "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t(
                                                          "pages.setting.sections.advanced_enable_advanced.title"
                                                        )
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                        "pages.setting.sections.advanced_enable_advanced.description"
                                                      )), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormSwitch, {
                                                          modelValue: enableAdvancedSetting.value,
                                                          "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_Card, {
                                            class: "mb-4",
                                            disabled: !enableAdvancedSetting.value
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CardContent, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(`<p class="mb-2"${_scopeId8}>${ssrInterpolate(_ctx.$t(
                                                        "pages.setting.sections.advanced_dir_listing.description"
                                                      ))}</p><div class="flex"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(_component_FormSwitch, {
                                                        modelValue: enableDirList.value,
                                                        "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                        on: ""
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<span class="capitalize"${_scopeId9}>${ssrInterpolate(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled"))}</span>`);
                                                          } else {
                                                            return [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_CardTitle, {
                                                          class: "capitalize",
                                                          text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                        }, null, 8, ["text"]),
                                                        createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                          "pages.setting.sections.advanced_dir_listing.description"
                                                        )), 1),
                                                        createVNode("div", { class: "flex" }, [
                                                          createVNode(_component_FormSwitch, {
                                                            modelValue: enableDirList.value,
                                                            "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                            on: ""
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                            ]),
                                                            _: 1
                                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CardContent, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_CardTitle, {
                                                        class: "capitalize",
                                                        text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                      }, null, 8, ["text"]),
                                                      createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                        "pages.setting.sections.advanced_dir_listing.description"
                                                      )), 1),
                                                      createVNode("div", { class: "flex" }, [
                                                        createVNode(_component_FormSwitch, {
                                                          modelValue: enableDirList.value,
                                                          "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                          on: ""
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                          ]),
                                                          _: 1
                                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Card, { class: "mb-4" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t(
                                                        "pages.setting.sections.advanced_enable_advanced.title"
                                                      )
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                      "pages.setting.sections.advanced_enable_advanced.description"
                                                    )), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormSwitch, {
                                                        modelValue: enableAdvancedSetting.value,
                                                        "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_Card, {
                                              class: "mb-4",
                                              disabled: !enableAdvancedSetting.value
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardContent, null, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_CardTitle, {
                                                      class: "capitalize",
                                                      text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                    }, null, 8, ["text"]),
                                                    createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                      "pages.setting.sections.advanced_dir_listing.description"
                                                    )), 1),
                                                    createVNode("div", { class: "flex" }, [
                                                      createVNode(_component_FormSwitch, {
                                                        modelValue: enableDirList.value,
                                                        "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                        on: ""
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                        ]),
                                                        _: 1
                                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["disabled"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(ue), null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Card, { class: "mb-4" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormTextInput, {
                                                      modelValue: username.value,
                                                      "onUpdate:modelValue": ($event) => username.value = $event,
                                                      class: "w-full md:w-1/3"
                                                    }, {
                                                      "prefix-disabled": withCtx(() => [
                                                        createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, [
                                                    createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                    createVNode(_component_Anchor, {
                                                      class: "underline font-bold capitalize",
                                                      text: _ctx.$t(
                                                        "pages.setting.sections.validate_username.footer_link"
                                                      ),
                                                      href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                    }, null, 8, ["text"])
                                                  ]),
                                                  createVNode(_component_Button, {
                                                    class: "capitalize",
                                                    size: "sm",
                                                    type: "opposite",
                                                    text: _ctx.$t(
                                                      "pages.setting.sections.validate_username.footer_button"
                                                    ),
                                                    onClick: validate
                                                  }, null, 8, ["text"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_Card, { class: "mb-4" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormTextInput, {
                                                      modelValue: id.value,
                                                      "onUpdate:modelValue": ($event) => id.value = $event,
                                                      class: "w-full md:w-1/3"
                                                    }, {
                                                      suffix: withCtx(() => [
                                                        createVNode(_component_Button, {
                                                          type: "opposite",
                                                          class: "flex space-x-1 border-none"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_icon_ic58baseline_content_copy),
                                                            createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ue), null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Card, {
                                            class: {
                                              "mb-4": true,
                                              "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                            }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormSwitch, {
                                                      modelValue: enableSpamProtection.value,
                                                      "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_CardFooter, { class: "justify-between" }, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ue), null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Card, { class: "mb-4" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t(
                                                      "pages.setting.sections.advanced_enable_advanced.title"
                                                    )
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                    "pages.setting.sections.advanced_enable_advanced.description"
                                                  )), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormSwitch, {
                                                      modelValue: enableAdvancedSetting.value,
                                                      "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_Card, {
                                            class: "mb-4",
                                            disabled: !enableAdvancedSetting.value
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardContent, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_CardTitle, {
                                                    class: "capitalize",
                                                    text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                  }, null, 8, ["text"]),
                                                  createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                    "pages.setting.sections.advanced_dir_listing.description"
                                                  )), 1),
                                                  createVNode("div", { class: "flex" }, [
                                                    createVNode(_component_FormSwitch, {
                                                      modelValue: enableDirList.value,
                                                      "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                      on: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                      ]),
                                                      _: 1
                                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["disabled"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          class: [
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ]
                                        }, " General ", 2)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          class: [
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ]
                                        }, " Protection ", 2)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ne), { as: "template" }, {
                                      default: withCtx(({ selected }) => [
                                        createVNode("button", {
                                          class: [
                                            "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                            selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                          ]
                                        }, " Advanced ", 2)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(re), { class: "flex-1" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(ue), null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Card, { class: "mb-4" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.validate_username.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormTextInput, {
                                                    modelValue: username.value,
                                                    "onUpdate:modelValue": ($event) => username.value = $event,
                                                    class: "w-full md:w-1/3"
                                                  }, {
                                                    "prefix-disabled": withCtx(() => [
                                                      createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, [
                                                  createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                  createVNode(_component_Anchor, {
                                                    class: "underline font-bold capitalize",
                                                    text: _ctx.$t(
                                                      "pages.setting.sections.validate_username.footer_link"
                                                    ),
                                                    href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                  }, null, 8, ["text"])
                                                ]),
                                                createVNode(_component_Button, {
                                                  class: "capitalize",
                                                  size: "sm",
                                                  type: "opposite",
                                                  text: _ctx.$t(
                                                    "pages.setting.sections.validate_username.footer_button"
                                                  ),
                                                  onClick: validate
                                                }, null, 8, ["text"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_Card, { class: "mb-4" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.bot_id.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormTextInput, {
                                                    modelValue: id.value,
                                                    "onUpdate:modelValue": ($event) => id.value = $event,
                                                    class: "w-full md:w-1/3"
                                                  }, {
                                                    suffix: withCtx(() => [
                                                      createVNode(_component_Button, {
                                                        type: "opposite",
                                                        class: "flex space-x-1 border-none"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_icon_ic58baseline_content_copy),
                                                          createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CardFooter, { class: "justify-between" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ue), null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Card, {
                                          class: {
                                            "mb-4": true,
                                            "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                          }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormSwitch, {
                                                    modelValue: enableSpamProtection.value,
                                                    "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_CardFooter, { class: "justify-between" }, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["class"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ue), null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Card, { class: "mb-4" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t(
                                                    "pages.setting.sections.advanced_enable_advanced.title"
                                                  )
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                  "pages.setting.sections.advanced_enable_advanced.description"
                                                )), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormSwitch, {
                                                    modelValue: enableAdvancedSetting.value,
                                                    "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_Card, {
                                          class: "mb-4",
                                          disabled: !enableAdvancedSetting.value
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_CardTitle, {
                                                  class: "capitalize",
                                                  text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                                }, null, 8, ["text"]),
                                                createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                  "pages.setting.sections.advanced_dir_listing.description"
                                                )), 1),
                                                createVNode("div", { class: "flex" }, [
                                                  createVNode(_component_FormSwitch, {
                                                    modelValue: enableDirList.value,
                                                    "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                    on: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["disabled"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(le), {
                            as: "div",
                            class: "flex flex-col md:flex-row md:space-x-4",
                            vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                                default: withCtx(() => [
                                  createVNode(unref(ne), { as: "template" }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        class: [
                                          "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                          selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                        ]
                                      }, " General ", 2)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ne), { as: "template" }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        class: [
                                          "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                          selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                        ]
                                      }, " Protection ", 2)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ne), { as: "template" }, {
                                    default: withCtx(({ selected }) => [
                                      createVNode("button", {
                                        class: [
                                          "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                          selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                        ]
                                      }, " Advanced ", 2)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(re), { class: "flex-1" }, {
                                default: withCtx(() => [
                                  createVNode(unref(ue), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Card, { class: "mb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.validate_username.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormTextInput, {
                                                  modelValue: username.value,
                                                  "onUpdate:modelValue": ($event) => username.value = $event,
                                                  class: "w-full md:w-1/3"
                                                }, {
                                                  "prefix-disabled": withCtx(() => [
                                                    createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, [
                                                createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                                createVNode(_component_Anchor, {
                                                  class: "underline font-bold capitalize",
                                                  text: _ctx.$t(
                                                    "pages.setting.sections.validate_username.footer_link"
                                                  ),
                                                  href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                                }, null, 8, ["text"])
                                              ]),
                                              createVNode(_component_Button, {
                                                class: "capitalize",
                                                size: "sm",
                                                type: "opposite",
                                                text: _ctx.$t(
                                                  "pages.setting.sections.validate_username.footer_button"
                                                ),
                                                onClick: validate
                                              }, null, 8, ["text"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Card, { class: "mb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.bot_id.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormTextInput, {
                                                  modelValue: id.value,
                                                  "onUpdate:modelValue": ($event) => id.value = $event,
                                                  class: "w-full md:w-1/3"
                                                }, {
                                                  suffix: withCtx(() => [
                                                    createVNode(_component_Button, {
                                                      type: "opposite",
                                                      class: "flex space-x-1 border-none"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_icon_ic58baseline_content_copy),
                                                        createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CardFooter, { class: "justify-between" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ue), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Card, {
                                        class: {
                                          "mb-4": true,
                                          "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormSwitch, {
                                                  modelValue: enableSpamProtection.value,
                                                  "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_CardFooter, { class: "justify-between" }, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["class"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ue), null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Card, { class: "mb-4" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t(
                                                  "pages.setting.sections.advanced_enable_advanced.title"
                                                )
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                "pages.setting.sections.advanced_enable_advanced.description"
                                              )), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormSwitch, {
                                                  modelValue: enableAdvancedSetting.value,
                                                  "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Card, {
                                        class: "mb-4",
                                        disabled: !enableAdvancedSetting.value
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_CardTitle, {
                                                class: "capitalize",
                                                text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                              }, null, 8, ["text"]),
                                              createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                                "pages.setting.sections.advanced_dir_listing.description"
                                              )), 1),
                                              createVNode("div", { class: "flex" }, [
                                                createVNode(_component_FormSwitch, {
                                                  modelValue: enableDirList.value,
                                                  "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                  on: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["vertical"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageSection, null, {
                      default: withCtx(() => [
                        createVNode(unref(le), {
                          as: "div",
                          class: "flex flex-col md:flex-row md:space-x-4",
                          vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(ne), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                        selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                      ]
                                    }, " General ", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ne), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                        selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                      ]
                                    }, " Protection ", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ne), { as: "template" }, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("button", {
                                      class: [
                                        "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                        selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                      ]
                                    }, " Advanced ", 2)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(re), { class: "flex-1" }, {
                              default: withCtx(() => [
                                createVNode(unref(ue), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Card, { class: "mb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.validate_username.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormTextInput, {
                                                modelValue: username.value,
                                                "onUpdate:modelValue": ($event) => username.value = $event,
                                                class: "w-full md:w-1/3"
                                              }, {
                                                "prefix-disabled": withCtx(() => [
                                                  createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, [
                                              createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                              createVNode(_component_Anchor, {
                                                class: "underline font-bold capitalize",
                                                text: _ctx.$t(
                                                  "pages.setting.sections.validate_username.footer_link"
                                                ),
                                                href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                              }, null, 8, ["text"])
                                            ]),
                                            createVNode(_component_Button, {
                                              class: "capitalize",
                                              size: "sm",
                                              type: "opposite",
                                              text: _ctx.$t(
                                                "pages.setting.sections.validate_username.footer_button"
                                              ),
                                              onClick: validate
                                            }, null, 8, ["text"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Card, { class: "mb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.bot_id.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormTextInput, {
                                                modelValue: id.value,
                                                "onUpdate:modelValue": ($event) => id.value = $event,
                                                class: "w-full md:w-1/3"
                                              }, {
                                                suffix: withCtx(() => [
                                                  createVNode(_component_Button, {
                                                    type: "opposite",
                                                    class: "flex space-x-1 border-none"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_icon_ic58baseline_content_copy),
                                                      createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_CardFooter, { class: "justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ue), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Card, {
                                      class: {
                                        "mb-4": true,
                                        "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormSwitch, {
                                                modelValue: enableSpamProtection.value,
                                                "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_CardFooter, { class: "justify-between" }, {
                                          default: withCtx(() => [
                                            createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["class"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ue), null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Card, { class: "mb-4" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t(
                                                "pages.setting.sections.advanced_enable_advanced.title"
                                              )
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                              "pages.setting.sections.advanced_enable_advanced.description"
                                            )), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormSwitch, {
                                                modelValue: enableAdvancedSetting.value,
                                                "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Card, {
                                      class: "mb-4",
                                      disabled: !enableAdvancedSetting.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_CardTitle, {
                                              class: "capitalize",
                                              text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                            }, null, 8, ["text"]),
                                            createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                              "pages.setting.sections.advanced_dir_listing.description"
                                            )), 1),
                                            createVNode("div", { class: "flex" }, [
                                              createVNode(_component_FormSwitch, {
                                                modelValue: enableDirList.value,
                                                "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                                on: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["vertical"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PageSection, { class: "mb-0" }, {
                default: withCtx(() => [
                  createVNode(_component_Alert, {
                    type: "success",
                    title: "This is a page for testing purposes",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    class: "mb-6"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_PageTitle, {
                    text: _ctx.$t("pages.setting.title"),
                    class: "capitalize"
                  }, null, 8, ["text"])
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(unref(le), {
                        as: "div",
                        class: "flex flex-col md:flex-row md:space-x-4",
                        vertical: unref(screen).higherThan(unref(Size).MEDIUM)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ae), { class: "w-full md:w-1/6 flex md:flex-col rounded-lg mb-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(ne), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                      selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                    ]
                                  }, " General ", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ne), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                      selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                    ]
                                  }, " Protection ", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ne), { as: "template" }, {
                                default: withCtx(({ selected }) => [
                                  createVNode("button", {
                                    class: [
                                      "md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white",
                                      selected ? "font-extrabold" : "text-slate-800 dark:text-gray-400"
                                    ]
                                  }, " Advanced ", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(re), { class: "flex-1" }, {
                            default: withCtx(() => [
                              createVNode(unref(ue), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Card, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.validate_username.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.validate_username.description")), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormTextInput, {
                                              modelValue: username.value,
                                              "onUpdate:modelValue": ($event) => username.value = $event,
                                              class: "w-full md:w-1/3"
                                            }, {
                                              "prefix-disabled": withCtx(() => [
                                                createVNode("span", { class: "flex-1 px-4 py-2" }, "github.com/")
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_CardFooter, { class: "flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, [
                                            createTextVNode(toDisplayString(_ctx.$t("pages.setting.sections.validate_username.footer")) + " ", 1),
                                            createVNode(_component_Anchor, {
                                              class: "underline font-bold capitalize",
                                              text: _ctx.$t(
                                                "pages.setting.sections.validate_username.footer_link"
                                              ),
                                              href: "https://docs.github.com/en/rest/users/users#get-a-user"
                                            }, null, 8, ["text"])
                                          ]),
                                          createVNode(_component_Button, {
                                            class: "capitalize",
                                            size: "sm",
                                            type: "opposite",
                                            text: _ctx.$t(
                                              "pages.setting.sections.validate_username.footer_button"
                                            ),
                                            onClick: validate
                                          }, null, 8, ["text"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Card, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.bot_id.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.description")), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormTextInput, {
                                              modelValue: id.value,
                                              "onUpdate:modelValue": ($event) => id.value = $event,
                                              class: "w-full md:w-1/3"
                                            }, {
                                              suffix: withCtx(() => [
                                                createVNode(_component_Button, {
                                                  type: "opposite",
                                                  class: "flex space-x-1 border-none"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_icon_ic58baseline_content_copy),
                                                    createVNode("span", null, toDisplayString(_ctx.$t("others.copy")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_CardFooter, { class: "justify-between" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.bot_id.footer")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ue), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Card, {
                                    class: {
                                      "mb-4": true,
                                      "border-red-500 dark:border-red-500": !enableSpamProtection.value
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.protection_spam.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.description")), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormSwitch, {
                                              modelValue: enableSpamProtection.value,
                                              "onUpdate:modelValue": ($event) => enableSpamProtection.value = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "capitalize" }, toDisplayString(enableSpamProtection.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_CardFooter, { class: "justify-between" }, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString(_ctx.$t("pages.setting.sections.protection_spam.footer")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["class"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ue), null, {
                                default: withCtx(() => [
                                  createVNode(_component_Card, { class: "mb-4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t(
                                              "pages.setting.sections.advanced_enable_advanced.title"
                                            )
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                            "pages.setting.sections.advanced_enable_advanced.description"
                                          )), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormSwitch, {
                                              modelValue: enableAdvancedSetting.value,
                                              "onUpdate:modelValue": ($event) => enableAdvancedSetting.value = $event
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "capitalize" }, toDisplayString(enableAdvancedSetting.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Card, {
                                    class: "mb-4",
                                    disabled: !enableAdvancedSetting.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardTitle, {
                                            class: "capitalize",
                                            text: _ctx.$t("pages.setting.sections.advanced_dir_listing.title")
                                          }, null, 8, ["text"]),
                                          createVNode("p", { class: "mb-2" }, toDisplayString(_ctx.$t(
                                            "pages.setting.sections.advanced_dir_listing.description"
                                          )), 1),
                                          createVNode("div", { class: "flex" }, [
                                            createVNode(_component_FormSwitch, {
                                              modelValue: enableDirList.value,
                                              "onUpdate:modelValue": ($event) => enableDirList.value = $event,
                                              on: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "capitalize" }, toDisplayString(enableDirList.value ? _ctx.$t("others.enabled") : _ctx.$t("others.disabled")), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["vertical"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=setting.94e6754c.mjs.map
