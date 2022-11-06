import __nuxt_component_1 from './client-only.02e4e1d5.mjs';
import { defineComponent, useSlots, ref, provide, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    useSlots();
    const tabs = ref();
    const tabHeaderIndicator = ref();
    const tabItems = ref([]);
    const activeTab = ref();
    provide("activeTab", activeTab);
    const updateIndicator = () => {
      if (!tabs.value || !tabHeaderIndicator.value)
        return;
      const dom = tabHeaderIndicator.value;
      const currentActiveIndex = tabItems.value.findIndex(
        ({ name }) => name === activeTab.value
      );
      const tabItem = tabs.value.querySelectorAll(".tabs-header-item")[currentActiveIndex];
      if (!tabItem)
        return;
      const padding = 24;
      const diff = 30;
      dom.style.width = `${tabItem.offsetWidth + diff}px`;
      dom.style.left = `${tabItem.offsetLeft - padding - diff / 2}px`;
    };
    watch(tabItems, () => updateIndicator());
    watch(activeTab, () => updateIndicator());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "tabs",
        ref: tabs,
        class: "tabs"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`<div class="tabs-body relative text-slate-800 dark:text-white bg-gray-200 dark:bg-slate-800 shadow rounded-b-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tabs.2c0c652a.mjs.map
