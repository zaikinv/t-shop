import { LitElement as c, html as d, css as h } from "lit";
class l extends c {
  static get properties() {
    return {
      url: { type: String },
      color: { type: String },
      scale: { type: String }
    };
  }
  firstUpdated(p) {
    const t = this.scale ? +this.scale : 1, i = `${252 * t}px`, o = `${300 * t}px`, n = `${87 * t}px`, r = `${65 * t}px`;
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
      left: n,
      top: r
    });
    const e = this.shadowRoot.getElementById("tshirt-canvas"), a = e.getContext("2d"), s = new Image();
    s.addEventListener(
      "load",
      function() {
        e.height = 75 * t, e.width = 75 * t, a.drawImage(s, 0, 0);
      },
      !1
    ), s.src = `${this.url}&auto=format&fit=crop&w=${75 * t}&h=${75 * t}`;
  }
  constructor() {
    super();
  }
  render() {
    return d`
      <div id="tshirt-div">
        <img id="t-shirt-basic" src="https://luciferreeves.github.io/TShirtDesigner/old/img/crew_front.png" />
        <canvas id="tshirt-canvas"></canvas>
        </div>
      </div>
    `;
  }
  static get styles() {
    return h`
      :host {
        text-align: center;
      }
    `;
  }
}
window.customElements.define("product-tile", l);
export {
  l as ProductTile
};
