import { createSlice } from "@reduxjs/toolkit";

const initialState = { productDetails: "" };
const Details = createSlice({
  name: "details",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});

export const { setProductDetails } = Details.actions;
export default Details.reducer;
