<svelte:options tag="product-teaser" />

<script lang="ts">
  import moment from "moment";
  const handleClick = (event: any) => {
    event.stopPropagation();
    (document as any).dispatchEvent(
      new CustomEvent("select-random", {
        bubbles: true,
        composed: true,
      })
    );
  };

  const currentYear = moment().year();
</script>

<div class="container-teaser">
  <div class="container-teaser__left">
    <img
      alt="unsplash"
      src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
    />
  </div>
  <div class="container-teaser__right">
    <h2 class="container-teaser__title">Check out our stylish T-Shirts!</h2>
    <p class="container-teaser__description">
      T-Shirts are a wardrobe essential for everyone in {currentYear}. They are comfortable,
      stylish and come in a variety of colors and designs. T-Shirts are a
      versatile piece of clothing that can be dressed up or down. They can be
      worn with jeans, shorts, chinos or trousers. T-Shirts are a must-have in
      everyone's wardrobe. We have a variety of T-shirts with different prints
      of high quality that will serve you for a long time and will not
      deteriorate even with many washings!
    </p>
    <button class="container-teaser__button" on:click={handleClick}>Get random T-Shirt</button>
  </div>
</div>

<style>
    .container-teaser {
        display: grid;
        grid-auto-columns: 1fr;
        grid-auto-rows: 1fr;
        grid-auto-flow: column;
        gap: 60px;
        padding: 2rem 0;
    }
    @media (max-width: 960px) {
        .container-teaser {
            grid-template-rows: repeat(2, auto);
            grid-template-columns: 1fr;
        }
    }
    .container-teaser img {
        width: 100%;
    }
    .container-teaser__button {
        all: unset;
        border: 1px solid black;
        padding: 0.5rem 1rem;
        cursor: pointer;
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 3rem;
    }
    .container-teaser__title {
        margin-top: 0;
        text-align: left;
    }
    .container-teaser__description {
        margin-top: 0;
        text-align: left;
    }

</style>
