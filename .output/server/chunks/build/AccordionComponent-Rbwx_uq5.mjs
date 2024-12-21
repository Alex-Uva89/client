import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, ref, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderDynamicModel } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = defineComponent({
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccordionComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-68c4d728"]]);

export { AccordionComponent as A };
//# sourceMappingURL=AccordionComponent-Rbwx_uq5.mjs.map
