import{LitElement as u,html as f,css as g}from"lit";import{assign as n}from"lodash-es";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();class p extends u{static get properties(){return{id:{type:String},category:{type:String},color:{type:String},scale:{type:String}}}firstUpdated(){const o=this.scale?+this.scale:1,r=`${252*o}px`,s=`${300*o}px`,t=Math.floor(75*o),e=Math.floor(75*o),i=`${87*o}px`,d=`${65*o}px`;n({a:1,c:3},{a:0}),n(this.shadowRoot.getElementById("tshirt-div").style,{width:r,height:s,position:"relative",backgroundColor:this.color,margin:"auto"}),n(this.shadowRoot.getElementById("t-shirt-basic").style,{width:r,height:s}),n(this.shadowRoot.getElementById("tshirt-canvas").style,{position:"absolute",left:i,top:d});const c=this.shadowRoot.getElementById("tshirt-canvas"),h=c.getContext("2d"),a=new Image;a.addEventListener("load",function(){c.height=t,c.width=e,h.drawImage(a,0,0)},!1),a.src=`https://loremflickr.com/${t}/${e}/${this.category}?lock=${this.id}`}constructor(){super()}render(){return f`
      <div id="tshirt-div">
        <img id="t-shirt-basic" src="https://luciferreeves.github.io/TShirtDesigner/old/img/crew_front.png" />
        <canvas id="tshirt-canvas"></canvas>
        </div>
      </div>
    `}static get styles(){return g`
      :host {
        text-align: center;
      }
    `}}window.customElements.define("product-tile",p);
