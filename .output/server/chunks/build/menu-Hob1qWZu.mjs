import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { H as Header } from './HeaderDefault-17gU39yi.mjs';
import { L as Logo } from './LogoSection-BdmjOFmU.mjs';
import { defineComponent, ref, useSSRContext, resolveComponent, withCtx, createTextVNode, mergeProps, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderDynamicModel } from 'vue/server-renderer';
import { _ as _export_sfc, e as _imports_0$1 } from './server.mjs';
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
import 'vue-router';
import 'pinia';

const _sfc_main$1 = defineComponent({
  name: "Accordion",
  props: {
    title: { type: String, required: true },
    content: { type: String, default: "" },
    hasInput: { type: Boolean, default: false },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    hasMail: { type: Boolean, default: false },
    isLink: { type: Boolean, default: false },
    link: { type: String, default: "#" }
  },
  setup(props) {
    const isOpen = ref(false);
    const email = ref("");
    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };
    const sendEmail = () => {
      console.log(`Email inviata: ${email.value}`);
      email.value = "";
    };
    return { isOpen, email, toggleAccordion, sendEmail };
  }
});
const _imports_0 = "" + buildAssetsURL("close-arrow.B1xT8-Gk.svg");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))} data-v-68c4d728>`);
  if (_ctx.isLink) {
    _push(`<div class="accordion-header" data-v-68c4d728>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: _ctx.link,
      class: "accordion-title"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-68c4d728${_scopeId}>${ssrInterpolate(_ctx.title)}</span><img${ssrRenderAttr("src", _imports_0)} alt="icona a freccia" class="arrow" data-v-68c4d728${_scopeId}>`);
        } else {
          return [
            createVNode("span", null, toDisplayString(_ctx.title), 1),
            createVNode("img", {
              src: _imports_0,
              alt: "icona a freccia",
              class: "arrow"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<div class="accordion-header" data-v-68c4d728><h2 class="${ssrRenderClass([{ "open-title": _ctx.isOpen }, "accordion-title"])}" data-v-68c4d728><span data-v-68c4d728>${ssrInterpolate(_ctx.title)}</span><img${ssrRenderAttr("src", _imports_0)} alt="icona a freccia" class="${ssrRenderClass([{ "rotate": _ctx.isOpen }, "arrow"])}" data-v-68c4d728></h2></div>`);
  }
  if (_ctx.isOpen && !_ctx.isLink) {
    _push(`<div class="accordion-content" data-v-68c4d728><p data-v-68c4d728>${ssrInterpolate(_ctx.content)}</p>`);
    if (_ctx.hasInput) {
      _push(`<div class="accordion-input" data-v-68c4d728><input${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderDynamicModel(_ctx.type, _ctx.email, null)} data-v-68c4d728><button data-v-68c4d728>Invia</button></div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.hasMail) {
      _push(`<div class="accordion-input" data-v-68c4d728><form action="" data-v-68c4d728><input type="email" placeholder="Inserisci la tua email"${ssrRenderAttr("value", _ctx.email)} data-v-68c4d728><input type="text" placeholder="Inserisci il tuo messaggio"${ssrRenderAttr("value", _ctx.email)} data-v-68c4d728><button data-v-68c4d728>Invia</button></form></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Accordion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-68c4d728"]]);
const _sfc_main = defineComponent({
  components: {
    Accordion,
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ae200ae0><div class="container-fix-header" data-v-ae200ae0>`);
  _push(ssrRenderComponent(_component_Header, { title: "Men\xF9" }, null, _parent));
  _push(`</div><div class="menu-container" data-v-ae200ae0><div class="menu-main-container" data-v-ae200ae0><div class="accordion-container" data-v-ae200ae0><img${ssrRenderAttr("src", _imports_0$1)} alt="icona cestino della spesa" data-v-ae200ae0>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "La mia lista",
    isLink: "true",
    link: "/cart",
    icon: "basket"
  }, null, _parent));
  _push(`</div><div class="accordion-group-container" data-v-ae200ae0><div class="accordion-container" data-v-ae200ae0><img${ssrRenderAttr("src", _imports_1)} alt="iconsa pacco delivery" class="accordion-icon" data-v-ae200ae0>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Dove spediamo",
    content: "Digita il tuo indirizzo, scopriamo assieme se inviamo da te",
    hasInput: true,
    type: "text",
    placeholder: "Inserisci il tuo indirizzo",
    isLink: false
  }, null, _parent));
  _push(`</div><div class="accordion-container" data-v-ae200ae0><img${ssrRenderAttr("src", _imports_2)} alt="" class="accordion-icon" data-v-ae200ae0>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Chi siamo",
    content: "Inserisci la tua email per iscriverti alla nostra newsletter.",
    hasInput: false,
    isLink: false
  }, null, _parent));
  _push(`</div></div><div class="accordion-group-container" data-v-ae200ae0><div class="accordion-container" data-v-ae200ae0><img${ssrRenderAttr("src", _imports_3)} alt="" class="accordion-icon" data-v-ae200ae0>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Altre info",
    content: "Inserisci la tua email per iscriverti alla nostra newsletter.",
    hasInput: false,
    isLink: false
  }, null, _parent));
  _push(`</div><div class="accordion-container" data-v-ae200ae0><img${ssrRenderAttr("src", _imports_4)} alt="" class="accordion-icon" data-v-ae200ae0>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Orari assistenza clienti",
    content: "Inserisci la tua email per iscriverti alla nostra newsletter.",
    hasInput: false,
    isLink: false
  }, null, _parent));
  _push(`</div><div class="accordion-container" data-v-ae200ae0><img${ssrRenderAttr("src", _imports_5)} alt="" class="accordion-icon" data-v-ae200ae0>`);
  _push(ssrRenderComponent(_component_Accordion, {
    title: "Aiutaci a migliorare l'app",
    content: "Inviaci una mail con i tuoi feedback",
    hasInput: false,
    isLink: false,
    hasMail: true
  }, null, _parent));
  _push(`</div></div></div><div class="footer" data-v-ae200ae0>`);
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
const menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae200ae0"]]);

export { menu as default };
//# sourceMappingURL=menu-Hob1qWZu.mjs.map
