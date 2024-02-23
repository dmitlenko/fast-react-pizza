import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increateItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increateItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (store) =>
  store.cart.cart.reduce((acc, pizza) => acc + pizza.totalPrice, 0);

export const getTotalCartQuantity = (store) =>
  store.cart.cart.reduce((acc, pizza) => acc + pizza.quantity, 0);

export const getCart = (store) => store.cart.cart;
