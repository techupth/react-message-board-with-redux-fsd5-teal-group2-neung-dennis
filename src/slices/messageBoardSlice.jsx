// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";
const allState = {
  initialMessage: ["Hello all ! This is first message."],
};
export const messageSlice = createSlice({
  name: "message",
  initialState: allState.initialMessage,
  reducers: {
    addMessage: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    removeMessage: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    },
  },
});

export const { addMessage, removeMessage } = messageSlice.actions;
export default messageSlice.reducer;
