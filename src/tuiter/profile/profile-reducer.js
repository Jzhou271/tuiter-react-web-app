import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json";

const profileSlice = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {
    changeProfile(state, action) {
      state.bio = action.payload.bio
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.location = action.payload.location
      state.website = action.payload.website
    }
  }
});
export default profileSlice.reducer
export const{changeProfile} = profileSlice.actions