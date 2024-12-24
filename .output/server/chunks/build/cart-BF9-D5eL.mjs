import { ref, resolveComponent, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { H as Header } from './HeaderDefault-17gU39yi.mjs';
import { B as ButtonComponent } from './ButtonComponent-B4eFiwKe.mjs';
import { _ as __nuxt_component_1 } from './ListCartComponent-Jc9TFSAI.mjs';
import { _ as _export_sfc, e as useCartStore } from './server.mjs';
import './price-ISNscGNa.mjs';
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
import 'pinia';

const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bf381feb>`);
      _push(ssrRenderComponent(Header, { title: "La mia Cambusa" }, null, _parent));
      if (unref(cartStore).getCartTotal.toFixed(2) > 0) {
        _push(`<div class="container-cart" data-v-bf381feb>`);
        _push(ssrRenderComponent(__nuxt_component_1, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="cart-empty" data-v-bf381feb><p data-v-bf381feb>Il carrello \xE8 vuoto</p>`);
        _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ButtonComponent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-bf381feb${_scopeId2}>Aggiungi i prodotti alla lista</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Aggiungi i prodotti alla lista")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(ButtonComponent, null, {
                  default: withCtx(() => [
                    createVNode("span", null, "Aggiungi i prodotti alla lista")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf381feb"]]);

export { cart as default };
//# sourceMappingURL=cart-BF9-D5eL.mjs.map
