import { LitElement as l, html as d, css as g } from "lit";
class p extends l {
  static get properties() {
    return {
      url: { type: String },
      color: { type: String },
      scale: { type: String }
    };
  }
  firstUpdated(m) {
    const t = this.scale ? +this.scale : 1, n = `${252 * t}px`, r = `${300 * t}px`, s = Math.floor(75 * t), e = Math.floor(75 * t), a = `${87 * t}px`, c = `${65 * t}px`;
    Object.assign(this.shadowRoot.getElementById("tshirt-div").style, {
      width: n,
      height: r,
      position: "relative",
      backgroundColor: this.color,
      margin: "auto"
    }), Object.assign(this.shadowRoot.getElementById("t-shirt-basic").style, {
      width: n,
      height: r
    }), Object.assign(this.shadowRoot.getElementById("tshirt-canvas").style, {
      position: "absolute",
      left: a,
      top: c
    });
    const i = this.shadowRoot.getElementById("tshirt-canvas"), h = i.getContext("2d"), o = new Image();
    o.addEventListener(
      "load",
      function() {
        i.height = s, i.width = e, h.drawImage(o, 0, 0);
      },
      !1
    ), console.log(`${this.url}&auto=format&fit=crop&w=${s}&h=${e}`), o.src = `${this.url}&auto=format&fit=crop&w=${s}&h=${e}`;
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
