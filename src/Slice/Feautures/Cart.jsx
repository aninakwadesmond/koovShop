import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };
const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload].filter(
        (obj, index, self) => index == self.findIndex((o) => o.id === obj.id),
      );
    },
  },
});

export const { addCartItems } = Cart.actions;
export default Cart.reducer;
