import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { H as Header } from './HeaderDefault-17gU39yi.mjs';
import { L as Logo } from './LogoSection-Clcrpu7w.mjs';
import { defineComponent, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode } from 'vue';
import { A as AccordionComponent } from './AccordionComponent-BhquGMKD.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, f as _imports_0 } from './server.mjs';
import { _ as _imports_2, a as _imports_3 } from './privacy-BlfKfCeW.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './ButtonComponent-ChpXjk40.mjs';
import 'vue-router';
import 'pinia';

const _sfc_main = defineComponent({
  components: {
    Accordion: AccordionComponent,
    Header,
    Logo
  }
});
const _imports_1 = "" + buildAssetsURL("delivery.CD3F4boM.svg");
const _imports_4 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2028%2028'%20style='enable-background:new%200%200%2028%2028;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%2374121D;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M14,28C6.3,28,0,21.7,0,14S6.3,0,14,0s14,6.3,14,14S21.7,28,14,28z%20M14,2C7.4,2,2,7.4,2,14c0,6.6,5.4,12,12,12%20c6.6,0,12-5.4,12-12C26,7.4,20.6,2,14,2z%20M21.2,15H14c-0.6,0-1-0.4-1-1V6.8c0-0.6,0.4-1,1-1s1,0.4,1,1V13h6.2c0.6,0,1,0.4,1,1%20S21.8,15,21.2,15z'/%3e%3c/g%3e%3c/svg%3e";
const _imports_5 = "" + buildAssetsURL("help-us.B3cXbeGC.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_Accordion = resolveComponent("Accordion");
  const _component_Logo = resolveComponent("Logo");
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-eade1b7d><div class="container-fix-header" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Header, { title: "Men\xF9" }, null, _parent));
  _push(`</div><div class="menu-container" data-v-eade1b7d><div class="menu-main-container" data-v-eade1b7d><div class="accordion-container" data-v-eade1b7d><img${ssrRenderAttr("src", _imports_0)} alt="icona cestino della spesa" class="accordion-icon" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "La mia lista",
    isLink: "true",
    link: "/cart",
    icon: "basket"
  }, null, _parent));
  _push(`</div><div class="accordion-group-container" data-v-eade1b7d><div class="accordion-container" data-v-eade1b7d><img${ssrRenderAttr("src", _imports_1)} alt="iconsa pacco delivery" class="accordion-icon" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Dove spediamo",
    hasInput: true,
    type: "text",
    placeholder: "Inserisci il tuo indirizzo",
    isLink: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-eade1b7d${_scopeId}> In Cambusa troverai un\u2019ampia selezione di vino, bevande e cibo di qualit\xE0. Offriamo servizio di consegna a domicilio presso la location del tuo soggiorno nel Salento. </span><span data-v-eade1b7d${_scopeId}> La consegna \xE8 gratuita per gli ordini superiori a 79 euro. </span><span data-v-eade1b7d${_scopeId}> Inserisci qui sotto un indirizzo valido e scopri se la tua zona \xE8 coperta dal nostro servizio. </span>`);
      } else {
        return [
          createVNode("span", null, " In Cambusa troverai un\u2019ampia selezione di vino, bevande e cibo di qualit\xE0. Offriamo servizio di consegna a domicilio presso la location del tuo soggiorno nel Salento. "),
          createVNode("span", null, " La consegna \xE8 gratuita per gli ordini superiori a 79 euro. "),
          createVNode("span", null, " Inserisci qui sotto un indirizzo valido e scopri se la tua zona \xE8 coperta dal nostro servizio. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="accordion-container" data-v-eade1b7d><img${ssrRenderAttr("src", _imports_2)} alt="" class="accordion-icon" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Chi siamo",
    hasInput: false,
    isLink: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-eade1b7d${_scopeId}> Cambusa \xE8 un servizio di consegna a domicilio per il tuo soggiorno nel Salento. </p><p data-v-eade1b7d${_scopeId}> Hai in programma una festa o aperitivo a casa, in masseria o in villa? Ordina dall\u2019app Cambusa e ricevi comodamente tutta la spesa in tempi rapidissimi. </p><p data-v-eade1b7d${_scopeId}> Inserisci l\u2019indirizzo di consegna nella sezione <strong data-v-eade1b7d${_scopeId}>\u201CIndirizzi\u201D</strong> e verifica subito la copertura del nostro servizio (garantiamo la consegna in tutto il territorio salentino)! </p>`);
      } else {
        return [
          createVNode("p", null, " Cambusa \xE8 un servizio di consegna a domicilio per il tuo soggiorno nel Salento. "),
          createVNode("p", null, " Hai in programma una festa o aperitivo a casa, in masseria o in villa? Ordina dall\u2019app Cambusa e ricevi comodamente tutta la spesa in tempi rapidissimi. "),
          createVNode("p", null, [
            createTextVNode(" Inserisci l\u2019indirizzo di consegna nella sezione "),
            createVNode("strong", null, "\u201CIndirizzi\u201D"),
            createTextVNode(" e verifica subito la copertura del nostro servizio (garantiamo la consegna in tutto il territorio salentino)! ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="accordion-group-container" data-v-eade1b7d><div class="accordion-container" data-v-eade1b7d><img${ssrRenderAttr("src", _imports_3)} alt="" class="accordion-icon" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Altre info",
    hasInput: false,
    isLink: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-eade1b7d${_scopeId}> La tua privacy \xE8 importante per noi. I dati che raccogliamo vengono utilizzati esclusivamente per: </p><ul class="list-info" data-v-eade1b7d${_scopeId}><li data-v-eade1b7d${_scopeId}> Analisi di mercato, al fine di migliorare i nostri servizi e offrirti un&#39;esperienza personalizzata. </li><li data-v-eade1b7d${_scopeId}> Ricordare le tue preferenze e fornirti un servizio pi\xF9 efficiente. </li><li data-v-eade1b7d${_scopeId}> Non condividiamo i tuoi dati con terze parti non autorizzate e li conserviamo in conformit\xE0 con le normative vigenti sulla protezione dei dati personali. </li></ul>`);
      } else {
        return [
          createVNode("p", null, " La tua privacy \xE8 importante per noi. I dati che raccogliamo vengono utilizzati esclusivamente per: "),
          createVNode("ul", { class: "list-info" }, [
            createVNode("li", null, " Analisi di mercato, al fine di migliorare i nostri servizi e offrirti un'esperienza personalizzata. "),
            createVNode("li", null, " Ricordare le tue preferenze e fornirti un servizio pi\xF9 efficiente. "),
            createVNode("li", null, " Non condividiamo i tuoi dati con terze parti non autorizzate e li conserviamo in conformit\xE0 con le normative vigenti sulla protezione dei dati personali. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="accordion-container" data-v-eade1b7d><img${ssrRenderAttr("src", _imports_4)} alt="" class="accordion-icon" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Assistenza clienti",
    hasInput: false,
    isLink: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p data-v-eade1b7d${_scopeId}> Contattaci per qualsiasi dubbio riguardante ordini, disponibilit\xE0 e istruzioni di consegna. </p>`);
      } else {
        return [
          createVNode("p", null, " Contattaci per qualsiasi dubbio riguardante ordini, disponibilit\xE0 e istruzioni di consegna. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="accordion-container" data-v-eade1b7d><img${ssrRenderAttr("src", _imports_5)} alt="" class="accordion-icon" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Aiutaci a migliorare l'app",
    hasInput: false,
    isLink: false,
    hasMail: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 data-v-eade1b7d${_scopeId}> Aiutaci a migliorare!! </h2><p data-v-eade1b7d${_scopeId}> Cosa ne pensi del servizio CAMBUSA e del funzionamento di questa app? </p><p data-v-eade1b7d${_scopeId}> Scrivici e segnala tutto quello che vuoi rispetto alla tua esperienza con noi. </p>`);
      } else {
        return [
          createVNode("h2", null, " Aiutaci a migliorare!! "),
          createVNode("p", null, " Cosa ne pensi del servizio CAMBUSA e del funzionamento di questa app? "),
          createVNode("p", null, " Scrivici e segnala tutto quello che vuoi rispetto alla tua esperienza con noi. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="footer" data-v-eade1b7d>`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(ssrRenderComponent(_component_router_link, {
    to: "/login",
    class: "login"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sei un amministratore?`);
      } else {
        return [
          createTextVNode("Sei un amministratore?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eade1b7d"]]);

export { menu as default };
//# sourceMappingURL=menu-3T7oMJw6.mjs.map
