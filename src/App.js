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

// import React from 'react';
// import Labs from "./labs";
// import Tuiter from "./tuiter";
// import {BrowserRouter, Link} from 'react-router-dom';
// import {Routes, Route} from 'react-router';
// import TodoList from './screens/todos/todo-list';
// import ProfileScreen from "./screens/profile-screen.js";
// import {Provider} from "react-redux";
// import store from "./redux/store";
// import HomeScreen from "./screens/home-screen";
// import CounterScreen from "./screens/counter-screen";
// import TodosScreen from "./screens/todos-screen";
// import TuitList from "./tuitList/tuit-list";
// import LoginScreen from "./screens/login-screen";
//
// function App() {
//   return(
//       <Provider store={store}>
//         <BrowserRouter>
//           <div className="container">
//             <Link to="/">Home</Link> |
//             <Link to="/profile">Profile</Link> |
//             <Link to="/counter">Counter</Link> |
//             <Link to="/todos">Todos</Link> |
//             <Link to="/tuits">TuitList</Link> |
//             <Link to="/login">Login</Link>
//
//             <Routes>
//               <Route path="/todos" element={<TodosScreen/>}/>
//               <Route path="/counter" element={<CounterScreen/>}/>
//               <Route path="/profile" element={<ProfileScreen/>}/>
//               <Route path="/" element={<HomeScreen/>}/>
//               <Route path="/todos" element={<TodoList/>}/>
//               <Route path="/tuits" element={<TuitList/>}/>
//               <Route path="/*" element={<Labs/>}/>
//               <Route path="/tuiter/*" element={<Tuiter/>}/>
//               <Route path="/login" element={<LoginScreen/>}/>
//
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </Provider>
//   );
// }
// export default App;