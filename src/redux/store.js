import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import counterReducer from "./counter-reducer";
import todosReducer from "./todos-reducer";
import tuitsReducer from "../tuitList/tuits-reducer";
import usersReducer from "./users-reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    todos: todosReducer,
    tuits: tuitsReducer,
    users: usersReducer,
  },
});
export default store;