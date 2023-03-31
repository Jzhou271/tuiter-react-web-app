import {createSlice} from "@reduxjs/toolkit";

const initialState= {
  user: {
    firstName: "Alice",
    lastName: "Wonderland",
    email: "jdoe@gmail.com",
    phone: "123-123-1222",
    address: "123 Main St",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  },
});
export default userSlice.reducer;
export const {updateUser} = userSlice.actions;