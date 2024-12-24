import { L as Logo } from './LogoSection-Clcrpu7w.mjs';
import { defineComponent, useSSRContext, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { u as useProductStore, _ as _imports_0$1 } from './back_red-CxPRydMt.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { e as useCartStore, _ as _export_sfc } from './server.mjs';
import { defineStore } from 'pinia';
import { _ as _imports_2 } from './price-ISNscGNa.mjs';
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

const _sfc_main$5 = defineComponent({
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
const _imports_0 = "data:image/svg+xml,%3csvg%20width='25'%20height='26'%20viewBox='0%200%2025%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.168%2019.245C21.2279%2017.2026%2022.5103%2014.3759%2022.5103%2011.2524C22.5062%205.04839%2017.4605%200%2011.2551%200C5.04839%200%200%205.04839%200%2011.2551C0%2017.4619%205.04839%2022.5065%2011.2513%2022.5065C13.5879%2022.5065%2015.7572%2021.791%2017.5579%2020.568L22.8036%2026L24.2966%2024.5583L19.168%2019.245ZM2.07309%2011.2551C2.07309%206.19326%206.19156%202.0734%2011.2548%202.0734C16.3167%202.0734%2020.4327%206.19326%2020.4327%2011.2551C20.4327%2016.317%2016.3129%2020.433%2011.2548%2020.433C6.19537%2020.433%202.07309%2016.3146%202.07309%2011.2551Z'%20fill='%23757373'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2018%2027'%20style='enable-background:new%200%200%2018%2027;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st1{fill:%23757373;}%20%3c/style%3e%3cg%3e%3cpath%20class='st1'%20d='M8.8,18.2c-1.4,0-2.7-0.5-3.6-1.5c-1-1-1.5-2.3-1.5-3.7V5.2c0-1.4,0.5-2.7,1.5-3.7l0,0c1-1,2.3-1.5,3.6-1.5%20c1.4,0,2.7,0.5,3.6,1.5c1,1,1.5,2.3,1.5,3.7v7.7c0,1.4-0.5,2.7-1.5,3.7C11.4,17.6,10.2,18.2,8.8,18.2z%20M8.8,1.7%20c-0.9,0-1.8,0.4-2.4,1c-0.6,0.7-1,1.5-1,2.5v7.7c0,0.9,0.4,1.8,1,2.5c1.3,1.3,3.5,1.3,4.8,0l0,0c0.6-0.7,1-1.5,1-2.5V5.2%20c0-0.9-0.4-1.8-1-2.5S9.7,1.7,8.8,1.7z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st1'%20d='M8.4,21.6v-0.5l-0.5,0c-4.2-0.4-7.5-4-7.5-8.4h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1%20c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l0.2-0.4L1,12.3c0,0,0.1,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0%20c0,4.3,3.4,7.7,7.6,7.7c4.2,0,7.6-3.5,7.6-7.7h0l0,0c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0%20s0.1,0,0.1,0c0,0,0.1,0,0.1,0.1l0.4-0.3L17,12.4c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1h0v0c0,4.4-3.3,8-7.5,8.4l-0.5,0v0.5v3.6v0.5%20h0.5h3.4c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.1,0.1-0.2,0.1H4.5c-0.1,0-0.2,0-0.2-0.1%20c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.1-0.1,0.2-0.1h3.4h0.5v-0.5V21.6z'/%3e%3cpath%20class='st1'%20d='M4.5,27c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.2-0.4-0.2-0.6s0.1-0.4,0.2-0.6c0.2-0.2,0.4-0.3,0.6-0.3l3.4,0%20l0-3.6C3.4,21.2,0,17.3,0,12.7c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0.1,0,0.1,0l0-0.1l0.2,0.1%20c0.1,0,0.2,0,0.3,0.1l0,0.1l0-0.1c0.1,0,0.2,0.1,0.3,0.2l0.2,0.1l0,0.1c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.2,0.1,0.3%20c0,4,3.2,7.2,7.1,7.2c3.9,0,7.1-3.2,7.1-7.2c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2%20c0.2-0.1,0.3-0.1,0.5-0.1l0.1-0.1l0.3,0.3c0,0,0,0,0,0c0,0,0,0,0,0l0.3,0.3l-0.1,0.1c0,0.1,0,0.1,0,0.2c0,4.6-3.4,8.5-7.9,8.9v3.6%20h3.4c0.2,0,0.4,0.1,0.6,0.3c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6c-0.2,0.2-0.4,0.3-0.6,0.3H4.5z'/%3e%3c/g%3e%3c/svg%3e";
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "search-bar-container" }, _attrs))} data-v-077e19b2><img${ssrRenderAttr("src", _imports_0)} alt="icona lente che indica la ricerca testuale" class="search-text-icon" data-v-077e19b2><input${ssrRenderAttr("value", _ctx.searchQuery)} aria-label="barra di ricerca dei prodotti" type="text" placeholder="Cerca" class="search-bar" id="search-bar" data-v-077e19b2><button class="voice-search" data-v-077e19b2><img${ssrRenderAttr("src", _imports_1)} alt="icona microfono che indica la ricerca vocale" data-v-077e19b2></button></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SearcBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-077e19b2"]]);
const useCategoryStore = defineStore("category", {
  state: () => ({
    selectedCategory: null,
    selectedSubcategory: null
  }),
  actions: {
    setCategory(category) {
      this.selectedCategory = category;
      this.selectedSubcategory = null;
    },
    setSubcategory(subcategory) {
      this.selectedSubcategory = subcategory;
    },
    resetCategory() {
      this.selectedCategory = null;
      this.selectedSubcategory = null;
    }
  }
});
const _sfc_main$4 = defineComponent({
  name: "PillowCategoryComponent",
  setup() {
    const categoryStore = useCategoryStore();
    const { getCategories, getSubcategories, getFirstSubcategory } = useProductStore();
    const displayedCategories = computed(() => {
      return categoryStore.selectedCategory ? getSubcategories(categoryStore.selectedCategory) : getCategories;
    });
    const selectCategoryOrSubcategory = (item) => {
      if (!categoryStore.selectedCategory) {
        categoryStore.setCategory(item);
        const firstSub = getFirstSubcategory(item);
        if (firstSub) categoryStore.setSubcategory(firstSub);
      } else {
        categoryStore.setSubcategory(item);
      }
    };
    const isSelected = (item) => {
      return categoryStore.selectedCategory === item || categoryStore.selectedSubcategory === item;
    };
    return {
      categoryStore,
      displayedCategories,
      selectCategoryOrSubcategory,
      isSelected
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e14a4255><div class="categories-container" data-v-e14a4255><button class="${ssrRenderClass([{ "btn-selected": !_ctx.categoryStore.selectedCategory }, "btn"])}" data-v-e14a4255>`);
  if (_ctx.categoryStore.selectedCategory) {
    _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Indietro" data-v-e14a4255>`);
  } else {
    _push(`<!--[--> TUTTI <!--]-->`);
  }
  _push(`</button><!--[-->`);
  ssrRenderList(_ctx.displayedCategories, (item) => {
    _push(`<button class="${ssrRenderClass([{ "btn-selected": _ctx.isSelected(item) }, "btn"])}" data-v-e14a4255>${ssrInterpolate(item)}</button>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PillowCategoryComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const PillowCategories = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e14a4255"]]);
const _sfc_main$3 = {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderSearch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-a3b152eb"]]);
const _sfc_main$2 = {
  name: "BannerCategory",
  setup() {
    const categoryStore = useCategoryStore();
    return {
      categoryStore
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${ssrRenderAttrs(mergeProps({ class: "intestate-category" }, _attrs))} data-v-cccf886a>${ssrInterpolate($setup.categoryStore.selectedSubcategory ? $setup.categoryStore.selectedSubcategory : "Tutti")}</h1>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerCategory.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-cccf886a"]]);
const _sfc_main$1 = defineComponent({
  name: "ListProduct",
  setup() {
    const categoryStore = useCategoryStore();
    const productStore = useProductStore();
    const cartStore = useCartStore();
    const filteredProductsState = computed(() => productStore.filteredProductsState);
    const searchQuery = computed(() => productStore.searchQuery);
    const filteredProducts = computed(() => {
      let filtered = filteredProductsState.value.length > 0 ? filteredProductsState.value : productStore.products;
      if (categoryStore.selectedSubcategory || categoryStore.selectedCategory) {
        filtered = filtered.filter((product) => {
          if (categoryStore.selectedSubcategory) {
            return product.subcategory === categoryStore.selectedSubcategory;
          } else {
            return product.category === categoryStore.selectedCategory;
          }
        });
      }
      if (searchQuery.value) {
        filtered = filtered.filter(
          (product) => product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
      return filtered;
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-98fe0d7a><div class="list-product-container" data-v-98fe0d7a><ul data-v-98fe0d7a><!--[-->`);
  ssrRenderList(_ctx.filteredProducts, (product) => {
    _push(`<li class="product-item" data-v-98fe0d7a>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: `/product/${product.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="row-item" data-v-98fe0d7a${_scopeId}>${ssrInterpolate(product.name)} `);
          if (product.vigneto) {
            _push2(`<span data-v-98fe0d7a${_scopeId}> - ${ssrInterpolate(product.vigneto)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="row-item" data-v-98fe0d7a${_scopeId}>`);
          if (product.annata) {
            _push2(`<span data-v-98fe0d7a${_scopeId}>${ssrInterpolate(product.annata)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          if (product.annata && product.grado_alcolico) {
            _push2(`<span data-v-98fe0d7a${_scopeId}> - </span>`);
          } else {
            _push2(`<!---->`);
          }
          if (product.grado_alcolico) {
            _push2(`<span data-v-98fe0d7a${_scopeId}>${ssrInterpolate(product.grado_alcolico)}% vol. </span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "row-item" }, [
              createTextVNode(toDisplayString(product.name) + " ", 1),
              product.vigneto ? (openBlock(), createBlock("span", { key: 0 }, " - " + toDisplayString(product.vigneto), 1)) : createCommentVNode("", true)
            ]),
            createVNode("div", { class: "row-item" }, [
              product.annata ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(product.annata), 1)) : createCommentVNode("", true),
              product.annata && product.grado_alcolico ? (openBlock(), createBlock("span", { key: 1 }, " - ")) : createCommentVNode("", true),
              product.grado_alcolico ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(product.grado_alcolico) + "% vol. ", 1)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="row-item" data-v-98fe0d7a><span class="row-item" data-v-98fe0d7a><img class="icon-price"${ssrRenderAttr("src", _imports_2)} alt="icona che indica il prezzo" data-v-98fe0d7a> ${ssrInterpolate(product.price)}</span><span class="counter" data-v-98fe0d7a><span data-v-98fe0d7a>-</span><span data-v-98fe0d7a><input type="number"${ssrRenderAttr("value", _ctx.getQuantity(product))} class="input-quantity" data-v-98fe0d7a></span><span data-v-98fe0d7a>+</span></span></div></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListProductComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListProduct = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-98fe0d7a"]]);
const _sfc_main = {
  name: "home",
  components: {
    HeaderSearch: __nuxt_component_0,
    ListProduct,
    BannerCategory: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderSearch = __nuxt_component_0;
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
//# sourceMappingURL=index-Bkxopsy_.mjs.map
