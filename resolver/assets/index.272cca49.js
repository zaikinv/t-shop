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
    .container {
      margin: 0 auto;
      padding: 2rem 3rem 2rem;
      width: 1470px;
    }
    @media (max-width: 1560px) {
      .container {
        width: 1270px;
      }
    }
    @media (max-width: 1260px) {
      .container {
        width: 960px;
      }
    }
    @media (max-width: 960px) {
      .container {
        width: 660px;
      }
    }
    @media (max-width: 660px) {
      .container {
        width: 460px;
        grid-template-columns: 100vw;
        margin: 0;
      }
    }  
    footer {
      padding: 2rem 1.5rem;
    }
    .footer {
      align-items: start;
      background: black;
      color: white;
    }
    .footer__items {
      grid-area: items;
    }
    .footer__text {
      grid-area: text;
    }
    .footer-items__list {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }
    .footer-items__item {
      padding-bottom: 0.5rem;
    }
    .footer-items__item > a {
      color: white;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 40px;
      grid-auto-flow: row;
      justify-content: center;
      align-content: center;
      justify-items: center;
      grid-template-areas: "left main main main right";
    }
    .footer-grid__main {
      justify-self: stretch;
      grid-area: main;
    }
    .footer-grid__left {
      justify-self: stretch;
      grid-area: left;
    }
    .footer-grid__right {
      justify-self: stretch;
      grid-area: right;
    }
    @media (max-width: 960px) {
      .footer-grid {
        display: block;
      }
      .footer-grid__main {
        padding-bottom: 3rem;
      }
      .footer-grid__left {
        padding-bottom: 1rem;
      }
    }
    .footer-logo {
      border: 2px solid white;
      color: white;
      text-align: center;
      padding: 5px 30px;
      cursor: pointer;
      width: 60px;
    }
    .footer-text__description {
      padding-right: 2rem;
    }
  `;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("style", {
      children: css
    }), /* @__PURE__ */ jsx("footer", {
      className: "footer",
      children: /* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs("div", {
          className: "footer-grid",
          children: [/* @__PURE__ */ jsx("div", {
            className: "footer-grid__left",
            children: /* @__PURE__ */ jsxs("div", {
              className: "footer__items footer-items",
              children: [/* @__PURE__ */ jsx("h2", {
                className: "footer-items__title",
                children: "Categories"
              }), /* @__PURE__ */ jsx("ul", {
                className: "footer-items__list",
                children: categoriesParsed.map((category, id) => /* @__PURE__ */ jsx("li", {
                  className: "footer-items__item",
                  children: /* @__PURE__ */ jsx("a", {
                    href: "#",
                    children: category
                  })
                }, id))
              })]
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "footer-grid__main",
            children: /* @__PURE__ */ jsxs("div", {
              className: "footer__text footer-text",
              children: [/* @__PURE__ */ jsx("h2", {
                className: "footer-text__title",
                children: "About us"
              }), /* @__PURE__ */ jsx("p", {
                className: "footer-text__description",
                children: "Looking for a comfortable, stylish T-shirt? Look no further than our collection! Made from 100% cotton, our T-shirts are soft and comfortable to wear. It's also durable and machine-washable. Whether you're dressing up for a casual day or working out at the gym, our T-shirts is a great choice."
              })]
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "footer-grid__right",
            children: /* @__PURE__ */ jsx("div", {
              className: "footer-logo",
              onClick: goHome,
              children: "T-SHOP"
            })
          })]
        })
      })
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
customElements.define("shop-footer", WebComponent);
