import { LitElement as l, html as g, css as p } from "lit";
import { assign as e } from "lodash-es";
class m extends l {
  static get properties() {
    return {
      id: { type: String },
      category: { type: String },
      color: { type: String },
      scale: { type: String }
    };
  }
  firstUpdated() {
    const t = this.scale ? +this.scale : 1, o = `${252 * t}px`, r = `${300 * t}px`, n = Math.floor(75 * t), a = Math.floor(75 * t), c = `${87 * t}px`, d = `${65 * t}px`;
    e({ a: 1, c: 3 }, { a: 0 }), e(this.shadowRoot.getElementById("tshirt-div").style, {
      width: o,
      height: r,
      position: "relative",
      backgroundColor: "red",
      margin: "auto"
    }), e(this.shadowRoot.getElementById("t-shirt-basic").style, {
      width: o,
      height: r
    }), e(this.shadowRoot.getElementById("tshirt-canvas").style, {
      position: "absolute",
      left: c,
      top: d
    });
    const s = this.shadowRoot.getElementById("tshirt-canvas"), h = s.getContext("2d"), i = new Image();
    i.addEventListener(
      "load",
      function() {
        s.height = n, s.width = a, h.drawImage(i, 0, 0);
      },
      !1
    ), i.src = `https://loremflickr.com/${n}/${a}/${this.category}?lock=${this.id}`;
  }
  constructor() {
    super();
  }
  render() {
    return g`
      <div id="tshirt-div">
        <img id="t-shirt-basic" src="https://luciferreeves.github.io/TShirtDesigner/old/img/crew_front.png" />
        <canvas id="tshirt-canvas"></canvas>
        </div>
      </div>
    `;
  }
  static get styles() {
    return p`
      :host {
        text-align: center;
      }
    `;
  }
}
window.customElements.define("product-tile", m);
export {
  m as ProductTile
};
