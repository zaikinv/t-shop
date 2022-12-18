import { LitElement as h, html as l, css as g } from "lit";
class p extends h {
  static get properties() {
    return {
      url: { type: String },
      color: { type: String },
      scale: { type: String }
    };
  }
  firstUpdated(m) {
    const t = this.scale ? +this.scale : 1, i = `${252 * t}px`, o = `${300 * t}px`, n = 75 * t, a = 75 * t, r = `${87 * t}px`, c = `${65 * t}px`;
    Object.assign(this.shadowRoot.getElementById("tshirt-div").style, {
      width: i,
      height: o,
      position: "relative",
      backgroundColor: this.color,
      margin: "auto"
    }), Object.assign(this.shadowRoot.getElementById("t-shirt-basic").style, {
      width: i,
      height: o
    }), Object.assign(this.shadowRoot.getElementById("tshirt-canvas").style, {
      position: "absolute",
      left: r,
      top: c
    });
    const s = this.shadowRoot.getElementById("tshirt-canvas"), d = s.getContext("2d"), e = new Image();
    e.addEventListener(
      "load",
      function() {
        s.height = n, s.width = a, d.drawImage(e, 0, 0);
      },
      !1
    ), e.src = `${this.url}&auto=format&fit=crop&w=${n}&h=${a}`;
  }
  constructor() {
    super();
  }
  render() {
    return l`
      <div id="tshirt-div">
        <img id="t-shirt-basic" src="https://luciferreeves.github.io/TShirtDesigner/old/img/crew_front.png" />
        <canvas id="tshirt-canvas"></canvas>
        </div>
      </div>
    `;
  }
  static get styles() {
    return g`
      :host {
        text-align: center;
      }
    `;
  }
}
window.customElements.define("product-tile", p);
export {
  p as ProductTile
};
