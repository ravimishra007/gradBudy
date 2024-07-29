import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchCart, addToCartAPI, deleteFromCartAPI } from "./cartAPI";

interface CartItem {
  priceId: string;
  count: number;
}

interface Cart {
  userId: string;
  cartItems: CartItem[];
}

interface CartState {
  cart: Cart | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  status: "idle",
  error: null,
};

export const fetchCartData = createAsyncThunk<
  Cart,
  { userId: string; token: string }
>("cart/fetchCart", async ({ userId, token }) => {
  const response = await fetchCart(userId, token);
  return response;
});

export const addToCart = createAsyncThunk<
  Cart,
  {
    token: string;
    userId: string;
    cartItems: { priceId: string; count: number };
  }
>("cart/addToCart", async ({ token, userId, cartItems }) => {
  const response = await addToCartAPI(token, { userId, cartItems });
  return response;
});

export const deleteFromCart = createAsyncThunk<
  Cart,
  { token: string; id: string }
>("cart/deleteFromCart", async ({ token, id }) => {
  const response = await deleteFromCartAPI(token, id);
  return response;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCartData.fulfilled,
        (state, action: PayloadAction<Cart>) => {
          state.status = "succeeded";
          state.cart = action.payload;
        }
      )
      .addCase(fetchCartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch cart";
      })
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<Cart>) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add to cart";
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteFromCart.fulfilled,
        (state, action: PayloadAction<Cart>) => {
          state.status = "succeeded";
          state.cart = action.payload;
        }
      )
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete from cart";
      });
  },
});

export const selectCart = (state: any) => state.cart.cart;

export default cartSlice.reducer;
