import { configureStore } from "@reduxjs/toolkit";
import scroll from "./slice/scroll";

export const store = configureStore({
  reducer: {
    scroll: scroll,
  },
});
