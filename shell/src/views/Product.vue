<script setup lang="ts">
import { onUnmounted, ref } from "vue";
/**
 * Import Micro Frontends
 */
import "product-tile";
import "product-buy-box";

import { useRoute, useRouter } from "vue-router";
import { useProductsStore } from "../stores/store";

const router = useRouter();
const route = useRoute();
const productsStore = useProductsStore();
const currentColor = ref("aliceblue");

const goToProduct = (product: {
  imageUrl: string;
  id: string;
  name: string;
  price: string;
}) => {
  productsStore.setActiveProduct(product);
  router.push(`/product/${route.params.category}/${product.id}`);
};

const goToCart = () => {
  router.push(`/cart`);
};

const addToCartListener = (event: any) => {
  productsStore.addToCart({
    id: route.params.id.toString(),
    name: event.detail.title,
    price: event.detail.price,
    color: event.detail.color,
  });
};

const selectColorListener = (event: any) => {
  currentColor.value = event.detail;
};

document.addEventListener("add-to-cart", addToCartListener);
document.addEventListener("select-color", selectColorListener);

onUnmounted(() => {
  document.removeEventListener("add-to-cart", addToCartListener);
  document.removeEventListener("select-color", selectColorListener);
});
</script>

<template>
  <div class="container-product">
    <div class="product-image">
      <product-tile
        :id="productsStore.activeProduct.id"
        :category="route.params.category"
        :color="currentColor"
        :key="currentColor"
        scale="2"
      >
      </product-tile>
    </div>
    <div class="product">
      <product-buy-box
        :title="`T-Shirt '${productsStore.activeProduct.name}'`"
        :price="productsStore.activeProduct.price"
        :available-colors="JSON.stringify(productsStore.availableColors)"
      ></product-buy-box>
    </div>
  </div>

  <h2 class="container-title">Related</h2>
  <p>You might also like:</p>
  <div class="container-products">
    <div
      class="tile"
      @click="goToProduct(product)"
      v-for="product in productsStore.availableProducts.slice(0, 8)"
      :key="product.imageUrl"
    >
      {{ product.imageUrl }}
      <product-tile
        :id="product.id"
        :category="route.params.category"
        color="aliceblue"
      >
      </product-tile>
      <p class="tile__title">T-Shirt "{{ product.name }}"</p>
      <p class="tile__price">€{{ product.price }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-products {
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: repeat(5, auto);
  gap: 40px;
  grid-auto-flow: row dense;

  @media (max-width: 1560px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 1260px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, auto);
  }

  padding: 2rem 0 5rem;
}

.tile {
  text-align: center;
  min-height: 300px;
  cursor: pointer;

  &__image {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 1 / 1;
  }

  &__price {
    color: grey;
  }

  &__price,
  &__title {
    text-align: left;
    font-size: 1rem;
    margin: 0.1rem 0rem;
  }
}

.container-title {
  margin-bottom: 0;
  padding: 0;
}

.container-product {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-auto-flow: column;

  gap: 40px;
  padding: 2rem 0 5rem;
  height: fit-content;

  @media (max-width: 960px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 1fr;
  }
}

.product {
  width: 70%;

  &__image {
    width: 100%;
  }
  &__title {
    margin-top: 0;
  }
  &__add-to-cart {
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

  &__colors button {
    all: unset;
    height: 2rem;
    width: 2rem;
    margin: 2rem 0;
    cursor: pointer;
    margin-right: 1rem;
    border: 1px solid black;
  }
}

.product-add-to-cart__label {
  margin-left: 0.5rem;
}
</style>
