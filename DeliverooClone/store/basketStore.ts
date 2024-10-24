import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  info: string;
  img: any;
}

export interface BasketState {
  products: Array<Product>;
  addProduct: (product: Product) => void;
  reduce: (product: Product) => void;
  clearCart: () => void;
  items: number;
  total: number;
}

const useBasketStore = create<BasketState>()((set) => ({
  products: [],
  items: 0,
  total: 0,
  addProduct: (product) => {
    set((state) => {
      state.items += 1;
      state.total += product.price;
      const hasProduct = state.products.find((p) => p.id === product.id);

      const newProducts = hasProduct
        ? state.products
        : [...state.products, product];

      return {
        products: newProducts,
      };
    });
  },
  reduce: (product) => {
    set((state) => {
      const productIndex = state.products.findIndex((p) => p.id === product.id);

      if (productIndex !== -1) {
        const newProducts = [...state.products];
        newProducts.splice(productIndex, 1);

        state.items -= 1;
        state.total -= product.price;

        return {
          products: newProducts,
        };
      }

      return {};
    });
  },
  clearCart: () => set({ products: [], items: 0, total: 0 }),
}));


export default useBasketStore;