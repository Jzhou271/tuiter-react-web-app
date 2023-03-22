import React from 'react';
import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import TodoList from './screens/todos/todo-list';
import ProfileScreen from "./screens/profile-screen.js";
import {Provider} from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/home-screen";
import CounterScreen from "./screens/counter-screen";
import TodosScreen from "./screens/todos-screen";

function App() {
  return(
      <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Link to="/">Home</Link> |
          <Link to="/profile">Profile</Link> |
          <Link to="/counter">Counter</Link> |
          <Link to="/todos">Todos</Link>
          <Routes>
            <Route path="/todos" element={<TodosScreen/>}/>
            <Route path="/counter" element={<CounterScreen/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/todos" element={<TodoList/>}/>
            <Route path="/*" element={<Labs/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
  );
}
export default App;