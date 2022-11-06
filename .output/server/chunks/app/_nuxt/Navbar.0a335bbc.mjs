import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1, c as _sfc_main$4, d as __nuxt_component_6, e as _sfc_main$6 } from './Footer.5f87433e.mjs';
import { k as useAppConfig, q as _sfc_main$a, r as _sfc_main$m } from '../server.mjs';
import { u as useLang } from './useLang.011498c9.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { _ as __unplugin_components_0 } from './github-face.e0cc2666.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    const app = useAppConfig();
    const menus = computed(() => [
      {
        type: "link",
        text: t("pages.getting-started.nav"),
        route: { name: "getting-started" }
      },
      { type: "link", text: t("pages.blank.nav"), route: { name: "blank" } },
      { type: "link", text: t("pages.test.nav"), route: { name: "test" } },
      { type: "link", text: t("pages.post.nav"), route: { name: "post" } },
      { type: "link", text: t("pages.setting.nav"), route: { name: "setting" } },
      {
        type: "button",
        text: t("pages.dashboard.nav"),
        route: { name: "dashboard" }
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BuilderNavbar = _sfc_main$3;
      const _component_Anchor = _sfc_main$a;
      const _component_Button = _sfc_main$m;
      const _component_LanguageSwitcher = _sfc_main$2;
      const _component_ThemeSwitcher = _sfc_main$1;
      const _component_IconMdi58github_face = __unplugin_components_0;
      const _component_ActionSheet = _sfc_main$4;
      const _component_ActionSheetBody = __nuxt_component_6;
      const _component_ActionSheetHeader = _sfc_main$6;
      _push(ssrRenderComponent(_component_BuilderNavbar, _attrs, {
        banner: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"${_scopeId}><span class="mr-1"${_scopeId}>${ssrInterpolate(_ctx.$t("banners.welcome", { app_name: unref(app).name }))}</span>`);
            _push2(ssrRenderComponent(_component_Anchor, {
              class: "underline font-bold",
              text: _ctx.$t("others.learn_more"),
              href: "https://github.com/viandwi24/nuxt3-awesome-starter"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize" }, [
                createVNode("span", { class: "mr-1" }, toDisplayString(_ctx.$t("banners.welcome", { app_name: unref(app).name })), 1),
                createVNode(_component_Anchor, {
                  class: "underline font-bold",
                  text: _ctx.$t("others.learn_more"),
                  href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                }, null, 8, ["text"])
              ])
            ];
          }
        }),
        menu: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative hidden lg:flex items-center ml-auto"${_scopeId}><nav class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300" role="navigation"${_scopeId}><ul class="flex items-center space-x-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(menus), (item, i) => {
              _push2(`<li${_scopeId}>`);
              if (item.type === "link") {
                _push2(ssrRenderComponent(_component_Anchor, {
                  to: item.route ? item.route : void 0,
                  href: item.href ? item.href : void 0,
                  class: "hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.text)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else if (item.type === "button") {
                _push2(ssrRenderComponent(_component_Button, {
                  text: item.text,
                  size: "xs",
                  class: "font-extrabold capitalize",
                  to: item.route ? item.route : void 0,
                  href: item.href ? item.href : void 0
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></nav><div class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"${_scopeId}>`);
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
                createVNode("nav", {
                  class: "text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300",
                  role: "navigation"
                }, [
                  createVNode("ul", { class: "flex items-center space-x-8" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                      return openBlock(), createBlock("li", { key: i }, [
                        item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                          key: 0,
                          to: item.route ? item.route : void 0,
                          href: item.href ? item.href : void 0,
                          class: "hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                          key: 1,
                          text: item.text,
                          size: "xs",
                          class: "font-extrabold capitalize",
                          to: item.route ? item.route : void 0,
                          href: item.href ? item.href : void 0
                        }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ])
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
                        _push4(`<nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300"${_scopeId3}><ul class="flex flex-col"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(menus), (item, i) => {
                          _push4(`<li class="${ssrRenderClass([{
                            "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                          }, "flex w-full"])}"${_scopeId3}>`);
                          if (item.type === "link") {
                            _push4(ssrRenderComponent(_component_Anchor, {
                              to: item.route ? item.route : void 0,
                              href: item.href ? item.href : void 0,
                              class: "flex-1 hover:no-underline capitalize"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (item.type === "button") {
                            _push4(ssrRenderComponent(_component_Button, {
                              text: item.text,
                              size: "xs",
                              class: "flex-1 font-extrabold capitalize",
                              to: item.route ? item.route : void 0,
                              href: item.href ? item.href : void 0
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</li>`);
                        });
                        _push4(`<!--]--></ul></nav><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.theme_switcher.change_theme"))}</div><div class="mt-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ThemeSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mt-6 text-sm font-bold capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("components.language_switcher.change_language"))}</div><div class="mt-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_LanguageSwitcher, { type: "select-box" }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_ActionSheetHeader, { text: "Menu" }),
                          createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                            createVNode("ul", { class: "flex flex-col" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                                return openBlock(), createBlock("li", {
                                  key: i,
                                  class: ["flex w-full", {
                                    "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                                  }]
                                }, [
                                  item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                    key: 0,
                                    to: item.route ? item.route : void 0,
                                    href: item.href ? item.href : void 0,
                                    class: "flex-1 hover:no-underline capitalize"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.text), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                    key: 1,
                                    text: item.text,
                                    size: "xs",
                                    class: "flex-1 font-extrabold capitalize",
                                    to: item.route ? item.route : void 0,
                                    href: item.href ? item.href : void 0
                                  }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                                ], 2);
                              }), 128))
                            ])
                          ]),
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
                        createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                          createVNode("ul", { class: "flex flex-col" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                              return openBlock(), createBlock("li", {
                                key: i,
                                class: ["flex w-full", {
                                  "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                                }]
                              }, [
                                item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                  key: 0,
                                  to: item.route ? item.route : void 0,
                                  href: item.href ? item.href : void 0,
                                  class: "flex-1 hover:no-underline capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.text), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                  key: 1,
                                  text: item.text,
                                  size: "xs",
                                  class: "flex-1 font-extrabold capitalize",
                                  to: item.route ? item.route : void 0,
                                  href: item.href ? item.href : void 0
                                }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                              ], 2);
                            }), 128))
                          ])
                        ]),
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
                      createVNode("nav", { class: "leading-6 font-semibold text-gray-600 dark:text-gray-300" }, [
                        createVNode("ul", { class: "flex flex-col" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (item, i) => {
                            return openBlock(), createBlock("li", {
                              key: i,
                              class: ["flex w-full", {
                                "pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]": item.type === "link"
                              }]
                            }, [
                              item.type === "link" ? (openBlock(), createBlock(_component_Anchor, {
                                key: 0,
                                to: item.route ? item.route : void 0,
                                href: item.href ? item.href : void 0,
                                class: "flex-1 hover:no-underline capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.text), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "href"])) : item.type === "button" ? (openBlock(), createBlock(_component_Button, {
                                key: 1,
                                text: item.text,
                                size: "xs",
                                class: "flex-1 font-extrabold capitalize",
                                to: item.route ? item.route : void 0,
                                href: item.href ? item.href : void 0
                              }, null, 8, ["text", "to", "href"])) : createCommentVNode("", true)
                            ], 2);
                          }), 128))
                        ])
                      ]),
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
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Navbar.0a335bbc.mjs.map
