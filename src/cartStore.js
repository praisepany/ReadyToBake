import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

export const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],

            addToCart: (newItem) => set((state) => {
                const existingItem = state.cartItems.find((item) => item.id === newItem.id);
                
                if (existingItem) {
                    return {
                        cartItems: state.cartItems.map((item) =>
                            item.id === newItem.id
                                ? { ...item, quantity: item.quantity + newItem.quantity }
                                : item
                        )
                    };
                }
                return { cartItems: [...state.cartItems, newItem] };
            }),

            updateQuantity: (id, newQuantity) => set((state) => {
                if (newQuantity < 1) return state;
                return {
                    cartItems: state.cartItems.map((item) =>
                        item.id === id ? { ...item, quantity: newQuantity } : item
                    )
                };
            }),

            removeItem: (id) => set((state) => ({
                cartItems: state.cartItems.filter((item) => item.id !== id)
            }))
        }),
        {
            name: 'my-dessert-cart', 
        }
    )
);