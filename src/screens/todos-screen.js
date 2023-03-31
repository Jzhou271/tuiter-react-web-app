import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteTodo, addTodo, updateTodo} from "../redux/todos-reducer";

function TodosScreen() {
  const {todos} = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState({
    id: new Date().getTime(),
    text: "New Todo",
    complete: false,
  });
  const dispatch = useDispatch();
  return(
      <div>
        <h1>Todos</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <button
                onClick={() => dispatch(addTodo({
                  ...newTodo,
                  id: new Date().getTime(),
                }))}
                className="btn btn-sm btn-primary float-end">+</button>
            <input
                onChange={(e) => setNewTodo({
                  ...newTodo,
                  text: e.target.value
                })}
                value={newTodo.text} type="text" />
          </li>
          {todos.map((todo) => (
              <li key={todo.id} className="list-group-item">
                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="btn btn-sm btn-danger float-end me-2">Delete</button>
                <button
                    onClick={() => {
                      dispatch(
                          updateTodo({
                            ...todo,
                            editing: !todo.editing,
                          })
                      );
                    }}
                    className="btn btn-sm btn-warning float-end me-2">
                  {todo.editing ? "Save" : "Edit"}
                </button>
                <input
                    id={todo.id}
                    onChange={(e) => {
                      dispatch(
                          updateTodo({
                            ...todo,
                            completed: e.target.checked,
                          })
                      );
                    }}
                    className="me-2" type="checkbox" checked={todo.completed}
                />
                {todo.editing ? (
                    <input
                        onChange={(e) => {
                          dispatch(
                              updateTodo({
                                ...todo,
                                text: e.target.value,
                              })
                          );
                        }}
                        className="w-75" type="text" value={todo.text} />
                ) : (
                    <label for={todo.id}>{todo.text}</label>
                )
                }
              </li>
          ))}
        </ul>
      </div>
  );
}
export default TodosScreen;