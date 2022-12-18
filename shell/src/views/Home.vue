<script setup lang="ts">
/**
 * Import Micro Frontends
 */
import "product-tile";
import "product-teaser";

import { useRouter } from "vue-router";
import { useProductsStore } from "../stores/store";

const router = useRouter();
const productsStore = useProductsStore();

type Product = {
  imageUrl: string;
  id: string;
  name: string;
  price: string;
};

const goToProduct = (product: Product) => {
  productsStore.setActiveProduct(product);
  router.push(`/product/${productsStore.currentCategory}/${product.id}`);
};
</script>

<template>
  <product-teaser></product-teaser>
  <h2 class="container-title">Our top picks</h2>

  <div class="container-products">
    <div
      class="tile"
      @click="goToProduct(product)"
      v-for="product in productsStore.availableProducts"
      :key="product.id"
    >
      <product-tile
        class="tile__image"
        :id="product.id"
        :category="productsStore.currentCategory"
        color="aliceblue"
      >
      </product-tile>

      <p class="tile__title">T-Shirt "{{ product.name }}"</p>
      <p class="tile__price">€{{ product.price }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-teaser {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-auto-flow: column;
  gap: 60px;
  padding: 2rem 0;

  @media (max-width: 960px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
  }

  &__button {
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

  &__title {
    margin-top: 0;
  }
}

.container-title {
  margin-bottom: 0;
  padding: 1rem 1.5rem 0;
}

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
</style>
