import { create } from 'zustand';
import { ICartItem, ICartTotals, IProduct, ProductSize } from './types.ts';
import { APP_CONFIG } from './constants.ts';

interface CartState {
  cart: ICartItem[];
  addToCart: (product: IProduct, size: ProductSize) => void;
  removeFromCart: (productId: string, size: ProductSize) => void;
  updateQuantity: (productId: string, size: ProductSize, delta: number) => void;
  clearCart: () => void;
  getTotals: () => ICartTotals;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (product, size) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingItemIndex > -1) {
        const newCart = [...state.cart];
        newCart[existingItemIndex].quantity += 1;
        return { cart: newCart };
      }

      return {
        cart: [
          ...state.cart,
          { ...product, selectedSize: size, quantity: 1 },
        ],
      };
    });
  },

  removeFromCart: (productId, size) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === productId && item.selectedSize === size)
      ),
    }));
  },

  updateQuantity: (productId, size, delta) => {
    set((state) => {
      const newCart = state.cart.map((item) => {
        if (item.id === productId && item.selectedSize === size) {
          const newQuantity = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return { cart: newCart };
    });
  },

  clearCart: () => set({ cart: [] }),

  getTotals: () => {
    const { cart } = get();
    const subtotal = cart.reduce((acc, item) => {
      const price = item.selectedSize === '250ml' ? item.price250 : item.price500;
      return acc + price * item.quantity;
    }, 0);

    const shipping = subtotal >= APP_CONFIG.freeThreshold ? 0 : APP_CONFIG.deliveryFee;

    return {
      subtotal,
      shipping,
      total: subtotal + shipping,
    };
  },
}));