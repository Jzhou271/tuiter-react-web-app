import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {id: 1, text: "Learn React", completed: true, editing: false},
    {id: 2, text: "Learn Redux", completed: false, editing: false},
    {id: 3, text: "Build something fun!", completed: true, editing: false},
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
  },
});
export default todosSlice.reducer;
export const {deleteTodo, addTodo, updateTodo} = todosSlice.actions;