import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoomId: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoomId } = appSlice.actions;
export default appSlice.reducer;
