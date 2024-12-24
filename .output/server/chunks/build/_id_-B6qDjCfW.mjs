import { ref, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useProductStore, _ as _imports_0 } from './back_red-CxPRydMt.mjs';
import { _ as _imports_2 } from './price-ISNscGNa.mjs';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, e as useCartStore } from './server.mjs';
import { B as ButtonComponent } from './ButtonComponent-BjhACGAW.mjs';
import { A as AccordionComponent } from './AccordionComponent-5BBXFhZN.mjs';
import 'pinia';
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
    const productId = route.params.id;
    const cartStore = useCartStore();
    const productStore = useProductStore();
    const product = productStore.products.find((p) => p.id === parseInt(productId));
    const increaseQuantity = (product2) => {
      if (product2.status) {
        cartStore.addProductToCart(product2);
      }
      cartStore.getCartTotal;
    };
    const increaseQuantityAdd = (product2) => {
      if (getQuantity(product2) === 0 && product2.status) {
        cartStore.addProductToCart(product2);
      }
      cartStore.getCartTotal;
    };
    const decreaseQuantity = (product2) => {
      const productId2 = product2.id;
      const existingProduct = cartStore.cart.find((item) => item.id === productId2);
      if (existingProduct && existingProduct.quantity > 0) {
        cartStore.updateQuantity(productId2, existingProduct.quantity - 1);
        cartStore.getCartTotal;
      }
    };
    const updateQuantity = (product2, value) => {
      const quantity = parseInt(value, 10);
      if (!isNaN(quantity) && quantity > 0) {
        const existingItem = cartStore.cart.find((item) => item.id === product2.id);
        if (existingItem) {
          cartStore.updateQuantity(product2.id, quantity);
        } else {
          cartStore.addProductToCart({ ...product2, quantity });
        }
      } else if (quantity === 0) {
        cartStore.removeProductFromCart(product2.id);
      }
      cartStore.getCartTotal;
    };
    const validateQuantity = (product2) => {
      const existingProduct = cartStore.cart.find((item) => item.id === product2.id);
      if (!existingProduct || existingProduct.quantity <= 0) {
        cartStore.updateQuantity(product2.id, 1);
        cartStore.getCartTotal;
      }
    };
    const getQuantity = (product2) => {
      const productId2 = product2.id;
      const existingProduct = cartStore.cart.find((item) => item.id === productId2);
      return existingProduct ? existingProduct.quantity : 0;
    };
    cartStore.getCartTotal;
    const isCopied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-product-page" }, _attrs))} data-v-9d74d74f><div class="header-product" data-v-9d74d74f>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "btnBack",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="icona del tasto indietro" data-v-9d74d74f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "icona del tasto indietro"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="img-container" data-v-9d74d74f><img class="img-product"${ssrRenderAttr("src", unref(product).img)}${ssrRenderAttr("alt", unref(product).name)} data-v-9d74d74f></div><button class="btn btn-primary" data-v-9d74d74f><img${ssrRenderAttr("src", _imports_1)} alt="icona di condivisione" data-v-9d74d74f></button></div><div class="card-content" data-v-9d74d74f><h2 data-v-9d74d74f>${ssrInterpolate(unref(product).name)} - produttore</h2><p data-v-9d74d74f>${ssrInterpolate(unref(product).vigneto ? unref(product).vigneto : "vigneto N/A")} ${ssrInterpolate(unref(product).annata ? unref(product).annata : "anno N/A")} - ${ssrInterpolate(unref(product).grado_alcolico ? unref(product).grado_alcolico : "N/A")}% vol.</p><div class="info-container" data-v-9d74d74f><div class="price" data-v-9d74d74f><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon" data-v-9d74d74f><p data-v-9d74d74f>${ssrInterpolate(unref(product).price)}</p></div><div class="format" data-v-9d74d74f><img${ssrRenderAttr("src", _imports_3)} alt="" class="icon" data-v-9d74d74f><p data-v-9d74d74f>75cl</p></div></div><div class="container-actions" data-v-9d74d74f><span class="counter" data-v-9d74d74f><span data-v-9d74d74f>-</span><span data-v-9d74d74f><input type="number"${ssrRenderAttr("value", getQuantity(unref(product)))} class="input-quantity" data-v-9d74d74f></span><span data-v-9d74d74f>+</span></span>`);
      if (unref(product).status == "true") {
        _push(`<span data-v-9d74d74f>`);
        _push(ssrRenderComponent(ButtonComponent, {
          isLink: "true",
          link: "/cart",
          color: "var(--background)",
          width: "100%",
          onClick: ($event) => increaseQuantityAdd(unref(product))
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
      _push(`</div></div><div class="container-status" data-v-9d74d74f>`);
      if (unref(product).status == "true") {
        _push(`<div data-v-9d74d74f><span class="green-ball" data-v-9d74d74f></span><span data-v-9d74d74f>disponibile</span></div>`);
      } else {
        _push(`<div data-v-9d74d74f><span class="red-ball" data-v-9d74d74f></span><span data-v-9d74d74f>non disponibile</span></div>`);
      }
      _push(`</div><div class="container-accordion" data-v-9d74d74f>`);
      _push(ssrRenderComponent(AccordionComponent, {
        title: "Descrizione",
        content: "Qui andr\xE0 la descrizione del vino"
      }, null, _parent));
      _push(ssrRenderComponent(AccordionComponent, {
        title: "Scheda tecnica",
        content: "Qui andranno i dati del vino"
      }, null, _parent));
      _push(`</div>`);
      if (unref(productStore).products.filter((p) => p.price < unref(product).price && p.category === unref(product).category)) {
        _push(`<div data-v-9d74d74f><h3 class="title-other-products" data-v-9d74d74f>Guarda Anche:</h3><ul class="other-products" data-v-9d74d74f><!--[-->`);
        ssrRenderList(unref(productStore).products.filter((p) => p.price < unref(product).price && p.category === unref(product).category), (filteredProduct) => {
          _push(`<li class="card-other-products" data-v-9d74d74f>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: "/product/" + filteredProduct.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h2 data-v-9d74d74f${_scopeId}>${ssrInterpolate(filteredProduct.name)} - produttore</h2><p data-v-9d74d74f${_scopeId}>${ssrInterpolate(filteredProduct.vigneto ? filteredProduct.vigneto : "vigneto N/A")} ${ssrInterpolate(filteredProduct.annata ? filteredProduct.annata : "anno N/A")} - ${ssrInterpolate(filteredProduct.grado_alcolico ? filteredProduct.grado_alcolico : "N/A")}% vol.</p><div class="info-container" data-v-9d74d74f${_scopeId}><div class="price" data-v-9d74d74f${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon" data-v-9d74d74f${_scopeId}><p data-v-9d74d74f${_scopeId}>${ssrInterpolate(filteredProduct.price)}</p></div><span class="counter" data-v-9d74d74f${_scopeId}><span data-v-9d74d74f${_scopeId}>-</span><span data-v-9d74d74f${_scopeId}><input type="number"${ssrRenderAttr("value", getQuantity(filteredProduct))} class="input-quantity" data-v-9d74d74f${_scopeId}></span><span data-v-9d74d74f${_scopeId}>+</span></span></div>`);
              } else {
                return [
                  createVNode("h2", null, toDisplayString(filteredProduct.name) + " - produttore", 1),
                  createVNode("p", null, toDisplayString(filteredProduct.vigneto ? filteredProduct.vigneto : "vigneto N/A") + " " + toDisplayString(filteredProduct.annata ? filteredProduct.annata : "anno N/A") + " - " + toDisplayString(filteredProduct.grado_alcolico ? filteredProduct.grado_alcolico : "N/A") + "% vol.", 1),
                  createVNode("div", { class: "info-container" }, [
                    createVNode("div", { class: "price" }, [
                      createVNode("img", {
                        src: _imports_2,
                        alt: "",
                        class: "icon"
                      }),
                      createVNode("p", null, toDisplayString(filteredProduct.price), 1)
                    ]),
                    createVNode("span", { class: "counter" }, [
                      createVNode("span", {
                        onClick: ($event) => decreaseQuantity(unref(product))
                      }, "-", 8, ["onClick"]),
                      createVNode("span", null, [
                        createVNode("input", {
                          type: "number",
                          value: getQuantity(filteredProduct),
                          onInput: ($event) => updateQuantity(filteredProduct, $event.target.value),
                          onBlur: ($event) => validateQuantity(filteredProduct),
                          class: "input-quantity"
                        }, null, 40, ["value", "onInput", "onBlur"])
                      ]),
                      createVNode("span", {
                        onClick: ($event) => increaseQuantity(filteredProduct)
                      }, "+", 8, ["onClick"])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isCopied)) {
        _push(`<div class="link-copied" data-v-9d74d74f><p data-v-9d74d74f>Link copiato negli appunti!</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d74d74f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-B6qDjCfW.mjs.map
