import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courseDetailDataProp } from "@/constents/types";

interface CartState {
  cart: courseDetailDataProp[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<courseDetailDataProp>) => {
      const { cart } = state;
      const { payload } = action;

      if (payload && !cart.some((course) => course.id === payload.id)) {
        state.cart.push(payload);
      }
    },
    RemoveFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((course) => course.id !== action.payload);
    },
  },
});

export const { AddToCart, RemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
