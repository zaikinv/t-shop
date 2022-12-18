import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";

type Product = {
  imageUrl?: string;
  id?: string;
  name?: string;
  price?: string;
  color?: string;
};

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Array<Product>,
    cart: [] as Array<Product>,
    categories: ["animals", "cats", "food", "sports", "technics"],
    colors: ["lightgray", "aliceblue", "white", "lightblue"],
    activeProduct: {} as Product,
    activeCategory: "",
  }),

  getters: {
    availableProducts: (state) => state.products,
    availableColors: (state) => state.colors,
    availableCategories: (state) => state.categories,
    currentCategory: (state) => state.activeCategory,
    currentCart: (state) => state.cart,
  },

  actions: {
    loadActiveProduct() {
      try {
        this.activeProduct = JSON.parse(
          localStorage.getItem("activeProduct") || ""
        );
      } catch {
        const imageUrl: string = faker.image.animals(75, 75, true);
        const url = new URL(imageUrl);
        const searchParams = url.searchParams;
        const id = searchParams.get("lock")!; // 'node'
        this.activeProduct = {
          imageUrl: faker.image.animals(75, 75, true),
          id,
          name: faker.name.firstName(),
          price: faker.commerce.price(9, 19, 2),
        };
      }
    },

    loadRandomProducts(maxProducts: number, category: string = "animals") {
      this.activeCategory = category;
      this.products.length = 0;
      for (let i = 0; i < maxProducts; i++) {
        // @ts-ignore
        const imageUrl: string = faker.image[category](75, 75, true);

        const url = new URL(imageUrl);
        const searchParams = url.searchParams;
        const id = searchParams.get("lock")!; // 'node'

        this.products.push({
          id,
          name: faker.name.firstName(),
          price: faker.commerce.price(9, 19, 2),
        });
      }
    },

    setActiveProduct(product: Product) {
      this.activeProduct = product;
      localStorage.setItem("activeProduct", JSON.stringify(product));
    },

    addToCart(product: Product) {
      this.cart.push(product);
    },
  },
});
