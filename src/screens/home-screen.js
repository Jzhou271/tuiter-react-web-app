import React from "react";
import {useSelector} from "react-redux";

function HomeScreen() {
  const {count} = useSelector((state) => state.counter);
  const {user} = useSelector((state) => state.user);
  const {todos} = useSelector((state) => state.todos);
  return(
      <div>
        <h1>Home</h1>
        <h2>
          Welcome {user.firstName} {user.lastName}
        </h2>
        <h3>Counter: {count}</h3>
        <h3>Todos</h3>
        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
  );
}
export default HomeScreen;