import { configureStore } from "@reduxjs/toolkit";

import infoReducer from "./../components/utils/infoContainerStore";

export const store = configureStore({
  reducer: {
    counter: infoReducer,
  },
});
