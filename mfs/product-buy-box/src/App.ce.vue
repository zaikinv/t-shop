<script setup lang="ts">
// @ts-nocheck
import { ref } from "vue";

const props = defineProps<{
  title: string;
  price: string;
  availableColors: string;
}>();

const selectedColor = ref("");

const addToCart = () => {
  (document as any).dispatchEvent(
    new CustomEvent("add-to-cart", {
      bubbles: true,
      composed: true,
      detail: {
        title: props.title,
        price: props.price,
        color: selectedColor.value,
      },
    })
  );
};

const selectColor = (color: string) => {
  selectedColor.value = color;
  (document as any).dispatchEvent(
    new CustomEvent("select-color", {
      bubbles: true,
      composed: true,
      detail: color,
    })
  );
};
</script>

<template>
  <h1 class="product__title">{{ title }}</h1>
  <p class="product__price">€{{ price }}</p>
  <p class="product__description">
    Looking for a stylish and comfortable T-shirt that shows off your
    personality? Check out our T-shirt with a print! Made from 100% soft cotton,
    this T-shirt is both comfortable and fashionable. The vibrant print is sure
    to turn heads, whether you're wearing it out on the town or just relaxing at
    home.
  </p>

  <div class="product__colors">
    <button
        v-for="color in JSON.parse(availableColors)"
        :style="{ 'background-color': color }"
        @click.stop="selectColor(color)"
    ></button>
  </div>
  <button
    class="product__add-to-cart product-add-to-cart"
    @click.stop="addToCart"
  >
    <svg
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        d="M7 23a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14-6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm9-28h-3a1 1 0 0 0-1 .76L25.22 5H2a1 1 0 0 0-.76.34 1 1 0 0 0-.23.8l2 14A1 1 0 0 0 4 21h20a1 1 0 0 0 1-.86l2-13.95.78-3.19H30a1 1 0 0 0 0-2zm-6.87 18H4.87L3.15 7h21.7z"
      />
    </svg>
    <div class="product-add-to-cart__label">Add to cart</div>
  </button>
</template>

<style scoped lang="scss">
* {
  font-family: Avenir Next;
}

.product {
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
