import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$4, d as __nuxt_component_6, e as _sfc_main$6 } from './Footer.5f87433e.mjs';
import { _ as _export_sfc, q as _sfc_main$a, r as _sfc_main$m } from '../server.mjs';
import { _ as __unplugin_components_0$2 } from './github-face.e0cc2666.mjs';
import { defineComponent, ref, useSSRContext, withCtx, createVNode, toDisplayString, withModifiers, renderSlot, mergeProps, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import './client-only.02e4e1d5.mjs';
import './hidden.53ffa532.mjs';
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

const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_0$1 = { name: "uil-angle-down", render: render$1 };
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_BuilderNavbar = _sfc_main$3;
  const _component_IconUil58angle_down = __unplugin_components_0$1;
  const _component_LanguageSwitcher = _sfc_main$2;
  const _component_ThemeSwitcher = _sfc_main$1$1;
  const _component_Anchor = _sfc_main$a;
  const _component_IconMdi58github_face = __unplugin_components_0$2;
  const _component_ActionSheet = _sfc_main$4;
  const _component_ActionSheetBody = __nuxt_component_6;
  const _component_ActionSheetHeader = _sfc_main$6;
  const _component_Button = _sfc_main$m;
  _push(ssrRenderComponent(_component_BuilderNavbar, _attrs, {
    menu: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative hidden lg:flex items-center ml-auto"${_scopeId}><div class="flex items-center justify-center"${_scopeId}><img class="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="Avatar of Jonathan Reinink"${_scopeId}><span class="ml-2 text-sm font-semibold"${_scopeId}>Alfian</span>`);
        _push2(ssrRenderComponent(_component_IconUil58angle_down, null, null, _parent2, _scopeId));
        _push2(`</div><div class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LanguageSwitcher, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ThemeSwitcher, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Anchor, {
          class: "hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center",
          href: "https://github.com/viandwi24/nuxt3-awesome-starter",
          title: "Github"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_IconMdi58github_face, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_IconMdi58github_face)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative hidden lg:flex items-center ml-auto" }, [
            createVNode("div", { class: "flex items-center justify-center" }, [
              createVNode("img", {
                class: "w-6 h-6 rounded-full",
                src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                alt: "Avatar of Jonathan Reinink"
              }),
              createVNode("span", { class: "ml-2 text-sm font-semibold" }, "Alfian"),
              createVNode(_component_IconUil58angle_down)
            ]),
            createVNode("div", { class: "flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]" }, [
              createVNode(_component_LanguageSwitcher),
              createVNode(_component_ThemeSwitcher),
              createVNode(_component_Anchor, {
                class: "hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center",
                href: "https://github.com/viandwi24/nuxt3-awesome-starter",
                title: "Github"
              }, {
                default: withCtx(() => [
                  createVNode(_component_IconMdi58github_face)
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    options: withCtx(({ toggleOptions }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ActionSheet, {
          onOnClose: ($event) => toggleOptions(false)
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_ActionSheetBody, null, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ActionSheetHeader, { text: "Menu" }, null, _parent4, _scopeId3));
                    _push4(`<div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.theme_switcher.change_theme"))}</div><div class="mt-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_ThemeSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.language_switcher.change_language"))}</div><div class="mt-2"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_LanguageSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString(_ctx.$t("components.theme_switcher.change_theme")), 1),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_ThemeSwitcher, { type: "select-box" })
                      ]),
                      createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString(_ctx.$t("components.language_switcher.change_language")), 1),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_LanguageSwitcher, { type: "select-box" })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Button, {
                type: "secondary",
                title: "Github",
                href: "https://github.com/viandwi24/nuxt3-awesome-starter"
              }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_IconMdi58github_face, null, null, _parent4, _scopeId3));
                    _push4(`<span class="ml-1"${_scopeId3}>Github</span>`);
                  } else {
                    return [
                      createVNode(_component_IconMdi58github_face),
                      createVNode("span", { class: "ml-1" }, "Github")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Button, {
                text: "Close",
                type: "secondary",
                onClick: ($event) => toggleOptions(false)
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_ActionSheetBody, null, {
                  default: withCtx(() => [
                    createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                    createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString(_ctx.$t("components.theme_switcher.change_theme")), 1),
                    createVNode("div", { class: "mt-2" }, [
                      createVNode(_component_ThemeSwitcher, { type: "select-box" })
                    ]),
                    createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString(_ctx.$t("components.language_switcher.change_language")), 1),
                    createVNode("div", { class: "mt-2" }, [
                      createVNode(_component_LanguageSwitcher, { type: "select-box" })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_Button, {
                  type: "secondary",
                  title: "Github",
                  href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_IconMdi58github_face),
                    createVNode("span", { class: "ml-1" }, "Github")
                  ]),
                  _: 1
                }),
                createVNode(_component_Button, {
                  text: "Close",
                  type: "secondary",
                  onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ActionSheet, {
            onOnClose: ($event) => toggleOptions(false)
          }, {
            default: withCtx(() => [
              createVNode(_component_ActionSheetBody, null, {
                default: withCtx(() => [
                  createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                  createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString(_ctx.$t("components.theme_switcher.change_theme")), 1),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode(_component_ThemeSwitcher, { type: "select-box" })
                  ]),
                  createVNode("div", { class: "mt-6 text-sm font-bold capitalize" }, toDisplayString(_ctx.$t("components.language_switcher.change_language")), 1),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode(_component_LanguageSwitcher, { type: "select-box" })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_Button, {
                type: "secondary",
                title: "Github",
                href: "https://github.com/viandwi24/nuxt3-awesome-starter"
              }, {
                default: withCtx(() => [
                  createVNode(_component_IconMdi58github_face),
                  createVNode("span", { class: "ml-1" }, "Github")
                ]),
                _: 1
              }),
              createVNode(_component_Button, {
                text: "Close",
                type: "secondary",
                onClick: withModifiers(($event) => toggleOptions(false), ["prevent"])
              }, null, 8, ["onClick"])
            ]),
            _: 2
          }, 1032, ["onOnClose"])
        ];
      }
    }),
    drawer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "drawer", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "drawer")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const Navbar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM9 9H4V4h5Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "uil-apps", render };
const _sfc_main = defineComponent({
  props: {
    mode: {
      type: String,
      default: "normal"
    }
  },
  setup() {
    const sidebar = ref(null);
    return {
      sidebar
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Anchor = _sfc_main$a;
  const _component_IconUil58apps = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "sidebar",
    class: {
      "fixed top-0 hidden pt-12 lg:flex lg:w-60 xl:w-80 h-screen": _ctx.mode === "normal",
      "relative flex-1 flex flex-col w-full": _ctx.mode === "mobile"
    }
  }, _attrs))}><div class="flex-1 overflow-y-auto pl-4 lg:pl-0 pr-4 py-4"><ul><!--[-->`);
  ssrRenderList(29, (i) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_Anchor, {
      to: { name: "dashboard" },
      class: "group flex items-center mb-4 hover:no-underline"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="${ssrRenderClass([{
            "text-white dark:text-white group-hover:bg-sky-500 bg-sky-500": i === 1,
            "text-slate-500 dark:text-gray-100 group-hover:bg-gray-200 bg-gray-100 dark:group-hover:bg-slate-600 dark:bg-slate-700": i !== 1
          }, "flex items-center mr-4 px-2 py-2 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10"])}"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_IconUil58apps, { class: "text-xs" }, null, _parent2, _scopeId));
          _push2(`</div><span class="${ssrRenderClass([{
            "font-extrabold text-sky-500 dark:text-sky-400": i === 1
          }, "text-sm font-semibold capitalize"])}"${_scopeId}>${ssrInterpolate(_ctx.$t("pages.dashboard.index.nav"))}</span>`);
        } else {
          return [
            createVNode("div", {
              class: ["flex items-center mr-4 px-2 py-2 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10", {
                "text-white dark:text-white group-hover:bg-sky-500 bg-sky-500": i === 1,
                "text-slate-500 dark:text-gray-100 group-hover:bg-gray-200 bg-gray-100 dark:group-hover:bg-slate-600 dark:bg-slate-700": i !== 1
              }]
            }, [
              createVNode(_component_IconUil58apps, { class: "text-xs" })
            ], 2),
            createVNode("span", {
              class: ["text-sm font-semibold capitalize", {
                "font-extrabold text-sky-500 dark:text-sky-400": i === 1
              }]
            }, toDisplayString(_ctx.$t("pages.dashboard.index.nav")), 3)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dashboard/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const Sidebar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1
}, Symbol.toStringTag, { value: "Module" }));

export { Navbar as N, Sidebar as S, __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=Sidebar.d8a35a47.mjs.map
