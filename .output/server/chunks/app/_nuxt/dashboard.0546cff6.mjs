import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Sidebar.d8a35a47.mjs';
import { f as _sfc_main$1 } from './Footer.5f87433e.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './github-face.e0cc2666.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DashboardNavbar = __nuxt_component_0;
  const _component_DashboardSidebar = __nuxt_component_1;
  const _component_PageFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "app-before", {}, null, _push, _parent);
  _push(`<div id="app-before"></div><div class="flex flex-col min-h-screen">`);
  ssrRenderSlot(_ctx.$slots, "header", {}, () => {
    _push(ssrRenderComponent(_component_DashboardNavbar, null, {
      drawer: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_DashboardSidebar, { mode: "mobile" }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_DashboardSidebar, { mode: "mobile" })
          ];
        }
      }),
      _: 1
    }, _parent));
  }, _push, _parent);
  _push(`<div class="flex-1 w-full flex flex-col"><div class="relative flex-1 flex flex-row mx-auto max-w-8xl w-full h-full"><div class="lg:pl-8 py-4">`);
  _push(ssrRenderComponent(_component_DashboardSidebar, null, null, _parent));
  _push(`</div><div class="flex flex-col lg:ml-60 xl:ml-80">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
    _push(ssrRenderComponent(_component_PageFooter, null, null, _parent));
  }, _push, _parent);
  _push(`</div></div></div></div>`);
  ssrRenderSlot(_ctx.$slots, "app-after", {}, null, _push, _parent);
  _push(`<div id="app-after"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dashboard as default };
//# sourceMappingURL=dashboard.0546cff6.mjs.map
