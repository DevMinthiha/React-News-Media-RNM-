import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {value : null},
  reducers: {
    addUser: (state, { payload }) => {
      state.value = payload;
    },
    removeUser: (state, {payload}) => {
        state.value = payload;
    }
  },
});

export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer;
