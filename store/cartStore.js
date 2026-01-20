import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, qty = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.id === product.id);

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + qty } : i
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity: qty }],
          });
        }
      },

      updateQty: (id, qty) => {
        if (qty <= 0) {
          set({ items: get().items.filter((i) => i.id !== id) });
        } else {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity: qty } : i
            ),
          });
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((i) => i.id !== id),
        });
      },

      clearCart: () => set({ items: [] }),

      subtotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);
