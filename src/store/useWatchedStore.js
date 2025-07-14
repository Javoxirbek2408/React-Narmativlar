// src/store/useWatchedStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWatchedStore = create(
  persist(
    (set, get) => ({
      watched: [],

      toggleWatched: (product) => {
        const exists = get().watched.find((item) => item.id === product.id);
        if (exists) {
          set((state) => ({
            watched: state.watched.filter((item) => item.id !== product.id),
          }));
        } else {
          set((state) => ({
            watched: [...state.watched, product],
          }));
        }
      },

      isWatched: (id) => {
        return get().watched.some((item) => item.id === id);
      },

      getById: (id) => {
        return get().watched.find((item) => item.id === id) || null;
      },

      removeById: (id) => {
        set((state) => ({
          watched: state.watched.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "watched-products",
    }
  )
);
