import { useSSRContext, ref, resolveComponent, unref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './price-BtEUJ4pC.mjs';
import { B as ButtonComponent } from './ButtonComponent-4mZRffST.mjs';
import { u as useCartStore } from './cartStore-Cbt4EuRL.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2026%2028'%20style='enable-background:new%200%200%2026%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23757373;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M16.9,28H8.6c-1.8,0-2.7,0-3.5-0.4c-0.7-0.4-1.3-1-1.7-1.7c-0.4-0.8-0.4-1.8-0.4-3.5v-16H1c-0.6,0-1-0.4-1-1%20s0.4-1,1-1h4.9c0-0.9,0.1-1.4,0.3-1.9c0.4-1,1.2-1.7,2.1-2.1C9,0,9.8,0,11.3,0h2.9c1.5,0,2.2,0,3,0.3c1,0.4,1.7,1.1,2.1,2.1%20c0.2,0.5,0.3,1.1,0.3,1.9h4.9c0.6,0,1,0.4,1,1s-0.4,1-1,1h-1.9v16c0,1.7,0,2.7-0.4,3.5c-0.4,0.7-1,1.3-1.7,1.7%20C19.6,28,18.7,28,16.9,28z%20M4.9,6.3v16c0,1.4,0,2.2,0.2,2.6c0.2,0.4,0.5,0.6,0.8,0.8C6.4,26,7.2,26,8.6,26h8.2c1.4,0,2.2,0,2.6-0.2%20c0.4-0.2,0.7-0.5,0.8-0.8c0.2-0.4,0.2-1.2,0.2-2.6v-16H4.9z%20M7.9,4.3h9.8c0-0.6,0-0.9-0.1-1.2c-0.2-0.5-0.6-0.8-1-1%20C16.1,2,15.4,2,14.2,2h-2.9c-1.2,0-1.9,0-2.2,0.1c-0.5,0.2-0.8,0.6-1,1C7.9,3.4,7.9,3.8,7.9,4.3z%20M15.7,22.2c-0.6,0-1-0.4-1-1V11.1%20c0-0.6,0.4-1,1-1s1,0.4,1,1v10.1C16.7,21.8,16.3,22.2,15.7,22.2z%20M9.8,22.2c-0.6,0-1-0.4-1-1V11.1c0-0.6,0.4-1,1-1s1,0.4,1,1v10.1%20C10.8,21.8,10.4,22.2,9.8,22.2z'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main = {
  __name: "ListCartComponent",
  __ssrInlineRender: true,
  props: {
    cartActions: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const cartStore = useCartStore();
    const isModalOpen = ref(false);
    const productToDelete = ref(null);
    const getQuantity = (product) => {
      const productId = product.id;
      const existingProduct = cartStore.cart.find((item) => item.id === productId);
      return existingProduct ? existingProduct.quantity : 0;
    };
    const cartWithDetails = cartStore.getCartWithDetails;
    let cartTotal = cartStore.getCartTotal;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      if (unref(cartTotal).toFixed(2) > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-cart" }, _attrs))} data-v-f08a8c7f><ul class="list-product-container" data-v-f08a8c7f><!--[-->`);
        ssrRenderList(unref(cartWithDetails), (product) => {
          _push(`<li class="product-item" data-v-f08a8c7f>`);
          if (getQuantity(product) > 0) {
            _push(`<!--[--><div class="row-item" data-v-f08a8c7f>${ssrInterpolate(product.name)} `);
            if (product.vigneto) {
              _push(`<span data-v-f08a8c7f> - ${ssrInterpolate(product.vigneto)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="row-item" data-v-f08a8c7f>`);
            if (product.annata) {
              _push(`<span data-v-f08a8c7f>${ssrInterpolate(product.annata)}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.annata && product.grado_alcolico) {
              _push(`<span data-v-f08a8c7f> - </span>`);
            } else {
              _push(`<!---->`);
            }
            if (product.grado_alcolico) {
              _push(`<span data-v-f08a8c7f>${ssrInterpolate(product.grado_alcolico)}% vol. </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="row-item" data-v-f08a8c7f><span class="row-item" data-v-f08a8c7f><img class="icon-price"${ssrRenderAttr("src", _imports_1$1)} alt="icona che indica il prezzo" data-v-f08a8c7f> ${ssrInterpolate(product.price)}</span><span class="counter" data-v-f08a8c7f><span data-v-f08a8c7f>-</span><span data-v-f08a8c7f><input type="number"${ssrRenderAttr("value", getQuantity(product))} class="input-quantity" data-v-f08a8c7f></span><span data-v-f08a8c7f>+</span></span></div><span data-v-f08a8c7f><img class="icon-delete"${ssrRenderAttr("src", _imports_1)} alt="icona che indica la rimozione del prodotto totale dal carrello" data-v-f08a8c7f></span><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul><div class="cart-total-container" data-v-f08a8c7f><div class="cart-total" data-v-f08a8c7f><span data-v-f08a8c7f>Subtotale: </span><span data-v-f08a8c7f>\u20AC${ssrInterpolate(unref(cartTotal).toFixed(2))}</span></div>`);
        if (__props.cartActions) {
          _push(`<div class="cart-actions" data-v-f08a8c7f>`);
          _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(ButtonComponent, { color: "var(--background)" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-f08a8c7f${_scopeId2}>Aggiungi altro al carrello</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Aggiungi altro al carrello")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(ButtonComponent, { color: "var(--background)" }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Aggiungi altro al carrello")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_router_link, { to: "/checkout" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(ButtonComponent, {
                  isLink: "true",
                  link: "/checkout"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-f08a8c7f${_scopeId2}>Procedi all&#39;acquisto</span>`);
                    } else {
                      return [
                        createVNode("span", null, "Procedi all'acquisto")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(ButtonComponent, {
                    isLink: "true",
                    link: "/checkout"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Procedi all'acquisto")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (isModalOpen.value) {
          _push(`<div class="modal-overlay" data-v-f08a8c7f><div class="modal-content" data-v-f08a8c7f><p data-v-f08a8c7f> Sei sicuro di voler rimuovere tutte le unit\xE0 ( ${ssrInterpolate(productToDelete.value.quantity)} ) di &quot;${ssrInterpolate(productToDelete.value.name)}&quot; dal carrello? </p><div class="modal-buttons" data-v-f08a8c7f><button data-v-f08a8c7f>Conferma</button><button data-v-f08a8c7f>Annulla</button></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListCartComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f08a8c7f"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ListCartComponent-CqJLPzKy.mjs.map
