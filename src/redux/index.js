import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./cart/reducer";
import gemesReduser from "./games/reducer";

export const store = configureStore({
  reducer: {
    curt: cartReduser,
    game: gemesReduser,
  },
});
