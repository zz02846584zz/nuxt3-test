import { E as __nuxt_component_0, I as __nuxt_component_3$1, J as __nuxt_component_4$2, r as _sfc_main$m, L as __nuxt_component_4$1 } from '../server.mjs';
import { u as useLang } from './useLang.011498c9.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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

const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "material-symbols-content-copy-outline", render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    const titlesText = computed(() => t("pages.index.title").split("[]"));
    const leadingsText = computed(() => [
      {
        text: titlesText.value[0],
        startColor: "#007CF0",
        endColor: "#00DFD8",
        delay: 0
      },
      {
        text: titlesText.value[1],
        startColor: "#7928CA",
        endColor: "#FF0080",
        delay: 2
      },
      {
        text: titlesText.value[2],
        startColor: "#FF4D4D",
        endColor: "#F9CB28",
        delay: 4
      }
    ]);
    const tooltip = ref(false);
    const cancelTooltip = () => {
      tooltip.value = false;
      const tt = document.querySelector(".tooltiptext");
      if (tt)
        tt.innerHTML = `Copy to clipboard`;
    };
    const copyBash = () => {
      const bash = "git clone https://github.com/viandwi24/nuxt3-awesome-starter";
      navigator.clipboard.writeText(bash);
      tooltip.value = true;
      const tt = document.querySelector(".tooltiptext");
      if (tt)
        tt.innerHTML = `Copied!!!`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageBody = __nuxt_component_3$1;
      const _component_PageSection = __nuxt_component_4$2;
      const _component_Button = _sfc_main$m;
      const _component_Gem = __nuxt_component_4$1;
      const _component_icon_material_symbols58content_copy_outline = __unplugin_components_0;
      _push(ssrRenderComponent(_component_PageWrapper, mergeProps({ class: "flex-1 flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="background-overlay"${_scopeId}><div class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"${_scopeId}></div><div class="absolute hidden md:block top-0 left-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"${_scopeId}></div><div class="absolute hidden md:block bottom-0 right-0 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"${_scopeId}></div><div class="absolute bottom-0 right-0 triangle-shape"${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(_component_PageBody, { class: "flex-1 flex" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageSection, { class: "flex-1 flex items-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex-1 md:w-5/8 flex flex-col z-10"${_scopeId3}><h1 class="text-center md:text-left mt-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(leadingsText), (item, i) => {
                          _push4(`<span style="${ssrRenderStyle(`--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`)}" class="animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"${_scopeId3}><span class="animated-text-fg"${_scopeId3}>${ssrInterpolate(item.text)}</span></span>`);
                        });
                        _push4(`<!--]--></h1><div class="flex space-x-4 ml-4 mt-10 justify-center md:justify-start"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          size: "lg",
                          text: "Nuxt 3",
                          class: "font-extrabold",
                          href: "https://v3.nuxtjs.org"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          size: "lg",
                          text: "Github",
                          type: "secondary",
                          class: "font-extrabold",
                          href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div><div class="hidden md:flex md:w-3/8 justify-center items-end relative"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Gem, { class: "absolute -top-64 -right-0" }, null, _parent4, _scopeId3));
                        _push4(`<div class="ml-4 w-100 z-10 h-auto shadow"${_scopeId3}><div class="win-header bg-gray-200 dark:bg-slate-800 flex flex space-x-4 px-3 py-2 rounded-t-lg relative border-b-2 border-gray-300/75 dark:border-slate-700/75"${_scopeId3}><div class="win-controls flex space-x-1 items-center"${_scopeId3}><div class="w-3 h-3 bg-red-500 rounded-full"${_scopeId3}></div><div class="w-3 h-3 bg-green-500 rounded-full"${_scopeId3}></div><div class="w-3 h-3 bg-yellow-500 rounded-full"${_scopeId3}></div></div><div class="flex-1 font-bold text-center pr-12 text-sm"${_scopeId3}>BASH</div><div class="text-sm flex justify-center items-center"${_scopeId3}><div class="tooltip"${_scopeId3}><button class="text-gray-100 flex justify-center items-center"${_scopeId3}><span class="tooltiptext"${_scopeId3}>Copy to clipboard</span>`);
                        _push4(ssrRenderComponent(_component_icon_material_symbols58content_copy_outline, null, null, _parent4, _scopeId3));
                        _push4(`</button></div></div></div><div class="win-body rounded-b-lg bg-gray-200/90 dark:bg-slate-800/90 px-3 py-2 font-mono backdrop-filter backdrop-blur-lg"${_scopeId3}><div${_scopeId3}> $ git clone https://github.com/viandwi24/nuxt3-awesome-starter </div></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex-1 md:w-5/8 flex flex-col z-10" }, [
                            createVNode("h1", { class: "text-center md:text-left mt-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(leadingsText), (item, i) => {
                                return openBlock(), createBlock("span", {
                                  key: i,
                                  style: `--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`,
                                  class: "animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
                                }, [
                                  createVNode("span", { class: "animated-text-fg" }, toDisplayString(item.text), 1)
                                ], 4);
                              }), 128))
                            ]),
                            createVNode("div", { class: "flex space-x-4 ml-4 mt-10 justify-center md:justify-start" }, [
                              createVNode(_component_Button, {
                                size: "lg",
                                text: "Nuxt 3",
                                class: "font-extrabold",
                                href: "https://v3.nuxtjs.org"
                              }),
                              createVNode(_component_Button, {
                                size: "lg",
                                text: "Github",
                                type: "secondary",
                                class: "font-extrabold",
                                href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                              })
                            ])
                          ]),
                          createVNode("div", { class: "hidden md:flex md:w-3/8 justify-center items-end relative" }, [
                            createVNode(_component_Gem, { class: "absolute -top-64 -right-0" }),
                            createVNode("div", { class: "ml-4 w-100 z-10 h-auto shadow" }, [
                              createVNode("div", { class: "win-header bg-gray-200 dark:bg-slate-800 flex flex space-x-4 px-3 py-2 rounded-t-lg relative border-b-2 border-gray-300/75 dark:border-slate-700/75" }, [
                                createVNode("div", { class: "win-controls flex space-x-1 items-center" }, [
                                  createVNode("div", { class: "w-3 h-3 bg-red-500 rounded-full" }),
                                  createVNode("div", { class: "w-3 h-3 bg-green-500 rounded-full" }),
                                  createVNode("div", { class: "w-3 h-3 bg-yellow-500 rounded-full" })
                                ]),
                                createVNode("div", { class: "flex-1 font-bold text-center pr-12 text-sm" }, "BASH"),
                                createVNode("div", { class: "text-sm flex justify-center items-center" }, [
                                  createVNode("div", { class: "tooltip" }, [
                                    createVNode("button", {
                                      class: "text-gray-100 flex justify-center items-center",
                                      onClick: copyBash,
                                      onMouseout: cancelTooltip
                                    }, [
                                      createVNode("span", { class: "tooltiptext" }, "Copy to clipboard"),
                                      createVNode(_component_icon_material_symbols58content_copy_outline)
                                    ], 32)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "win-body rounded-b-lg bg-gray-200/90 dark:bg-slate-800/90 px-3 py-2 font-mono backdrop-filter backdrop-blur-lg" }, [
                                createVNode("div", null, " $ git clone https://github.com/viandwi24/nuxt3-awesome-starter ")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageSection, { class: "flex-1 flex items-center" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex-1 md:w-5/8 flex flex-col z-10" }, [
                          createVNode("h1", { class: "text-center md:text-left mt-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(leadingsText), (item, i) => {
                              return openBlock(), createBlock("span", {
                                key: i,
                                style: `--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`,
                                class: "animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
                              }, [
                                createVNode("span", { class: "animated-text-fg" }, toDisplayString(item.text), 1)
                              ], 4);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex space-x-4 ml-4 mt-10 justify-center md:justify-start" }, [
                            createVNode(_component_Button, {
                              size: "lg",
                              text: "Nuxt 3",
                              class: "font-extrabold",
                              href: "https://v3.nuxtjs.org"
                            }),
                            createVNode(_component_Button, {
                              size: "lg",
                              text: "Github",
                              type: "secondary",
                              class: "font-extrabold",
                              href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "hidden md:flex md:w-3/8 justify-center items-end relative" }, [
                          createVNode(_component_Gem, { class: "absolute -top-64 -right-0" }),
                          createVNode("div", { class: "ml-4 w-100 z-10 h-auto shadow" }, [
                            createVNode("div", { class: "win-header bg-gray-200 dark:bg-slate-800 flex flex space-x-4 px-3 py-2 rounded-t-lg relative border-b-2 border-gray-300/75 dark:border-slate-700/75" }, [
                              createVNode("div", { class: "win-controls flex space-x-1 items-center" }, [
                                createVNode("div", { class: "w-3 h-3 bg-red-500 rounded-full" }),
                                createVNode("div", { class: "w-3 h-3 bg-green-500 rounded-full" }),
                                createVNode("div", { class: "w-3 h-3 bg-yellow-500 rounded-full" })
                              ]),
                              createVNode("div", { class: "flex-1 font-bold text-center pr-12 text-sm" }, "BASH"),
                              createVNode("div", { class: "text-sm flex justify-center items-center" }, [
                                createVNode("div", { class: "tooltip" }, [
                                  createVNode("button", {
                                    class: "text-gray-100 flex justify-center items-center",
                                    onClick: copyBash,
                                    onMouseout: cancelTooltip
                                  }, [
                                    createVNode("span", { class: "tooltiptext" }, "Copy to clipboard"),
                                    createVNode(_component_icon_material_symbols58content_copy_outline)
                                  ], 32)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "win-body rounded-b-lg bg-gray-200/90 dark:bg-slate-800/90 px-3 py-2 font-mono backdrop-filter backdrop-blur-lg" }, [
                              createVNode("div", null, " $ git clone https://github.com/viandwi24/nuxt3-awesome-starter ")
                            ])
                          ])
                        ])
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
              createVNode("div", { class: "background-overlay" }, [
                createVNode("div", { class: "absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white" }),
                createVNode("div", { class: "absolute hidden md:block top-0 left-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe" }),
                createVNode("div", { class: "absolute hidden md:block bottom-0 right-0 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe" }),
                createVNode("div", { class: "absolute bottom-0 right-0 triangle-shape" })
              ]),
              createVNode(_component_PageBody, { class: "flex-1 flex" }, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, { class: "flex-1 flex items-center" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex-1 md:w-5/8 flex flex-col z-10" }, [
                        createVNode("h1", { class: "text-center md:text-left mt-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(leadingsText), (item, i) => {
                            return openBlock(), createBlock("span", {
                              key: i,
                              style: `--content: '${item.text}'; --start-color: ${item.startColor}; --end-color: ${item.endColor}; --animation-name: anim-fg-${i + 1}`,
                              class: "animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
                            }, [
                              createVNode("span", { class: "animated-text-fg" }, toDisplayString(item.text), 1)
                            ], 4);
                          }), 128))
                        ]),
                        createVNode("div", { class: "flex space-x-4 ml-4 mt-10 justify-center md:justify-start" }, [
                          createVNode(_component_Button, {
                            size: "lg",
                            text: "Nuxt 3",
                            class: "font-extrabold",
                            href: "https://v3.nuxtjs.org"
                          }),
                          createVNode(_component_Button, {
                            size: "lg",
                            text: "Github",
                            type: "secondary",
                            class: "font-extrabold",
                            href: "https://github.com/viandwi24/nuxt3-awesome-starter"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "hidden md:flex md:w-3/8 justify-center items-end relative" }, [
                        createVNode(_component_Gem, { class: "absolute -top-64 -right-0" }),
                        createVNode("div", { class: "ml-4 w-100 z-10 h-auto shadow" }, [
                          createVNode("div", { class: "win-header bg-gray-200 dark:bg-slate-800 flex flex space-x-4 px-3 py-2 rounded-t-lg relative border-b-2 border-gray-300/75 dark:border-slate-700/75" }, [
                            createVNode("div", { class: "win-controls flex space-x-1 items-center" }, [
                              createVNode("div", { class: "w-3 h-3 bg-red-500 rounded-full" }),
                              createVNode("div", { class: "w-3 h-3 bg-green-500 rounded-full" }),
                              createVNode("div", { class: "w-3 h-3 bg-yellow-500 rounded-full" })
                            ]),
                            createVNode("div", { class: "flex-1 font-bold text-center pr-12 text-sm" }, "BASH"),
                            createVNode("div", { class: "text-sm flex justify-center items-center" }, [
                              createVNode("div", { class: "tooltip" }, [
                                createVNode("button", {
                                  class: "text-gray-100 flex justify-center items-center",
                                  onClick: copyBash,
                                  onMouseout: cancelTooltip
                                }, [
                                  createVNode("span", { class: "tooltiptext" }, "Copy to clipboard"),
                                  createVNode(_component_icon_material_symbols58content_copy_outline)
                                ], 32)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "win-body rounded-b-lg bg-gray-200/90 dark:bg-slate-800/90 px-3 py-2 font-mono backdrop-filter backdrop-blur-lg" }, [
                            createVNode("div", null, " $ git clone https://github.com/viandwi24/nuxt3-awesome-starter ")
                          ])
                        ])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.1fba5ab5.mjs.map
