import { B as ButtonComponent } from './ButtonComponent-ChpXjk40.mjs';
import { jsPDF } from 'jspdf';
import { _ as _export_sfc, e as useCartStore } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20172%20180'%20style='enable-background:new%200%200%20172%20180;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{opacity:0.12;fill:%2334A853;}%20.st1{fill:none;stroke:%2334A853;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;}%20%3c/style%3e%3cg%3e%3ccircle%20class='st0'%20cx='87'%20cy='92.5'%20r='80.5'/%3e%3cpath%20class='st1'%20d='M106.4,79.5l-25.9,25.9l-13-13%20M87,150.8c-32.2,0-58.3-26.1-58.3-58.3c0-32.2,26.1-58.3,58.3-58.3%20c32.2,0,58.3,26.1,58.3,58.3C145.3,124.7,119.2,150.8,87,150.8z'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main = {
  name: "Confirm",
  components: {
    ButtonComponent
  },
  setup() {
    const cartStore = useCartStore();
    const orderData = cartStore.order.form;
    const orderNumber = cartStore.order.orderNumber;
    const cartTotal = cartStore.getCartTotal.toFixed(2);
    const downloadOrder = () => {
      const doc = new jsPDF();
      doc.text(`Grazie ${orderData ? orderData.fullName : "N/A"} per averci scelto!`, 20, 10);
      doc.text("Ordine Confermato", 20, 20);
      doc.text(`Numero ordine: ${orderNumber ? orderNumber : "N/A"}`, 20, 30);
      doc.text(`Email: ${orderData ? orderData.email : "N/A"}`, 20, 40);
      doc.text(`Data di consegna: ${orderData ? orderData.deliveryDate : "N/A"}`, 20, 50);
      doc.text(`Indirizzo: ${orderData ? orderData.address : "N/A"}`, 20, 60);
      doc.text(`Totale: ${cartTotal ? cartTotal : "N/A"} \u20AC`, 20, 70);
      const fileName = `ordine_${orderNumber || "N_A"}_${(orderData == null ? void 0 : orderData.fullName) || "Cliente"}.pdf`;
      doc.save(fileName);
      cartStore.clearOrderAndCart();
      this.$router.push("/");
    };
    return {
      orderData,
      orderNumber,
      downloadOrder,
      cartTotal
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log("Lascio la pagina di conferma");
    next();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ButtonComponent = ButtonComponent;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-confirm" }, _attrs))} data-v-40760381><img class="icon-confirm"${ssrRenderAttr("src", _imports_0)} alt="" data-v-40760381><div class="container-dates" data-v-40760381><div class="container-title" data-v-40760381><h2 class="title-confirm" data-v-40760381> La tua lista \xE8 stata inviata </h2><small data-v-40760381>congratulazioni!</small></div><div class="banner-confirm" data-v-40760381><span data-v-40760381> Riceverai la conferma dell&#39;ordine all&#39;indirizzo email selezionato: </span><h3 data-v-40760381>${ssrInterpolate($setup.orderData ? $setup.orderData.email : "N/A")}</h3></div><div data-v-40760381><h3 data-v-40760381> il tuo numero ordine: </h3><span data-v-40760381>${ssrInterpolate($setup.orderNumber ? $setup.orderNumber : "N/A")}</span></div><div data-v-40760381><h3 data-v-40760381> riceverai la tua lista della spesa il: </h3><span data-v-40760381>${ssrInterpolate($setup.orderData ? $setup.orderData.deliveryDate : "N/A")}</span></div><div data-v-40760381><h3 data-v-40760381> All&#39;indirizzo: </h3><span data-v-40760381>${ssrInterpolate($setup.orderData ? $setup.orderData.address : "N/A")}</span></div><div data-v-40760381><h3 data-v-40760381> Totale da pagare alla consegna: </h3><span data-v-40760381>${ssrInterpolate($setup.cartTotal ? $setup.cartTotal : "N/A")} \u20AC</span></div></div><div class="container-actions" data-v-40760381>`);
  _push(ssrRenderComponent(_component_ButtonComponent, {
    fontSize: "18px",
    onClick: $setup.downloadOrder,
    color: "var(--background)"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Scarica l&#39;ordine `);
      } else {
        return [
          createTextVNode(" Scarica l'ordine ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const confirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-40760381"]]);

export { confirm as default };
//# sourceMappingURL=confirm-dFafCMwr.mjs.map
