import { css, html, LitElement } from "lit";
import { assign } from "lodash-es";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ProductTile extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      category: { type: String },
      color: { type: String },
      scale: { type: String },
    };
  }

  firstUpdated() {
    const scale = this.scale ? +this.scale : 1;
    const width = `${252 * scale}px`;
    const height = `${300 * scale}px`;
    const canvasHeight = Math.floor(75 * scale);
    const canvasWidth = Math.floor(75 * scale);
    const canvasLeft = `${87 * scale}px`;
    const canvasTop = `${65 * scale}px`;

    assign({ a: 1, c: 3 }, { a: 0 });

    assign(this.shadowRoot.getElementById("tshirt-div").style, {
      width,
      height,
      position: "relative",
      backgroundColor: this.color,
      margin: "auto",
    });

    assign(this.shadowRoot.getElementById("t-shirt-basic").style, {
      width,
      height,
    });

    assign(this.shadowRoot.getElementById("tshirt-canvas").style, {
      position: "absolute",
      left: canvasLeft,
      top: canvasTop,
    });

    const canvas = this.shadowRoot.getElementById("tshirt-canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image(); // Create new img element

    img.addEventListener(
      "load",
      () => {
        // Uncomment to hang in there
        canvas.height = canvasHeight;
        canvas.width = canvasWidth;
        ctx.drawImage(img, 0, 0);
      },
      false
    );

    img.src = `https://picsum.photos/seed/${this.id}/${canvasHeight}/${canvasWidth}`;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="tshirt-div">
        <img id="t-shirt-basic" src="https://luciferreeves.github.io/TShirtDesigner/old/img/crew_front.png" />
        <canvas id="tshirt-canvas"></canvas>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        text-align: center;
      }
    `;
  }
}

window.customElements.define("product-tile", ProductTile);
