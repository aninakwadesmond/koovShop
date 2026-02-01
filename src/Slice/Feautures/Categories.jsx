import { createSlice } from "@reduxjs/toolkit";

const initialState = { query: "", shopProducts: [], active: "" };
const Categories = createSlice({
  name: "categories",
  initialState,

  reducers: {
    setQuery: (state, action) => {
      console.log("your action recieved", action, action.payload);
      state.query = action.payload;
    },
    setShopProducts: (state, action) => {
      state.shopProducts = [...state.shopProducts, ...action.payload];
    },
    emptyshopProducts: (state) => {
      state.shopProducts = [];
      console.log("hi , empty conatiner ");
    },
    resetQuery: (state) => {
      console.log("reset query");
      state.query = "";
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const {
  setQuery,
  setShopProducts,
  emptyshopProducts,
  resetQuery,
  setActive,
} = Categories.actions;
export default Categories.reducer;
