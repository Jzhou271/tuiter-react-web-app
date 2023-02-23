import React from 'react';
import HouseScreen from './screens/house-screen.js';
import AddScreen from './screens/add-screen.js';
import TodoScreen from './screens/todo-screen.js';
import DestructorScreen from './screens/destructor-screen.js';
import NavBar from './components/nav-bar.js';
import Tarp from './tarp/index.js';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router';

function App() {
  return(
      <div className="container-fluid mt-4">
        <BrowserRouter>
          <div className="row">
            <div className="col-1">
              <NavBar/>
            </div>
            <div className="col-11">
              <Routes>
                <Route path="/tarp/*" element={<Tarp/>}/> // Use uppercase "T" for the component
                <Route path="/destructors" element={<DestructorScreen/>}/>
                <Route path="/add/:paramA/:paramB" element={<AddScreen/>}/>
                <Route path="/house" element={<HouseScreen/>}/>
                <Route path="/todos" element={<TodoScreen/>}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
}
export default App;