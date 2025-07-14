// src/store/useCartStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const exists = get().cart.some((item) => item.id === product.id);
        if (exists) return; // oldindan bor bo‘lsa, qo‘shilmaydi

        set((state) => ({
          cart: [...state.cart, { ...product, quantity: 1 }],
        }));
      },

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage', // localStorage key nomi
    }
  )
);
