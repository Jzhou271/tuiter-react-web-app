import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import counterReducer from "./counter-reducer";
import todosReducer from "./todos-reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    todos: todosReducer,
  },
});
export default store;