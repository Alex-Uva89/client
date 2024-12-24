import { resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_1 } from './price-BtEUJ4pC.mjs';
import { useRoute } from 'vue-router';
import { u as useProductStore } from './productStore-B0kvHoIu.mjs';
import { _ as _export_sfc, e as useCartStore } from './server.mjs';
import { B as ButtonComponent } from './ButtonComponent-ChpXjk40.mjs';
import { A as AccordionComponent } from './AccordionComponent-BhquGMKD.mjs';
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

const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2029%2029'%20style='enable-background:new%200%200%2029%2029;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2374121D;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M14.5,28C21.9,28,28,21.9,28,14.5S21.9,1,14.5,1S1,7.1,1,14.5S7.1,28,14.5,28z%20M14.5,2.1%20c6.9,0,12.4,5.6,12.4,12.4c0,6.9-5.6,12.4-12.4,12.4c-6.9,0-12.4-5.6-12.4-12.4C2.1,7.6,7.6,2.1,14.5,2.1z'/%3e%3cpath%20class='st0'%20d='M14.5,28.5c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S22.2,28.5,14.5,28.5z%20M14.5,1.5%20c-7.2,0-13,5.8-13,13c0,7.2,5.8,13,13,13c7.2,0,13-5.8,13-13C27.5,7.3,21.7,1.5,14.5,1.5z%20M14.5,27.4c-7.1,0-12.9-5.8-12.9-12.9%20c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9C27.4,21.6,21.6,27.4,14.5,27.4z%20M14.5,2.6C7.9,2.6,2.6,7.9,2.6,14.5%20s5.4,11.9,11.9,11.9c6.6,0,11.9-5.4,11.9-11.9S21.1,2.6,14.5,2.6z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M8,15h13.8c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H8c-0.3,0-0.5,0.2-0.5,0.5C7.5,14.8,7.7,15,8,15z'/%3e%3cpath%20class='st0'%20d='M21.8,15.5H8c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h13.8c0.6,0,1,0.5,1,1C22.9,15.1,22.4,15.5,21.8,15.5z%20M8,14.5%20L8,14.5l13.8,0.1L8,14.5z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M11.9,19.2c0.2,0,0.3-0.1,0.4-0.2c0.2-0.2,0.1-0.6-0.1-0.7l-1.6-1.3L8,14.5l4.4-3.8c0.2-0.2,0.2-0.5,0.1-0.7%20c-0.2-0.2-0.5-0.2-0.7-0.1l-4.8,4.2c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2,0.1,0.3,0.2,0.4l3.1,2.8l1.7,1.3%20C11.7,19.1,11.8,19.2,11.9,19.2z'/%3e%3cpath%20class='st0'%20d='M11.9,19.7c-0.2,0-0.5-0.1-0.6-0.2l-1.7-1.3l-3.1-2.8c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.4-0.8l4.8-4.2%20c0.4-0.4,1.1-0.3,1.5,0.1c0.4,0.4,0.3,1.1-0.1,1.5l-3.9,3.4l2.2,2l1.6,1.3c0.4,0.4,0.5,1,0.2,1.4C12.5,19.5,12.3,19.7,11.9,19.7z%20M12,10.4l-4.9,4.1l3.1,2.8l1.7,1.3c0,0,0,0,0,0l-1.7-1.3l-2.7-2.4c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1,0.1-0.3,0.2-0.4L12,10.4z'/%3e%3c/g%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='7'%20height='26'%20viewBox='0%200%207%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.85752%208.70369C5.68746%208.24234%205.08046%207.86573%204.70385%207.47734C4.32753%207.08867%204.35166%206.57877%204.35166%206.57877L4.30723%205.44569H4.32135C4.32135%205.44569%204.18777%201.56009%204.21219%201.21996C4.26074%201.14699%204.29722%201.00135%204.29722%201.00135C4.29722%201.00135%204.29722%200.867769%204.29722%200.710062C4.29722%200.552355%204.2728%200.418775%204.22426%200.297258C4.22426%20-0.0669985%203.65345%200.00597038%203.65345%200.00597038H3.08853H3.06028H2.49536C2.49536%200.00597038%201.92456%20-0.0669985%201.92456%200.297258C1.87601%200.418775%201.85159%200.552355%201.85159%200.710062C1.85159%200.867769%201.85159%201.00135%201.85159%201.00135C1.85159%201.00135%201.88807%201.14699%201.93662%201.21996C1.96104%201.56009%201.82746%205.44569%201.82746%205.44569H1.84158L1.79715%206.57877C1.79715%206.57877%201.82158%207.08867%201.44496%207.47734C1.06864%207.86602%200.461352%208.24234%200.291288%208.70369C0.121223%209.16504%200%209.20153%200%2011.7878C0%2014.3741%200.121517%2025.1082%200.121517%2025.1082C0.121517%2025.1082%200.145938%2025.6666%200.752934%2025.7761C1.28225%2025.8714%201.77509%2026.0126%203.07441%2025.9991C4.37402%2026.0126%204.86685%2025.8714%205.39617%2025.7761C6.00317%2025.6669%206.02759%2025.1082%206.02759%2025.1082C6.02759%2025.1082%206.14911%2014.3741%206.14911%2011.7878C6.14911%209.20153%206.02759%209.16504%205.85752%208.70369Z'%20fill='%2374121D'/%3e%3c/svg%3e";
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-product-page" }, _attrs))} data-v-a140b5b2><div class="header-product" data-v-a140b5b2>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "btnBack",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="icona del tasto indietro" data-v-a140b5b2${_scopeId}>`);
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
      _push(`<div class="img-container" data-v-a140b5b2><img class="img-product"${ssrRenderAttr("src", unref(product).img)}${ssrRenderAttr("alt", unref(product).name)} data-v-a140b5b2></div><button class="btn btn-primary" data-v-a140b5b2> condividi </button></div><div class="card-content" data-v-a140b5b2><h2 data-v-a140b5b2>${ssrInterpolate(unref(product).name)} - produttore</h2><p data-v-a140b5b2>${ssrInterpolate(unref(product).vigneto ? unref(product).vigneto : "vigneto N/A")} ${ssrInterpolate(unref(product).annata ? unref(product).annata : "anno N/A")} - ${ssrInterpolate(unref(product).grado_alcolico ? unref(product).grado_alcolico : "N/A")}% vol.</p><div class="info-container" data-v-a140b5b2><div class="price" data-v-a140b5b2><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon" data-v-a140b5b2><p data-v-a140b5b2>${ssrInterpolate(unref(product).price)}</p></div><div class="format" data-v-a140b5b2><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon" data-v-a140b5b2><p data-v-a140b5b2>75cl</p></div></div><div class="container-actions" data-v-a140b5b2><span class="counter" data-v-a140b5b2><span data-v-a140b5b2>-</span><span data-v-a140b5b2><input type="number"${ssrRenderAttr("value", getQuantity(unref(product)))} class="input-quantity" data-v-a140b5b2></span><span data-v-a140b5b2>+</span></span>`);
      if (unref(product).status == "true") {
        _push(`<span data-v-a140b5b2>`);
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
      _push(`</div></div><div class="container-status" data-v-a140b5b2>`);
      if (unref(product).status == "true") {
        _push(`<div data-v-a140b5b2><span class="green-ball" data-v-a140b5b2></span><span data-v-a140b5b2>disponibile</span></div>`);
      } else {
        _push(`<div data-v-a140b5b2><span class="red-ball" data-v-a140b5b2></span><span data-v-a140b5b2>non disponibile</span></div>`);
      }
      _push(`</div><div class="container-accordion" data-v-a140b5b2>`);
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
        _push(`<div data-v-a140b5b2><h3 class="title-other-products" data-v-a140b5b2>Guarda Anche:</h3><ul class="other-products" data-v-a140b5b2><!--[-->`);
        ssrRenderList(unref(productStore).products.filter((p) => p.price < unref(product).price && p.category === unref(product).category), (filteredProduct) => {
          _push(`<li class="card-other-products" data-v-a140b5b2>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: "/product/" + filteredProduct.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h2 data-v-a140b5b2${_scopeId}>${ssrInterpolate(filteredProduct.name)} - produttore</h2><p data-v-a140b5b2${_scopeId}>${ssrInterpolate(filteredProduct.vigneto ? filteredProduct.vigneto : "vigneto N/A")} ${ssrInterpolate(filteredProduct.annata ? filteredProduct.annata : "anno N/A")} - ${ssrInterpolate(filteredProduct.grado_alcolico ? filteredProduct.grado_alcolico : "N/A")}% vol.</p><div class="info-container" data-v-a140b5b2${_scopeId}><div class="price" data-v-a140b5b2${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon" data-v-a140b5b2${_scopeId}><p data-v-a140b5b2${_scopeId}>${ssrInterpolate(filteredProduct.price)}</p></div><span class="counter" data-v-a140b5b2${_scopeId}><span data-v-a140b5b2${_scopeId}>-</span><span data-v-a140b5b2${_scopeId}><input type="number"${ssrRenderAttr("value", getQuantity(unref(product)))} class="input-quantity" data-v-a140b5b2${_scopeId}></span><span data-v-a140b5b2${_scopeId}>+</span></span></div>`);
              } else {
                return [
                  createVNode("h2", null, toDisplayString(filteredProduct.name) + " - produttore", 1),
                  createVNode("p", null, toDisplayString(filteredProduct.vigneto ? filteredProduct.vigneto : "vigneto N/A") + " " + toDisplayString(filteredProduct.annata ? filteredProduct.annata : "anno N/A") + " - " + toDisplayString(filteredProduct.grado_alcolico ? filteredProduct.grado_alcolico : "N/A") + "% vol.", 1),
                  createVNode("div", { class: "info-container" }, [
                    createVNode("div", { class: "price" }, [
                      createVNode("img", {
                        src: _imports_1,
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
                          value: getQuantity(unref(product)),
                          onInput: ($event) => updateQuantity(unref(product), $event.target.value),
                          onBlur: ($event) => validateQuantity(unref(product)),
                          class: "input-quantity"
                        }, null, 40, ["value", "onInput", "onBlur"])
                      ]),
                      createVNode("span", {
                        onClick: ($event) => increaseQuantity(unref(product))
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a140b5b2"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Dps975wL.mjs.map
