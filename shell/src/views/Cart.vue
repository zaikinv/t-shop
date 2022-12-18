<script setup lang="ts">
import { useRouter } from "vue-router";
import { useProductsStore } from "../stores/store";
const router = useRouter();

const productsStore = useProductsStore();
</script>

<template>
  <h2 class="container-title">Cart</h2>
  <div class="container-entries" v-if="productsStore.cart.length">
    <div
      class="container-entries__entry container-entries-entry"
      v-for="product of productsStore.cart"
    >
      <product-tile
        :id="product.id"
        :category="productsStore.currentCategory"
        :color="product.color"
        :scale="0.5"
      >
      </product-tile>
      <div class="container-entries-entry__title container-entries-entry-title">
        <p class="container-entries-entry-title__name">{{ product.name }}</p>
        <p class="container-entries-entry-title__description">
          <b>Color</b>: {{ product.color }}
          <br />
          <b>Product ID</b>: {{ product.id }}
        </p>
      </div>

      <p class="container-entries-entry__price">€{{ product.price }}</p>
    </div>
  </div>

  <div class="container-no-entries" v-else>
    You don't have any items in your cart.
  </div>
  <div class="container-total-price">
    <p class="container-total-price__title">Total price</p>
    <p class="container-total-price__value">
      €{{
        productsStore.cart.reduce((acc, product) => +product.price + acc, 0)
      }}.00
    </p>
  </div>
  <div class="container-total-buy-button" v-if="productsStore.cart.length">
    <button @click.prevent="router.push(`/`)">Buy now</button>
  </div>
</template>

<style lang="scss" scoped>
.container-total-buy-button {
  display: grid;
  justify-content: end;

  & > button {
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
}

.container-no-entries {
  display: grid;
  justify-items: center;
  align-content: center;
  height: 20rem;
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
  margin-bottom: 2rem;
}

.container-total-price {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 4rem;

  &__title {
    font-weight: 500;
    padding-left: 1rem;
  }

  &__value {
    font-weight: 500;
    text-align: right;
    padding-right: 2rem;
  }
}

.container-entries-entry-title {
  &__name {
    margin: 0 0 10px 0;
  }

  &__description {
    margin-top: 0;
    font-size: 12px;
  }
}

.container-title {
  padding: 2rem 0;
  margin: 0;
}

.container-entries-entry {
  &__image {
    width: 100px;
  }

  &__title {
  }

  &__price {
    justify-self: end;
    padding-right: 2rem;
  }
}

.container-entries {
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: 1fr;
  gap: 30px;
  border-top: 1px dashed;
  padding: 2rem 0;

  &__entry {
    display: grid;
    align-items: center;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: 1fr 10fr 1fr;
    gap: 50px;
    border-bottom: 1px dashed #8080805c;
    padding-bottom: 30px;
  }
}
</style>
