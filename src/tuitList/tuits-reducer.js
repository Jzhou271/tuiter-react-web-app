import { createSlice } from "@reduxjs/toolkit";
import { updateTuitThunk, findAllTuitsThunk, deleteTuitThunk, createTuitThunk } from "../services/tuiter-thunks";

const initialState = {
  tuits: [
    // {
    //   id: 1,
    //   text: "Tuit 1",
    //   editing: false,
    // },
    // {
    //   id: 2,
    //   text: "Tuit 2",
    //   editing: false,
    // },
    // {
    //   id: 3,
    //   text: "Tuit 3",
    //   editing: false,
    // },
  ],
  loading: false,
  error: null,
};

const tuitsSlice = createSlice ({
  name: "tuits",
  initialState,
  reducers: {
    // updateTuit: (state, action) => {
    //   state.tuits = state.tuits.map((tuit) =>
    //       tuit.id === action.payload.id ? action.payload : tuit
    //   );
    // },
    // addTuit: (state, action) => {
    //   state.tuits.push({...action.payload, id: new Date().getTime()});
    // },
    // deleteTuit: (state, action) => {
    //   state.tuits = state.tuits.filter((tuit) => tuit.id !== action.payload);
    // },
  },
  extraReducers: {
    [updateTuitThunk.fulfilled]: (state, action) => {
      state.tuits = state.tuits.map((tuit) =>
          tuit.id === action.payload.id ? action.payload : tuit
      );
    },
    [createTuitThunk.fulfilled]: (state, action) => {
      state.tuits.push(action.payload);
    },
    [deleteTuitThunk.fulfilled]: (state, action) => {
      state.tuits = state.tuits.filter((tuit) => tuit.id !== action.payload);
    },
    [findAllTuitsThunk.pending]: (state, action) => {
      state.loading = true;
      state.tuits = [];
    },
    [findAllTuitsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = action.payload;
    },
    [findAllTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const {updateTuit, deleteTuit, addTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
