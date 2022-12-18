import { LitElement as l, html as d, css as g } from "lit";
class p extends l {
  static get properties() {
    return {
      id: { type: String },
      category: { type: String },
      color: { type: String },
      scale: { type: String }
    };
  }
  firstUpdated(v) {
    const t = this.scale ? +this.scale : 1, c = `${252 * t}px`, n = `${300 * t}px`, s = Math.floor(75 * t), e = Math.floor(75 * t), r = `${87 * t}px`, a = `${65 * t}px`;
    Object.assign(this.shadowRoot.getElementById("tshirt-div").style, {
      width: c,
      height: n,
      position: "relative",
      backgroundColor: this.color,
      margin: "auto"
    }), Object.assign(this.shadowRoot.getElementById("t-shirt-basic").style, {
      width: c,
      height: n
    }), Object.assign(this.shadowRoot.getElementById("tshirt-canvas").style, {
      position: "absolute",
      left: r,
      top: a
    });
    const i = this.shadowRoot.getElementById("tshirt-canvas"), h = i.getContext("2d"), o = new Image();
    o.addEventListener(
      "load",
      function() {
        i.height = s, i.width = e, h.drawImage(o, 0, 0);
      },
      !1
    ), console.log(`https://loremflickr.com/${s}/${e}/${this.category}?lock=${this.id}`), o.src = `https://loremflickr.com/${s}/${e}/${this.category}?lock=${this.id}`;
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
