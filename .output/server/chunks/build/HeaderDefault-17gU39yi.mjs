import { useSSRContext, resolveComponent, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Livello_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2029%2029'%20style='enable-background:new%200%200%2029%2029;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23fff;}%20.st1{fill:red;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M14.5,28C21.9,28,28,21.9,28,14.5S21.9,1,14.5,1S1,7.1,1,14.5S7.1,28,14.5,28z%20M14.5,2.1%20c6.9,0,12.4,5.6,12.4,12.4c0,6.9-5.6,12.4-12.4,12.4c-6.9,0-12.4-5.6-12.4-12.4C2.1,7.6,7.6,2.1,14.5,2.1z'/%3e%3cpath%20class='st0'%20d='M14.5,28.5c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S22.2,28.5,14.5,28.5z%20M14.5,1.5%20c-7.2,0-13,5.8-13,13c0,7.2,5.8,13,13,13c7.2,0,13-5.8,13-13C27.5,7.3,21.7,1.5,14.5,1.5z%20M14.5,27.4c-7.1,0-12.9-5.8-12.9-12.9%20c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9C27.4,21.6,21.6,27.4,14.5,27.4z%20M14.5,2.6C7.9,2.6,2.6,7.9,2.6,14.5%20s5.4,11.9,11.9,11.9c6.6,0,11.9-5.4,11.9-11.9S21.1,2.6,14.5,2.6z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M8,15h13.8c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H8c-0.3,0-0.5,0.2-0.5,0.5C7.5,14.8,7.7,15,8,15z'/%3e%3cpath%20class='st0'%20d='M21.8,15.5H8c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h13.8c0.6,0,1,0.5,1,1C22.9,15.1,22.4,15.5,21.8,15.5z%20M8,14.5%20L8,14.5l13.8,0.1L8,14.5z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M11.9,19.2c0.2,0,0.3-0.1,0.4-0.2c0.2-0.2,0.1-0.6-0.1-0.7l-1.6-1.3L8,14.5l4.4-3.8c0.2-0.2,0.2-0.5,0.1-0.7%20c-0.2-0.2-0.5-0.2-0.7-0.1l-4.8,4.2c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2,0.1,0.3,0.2,0.4l3.1,2.8l1.7,1.3%20C11.7,19.1,11.8,19.2,11.9,19.2z'/%3e%3cpath%20class='st0'%20d='M11.9,19.7c-0.2,0-0.5-0.1-0.6-0.2l-1.7-1.3l-3.1-2.8c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.1-0.6,0.4-0.8l4.8-4.2%20c0.4-0.4,1.1-0.3,1.5,0.1c0.4,0.4,0.3,1.1-0.1,1.5l-3.9,3.4l2.2,2l1.6,1.3c0.4,0.4,0.5,1,0.2,1.4C12.5,19.5,12.3,19.7,11.9,19.7z%20M12,10.4l-4.9,4.1l3.1,2.8l1.7,1.3c0,0,0,0,0,0l-1.7-1.3l-2.7-2.4c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1,0.1-0.3,0.2-0.4L12,10.4z'/%3e%3c/g%3e%3c/svg%3e";
const _sfc_main$1 = {
  name: "ButtonBack",
  methods: {
    goBack() {
      if (this.$route.name) {
        this.$router.go(-1);
      } else {
        this.$router.push("/");
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "btnBack" }, _attrs))} data-v-c1d2ba13><img${ssrRenderAttr("src", _imports_0)} alt="icona del tasto indietro" data-v-c1d2ba13></button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ButtonBackComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ButtonBack = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c1d2ba13"]]);
const _sfc_main = {
  name: "HeaderDefault",
  components: {
    ButtonBack
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ButtonBack = resolveComponent("ButtonBack");
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-3df32caf>`);
  _push(ssrRenderComponent(_component_ButtonBack, {
    onClick: ($event) => _ctx.$router.go(-1)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="icona del tasto indietro" data-v-3df32caf${_scopeId}>`);
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
  _push(`<h1 data-v-3df32caf>${ssrInterpolate($props.title)}</h1></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderDefault.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3df32caf"]]);

export { Header as H };
//# sourceMappingURL=HeaderDefault-17gU39yi.mjs.map
