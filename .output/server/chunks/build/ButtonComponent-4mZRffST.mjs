import { useSSRContext, resolveComponent, withCtx, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "ButtonComponent",
  props: {
    color: {
      type: String,
      default: "var(--primary)"
    },
    width: {
      type: String,
      default: "90vw"
    },
    isLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: "/"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean || String,
      default: false
    },
    fontSize: {
      type: String,
      default: "1rem"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1e4ace0e>`);
  if (!$props.isLink) {
    _push(`<button${ssrRenderAttr("type", $props.type)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""} class="btn" style="${ssrRenderStyle({
      width: $props.width,
      backgroundColor: $props.disabled ? "var(--disabled)" : $props.color,
      color: $props.color === "var(--primary)" ? "var(--primary)" : "var(--label)",
      border: $props.color === "var(--primary)" ? "none" : "1px solid var(--primary)",
      fontSize: $props.fontSize
    })}" data-v-1e4ace0e>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  } else {
    _push(ssrRenderComponent(_component_router_link, {
      to: $props.link,
      class: "btn",
      style: { backgroundColor: $props.color, width: $props.width, color: $props.color === "var(--primary)" ? "var(--label)" : "var(--primary)", border: $props.color === "var(--primary)" ? "none" : "1px solid var(--primary)" }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ];
        }
      }),
      _: 3
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ButtonComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ButtonComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1e4ace0e"]]);

export { ButtonComponent as B };
//# sourceMappingURL=ButtonComponent-4mZRffST.mjs.map
