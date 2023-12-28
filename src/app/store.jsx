// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "../slices/messageBoardSlice";

export const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});
