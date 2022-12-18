// @ts-nocheck
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

import reactToWebComponent from "react-to-webcomponent";

const WebComponent = reactToWebComponent(App, React, ReactDOMClient, {
  shadow: true,
});

customElements.define("shop-header", WebComponent);
