import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { B as ButtonComponent } from './ButtonComponent-B4eFiwKe.mjs';
import { defineComponent, ref, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderDynamicModel, ssrRenderStyle } from 'vue/server-renderer';
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
    link: { type: String, default: "#" },
    heigtInput: { type: String, default: "height: auto;" }
  },
  components: {
    ButtonComponent
  },
  setup(props) {
    const isOpen = ref(false);
    const email = ref("");
    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };
    const sendEmail = () => {
      email.value = "";
    };
    return { isOpen, email, toggleAccordion, sendEmail };
  }
});
const _imports_0 = "" + buildAssetsURL("close-arrow.Vk1UMBc5.svg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ButtonComponent = ButtonComponent;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))} data-v-809259b9>`);
  if (_ctx.isLink) {
    _push(`<div class="accordion-header" data-v-809259b9>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: _ctx.link,
      class: "accordion-title"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-809259b9${_scopeId}>${ssrInterpolate(_ctx.title)}</span><img${ssrRenderAttr("src", _imports_0)} alt="icona a freccia" class="arrow" data-v-809259b9${_scopeId}>`);
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
    _push(`<div class="accordion-header" data-v-809259b9><h2 class="${ssrRenderClass([{ "open-title": _ctx.isOpen }, "accordion-title"])}" data-v-809259b9><span data-v-809259b9>${ssrInterpolate(_ctx.title)}</span><img${ssrRenderAttr("src", _imports_0)} alt="icona a freccia" class="${ssrRenderClass([{ "rotate": _ctx.isOpen }, "arrow"])}" data-v-809259b9></h2></div>`);
  }
  if (_ctx.isOpen && !_ctx.isLink) {
    _push(`<div class="accordion-content" data-v-809259b9><p data-v-809259b9>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</p>`);
    if (_ctx.hasInput) {
      _push(`<div class="accordion-input" data-v-809259b9><input${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderDynamicModel(_ctx.type, _ctx.email, null)} data-v-809259b9>`);
      _push(ssrRenderComponent(_component_ButtonComponent, { width: "100%" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Invia`);
          } else {
            return [
              createTextVNode("Invia")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.hasMail) {
      _push(`<div class="accordion-input" data-v-809259b9><form action="/submit-form" method="POST" aria-label="Form di contatto" data-v-809259b9><div class="form-group" data-v-809259b9><label for="email" data-v-809259b9>Email</label><input id="email" type="email" placeholder="Inserisci la tua email"${ssrRenderAttr("value", _ctx.emailText)} required aria-required="true" aria-describedby="email-help" data-v-809259b9><span id="email-help" class="visually-hidden" data-v-809259b9>Inserisci la tua email per essere ricontattato</span></div><div class="form-group" data-v-809259b9><label for="message" data-v-809259b9>Messaggio</label><textarea id="message" style="${ssrRenderStyle(_ctx.heigtInput)}" placeholder="Inserisci il tuo messaggio" required aria-required="true" aria-describedby="message-help" data-v-809259b9>${ssrInterpolate(_ctx.email)}</textarea><span id="message-help" class="visually-hidden" data-v-809259b9>Scrivi il tuo messaggio</span></div>`);
      _push(ssrRenderComponent(_component_ButtonComponent, {
        type: "submit",
        width: "100%",
        "aria-label": "Invia il messaggio"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Invia `);
          } else {
            return [
              createTextVNode(" Invia ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
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
const AccordionComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-809259b9"]]);

export { AccordionComponent as A };
//# sourceMappingURL=AccordionComponent-C6KMHEPj.mjs.map
