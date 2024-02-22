import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    AddMessage: (state, action) => {
      state.message.length > 10?
      state.message.shift(0):
      state.message.push(action.payload);
    },
  },
});

export const { AddMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
