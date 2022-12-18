(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent, ref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, renderList, normalizeStyle, withModifiers, pushScopeId, popScopeId, defineCustomElement } from "vue";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _withScopeId = (n) => (pushScopeId("data-v-add43536"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "product__title" };
const _hoisted_2 = { class: "product__price" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", { class: "product__description" }, " Looking for a stylish and comfortable T-shirt that shows off your personality? Check out our T-shirt with a print! Made from 100% soft cotton, this T-shirt is both comfortable and fashionable. The vibrant print is sure to turn heads, whether you're wearing it out on the town or just relaxing at home. ", -1));
const _hoisted_4 = { class: "product__colors" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  height: "20",
  width: "20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M7 23a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm9-28h-3a1 1 0 0 0-1 .76L25.22 5H2a1 1 0 0 0-.76.34 1 1 0 0 0-.23.8l2 14A1 1 0 0 0 4 21h20a1 1 0 0 0 1-.86l2-13.95.78-3.19H30a1 1 0 0 0 0-2zm-6.87 18H4.87L3.15 7h21.7z" })
], -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "product-add-to-cart__label" }, "Add to cart", -1));
const _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App.ce",
  props: {
    title: null,
    price: null,
    availableColors: null
  },
  setup(__props) {
    const props = __props;
    const selectedColor = ref("");
    const addToCart = () => {
      document.dispatchEvent(
        new CustomEvent("add-to-cart", {
          bubbles: true,
          composed: true,
          detail: {
            title: props.title,
            price: props.price,
            color: selectedColor.value
          }
        })
      );
    };
    const selectColor = (color) => {
      selectedColor.value = color;
      document.dispatchEvent(
        new CustomEvent("select-color", {
          bubbles: true,
          composed: true,
          detail: color
        })
      );
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("h1", _hoisted_1, toDisplayString(__props.title), 1),
        createElementVNode("p", _hoisted_2, "\u20AC" + toDisplayString(__props.price), 1),
        _hoisted_3,
        createElementVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(JSON.parse(__props.availableColors), (color) => {
            return openBlock(), createElementBlock("button", {
              style: normalizeStyle({ "background-color": color }),
              onClick: withModifiers(($event) => selectColor(color), ["stop"])
            }, null, 12, _hoisted_5);
          }), 256))
        ]),
        createElementVNode("button", {
          class: "product__add-to-cart product-add-to-cart",
          onClick: withModifiers(addToCart, ["stop"])
        }, _hoisted_9, 8, _hoisted_6)
      ], 64);
    };
  }
});
const _style_0 = "*[data-v-add43536] {\n  font-family: Avenir Next;\n}\n.product__image[data-v-add43536] {\n  width: 100%;\n}\n.product__title[data-v-add43536] {\n  margin-top: 0;\n}\n.product__add-to-cart[data-v-add43536] {\n  all: unset;\n  border: 1px solid black;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 3rem;\n}\n.product__colors button[data-v-add43536] {\n  all: unset;\n  height: 2rem;\n  width: 2rem;\n  margin: 2rem 0;\n  cursor: pointer;\n  margin-right: 1rem;\n  border: 1px solid black;\n}\n.product-add-to-cart__label[data-v-add43536] {\n  margin-left: 0.5rem;\n}";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-add43536"]]);
const AppCustomElement = defineCustomElement(App);
customElements.define("product-buy-box", AppCustomElement);
