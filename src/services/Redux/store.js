import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // middleware: (gDM) => gDM().concat(logger)
});

export default store;
