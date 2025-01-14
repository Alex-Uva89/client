import { ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useProductStore, _ as _imports_0 } from './back_red-BlvYJxpW.mjs';
import { _ as _imports_2 } from './price-ISNscGNa.mjs';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, u as useRouter, e as useCartStore } from './server.mjs';
import { B as ButtonComponent } from './ButtonComponent-B4eFiwKe.mjs';
import { A as AccordionComponent } from './AccordionComponent-CywX46DP.mjs';
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

const _imports_1 = "data:image/svg+xml,%3csvg%20width='23'%20height='26'%20viewBox='0%200%2023%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.999%2022.1759C22.999%2024.2869%2021.477%2026%2019.6163%2026C17.749%2026%2016.2336%2024.2869%2016.2336%2022.1759C16.2336%2021.7479%2016.3078%2021.3425%2016.4229%2020.9597L8.17773%2015.5237C7.33875%2016.7088%206.04697%2017.4734%204.59246%2017.4734C2.06306%2017.4734%200%2015.1484%200%2012.2816C0%209.41361%202.06323%207.08986%204.59246%207.08986C6.14867%207.08986%207.52803%207.96951%208.36037%209.30726L16.3555%204.80375C16.2822%204.48868%2016.2347%204.16821%2016.2347%203.82409C16.2347%201.71315%2017.75%200%2019.6173%200C21.4779%200%2023%201.71306%2023%203.82409C23%205.93512%2021.478%207.64818%2019.6173%207.64818C18.5348%207.64818%2017.5884%207.06748%2016.9652%206.17278L8.96353%2010.6763C9.11193%2011.1806%209.19373%2011.7237%209.19373%2012.2818C9.19373%2012.9625%209.07197%2013.6045%208.8627%2014.2013L17.1079%2019.6384C17.7224%2018.8577%2018.6156%2018.3533%2019.6163%2018.3533C21.4769%2018.3533%2022.999%2020.0664%2022.999%2022.1763L22.999%2022.1759Z'%20fill='%2374121D'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='7'%20height='26'%20viewBox='0%200%207%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.85752%208.70369C5.68746%208.24234%205.08046%207.86573%204.70385%207.47734C4.32753%207.08867%204.35166%206.57877%204.35166%206.57877L4.30723%205.44569H4.32135C4.32135%205.44569%204.18777%201.56009%204.21219%201.21996C4.26074%201.14699%204.29722%201.00135%204.29722%201.00135C4.29722%201.00135%204.29722%200.867769%204.29722%200.710062C4.29722%200.552355%204.2728%200.418775%204.22426%200.297258C4.22426%20-0.0669985%203.65345%200.00597038%203.65345%200.00597038H3.08853H3.06028H2.49536C2.49536%200.00597038%201.92456%20-0.0669985%201.92456%200.297258C1.87601%200.418775%201.85159%200.552355%201.85159%200.710062C1.85159%200.867769%201.85159%201.00135%201.85159%201.00135C1.85159%201.00135%201.88807%201.14699%201.93662%201.21996C1.96104%201.56009%201.82746%205.44569%201.82746%205.44569H1.84158L1.79715%206.57877C1.79715%206.57877%201.82158%207.08867%201.44496%207.47734C1.06864%207.86602%200.461352%208.24234%200.291288%208.70369C0.121223%209.16504%200%209.20153%200%2011.7878C0%2014.3741%200.121517%2025.1082%200.121517%2025.1082C0.121517%2025.1082%200.145938%2025.6666%200.752934%2025.7761C1.28225%2025.8714%201.77509%2026.0126%203.07441%2025.9991C4.37402%2026.0126%204.86685%2025.8714%205.39617%2025.7761C6.00317%2025.6669%206.02759%2025.1082%206.02759%2025.1082C6.02759%2025.1082%206.14911%2014.3741%206.14911%2011.7878C6.14911%209.20153%206.02759%209.16504%205.85752%208.70369Z'%20fill='%2374121D'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    route.params.id;
    const cartStore = useCartStore();
    const productStore = useProductStore();
    const product = ref(null);
    const increaseQuantityAdd = (item) => {
      if (getQuantity(item) === 0 && item) {
        cartStore.addProductToCart(item);
      }
      cartStore.getCartTotal;
    };
    const getQuantity = (item) => {
      const productId2 = item.id;
      const existingProduct = cartStore.cart.find((i) => i.id === productId2);
      return existingProduct ? existingProduct.quantity : 0;
    };
    cartStore.getCartTotal;
    const isCopied = ref(false);
    const hasData = computed(() => {
      if (!product.value) return false;
      return !!(product.value.vintage || product.value.degrees || product.value.producer || product.value.grape);
    });
    watch(
      () => route.params.id,
      async (newId) => {
        product.value = productStore.products.find((p) => p.id === parseInt(newId));
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (product.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-product-page" }, _attrs))} data-v-ab3f1ff9><div class="header-product" data-v-ab3f1ff9><button class="btnBack" data-v-ab3f1ff9><img${ssrRenderAttr("src", _imports_0)} alt="icona del tasto indietro" data-v-ab3f1ff9></button><div class="img-container" data-v-ab3f1ff9><img class="img-product"${ssrRenderAttr("src", product.value.image)}${ssrRenderAttr("alt", product.value.name)} data-v-ab3f1ff9></div><button class="btn btn-primary" data-v-ab3f1ff9><img${ssrRenderAttr("src", _imports_1)} alt="icona di condivisione" data-v-ab3f1ff9></button></div><div class="card-content" data-v-ab3f1ff9><h2 data-v-ab3f1ff9>${ssrInterpolate(product.value.name)} `);
        if (product.value.producer) {
          _push(`<span data-v-ab3f1ff9>- ${ssrInterpolate(product.value.producer)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h2><p class="product-info" data-v-ab3f1ff9>`);
        if (product.value.grape) {
          _push(`<span data-v-ab3f1ff9>${ssrInterpolate(product.value.grape)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (product.value.vintage) {
          _push(`<span data-v-ab3f1ff9>${ssrInterpolate(product.value.vintage)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (product.value.degrees && product.value.vintage || product.value.degrees && product.value.grape) {
          _push(`<span data-v-ab3f1ff9> - </span>`);
        } else {
          _push(`<!---->`);
        }
        if (product.value.degrees) {
          _push(`<span data-v-ab3f1ff9>${ssrInterpolate(product.value.degrees)}% vol.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><div class="info-container" data-v-ab3f1ff9><div class="price" data-v-ab3f1ff9><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon" data-v-ab3f1ff9><p data-v-ab3f1ff9>${ssrInterpolate(product.value.price)}</p></div><div class="format" data-v-ab3f1ff9><img${ssrRenderAttr("src", _imports_3)} alt="" class="icon" data-v-ab3f1ff9><p data-v-ab3f1ff9>75cl</p></div></div><div class="container-actions" data-v-ab3f1ff9><span class="counter" data-v-ab3f1ff9><span data-v-ab3f1ff9>-</span><span data-v-ab3f1ff9><input type="number"${ssrRenderAttr("value", getQuantity(product.value))} class="input-quantity" data-v-ab3f1ff9></span><span data-v-ab3f1ff9>+</span></span>`);
        if (product.value.status == "true") {
          _push(`<span data-v-ab3f1ff9>`);
          _push(ssrRenderComponent(ButtonComponent, {
            isLink: "true",
            link: "/cart",
            color: "var(--background)",
            width: "100%",
            onClick: ($event) => increaseQuantityAdd(product.value)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Aggiungi al carrello `);
              } else {
                return [
                  createTextVNode(" Aggiungi al carrello ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="container-status" data-v-ab3f1ff9>`);
        if (product.value.status == "true") {
          _push(`<div data-v-ab3f1ff9><span class="green-ball" data-v-ab3f1ff9></span><span data-v-ab3f1ff9>disponibile</span></div>`);
        } else {
          _push(`<div data-v-ab3f1ff9><span class="red-ball" data-v-ab3f1ff9></span><span data-v-ab3f1ff9>non disponibile</span></div>`);
        }
        _push(`</div><div class="container-accordion" data-v-ab3f1ff9>`);
        if (product.value.description) {
          _push(ssrRenderComponent(AccordionComponent, { title: "Descrizione" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.description)}</p>`);
              } else {
                return [
                  createVNode("p", null, toDisplayString(product.value.description), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (hasData.value) {
          _push(ssrRenderComponent(AccordionComponent, {
            title: "Scheda tecnica",
            content: "Qui andranno i dati del vino"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<ul class="technical-data" data-v-ab3f1ff9${_scopeId}>`);
                if (product.value.vintage) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Annata</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.vintage)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Grado alcolico</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.degrees ? product.value.degrees : "N/A")}% vol.</p></li>`);
                if (product.value.producer) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Produttore</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.producer)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.value.grape) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Vitigno</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.grape)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.value.format) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Formato</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.format)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.value.origin) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Origine</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.origin)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.value.flavour) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Gusto</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.flavour)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.value.subcategory) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Colore</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.subcategory)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                if (product.value.production_method) {
                  _push2(`<li class="technical-data-item" data-v-ab3f1ff9${_scopeId}><p data-v-ab3f1ff9${_scopeId}>Metodo di produzione</p><p data-v-ab3f1ff9${_scopeId}>${ssrInterpolate(product.value.production_method)}</p></li>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</ul>`);
              } else {
                return [
                  createVNode("ul", { class: "technical-data" }, [
                    product.value.vintage ? (openBlock(), createBlock("li", {
                      key: 0,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Annata"),
                      createVNode("p", null, toDisplayString(product.value.vintage), 1)
                    ])) : createCommentVNode("", true),
                    createVNode("li", { class: "technical-data-item" }, [
                      createVNode("p", null, "Grado alcolico"),
                      createVNode("p", null, toDisplayString(product.value.degrees ? product.value.degrees : "N/A") + "% vol.", 1)
                    ]),
                    product.value.producer ? (openBlock(), createBlock("li", {
                      key: 1,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Produttore"),
                      createVNode("p", null, toDisplayString(product.value.producer), 1)
                    ])) : createCommentVNode("", true),
                    product.value.grape ? (openBlock(), createBlock("li", {
                      key: 2,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Vitigno"),
                      createVNode("p", null, toDisplayString(product.value.grape), 1)
                    ])) : createCommentVNode("", true),
                    product.value.format ? (openBlock(), createBlock("li", {
                      key: 3,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Formato"),
                      createVNode("p", null, toDisplayString(product.value.format), 1)
                    ])) : createCommentVNode("", true),
                    product.value.origin ? (openBlock(), createBlock("li", {
                      key: 4,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Origine"),
                      createVNode("p", null, toDisplayString(product.value.origin), 1)
                    ])) : createCommentVNode("", true),
                    product.value.flavour ? (openBlock(), createBlock("li", {
                      key: 5,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Gusto"),
                      createVNode("p", null, toDisplayString(product.value.flavour), 1)
                    ])) : createCommentVNode("", true),
                    product.value.subcategory ? (openBlock(), createBlock("li", {
                      key: 6,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Colore"),
                      createVNode("p", null, toDisplayString(product.value.subcategory), 1)
                    ])) : createCommentVNode("", true),
                    product.value.production_method ? (openBlock(), createBlock("li", {
                      key: 7,
                      class: "technical-data-item"
                    }, [
                      createVNode("p", null, "Metodo di produzione"),
                      createVNode("p", null, toDisplayString(product.value.production_method), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(productStore).products.filter((p) => p.price < product.value.price && p.category_id === product.value.category_id)) {
          _push(`<div data-v-ab3f1ff9><h3 class="title-other-products" data-v-ab3f1ff9>Guarda Anche:</h3><ul class="other-products" data-v-ab3f1ff9><!--[-->`);
          ssrRenderList(unref(productStore).products.filter((p) => p.price > p.price > product.value.price && p.grape === product.value.grape && p.producer === product.value.producer && p.id != product.value.id || product.value.price && p.producer === product.value.producer && p.id != product.value.id || p.price > product.value.price && p.grape === product.value.grape && p.id != product.value.id).slice(0, 4), (filteredProduct) => {
            _push(`<li class="card-other-products" data-v-ab3f1ff9><div class="link-product" data-v-ab3f1ff9><div data-v-ab3f1ff9><h2 data-v-ab3f1ff9>${ssrInterpolate(filteredProduct.name)} `);
            if (filteredProduct.producer) {
              _push(`<span data-v-ab3f1ff9>- ${ssrInterpolate(filteredProduct.producer)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</h2><p class="product-info" data-v-ab3f1ff9>`);
            if (filteredProduct.grape) {
              _push(`<span data-v-ab3f1ff9>${ssrInterpolate(filteredProduct.grape)}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (filteredProduct.vintage) {
              _push(`<span data-v-ab3f1ff9>${ssrInterpolate(filteredProduct.vintage)}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (filteredProduct.degrees && filteredProduct.vintage || filteredProduct.degrees && filteredProduct.grape) {
              _push(`<span data-v-ab3f1ff9> - </span>`);
            } else {
              _push(`<!---->`);
            }
            if (filteredProduct.degrees) {
              _push(`<span data-v-ab3f1ff9>${ssrInterpolate(filteredProduct.degrees)}% vol.</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</p></div></div><div class="info-container" data-v-ab3f1ff9><div class="price" data-v-ab3f1ff9><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon" data-v-ab3f1ff9><p data-v-ab3f1ff9>${ssrInterpolate(filteredProduct.price)}</p></div><span class="counter" data-v-ab3f1ff9><span data-v-ab3f1ff9>-</span><span data-v-ab3f1ff9><input type="number"${ssrRenderAttr("value", getQuantity(filteredProduct))} class="input-quantity" data-v-ab3f1ff9></span><span data-v-ab3f1ff9>+</span></span></div></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (isCopied.value) {
          _push(`<div class="link-copied" data-v-ab3f1ff9><p data-v-ab3f1ff9>Link copiato negli appunti!</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab3f1ff9"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-5Awz9q70.mjs.map
