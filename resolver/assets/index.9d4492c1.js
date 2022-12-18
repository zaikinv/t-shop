import { LitElement as d, html as l, css as g } from "lit";
class p extends d {
  static get properties() {
    return {
      id: { type: String },
      category: { type: String },
      color: { type: String },
      scale: { type: String }
    };
  }
  performUpdate() {
    const t = this.scale ? +this.scale : 1, i = `${252 * t}px`, o = `${300 * t}px`, n = Math.floor(75 * t), r = Math.floor(75 * t), a = `${87 * t}px`, c = `${65 * t}px`;
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
      left: a,
      top: c
    });
    const s = this.shadowRoot.getElementById("tshirt-canvas"), h = s.getContext("2d"), e = new Image();
    e.addEventListener(
      "load",
      function() {
        s.height = n, s.width = r, h.drawImage(e, 0, 0);
      },
      !1
    ), e.src = `https://loremflickr.com/${n}/${r}/${this.category}?lock=${this.id}`;
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
