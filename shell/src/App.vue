<script setup lang="ts">
/**
 * Import Micro Frontends
 */
import "shop-header";
import "shop-footer";

import { useProductsStore } from "./stores/store";

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const productsStore = useProductsStore();
const productsNumber = 12;
productsStore.loadRandomProducts(productsNumber);
productsStore.loadActiveProduct();

/**
 * Listen for Micro Frontends events
 */
document.addEventListener("select-category", (event: any) => {
  router.push(`/`);
  productsStore.loadRandomProducts(productsNumber, event.detail);
});

document.addEventListener("go-home", () => {
  router.push(`/`);
});

document.addEventListener("go-to-cart", () => {
  router.push(`/cart`);
});

document.addEventListener("select-random", () => {
  const randomNumber = Math.floor(
    Math.random() * productsStore.availableProducts.length
  );

  const randomProduct = productsStore.availableProducts[randomNumber];

  productsStore.setActiveProduct(randomProduct);
  router.push(`/product/${productsStore.currentCategory}/${randomProduct.id}`);
});
</script>

<template>
  <div class="container">
    <shop-header
      :categories="JSON.stringify(productsStore.availableCategories)"
      :cart="JSON.stringify(productsStore.currentCart)"
    ></shop-header>
    <Suspense>
      <RouterView
        :key="route.fullPath"
        :products="productsStore.availableProducts"
      />
    </Suspense>
  </div>
  <shop-footer
    :categories="JSON.stringify(productsStore.availableCategories)"
  ></shop-footer>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  display: grid;
  min-height: 100vh;
  margin: 0;
  grid-template-rows: 1fr auto;

  font-family: Avenir Next;
}

.container {
  margin: 0 auto;
  padding: 2rem 3rem 2rem;
  width: 1470px;

  @media (max-width: 1560px) {
    width: 1270px;
  }

  @media (max-width: 1260px) {
    width: 960px;
  }

  @media (max-width: 960px) {
    width: 660px;
  }

  @media (max-width: 660px) {
    width: 460px;
    grid-template-columns: 100vw;
    margin: 0;
  }
}
</style>
