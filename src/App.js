import React from 'react';
import Labs from "./labs";
import Tuiter from "./tuiter";
import HelloWorld from "./labs/a6/hello-world";
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import TodoList from './screens/todos/todo-list';

function App() {
  return(
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/todos" element={<TodoList/>}/>
            <Route path="/*" element={<Labs/>}/>
            <Route path="/hello" element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;