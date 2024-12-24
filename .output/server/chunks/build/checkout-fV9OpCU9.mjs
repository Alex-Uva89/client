import { H as Header } from './HeaderDefault-17gU39yi.mjs';
import { _ as __nuxt_component_1 } from './ListCartComponent-CFcuSBCP.mjs';
import { B as ButtonComponent } from './ButtonComponent-BjhACGAW.mjs';
import { _ as _export_sfc, e as useCartStore } from './server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _imports_2$1, a as _imports_3 } from './privacy-BlfKfCeW.mjs';
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

const _imports_0 = "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0031%200C5.83284%200%200%205.8266%200%2012.9969C0%2016.4489%201.35179%2019.5913%203.55472%2021.9211C5.92722%2024.4307%209.28486%2026%2013.0031%2026C20.1734%2026%2026%2020.1672%2026%2012.9969C26%205.8266%2020.1734%200%2013.0031%200ZM13.0031%201.625C19.2949%201.625%2024.375%206.70514%2024.375%2012.9969C24.375%2015.4862%2023.5788%2017.7856%2022.228%2019.6573C21.2509%2016.9018%2019.0388%2014.7274%2016.2449%2013.7647C17.556%2012.7765%2018.4061%2011.2073%2018.4061%209.44632C18.4061%206.47062%2015.9778%204.03598%2013.003%204.03598C10.0273%204.03598%207.5979%206.47044%207.5979%209.44632C7.5979%2011.2074%208.45%2012.7767%209.76118%2013.7647C6.96618%2014.7265%204.74916%2016.9%203.77104%2019.6552C2.42026%2017.7844%201.62503%2015.4851%201.62503%2012.9969C1.62503%206.70514%206.71112%201.625%2013.0031%201.625ZM13.0031%205.66202C15.1004%205.66202%2016.7812%207.34999%2016.7812%209.44736C16.7812%2011.5446%2015.1003%2013.2254%2013.0031%2013.2254C10.9059%2013.2254%209.22298%2011.5446%209.22298%209.44736C9.22298%207.3501%2010.9059%205.66202%2013.0031%205.66202ZM13.0031%2014.8504C16.9377%2014.8504%2020.1734%2017.5336%2020.9646%2021.1271C18.9151%2023.137%2016.1067%2024.375%2013.0031%2024.375C9.90028%2024.375%207.09124%2023.138%205.03958%2021.1302C5.82975%2017.536%209.06646%2014.8504%2013.0031%2014.8504Z'%20fill='%2374121D'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2023%2028'%20style='enable-background:new%200%200%2023%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2374121D;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M11.5,28c-0.2,0-0.5,0-0.7-0.1c-0.5-0.1-0.8-0.4-1.3-0.8C6.7,24.9,0,18.7,0,11.1c0-2.9,1.2-5.8,3.4-7.9%20C5.6,1.2,8.4,0,11.5,0c3.1,0,5.9,1.2,8.1,3.3c2.1,2.1,3.4,5,3.4,7.9c0,7.6-6.7,13.7-9.6,16c-0.4,0.4-0.8,0.6-1.3,0.8%20C12,28,11.7,28,11.5,28z%20M11.5,2C9,2,6.5,3,4.8,4.7C3,6.4,2,8.7,2,11.1c0,6.7,6.2,12.3,8.8,14.5c0.3,0.3,0.5,0.4,0.5,0.4%20c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.5-0.4c2.6-2.1,8.8-7.8,8.8-14.5c0-2.4-1-4.7-2.8-6.5C16.4,3,14,2,11.5,2z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M11.5,13.7c-2.2,0-4-1.8-4-3.9s1.8-3.9,4-3.9c2.2,0,4,1.8,4,3.9S13.7,13.7,11.5,13.7z%20M11.5,7.9%20c-1.1,0-2,0.9-2,1.9s0.9,1.9,2,1.9c1.1,0,2-0.9,2-1.9S12.6,7.9,11.5,7.9z'/%3e%3c/g%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2025%2028'%20style='enable-background:new%200%200%2025%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2374121D;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M19.4,28H5.6c-1.7,0-2.7,0-3.5-0.4c-0.7-0.4-1.3-1-1.7-1.7C0,25,0,24.1,0,22.4V8.5C0,6.8,0,5.8,0.4,5%20c0.4-0.7,1-1.3,1.7-1.7c0.8-0.4,1.8-0.4,3.5-0.4h0.1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v1.9h9.5V1c0-0.6,0.4-1,1-1s1,0.4,1,1v1.9h0.2%20c1.7,0,2.7,0,3.5,0.4c0.7,0.4,1.3,1,1.7,1.7C25,5.8,25,6.8,25,8.5v13.9c0,1.7,0,2.7-0.4,3.5c-0.4,0.7-1,1.3-1.7,1.7%20C22.1,28,21.1,28,19.4,28z%20M2,10.7v11.7c0,1.4,0,2.2,0.2,2.6c0.2,0.4,0.5,0.6,0.8,0.8C3.4,26,4.2,26,5.6,26h13.8%20c1.4,0,2.2,0,2.6-0.2c0.4-0.2,0.6-0.5,0.8-0.8c0.2-0.4,0.2-1.2,0.2-2.6V10.7H2z%20M2,8.7h21V8.5c0-1.4,0-2.2-0.2-2.6%20c-0.2-0.4-0.5-0.6-0.8-0.8c-0.4-0.2-1.2-0.2-2.6-0.2H5.6c-1.4,0-2.2,0-2.6,0.2C2.7,5.3,2.4,5.6,2.2,5.9C2,6.3,2,7.1,2,8.5V8.7z%20M18.3,22.2c-0.1,0-0.2,0-0.3-0.1c-0.5-0.2-0.8-0.6-0.7-1.1c0.1-0.5,0.5-0.8,1-0.8h0c0.6,0,1,0.4,1,1c0,0.3-0.2,0.6-0.4,0.8%20C18.7,22.2,18.5,22.2,18.3,22.2z%20M12.5,22.2c-0.1,0-0.2,0-0.3-0.1c-0.5-0.2-0.8-0.6-0.7-1.1c0.1-0.5,0.5-0.8,1-0.8h0%20c0.6,0,1,0.4,1,1c0,0.3-0.2,0.6-0.4,0.8C12.9,22.2,12.7,22.2,12.5,22.2z%20M6.8,22.2c-0.1,0-0.2,0-0.3-0.1C6,22,5.7,21.5,5.8,21.1%20c0.1-0.5,0.5-0.8,1-0.8h0c0.6,0,1,0.4,1,1c0,0.3-0.2,0.6-0.4,0.8C7.2,22.2,7,22.2,6.8,22.2z%20M18.3,16.4c-0.6,0-1-0.4-1-1%20c0-0.6,0.4-1,1-1s1,0.4,1,1v0C19.3,16,18.8,16.4,18.3,16.4z%20M12.5,16.4c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1%20C13.5,16,13.1,16.4,12.5,16.4z%20M6.8,16.4c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1C7.8,16,7.3,16.4,6.8,16.4z'/%3e%3c/g%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2028%2028'%20style='enable-background:new%200%200%2028%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2374121D;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M24.3,28C10.9,28,0,17.1,0,3.7C0,1.7,1.7,0,3.7,0h4c1.6,0,3,1,3.6,2.4l1.5,3.8c0.5,1.3,0.3,2.8-0.6,3.9l-0.8,1%20c-0.6,0.8-0.6,1.8,0.1,2.5l2.8,2.8c0.7,0.7,1.8,0.7,2.5,0.1l1-0.8c1.1-0.9,2.6-1.2,3.9-0.6l3.8,1.5c1.5,0.6,2.4,2,2.4,3.6l0,4%20C28,26.3,26.3,28,24.3,28z%20M3.7,2C2.8,2,2,2.8,2,3.7C2,16,12,26,24.3,26c1,0,1.7-0.8,1.7-1.7l0-4c0-0.8-0.5-1.5-1.2-1.8L21,17%20c-0.6-0.3-1.4-0.1-1.9,0.3l-1,0.8c-1.6,1.3-3.8,1.2-5.2-0.2l-2.8-2.8c-1.4-1.4-1.5-3.7-0.2-5.2l0.8-1C11.1,8.4,11.2,7.6,11,7%20L9.5,3.2c0,0,0,0,0,0C9.2,2.5,8.5,2,7.7,2H3.7z'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main = {
  components: {
    HeaderDefault: Header,
    ButtonComponent,
    ListCartComponent: __nuxt_component_1
  },
  data() {
    return {
      form: {
        fullName: "",
        address: "",
        deliveryDate: "",
        email: "",
        phone: "",
        additionalInfo: "",
        acceptTerms: false
      },
      errors: {
        fullName: false,
        address: false,
        deliveryDate: false,
        email: false,
        phone: false
      },
      showPlaceholderText: true
    };
  },
  computed: {
    cartStore() {
      return useCartStore();
    }
  },
  methods: {
    validateForm() {
      this.errors.fullName = !this.form.fullName.trim();
      this.errors.address = !this.form.address.trim();
      this.errors.deliveryDate = !this.form.deliveryDate.trim();
      this.errors.email = !this.form.email.trim() || !this.isValidEmail(this.form.email);
      this.errors.phone = !this.form.phone.trim();
      return !Object.values(this.errors).includes(true);
    },
    isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    async submitForm() {
      const orderNumber = `${Math.random().toString(36).substring(2, 5).toUpperCase()}-${Date.now()}-${Math.floor(Math.random() * 1e4)}`;
      if (this.validateForm()) {
        const orderData = {
          ...this.form,
          orderNumber,
          cart: this.cartStore.getCartWithDetails,
          total: this.cartStore.getCartTotal.toFixed(2)
        };
        try {
          Object.keys(this.form).forEach((field) => {
            this.cartStore.updateOrderForm(field, this.form[field]);
          });
          this.cartStore.saveOrder();
          localStorage.setItem("orderData", JSON.stringify(orderData));
          this.$router.push("/confirm");
        } catch (error) {
          console.error("Errore nell'invio dell'ordine:", error);
          alert("Si \xE8 verificato un errore. Riprova pi\xF9 tardi.");
        }
      } else {
        const input = (void 0).getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
          if (input[i].value === "") {
            input[i].classList.add("error");
          } else {
            input[i].classList.remove("error");
          }
        }
      }
    },
    hidePlaceholder() {
      this.showPlaceholderText = false;
    },
    showPlaceholder() {
      if (!this.form.deliveryDate) {
        this.showPlaceholderText = true;
      }
    },
    openDate() {
      const dateInput = (void 0).getElementById("deliveryDate");
      console.log("dateInput:", dateInput);
      dateInput.showPicker();
    }
  },
  watch: {
    "form.acceptTerms": function(newValue) {
      console.log("acceptTerms changed:", newValue);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderDefault = Header;
  const _component_ListCartComponent = __nuxt_component_1;
  const _component_ButtonComponent = ButtonComponent;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-2ff3c94a>`);
  _push(ssrRenderComponent(_component_HeaderDefault, { title: "Checkout" }, null, _parent));
  _push(`<form class="checkout-form" aria-labelledby="formTitle" data-v-2ff3c94a><div class="form-container" data-v-2ff3c94a><div class="form-group" data-v-2ff3c94a><label for="fullName" aria-label="Nome e Cognome" data-v-2ff3c94a>Nome e Cognome*</label><img${ssrRenderAttr("src", _imports_0)} alt="icona nome e cognome" data-v-2ff3c94a><input${ssrRenderAttr("value", $data.form.fullName)} type="text" id="fullName" placeholder="Nome e Cognome" required aria-required="true" aria-describedby="fullNameHelp" data-v-2ff3c94a><small id="fullNameHelp" data-v-2ff3c94a>Inserisci il tuo nome completo</small></div><div class="form-group" data-v-2ff3c94a><label for="address" aria-label="Indirizzo di Consegna" data-v-2ff3c94a>Indirizzo di Consegna*</label><img${ssrRenderAttr("src", _imports_1)} alt="icona indirizzo" data-v-2ff3c94a><input${ssrRenderAttr("value", $data.form.address)} type="text" id="address" placeholder="Indirizzo" required aria-required="true" aria-describedby="addressHelp" data-v-2ff3c94a><small id="addressHelp" data-v-2ff3c94a>Inserisci l&#39;indirizzo di consegna</small></div><div class="form-group" data-v-2ff3c94a><label for="deliveryDate" aria-label="Data e Ora di Consegna" data-v-2ff3c94a>Data e Ora*</label><img${ssrRenderAttr("src", _imports_2)} alt="icona data e ora" data-v-2ff3c94a><input${ssrRenderAttr("value", $data.form.deliveryDate)} type="datetime-local" id="deliveryDate" required aria-required="true" aria-describedby="deliveryDateHelp" class="input-date" data-v-2ff3c94a>`);
  if ($data.showPlaceholderText) {
    _push(`<span class="placeholder-text" data-v-2ff3c94a> dd/mm/yyyy --:-- </span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<small id="deliveryDateHelp" data-v-2ff3c94a>Scegli la data e l&#39;orario di consegna</small></div><div class="form-group" data-v-2ff3c94a><label for="email" aria-label="Email" data-v-2ff3c94a>Email*</label><img${ssrRenderAttr("src", _imports_2$1)} alt="icona email" data-v-2ff3c94a><input${ssrRenderAttr("value", $data.form.email)} type="email" id="email" placeholder="Email" required aria-required="true" aria-describedby="emailHelp" data-v-2ff3c94a><small id="emailHelp" data-v-2ff3c94a>Inserisci il tuo indirizzo email</small></div><div class="form-group" data-v-2ff3c94a><label for="phone" aria-label="Numero di Telefono" data-v-2ff3c94a>Numero di Telefono*</label><img${ssrRenderAttr("src", _imports_4)} alt="icona telefono" data-v-2ff3c94a><input${ssrRenderAttr("value", $data.form.phone)} type="tel" id="phone" placeholder="Numero di telefono" required aria-required="true" aria-describedby="phoneHelp" data-v-2ff3c94a><small id="phoneHelp" data-v-2ff3c94a>Inserisci il tuo numero di telefono</small></div><div class="form-group" data-v-2ff3c94a><label for="additionalInfo" aria-label="Informazioni Aggiuntive" data-v-2ff3c94a>Informazioni Aggiuntive</label><img${ssrRenderAttr("src", _imports_3)} alt="icona nome e cognome" data-v-2ff3c94a><textarea id="additionalInfo" placeholder="Altre info" aria-describedby="additionalInfoHelp" data-v-2ff3c94a>${ssrInterpolate($data.form.additionalInfo)}</textarea><small id="additionalInfoHelp" data-v-2ff3c94a>Aggiungi eventuali informazioni aggiuntive</small></div><div class="form-group terms" data-v-2ff3c94a><label data-v-2ff3c94a><input${ssrIncludeBooleanAttr(Array.isArray($data.form.acceptTerms) ? ssrLooseContain($data.form.acceptTerms, null) : $data.form.acceptTerms) ? " checked" : ""} type="checkbox" required aria-required="true" data-v-2ff3c94a> Accetto i <a href="/terms" aria-label="Termini e condizioni" data-v-2ff3c94a>termini e condizioni</a></label></div></div><div class="form-group" data-v-2ff3c94a><h3 class="title-list" data-v-2ff3c94a>Riepilogo Spesa</h3>`);
  _push(ssrRenderComponent(_component_ListCartComponent, { cartActions: false }, null, _parent));
  _push(`</div><div class="btn-send-list" data-v-2ff3c94a>`);
  if (!$options.validateForm()) {
    _push(`<small class="error-text" data-v-2ff3c94a>Compila i campi obbligatori</small>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_ButtonComponent, {
    color: "var(--primary)",
    width: "90vw",
    disabled: !$data.form.acceptTerms,
    onClick: $options.submitForm
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Invia Lista `);
      } else {
        return [
          createTextVNode(" Invia Lista ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2ff3c94a"]]);

export { checkout as default };
//# sourceMappingURL=checkout-fV9OpCU9.mjs.map
