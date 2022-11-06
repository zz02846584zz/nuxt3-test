import { u as useHead, Y as useCounter, Z as useIdentity, E as __nuxt_component_0, G as __nuxt_component_1$1, H as _sfc_main$j, I as __nuxt_component_3$1, J as __nuxt_component_4$2, $ as _sfc_main$2, r as _sfc_main$m, U as _sfc_main$5 } from '../server.mjs';
import { u as useLang } from './useLang.011498c9.mjs';
import { defineComponent, withCtx, createVNode, unref, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { c as capitalize } from './str.e3d4e921.mjs';
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
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    useHead(() => ({
      title: capitalize(t("pages.test.title")),
      meta: [
        {
          name: "description",
          content: t("pages.test.description")
        }
      ]
    }));
    const counter = useCounter();
    const identity = useIdentity();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageWrapper = __nuxt_component_0;
      const _component_PageHeader = __nuxt_component_1$1;
      const _component_PageTitle = _sfc_main$j;
      const _component_PageBody = __nuxt_component_3$1;
      const _component_PageSection = __nuxt_component_4$2;
      const _component_PageSectionTitle = _sfc_main$2;
      const _component_Button = _sfc_main$m;
      const _component_FormTextInput = _sfc_main$5;
      _push(ssrRenderComponent(_component_PageWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PageHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PageTitle, {
                    text: _ctx.$t("pages.test.title"),
                    class: "capitalize"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageTitle, {
                      text: _ctx.$t("pages.test.title"),
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
                        _push4(ssrRenderComponent(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.counter"),
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class=""${_scopeId3}><div class="mb-2"${_scopeId3}>Counter : ${ssrInterpolate(unref(counter).count)}</div><div class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: _ctx.$t("pages.test.increment"),
                          onClick: unref(counter).increment
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto",
                          type: "secondary",
                          size: "sm",
                          text: `${_ctx.$t("pages.test.increment")} 2x`,
                          onClick: unref(counter).increment2x
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: _ctx.$t("pages.test.decrement"),
                          onClick: unref(counter).decrement
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "w-full md:w-auto capitalize",
                          type: "secondary",
                          size: "sm",
                          text: _ctx.$t("pages.test.reset"),
                          onClick: unref(counter).reset
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode(_component_PageSectionTitle, {
                            text: _ctx.$t("pages.test.counter"),
                            class: "capitalize"
                          }, null, 8, ["text"]),
                          createVNode("div", { class: "" }, [
                            createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                            createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto capitalize",
                                type: "secondary",
                                size: "sm",
                                text: _ctx.$t("pages.test.increment"),
                                onClick: withModifiers(unref(counter).increment, ["prevent"])
                              }, null, 8, ["text", "onClick"]),
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto",
                                type: "secondary",
                                size: "sm",
                                text: `${_ctx.$t("pages.test.increment")} 2x`,
                                onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                              }, null, 8, ["text", "onClick"]),
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto capitalize",
                                type: "secondary",
                                size: "sm",
                                text: _ctx.$t("pages.test.decrement"),
                                onClick: withModifiers(unref(counter).decrement, ["prevent"])
                              }, null, 8, ["text", "onClick"]),
                              createVNode(_component_Button, {
                                class: "w-full md:w-auto capitalize",
                                type: "secondary",
                                size: "sm",
                                text: _ctx.$t("pages.test.reset"),
                                onClick: withModifiers(unref(counter).reset, ["prevent"])
                              }, null, 8, ["text", "onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PageSection, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.identity"),
                          class: "capitalize"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="mb-2"${_scopeId3}><span class="capitalize"${_scopeId3}>${ssrInterpolate(_ctx.$t("pages.test.full_name"))} : </span><span${_scopeId3}>${ssrInterpolate(unref(identity).fullName)}</span></div><div class="mb-2"${_scopeId3}><div class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_FormTextInput, {
                          modelValue: unref(identity).firstName,
                          "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormTextInput, {
                          modelValue: unref(identity).lastName,
                          "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                          size: "md",
                          class: "w-full md:w-1/3"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          class: "capitalize w-full md:w-auto",
                          text: _ctx.$t("pages.test.reset"),
                          type: "secondary",
                          size: "md",
                          onClick: unref(identity).reset
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode(_component_PageSectionTitle, {
                            text: _ctx.$t("pages.test.identity"),
                            class: "capitalize"
                          }, null, 8, ["text"]),
                          createVNode("div", { class: "mb-2" }, [
                            createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$t("pages.test.full_name")) + " : ", 1),
                            createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                          ]),
                          createVNode("div", { class: "mb-2" }, [
                            createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                              createVNode(_component_FormTextInput, {
                                modelValue: unref(identity).firstName,
                                "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                                size: "md",
                                class: "w-full md:w-1/3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_FormTextInput, {
                                modelValue: unref(identity).lastName,
                                "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                                size: "md",
                                class: "w-full md:w-1/3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_Button, {
                                class: "capitalize w-full md:w-auto",
                                text: _ctx.$t("pages.test.reset"),
                                type: "secondary",
                                size: "md",
                                onClick: withModifiers(unref(identity).reset, ["prevent"])
                              }, null, 8, ["text", "onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PageSection, null, {
                      default: withCtx(() => [
                        createVNode(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.counter"),
                          class: "capitalize"
                        }, null, 8, ["text"]),
                        createVNode("div", { class: "" }, [
                          createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                          createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto capitalize",
                              type: "secondary",
                              size: "sm",
                              text: _ctx.$t("pages.test.increment"),
                              onClick: withModifiers(unref(counter).increment, ["prevent"])
                            }, null, 8, ["text", "onClick"]),
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto",
                              type: "secondary",
                              size: "sm",
                              text: `${_ctx.$t("pages.test.increment")} 2x`,
                              onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                            }, null, 8, ["text", "onClick"]),
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto capitalize",
                              type: "secondary",
                              size: "sm",
                              text: _ctx.$t("pages.test.decrement"),
                              onClick: withModifiers(unref(counter).decrement, ["prevent"])
                            }, null, 8, ["text", "onClick"]),
                            createVNode(_component_Button, {
                              class: "w-full md:w-auto capitalize",
                              type: "secondary",
                              size: "sm",
                              text: _ctx.$t("pages.test.reset"),
                              onClick: withModifiers(unref(counter).reset, ["prevent"])
                            }, null, 8, ["text", "onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_PageSection, null, {
                      default: withCtx(() => [
                        createVNode(_component_PageSectionTitle, {
                          text: _ctx.$t("pages.test.identity"),
                          class: "capitalize"
                        }, null, 8, ["text"]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$t("pages.test.full_name")) + " : ", 1),
                          createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                        ]),
                        createVNode("div", { class: "mb-2" }, [
                          createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                            createVNode(_component_FormTextInput, {
                              modelValue: unref(identity).firstName,
                              "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                              size: "md",
                              class: "w-full md:w-1/3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_FormTextInput, {
                              modelValue: unref(identity).lastName,
                              "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                              size: "md",
                              class: "w-full md:w-1/3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_Button, {
                              class: "capitalize w-full md:w-auto",
                              text: _ctx.$t("pages.test.reset"),
                              type: "secondary",
                              size: "md",
                              onClick: withModifiers(unref(identity).reset, ["prevent"])
                            }, null, 8, ["text", "onClick"])
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
              createVNode(_component_PageHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_PageTitle, {
                    text: _ctx.$t("pages.test.title"),
                    class: "capitalize"
                  }, null, 8, ["text"])
                ]),
                _: 1
              }),
              createVNode(_component_PageBody, null, {
                default: withCtx(() => [
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(_component_PageSectionTitle, {
                        text: _ctx.$t("pages.test.counter"),
                        class: "capitalize"
                      }, null, 8, ["text"]),
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mb-2" }, "Counter : " + toDisplayString(unref(counter).count), 1),
                        createVNode("div", { class: "flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto capitalize",
                            type: "secondary",
                            size: "sm",
                            text: _ctx.$t("pages.test.increment"),
                            onClick: withModifiers(unref(counter).increment, ["prevent"])
                          }, null, 8, ["text", "onClick"]),
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto",
                            type: "secondary",
                            size: "sm",
                            text: `${_ctx.$t("pages.test.increment")} 2x`,
                            onClick: withModifiers(unref(counter).increment2x, ["prevent"])
                          }, null, 8, ["text", "onClick"]),
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto capitalize",
                            type: "secondary",
                            size: "sm",
                            text: _ctx.$t("pages.test.decrement"),
                            onClick: withModifiers(unref(counter).decrement, ["prevent"])
                          }, null, 8, ["text", "onClick"]),
                          createVNode(_component_Button, {
                            class: "w-full md:w-auto capitalize",
                            type: "secondary",
                            size: "sm",
                            text: _ctx.$t("pages.test.reset"),
                            onClick: withModifiers(unref(counter).reset, ["prevent"])
                          }, null, 8, ["text", "onClick"])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_PageSection, null, {
                    default: withCtx(() => [
                      createVNode(_component_PageSectionTitle, {
                        text: _ctx.$t("pages.test.identity"),
                        class: "capitalize"
                      }, null, 8, ["text"]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$t("pages.test.full_name")) + " : ", 1),
                        createVNode("span", null, toDisplayString(unref(identity).fullName), 1)
                      ]),
                      createVNode("div", { class: "mb-2" }, [
                        createVNode("div", { class: "flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2" }, [
                          createVNode(_component_FormTextInput, {
                            modelValue: unref(identity).firstName,
                            "onUpdate:modelValue": ($event) => unref(identity).firstName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_FormTextInput, {
                            modelValue: unref(identity).lastName,
                            "onUpdate:modelValue": ($event) => unref(identity).lastName = $event,
                            size: "md",
                            class: "w-full md:w-1/3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_Button, {
                            class: "capitalize w-full md:w-auto",
                            text: _ctx.$t("pages.test.reset"),
                            type: "secondary",
                            size: "md",
                            onClick: withModifiers(unref(identity).reset, ["prevent"])
                          }, null, 8, ["text", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test.83af4eba.mjs.map
