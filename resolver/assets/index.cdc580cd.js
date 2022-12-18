(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import require$$0$1 from "react";
import require$$0 from "react-dom";
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var client = {};
var hydrateRoot;
var createRoot;
var m$2 = require$$0;
{
  createRoot = client.createRoot = m$2.createRoot;
  hydrateRoot = client.hydrateRoot = m$2.hydrateRoot;
}
const ReactDOMClient = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get createRoot() {
    return createRoot;
  },
  get hydrateRoot() {
    return hydrateRoot;
  },
  default: client
}, [client]);
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0$1, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d2 = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p.hasOwnProperty(b) && (d2[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d2[b] && (d2[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d2, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
const Fragment = jsxRuntime.exports.Fragment;
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
function App({
  categories
}) {
  const categoriesParsed = JSON.parse(categories);
  const selectCategory = (event, category) => {
    event.stopPropagation();
    document.dispatchEvent(new CustomEvent("select-category", {
      bubbles: true,
      composed: true,
      detail: category
    }));
  };
  const goHome = (event) => {
    event.stopPropagation();
    document.dispatchEvent(new CustomEvent("go-home", {
      bubbles: true,
      composed: true
    }));
  };
  const css = `
    #root {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    .header {
      padding: 3rem 0;
      align-items: center;
      display: grid;
      grid-template-areas: "logo navigation icons";
      grid-template-columns: auto auto 1fr;
      column-gap: 2rem;
    }
    @media (max-width: 960px) {
      .header {
        grid-template-areas: "logo icons";
        grid-template-columns: auto 1fr;
      }
    }
    .header__logo {
      grid-area: logo;
    }
    .header__navigation {
      grid-area: navigation;
    }
    @media (max-width: 960px) {
      .header__navigation {
        display: none;
      }
    }
    .header__icons {
      grid-area: icons;
      justify-self: end;
    }
    .header-icons__items-cart {
      margin-top: -10px;
      position: absolute;
      margin-left: 5px;
    }
    .header-logo__logo {
      border: 2px solid black;
      color: black;
      text-align: center;
      padding: 5px 30px;
      cursor: pointer;
      width: 60px;
    }
    .header-navigation__item {
      margin-right: 1rem;
    }
    .header-navigation {
      position: relative;
    }
    .header-navigation__item-title {
      padding: 1rem 0;
    }
    .header-navigation__content {
      border: 1px solid #d1d5db;
      margin-top: -1px;
      display: none;
      left: 0px;
      position: absolute;
      top: 100%;
      width: auto;
      background: #fff;
      z-index: 9999;
    }
    .header-navigation__trigger:hover .header-navigation__content {
      display: block;
    }
    .header-navigation-content__item {
      padding: 1rem 2rem;
      margin: 0;
      cursor: pointer;
    }
    .header-navigation-content__item:hover {
      background: black;
      color: white;
    }
`;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("style", {
      children: css
    }), /* @__PURE__ */ jsxs("header", {
      className: "header",
      children: [/* @__PURE__ */ jsx("div", {
        className: "header__logo header-logo",
        children: /* @__PURE__ */ jsx("div", {
          className: "header-logo__logo",
          onClick: goHome,
          children: "T-SHOP"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "header__navigation header-navigation",
        children: /* @__PURE__ */ jsx("div", {
          className: "header-navigation",
          children: /* @__PURE__ */ jsxs("div", {
            className: "header-navigation__item header-navigation__trigger",
            children: [/* @__PURE__ */ jsx("div", {
              className: "header-navigation__item-title",
              children: "Categories"
            }), /* @__PURE__ */ jsx("div", {
              className: "header-navigation__content",
              children: categoriesParsed.map((category, id) => /* @__PURE__ */ jsx("p", {
                className: "header-navigation-content__item",
                onClick: (e) => selectCategory(e, category),
                children: category
              }, id))
            })]
          })
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "header__icons header-icons",
        children: [/* @__PURE__ */ jsx("svg", {
          height: "20",
          width: "20",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 32 32",
          children: /* @__PURE__ */ jsx("path", {
            d: "M7 23a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm9-28h-3a1 1 0 0 0-1 .76L25.22 5H2a1 1 0 0 0-.76.34 1 1 0 0 0-.23.8l2 14A1 1 0 0 0 4 21h20a1 1 0 0 0 1-.86l2-13.95.78-3.19H30a1 1 0 0 0 0-2zm-6.87 18H4.87L3.15 7h21.7z"
          })
        }), /* @__PURE__ */ jsx("span", {
          className: "header-icons__items-cart",
          children: "9"
        })]
      })]
    })]
  });
}
App.propTypes = {
  categories: propTypes.exports.string.isRequired
};
const u = Symbol.for("r2wc.reactRender"), m = Symbol.for("r2wc.shouldRender"), d = Symbol.for("r2wc.root");
function P(s = "") {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
const j = {
  expando: function(s, a, c) {
    Object.defineProperty(s, a, {
      enumerable: true,
      get: function() {
        return c;
      },
      set: function(r) {
        c = r, this[u]();
      }
    }), s[u]();
  }
};
function w(s, a, c, r = {}) {
  const f2 = {}, y = {}, b = {};
  r.props || (r.props = s.propTypes ? Object.keys(s.propTypes) : []);
  const g = Array.isArray(r.props) ? r.props.slice() : Object.keys(r.props), S = Array.isArray(r.props);
  g.forEach((e) => {
    f2[e] = S ? String : r.props[e], y[e] = P(e), b[y[e]] = e;
  });
  const h = {
    isConnected: "isConnected" in HTMLElement.prototype
  };
  let l2 = false;
  const p2 = function(...e) {
    const o = Reflect.construct(HTMLElement, e, this.constructor);
    return typeof r.shadow == "string" ? o.attachShadow({ mode: r.shadow }) : r.shadow && (console.warn('Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'), o.attachShadow({ mode: "open" })), o;
  }, i = Object.create(HTMLElement.prototype);
  i.constructor = p2;
  const A = new Proxy(i, {
    has: function(e, o) {
      return o in f2 || o in i;
    },
    set: function(e, o, t, n2) {
      return l2 && (h[o] = true), typeof o == "symbol" || h[o] || o in e ? Reflect.set(e, o, t, n2) : (j.expando(n2, o, t), true);
    },
    getOwnPropertyDescriptor: function(e, o) {
      const t = Reflect.getOwnPropertyDescriptor(e, o);
      if (t)
        return t;
      if (o in f2)
        return {
          configurable: true,
          enumerable: true,
          writable: true,
          value: void 0
        };
    }
  });
  return p2.prototype = A, i.connectedCallback = function() {
    this[m] = true, this[u]();
  }, i.disconnectedCallback = function() {
    typeof c.createRoot == "function" ? this[d].unmount() : c.unmountComponentAtNode(this);
  }, i[u] = function() {
    if (this[m] === true) {
      const e = {};
      Object.keys(this).forEach(function(n2) {
        h[n2] !== false && (e[n2] = this[n2]);
      }, this), l2 = true;
      const o = r.shadow ? this.shadowRoot : this, t = a.createElement(s, e);
      typeof c.createRoot == "function" ? (this[d] || (this[d] = c.createRoot(o)), this[d].render(t)) : c.render(t, o), l2 = false;
    }
  }, p2.observedAttributes = Object.keys(b), i.attributeChangedCallback = function(e, o, t) {
    const n2 = b[e] || e;
    switch (f2[n2]) {
      case "ref":
      case Function:
        if (!t && f2[n2] === "ref") {
          t = a.createRef();
          break;
        }
        typeof window < "u" ? t = window[t] || t : typeof global < "u" && (t = global[t] || t), typeof t == "function" && (t = t.bind(this));
        break;
      case Number:
        t = parseFloat(t);
        break;
      case Boolean:
        t = /^[ty1-9]/i.test(t);
        break;
      case Object:
      case Array:
        t = JSON.parse(t);
        break;
    }
    this[n2] = t;
  }, p2;
}
const WebComponent = w(App, require$$0$1, ReactDOMClient, {
  shadow: true
});
customElements.define("shop-header", WebComponent);
