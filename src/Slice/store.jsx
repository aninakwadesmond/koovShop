import { configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from "../Slice/Feautures/Categories";
import DetailsReducer from "../Slice/Feautures/Details";
import CartReducer from "../Slice/Feautures/Cart";
export const store = configureStore({
  reducer: {
    categories: CategoriesReducer,
    details: DetailsReducer,
    cart: CartReducer,
  },
});
