import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //Slices
    reducer : {
        cart:cartReducer,
    },
    middleware: [
        ...getDefaultMiddleware({
          serializableCheck: {
            // Ignore specific paths in your state that contain non-serializable data
            ignoredPaths: ["cart.items"],
          },
        }),
      ],
      devTools: process.env.NODE_ENV !== "production",
});

export default appStore;