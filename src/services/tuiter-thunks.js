import {createAsyncThunk} from "@reduxjs/toolkit";
import {updateTuit, createTuit, findAllTuits, deleteTuit} from "./tuiter-service.js";

export const findAllTuitsThunk = createAsyncThunk("tuits/findAll", async () => {
  return await findAllTuits();
});

export const findTuitByIdThunk = createAsyncThunk();
export const createTuitThunk = createAsyncThunk(
    "tuits/create",
    async (tuit) => {
      await createTuit(tuit);
      return tuit;
    }
);
export const updateTuitThunk = createAsyncThunk(
    "tuits/update",
    async (tuit) => {
      await updateTuit(tuit);
      return tuit;
    }
);
export const deleteTuitThunk = createAsyncThunk(
    "tuits/delete",
    async (id) => {
      await deleteTuit(id);
      return id;
    }
);


