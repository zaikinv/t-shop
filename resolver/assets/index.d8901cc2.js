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
    const t = this.scale ? +this.scale : 1, i = `${252 * t}px`, o = `${300 * t}px`, n = `${87 * t}px`, a = `${65 * t}px`;
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
      top: a
    });
    const s = this.shadowRoot.getElementById("tshirt-canvas"), r = s.getContext("2d"), e = new Image();
    e.addEventListener(
      "load",
      function() {
        s.height = canvasHeight, s.width = canvasWidth, r.drawImage(e, 0, 0);
      },
      !1
    ), e.src = `${this.url}&auto=format&fit=crop&w=${75 * t}&h=${75 * t}`;
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
