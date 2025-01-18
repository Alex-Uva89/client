import { L as Logo } from './LogoSection-BdmjOFmU.mjs';
import { defineComponent, useSSRContext, computed, resolveComponent, mergeProps, ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, createTextVNode } from 'vue';
import { u as useProductStore, a as useCategoryStore, _ as _imports_0$2 } from './back_red-D-VFBGiv.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { e as useCartStore, _ as _export_sfc } from './server.mjs';
import { _ as _imports_2 } from './price-Bg9TE_-Z.mjs';
import 'pinia';
import 'axios';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$8 = defineComponent({
  setup() {
    const productStore = useProductStore();
    let transcribedText = "";
    const updateSearchQuery = (query) => {
      productStore.setSearchQuery(query);
    };
    const onVoiceSearch = () => {
      if (!("webkitSpeechRecognition" in void 0)) {
        alert("La funzionalit\xE0 di ricerca vocale non \xE8 supportata dal tuo browser.");
        return;
      }
      const recognition = new (void 0).webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.start();
      recognition.onresult = (event) => {
        transcribedText = event.results[0][0].transcript;
        updateSearchQuery(transcribedText);
      };
      recognition.onerror = (event) => {
        console.error("Errore nel riconoscimento vocale:", event.error);
      };
      recognition.onend = () => {
        console.log("Riconoscimento vocale terminato");
      };
    };
    return {
      searchQuery: productStore.searchQuery,
      updateSearchQuery,
      onVoiceSearch
    };
  }
});
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.168%2019.245C21.2279%2017.2026%2022.5103%2014.3759%2022.5103%2011.2524C22.5062%205.04839%2017.4605%200%2011.2551%200C5.04839%200%200%205.04839%200%2011.2551C0%2017.4619%205.04839%2022.5065%2011.2513%2022.5065C13.5879%2022.5065%2015.7572%2021.791%2017.5579%2020.568L22.8036%2026L24.2966%2024.5583L19.168%2019.245ZM2.07309%2011.2551C2.07309%206.19326%206.19156%202.0734%2011.2548%202.0734C16.3167%202.0734%2020.4327%206.19326%2020.4327%2011.2551C20.4327%2016.317%2016.3129%2020.433%2011.2548%2020.433C6.19537%2020.433%202.07309%2016.3146%202.07309%2011.2551Z'%20fill='%23757373'/%3e%3c/svg%3e";
const _imports_1$1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2018%2027'%20style='enable-background:new%200%200%2018%2027;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st1{fill:%23757373;}%20%3c/style%3e%3cg%3e%3cpath%20class='st1'%20d='M8.8,18.2c-1.4,0-2.7-0.5-3.6-1.5c-1-1-1.5-2.3-1.5-3.7V5.2c0-1.4,0.5-2.7,1.5-3.7l0,0c1-1,2.3-1.5,3.6-1.5%20c1.4,0,2.7,0.5,3.6,1.5c1,1,1.5,2.3,1.5,3.7v7.7c0,1.4-0.5,2.7-1.5,3.7C11.4,17.6,10.2,18.2,8.8,18.2z%20M8.8,1.7%20c-0.9,0-1.8,0.4-2.4,1c-0.6,0.7-1,1.5-1,2.5v7.7c0,0.9,0.4,1.8,1,2.5c1.3,1.3,3.5,1.3,4.8,0l0,0c0.6-0.7,1-1.5,1-2.5V5.2%20c0-0.9-0.4-1.8-1-2.5S9.7,1.7,8.8,1.7z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st1'%20d='M8.4,21.6v-0.5l-0.5,0c-4.2-0.4-7.5-4-7.5-8.4h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1%20c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l0.2-0.4L1,12.3c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0%20c0,4.3,3.4,7.7,7.6,7.7c4.2,0,7.6-3.5,7.6-7.7h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0%20s0.1,0,0.1,0c0,0,0.1,0,0.1,0.1l0.4-0.3L17,12.4c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0c0,4.4-3.3,8-7.5,8.4l-0.5,0v0.5v3.6v0.5%20h0.5h3.4c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.1,0.1-0.2,0.1H4.5c-0.1,0-0.2,0-0.2-0.1%20c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.1-0.1,0.2-0.1h3.4h0.5v-0.5V21.6z'/%3e%3cpath%20class='st1'%20d='M4.5,27c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.2-0.4-0.2-0.6s0.1-0.4,0.2-0.6c0.2-0.2,0.4-0.3,0.6-0.3l3.4,0%20l0-3.6C3.4,21.2,0,17.3,0,12.7c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0.1,0,0.1,0l0-0.1l0.2,0.1%20c0.1,0,0.2,0,0.3,0.1l0,0.1l0-0.1c0.1,0,0.2,0.1,0.3,0.2l0.2,0.1l0,0.1c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.2,0.1,0.3%20c0,4,3.2,7.2,7.1,7.2c3.9,0,7.1-3.2,7.1-7.2c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2%20c0.2-0.1,0.3-0.1,0.5-0.1l0.1-0.1l0.3,0.3c0,0,0,0,0,0c0,0,0,0,0,0l0.3,0.3l-0.1,0.1c0,0.1,0,0.1,0,0.2c0,4.6-3.4,8.5-7.9,8.9v3.6%20h3.4c0.2,0,0.4,0.1,0.6,0.3c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.3-0.6,0.3H4.5z'/%3e%3c/g%3e%3c/svg%3e";
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-bar-container" }, _attrs))} data-v-e4182c1f><img${ssrRenderAttr("src", _imports_0$1)} alt="icona lente che indica la ricerca testuale" class="search-text-icon" data-v-e4182c1f><input${ssrRenderAttr("value", _ctx.searchQuery)} aria-label="barra di ricerca dei prodotti" type="text" placeholder="Cerca" class="search-bar" id="search-bar" data-v-e4182c1f><button class="voice-search" data-v-e4182c1f><img${ssrRenderAttr("src", _imports_1$1)} alt="icona microfono che indica la ricerca vocale" data-v-e4182c1f></button></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchComponent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SearcBar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-e4182c1f"]]);
const _sfc_main$7 = defineComponent({
  name: "PillowCategoryComponent",
  setup() {
    const categoryStore = useCategoryStore();
    const productStore = useProductStore();
    const displayedCategories = computed(() => {
      return categoryStore.categories.map((category) => ({
        category
      }));
    });
    const selectCategory = (item) => {
      categoryStore.setCategory(item);
      productStore.fetchProducts();
    };
    const isSelected = (item) => {
      if (!categoryStore.selectedCategory) {
        return false;
      } else {
        return categoryStore.selectedCategory["category"].name === item["category"].name;
      }
    };
    return {
      categoryStore,
      displayedCategories,
      selectCategory,
      isSelected
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-bd313e2c><div class="categories-container" data-v-bd313e2c><button class="${ssrRenderClass([{ "btn-selected": !_ctx.categoryStore.selectedCategory }, "btn"])}" data-v-bd313e2c>`);
  if (_ctx.categoryStore.selectedCategory) {
    _push(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Indietro" data-v-bd313e2c>`);
  } else {
    _push(`<!--[--> TUTTI <!--]-->`);
  }
  _push(`</button><!--[-->`);
  ssrRenderList(_ctx.displayedCategories, (item) => {
    _push(`<button class="${ssrRenderClass([{ "btn-selected": _ctx.isSelected(item) }, "btn"])}" data-v-bd313e2c>${ssrInterpolate(item["category"].name)}</button>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PillowCategoryComponent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const PillowCategories = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-bd313e2c"]]);
const _sfc_main$6 = {
  name: "HeaderSearch",
  components: {
    Logo,
    SearcBar,
    PillowCategories
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = resolveComponent("Logo");
  const _component_SearcBar = resolveComponent("SearcBar");
  const _component_PillowCategories = resolveComponent("PillowCategories");
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-a3b152eb><div class="logo-container" data-v-a3b152eb>`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_SearcBar, null, null, _parent));
  _push(ssrRenderComponent(_component_PillowCategories, null, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderSearch.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-a3b152eb"]]);
const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2025%2028'%20style='enable-background:new%200%200%2025%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23e7d7c0;}%20%3c/style%3e%3cpath%20class='st0'%20d='M25,1.6c0-0.3-0.1-0.5-0.1-0.7c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.2-0.3-0.4-0.6-0.7-0.7%20c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.5,0-1,0h-20C2,0,1.7,0,1.5,0c-0.2,0-0.3,0-0.3,0.1%20c0,0-0.1,0-0.2,0.1c0,0-0.1,0-0.1,0.1C0.6,0.4,0.3,0.6,0.2,0.9C0.1,1.1,0,1.3,0,1.6c0,0.3,0,0.6,0,1.1V4c0,0.5,0,0.6,0,0.8%20c0,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.2,0.3,0.5,0.6l8,8.7C8.9,14.8,9,15,9.1,15.2c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.2,0.1,0.3,0.2,0.5%20c0,0.2,0,0.4,0,0.8v8.1c0,0.8,0,1.3,0,1.7c0,0.4,0.1,0.7,0.2,0.9c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0.4,0.6,0.6,1,0.7c0.1,0,0.1,0,0.2,0%20c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.6-0.2c0.3-0.1,0.8-0.4,1.4-0.7l1.2-0.7c0.6-0.3,0.8-0.4,0.9-0.6c0.2-0.2,0.3-0.4,0.4-0.6%20c0.1-0.2,0.1-0.5,0.1-1.2v-7.5c0-0.3,0-0.5,0-0.7c0,0,0,0,0,0c0-0.2,0.1-0.3,0.2-0.5c0,0,0,0,0,0c0.1-0.2,0.3-0.3,0.4-0.5%20c0,0,0.1-0.1,0.1-0.1l7.9-8.6c0.3-0.4,0.4-0.5,0.5-0.6C24.9,5.2,24.9,5,25,4.8c0-0.2,0-0.3,0-0.8V2.7C25,2.2,25,1.9,25,1.6z%20M22.8,4.6l-7.9,8.6c0,0-0.1,0.1-0.1,0.1c-0.2,0.3-0.5,0.6-0.7,0.9c0,0,0,0,0,0c0,0,0,0,0,0c-0.2,0.3-0.3,0.7-0.4,1c0,0,0,0,0,0%20c-0.1,0.4-0.1,0.8-0.1,1.2V24c0,0.2,0,0.4,0,0.5c-0.1,0-0.2,0.1-0.3,0.2L12,25.3c-0.3,0.1-0.5,0.3-0.7,0.4c0-0.3,0-0.6,0-1v-8.2%20c0-0.4,0-0.8-0.1-1.2c-0.1-0.4-0.2-0.7-0.4-1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.2-0.4-0.5-0.7-0.8-1L2.2,4.6%20C2.1,4.5,2,4.4,2,4.4C2,4.3,2,4.2,2,4V2.7C2,2.4,2,2.2,2,2c0.1,0,0.3,0,0.5,0h20c0.2,0,0.4,0,0.5,0c0,0.2,0,0.4,0,0.7V4%20c0,0.2,0,0.3,0,0.3C23,4.4,22.9,4.5,22.8,4.6z'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2028%2028'%20style='enable-background:new%200%200%2028%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{%20stroke:%23e7d7c0;%20stroke-width:2;%20fill:none;%20}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M26.6,28c-0.3,0-0.5-0.1-0.7-0.3L13.8,15.4L1.7,27.7c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4L12.4,14%20L0.3,1.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l12.1,12.3L25.9,0.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L15.2,14l12.1,12.3%20c0.4,0.4,0.4,1,0,1.4C27.1,27.9,26.9,28,26.6,28z'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$5 = {
  __name: "PillowFilterComponent",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-content-pillow" }, _attrs))} data-v-acbb7176><h3 data-v-acbb7176>${ssrInterpolate(__props.title)}</h3><div class="filter-content-order-buttons" data-v-acbb7176>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/filters/PillowFilterComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const PillowFilter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-acbb7176"]]);
const _sfc_main$4 = {
  __name: "RangeComponent",
  __ssrInlineRender: true,
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  emits: ["update:values"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const minValue = ref(props.min);
    const maxValue = ref(props.max);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "price-section" }, _attrs))} data-v-d75cfb85><h3 class="range-title" data-v-d75cfb85>Prezzo</h3><div class="dual-range-container" data-v-d75cfb85><div class="range-slider" data-v-d75cfb85><div class="slider-track" data-v-d75cfb85></div><input type="range"${ssrRenderAttr("min", __props.min)}${ssrRenderAttr("max", __props.max)}${ssrRenderAttr("value", minValue.value)} class="range-input" data-v-d75cfb85><input type="range"${ssrRenderAttr("min", __props.min)}${ssrRenderAttr("max", __props.max)}${ssrRenderAttr("value", maxValue.value)} class="range-input" data-v-d75cfb85></div><div class="range-values" data-v-d75cfb85><span data-v-d75cfb85><p data-v-d75cfb85>Min</p><div class="min-value" data-v-d75cfb85>${ssrInterpolate(minValue.value)}</div></span><span data-v-d75cfb85><p data-v-d75cfb85>Max</p><div class="max-value" data-v-d75cfb85>${ssrInterpolate(maxValue.value)}</div></span></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/filters/RangeComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const RangeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d75cfb85"]]);
const INITIAL_DISPLAY = 6;
const LOAD_MORE_COUNT = 6;
const _sfc_main$3 = {
  __name: "FilterComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const categoryStore = useCategoryStore();
    const productStore = useProductStore();
    const showFilter = ref(false);
    const displayLimits = ref({
      subcategory: INITIAL_DISPLAY,
      origin: INITIAL_DISPLAY,
      grape: INITIAL_DISPLAY,
      vintage: INITIAL_DISPLAY
    });
    const uniqueColors = computed(
      () => categoryStore.getActiveCategories.filter((category) => category.is_active).map((category) => category.name)
    );
    const uniqueOrigins = computed(
      () => [...new Set(productStore.products.map((p) => p.origin).filter((value) => value !== "N/A" && value !== ""))]
    );
    const uniqueGrapes = computed(
      () => [...new Set(productStore.products.map((p) => p.grape).filter((value) => value !== "N/A" && value !== ""))]
    );
    const uniqueVintages = computed(
      () => [...new Set(productStore.products.map((p) => p.vintage).filter((value) => value !== "N/A" && value !== ""))]
    );
    const displayedColors = computed(() => uniqueColors.value.slice(0, displayLimits.value.subcategory));
    const displayedOrigins = computed(() => uniqueOrigins.value.slice(0, displayLimits.value.origin));
    const displayedGrapes = computed(() => uniqueGrapes.value.slice(0, displayLimits.value.grape));
    const displayedVintages = computed(() => uniqueVintages.value.slice(0, displayLimits.value.vintage));
    console.log(displayedColors);
    const loadMore = (filterType) => {
      displayLimits.value[filterType] += LOAD_MORE_COUNT;
    };
    const showLess = (filterType) => {
      displayLimits.value[filterType] = INITIAL_DISPLAY;
    };
    const tempFilters = ref({
      subcategory: [],
      origin: [],
      grape: [],
      vintage: [],
      priceRange: { min: 0, max: 600 }
    });
    const activeOrders = ref({
      abc: false,
      priceDesc: false,
      priceAsc: false
    });
    const toggleOrder = (type) => {
      if (type === "abc") {
        activeOrders.value.abc = !activeOrders.value.abc;
      } else if (type === "priceDesc") {
        activeOrders.value.priceDesc = !activeOrders.value.priceDesc;
        activeOrders.value.priceAsc = false;
      } else if (type === "priceAsc") {
        activeOrders.value.priceAsc = !activeOrders.value.priceAsc;
        activeOrders.value.priceDesc = false;
      }
      if (activeOrders.value.abc) {
        productStore.orderByABC();
      }
      if (activeOrders.value.priceDesc) {
        productStore.orderByPriceMinus();
      }
      if (activeOrders.value.priceAsc) {
        productStore.orderByPricePlus();
      }
    };
    const activeFilterMultiple = (value, filterType) => {
      if (tempFilters.value[filterType].includes(value)) {
        tempFilters.value[filterType] = tempFilters.value[filterType].filter((v) => v !== value);
      } else {
        tempFilters.value[filterType].push(value);
      }
    };
    const handleValues = (values) => {
      tempFilters.value.priceRange = {
        min: values.min,
        max: values.max
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f01fd4f3><button class="btn-filter" data-v-f01fd4f3><img${ssrRenderAttr("src", _imports_0)} class="icon-filter" alt="Icona per aprire la pagina filtri" data-v-f01fd4f3></button>`);
      if (showFilter.value) {
        _push(`<div class="filter-container" data-v-f01fd4f3><div class="filter-header" data-v-f01fd4f3><img${ssrRenderAttr("src", _imports_1)} alt="icona per chiudere la pagina filtri" class="icon-close" data-v-f01fd4f3><div class="filter-header-content" data-v-f01fd4f3><h2 class="filter-header-title" data-v-f01fd4f3>Filtri</h2><div class="filter-header-buttons" data-v-f01fd4f3><button class="btn apply" data-v-f01fd4f3>Applica filtri</button><button class="btn reset" data-v-f01fd4f3>Reset</button></div></div></div><div class="filter-content" data-v-f01fd4f3>`);
        _push(ssrRenderComponent(PillowFilter, { title: "Ordina per" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button id="abc" class="${ssrRenderClass([{ active: activeOrders.value.abc }, "btn mono"])}" data-v-f01fd4f3${_scopeId}> Alfabetico </button><button id="crescent" class="${ssrRenderClass([{ active: activeOrders.value.priceDesc }, "btn mono"])}" data-v-f01fd4f3${_scopeId}> Prezzo decrescente </button><button id="decrescent" class="${ssrRenderClass([{ active: activeOrders.value.priceAsc }, "btn mono"])}" data-v-f01fd4f3${_scopeId}> Prezzo crescente </button>`);
            } else {
              return [
                createVNode("button", {
                  id: "abc",
                  class: ["btn mono", { active: activeOrders.value.abc }],
                  onClick: ($event) => toggleOrder("abc")
                }, " Alfabetico ", 10, ["onClick"]),
                createVNode("button", {
                  id: "crescent",
                  class: ["btn mono", { active: activeOrders.value.priceDesc }],
                  onClick: ($event) => toggleOrder("priceDesc")
                }, " Prezzo decrescente ", 10, ["onClick"]),
                createVNode("button", {
                  id: "decrescent",
                  class: ["btn mono", { active: activeOrders.value.priceAsc }],
                  onClick: ($event) => toggleOrder("priceAsc")
                }, " Prezzo crescente ", 10, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(RangeComponent, {
          min: 0,
          max: 600,
          "onUpdate:values": handleValues
        }, null, _parent));
        _push(ssrRenderComponent(PillowFilter, { title: "Tipologia" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(displayedColors.value, (color) => {
                _push2(`<button class="${ssrRenderClass([{ active: tempFilters.value.subcategory.includes(color) }, "btn"])}" data-v-f01fd4f3${_scopeId}>${ssrInterpolate(color.replace("VINI ", ""))}</button>`);
              });
              _push2(`<!--]-->`);
              if (uniqueColors.value.length > INITIAL_DISPLAY) {
                _push2(`<div class="filter-controls" data-v-f01fd4f3${_scopeId}>`);
                if (uniqueColors.value.length > displayLimits.value.subcategory) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra di pi\xF9 </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (displayLimits.value.subcategory > INITIAL_DISPLAY && uniqueColors.value.length > INITIAL_DISPLAY) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra meno </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(displayedColors.value, (color) => {
                  return openBlock(), createBlock("button", {
                    key: color,
                    class: ["btn", { active: tempFilters.value.subcategory.includes(color) }],
                    onClick: ($event) => activeFilterMultiple(color, "subcategory")
                  }, toDisplayString(color.replace("VINI ", "")), 11, ["onClick"]);
                }), 128)),
                uniqueColors.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "filter-controls"
                }, [
                  uniqueColors.value.length > displayLimits.value.subcategory ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "show-toggle",
                    onClick: ($event) => loadMore("subcategory")
                  }, " Mostra di pi\xF9 ", 8, ["onClick"])) : createCommentVNode("", true),
                  displayLimits.value.subcategory > INITIAL_DISPLAY && uniqueColors.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "show-toggle",
                    onClick: ($event) => showLess("subcategory")
                  }, " Mostra meno ", 8, ["onClick"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(PillowFilter, { title: "Provenienza" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(displayedOrigins.value, (origin) => {
                _push2(`<button class="${ssrRenderClass([{ active: tempFilters.value.origin.includes(origin) }, "btn"])}" data-v-f01fd4f3${_scopeId}>${ssrInterpolate(origin)}</button>`);
              });
              _push2(`<!--]-->`);
              if (uniqueOrigins.value.length > INITIAL_DISPLAY) {
                _push2(`<div class="filter-controls" data-v-f01fd4f3${_scopeId}>`);
                if (uniqueOrigins.value.length > displayLimits.value.origin) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra di pi\xF9 </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (displayLimits.value.origin > INITIAL_DISPLAY && uniqueOrigins.value.length > INITIAL_DISPLAY) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra meno </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(displayedOrigins.value, (origin) => {
                  return openBlock(), createBlock("button", {
                    key: origin,
                    class: ["btn", { active: tempFilters.value.origin.includes(origin) }],
                    onClick: ($event) => activeFilterMultiple(origin, "origin")
                  }, toDisplayString(origin), 11, ["onClick"]);
                }), 128)),
                uniqueOrigins.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "filter-controls"
                }, [
                  uniqueOrigins.value.length > displayLimits.value.origin ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "show-toggle",
                    onClick: ($event) => loadMore("origin")
                  }, " Mostra di pi\xF9 ", 8, ["onClick"])) : createCommentVNode("", true),
                  displayLimits.value.origin > INITIAL_DISPLAY && uniqueOrigins.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "show-toggle",
                    onClick: ($event) => showLess("origin")
                  }, " Mostra meno ", 8, ["onClick"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(PillowFilter, { title: "Vitigno" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(displayedGrapes.value, (grape) => {
                _push2(`<button class="${ssrRenderClass([{ active: tempFilters.value.grape.includes(grape) }, "btn"])}" data-v-f01fd4f3${_scopeId}>${ssrInterpolate(grape)}</button>`);
              });
              _push2(`<!--]-->`);
              if (uniqueGrapes.value.length > INITIAL_DISPLAY) {
                _push2(`<div class="filter-controls" data-v-f01fd4f3${_scopeId}>`);
                if (uniqueGrapes.value.length > displayLimits.value.grape) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra di pi\xF9 </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (displayLimits.value.grape > INITIAL_DISPLAY && uniqueGrapes.value.length > INITIAL_DISPLAY) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra meno </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(displayedGrapes.value, (grape) => {
                  return openBlock(), createBlock("button", {
                    key: grape,
                    class: ["btn", { active: tempFilters.value.grape.includes(grape) }],
                    onClick: ($event) => activeFilterMultiple(grape, "grape")
                  }, toDisplayString(grape), 11, ["onClick"]);
                }), 128)),
                uniqueGrapes.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "filter-controls"
                }, [
                  uniqueGrapes.value.length > displayLimits.value.grape ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "show-toggle",
                    onClick: ($event) => loadMore("grape")
                  }, " Mostra di pi\xF9 ", 8, ["onClick"])) : createCommentVNode("", true),
                  displayLimits.value.grape > INITIAL_DISPLAY && uniqueGrapes.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "show-toggle",
                    onClick: ($event) => showLess("grape")
                  }, " Mostra meno ", 8, ["onClick"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(PillowFilter, { title: "Annata" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(displayedVintages.value, (vintage) => {
                _push2(`<button class="${ssrRenderClass([{ active: tempFilters.value.vintage.includes(vintage) }, "btn"])}" data-v-f01fd4f3${_scopeId}>${ssrInterpolate(vintage)}</button>`);
              });
              _push2(`<!--]-->`);
              if (uniqueVintages.value.length > INITIAL_DISPLAY) {
                _push2(`<div class="filter-controls" data-v-f01fd4f3${_scopeId}>`);
                if (uniqueVintages.value.length > displayLimits.value.vintage) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra di pi\xF9 </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (displayLimits.value.vintage > INITIAL_DISPLAY && uniqueVintages.value.length > INITIAL_DISPLAY) {
                  _push2(`<div class="show-toggle" data-v-f01fd4f3${_scopeId}> Mostra meno </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(displayedVintages.value, (vintage) => {
                  return openBlock(), createBlock("button", {
                    key: vintage,
                    class: ["btn", { active: tempFilters.value.vintage.includes(vintage) }],
                    onClick: ($event) => activeFilterMultiple(vintage, "vintage")
                  }, toDisplayString(vintage), 11, ["onClick"]);
                }), 128)),
                uniqueVintages.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "filter-controls"
                }, [
                  uniqueVintages.value.length > displayLimits.value.vintage ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "show-toggle",
                    onClick: ($event) => loadMore("vintage")
                  }, " Mostra di pi\xF9 ", 8, ["onClick"])) : createCommentVNode("", true),
                  displayLimits.value.vintage > INITIAL_DISPLAY && uniqueVintages.value.length > INITIAL_DISPLAY ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "show-toggle",
                    onClick: ($event) => showLess("vintage")
                  }, " Mostra meno ", 8, ["onClick"])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f01fd4f3"]]);
const _sfc_main$2 = {
  name: "BannerCategory",
  components: {
    FilterComponent: __nuxt_component_0
  },
  setup() {
    const categoryStore = useCategoryStore();
    return {
      categoryStore
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FilterComponent = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-container" }, _attrs))} data-v-e8ddd2cd><h1 class="intestate-category" data-v-e8ddd2cd>${ssrInterpolate($setup.categoryStore.selectedCategory ? $setup.categoryStore.selectedCategory["category"].name : "Tutti")}</h1>`);
  _push(ssrRenderComponent(_component_FilterComponent, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerCategory.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e8ddd2cd"]]);
const _sfc_main$1 = defineComponent({
  name: "ListProduct",
  setup() {
    const categoryStore = useCategoryStore();
    const productStore = useProductStore();
    const cartStore = useCartStore();
    const filteredProductsState = computed(() => productStore.filteredProductsState);
    computed(() => productStore.searchQuery);
    const filteredProducts = computed(() => {
      return filteredProductsState.value;
    });
    const increaseQuantity = (product) => {
      cartStore.addProductToCart(product);
    };
    const decreaseQuantity = (product) => {
      const productId = product.id;
      const existingProduct = cartStore.cart.find((item) => item.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        cartStore.updateQuantity(productId, existingProduct.quantity - 1);
      } else {
        cartStore.removeProductFromCart(productId);
      }
    };
    const updateQuantity = (product, value) => {
      const quantity = parseInt(value, 10);
      if (!isNaN(quantity) && quantity > 0) {
        const existingItem = cartStore.cart.find((item) => item.id === product.id);
        if (existingItem) {
          cartStore.updateQuantity(product.id, quantity);
        } else {
          cartStore.addProductToCart({ ...product, quantity });
        }
      } else if (quantity === 0) {
        cartStore.removeProductFromCart(product.id);
      }
      cartTotal = cartStore.getCartTotal;
    };
    const validateQuantity = (product) => {
      const existingProduct = cartStore.cart.find((item) => item.id === product.id);
      if (!existingProduct || existingProduct.quantity <= 0) {
        cartStore.updateQuantity(product.id, 1);
        cartTotal = cartStore.getCartTotal;
      }
    };
    const getQuantity = (product) => {
      const productId = product.id;
      const existingProduct = cartStore.cart.find((item) => item.id === productId);
      return existingProduct ? existingProduct.quantity : 0;
    };
    let cartTotal = cartStore.getCartTotal;
    return {
      categoryStore,
      filteredProducts,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      validateQuantity,
      getQuantity,
      cartTotal
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c210a361><div class="list-product-header" data-v-c210a361> Prodotti: ${ssrInterpolate(_ctx.filteredProducts.length > 0 ? _ctx.filteredProducts.length : "Nessun prodotto")}</div><div class="list-product-container" data-v-c210a361>`);
  if (_ctx.filteredProducts.length > 0) {
    _push(`<ul data-v-c210a361><!--[-->`);
    ssrRenderList(_ctx.filteredProducts, (product) => {
      _push(`<li class="product-item" data-v-c210a361>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/product/${product.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row-item" data-v-c210a361${_scopeId}>${ssrInterpolate(product.name)} `);
            if (product.grape) {
              _push2(`<span data-v-c210a361${_scopeId}> - ${ssrInterpolate(product.grape)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="row-item" data-v-c210a361${_scopeId}>`);
            if (product.vintage) {
              _push2(`<span data-v-c210a361${_scopeId}>${ssrInterpolate(product.vintage)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (product.vintage && product.degrees) {
              _push2(`<span data-v-c210a361${_scopeId}> - </span>`);
            } else {
              _push2(`<!---->`);
            }
            if (product.degrees) {
              _push2(`<span data-v-c210a361${_scopeId}>${ssrInterpolate(product.degrees)}% vol. </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "row-item" }, [
                createTextVNode(toDisplayString(product.name) + " ", 1),
                product.grape ? (openBlock(), createBlock("span", { key: 0 }, " - " + toDisplayString(product.grape), 1)) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "row-item" }, [
                product.vintage ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(product.vintage), 1)) : createCommentVNode("", true),
                product.vintage && product.degrees ? (openBlock(), createBlock("span", { key: 1 }, " - ")) : createCommentVNode("", true),
                product.degrees ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(product.degrees) + "% vol. ", 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`<div class="row-item" data-v-c210a361><span class="row-item" data-v-c210a361><img class="icon-price"${ssrRenderAttr("src", _imports_2)} alt="icona che indica il prezzo" data-v-c210a361> ${ssrInterpolate(product.price)}</span><span class="counter" data-v-c210a361><span data-v-c210a361>-</span><span data-v-c210a361><input type="number"${ssrRenderAttr("value", _ctx.getQuantity(product))} class="input-quantity" data-v-c210a361></span><span data-v-c210a361>+</span></span></div></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListProductComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListProduct = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c210a361"]]);
const _sfc_main = {
  name: "home",
  components: {
    HeaderSearch: __nuxt_component_0$1,
    ListProduct,
    BannerCategory: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderSearch = __nuxt_component_0$1;
  const _component_BannerCategory = __nuxt_component_1;
  const _component_ListProduct = resolveComponent("ListProduct");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeaderSearch, null, null, _parent));
  _push(ssrRenderComponent(_component_BannerCategory, null, null, _parent));
  _push(ssrRenderComponent(_component_ListProduct, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-r43YzYLj.mjs.map
