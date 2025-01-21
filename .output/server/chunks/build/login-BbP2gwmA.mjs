import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { H as Header } from './HeaderDefault-BNJnD7Pr.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import 'vue-router';
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
import 'pinia';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-489dc4f6>`);
      _push(ssrRenderComponent(Header, { title: "Login" }, null, _parent));
      _push(`<div class="login-container" data-v-489dc4f6><div class="login-card" data-v-489dc4f6><h1 data-v-489dc4f6>Login</h1><form class="login-form" data-v-489dc4f6><div class="form-group" data-v-489dc4f6><label for="username" data-v-489dc4f6>Username:</label><input type="text" id="username" name="username" required data-v-489dc4f6></div><div class="form-group" data-v-489dc4f6><label for="password" data-v-489dc4f6>Password:</label><input type="password" id="password" name="password" required data-v-489dc4f6></div><button type="submit" data-v-489dc4f6>Login</button></form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-489dc4f6"]]);

export { login as default };
//# sourceMappingURL=login-BbP2gwmA.mjs.map
