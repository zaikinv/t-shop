import { defineCustomElement } from "vue";
import App from "./App.ce.vue";

export const AppCustomElement = defineCustomElement(App);

customElements.define("product-buy-box", AppCustomElement);
