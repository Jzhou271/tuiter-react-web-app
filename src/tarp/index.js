import React from 'react';
import TarpNavigator from './TarpNavigator.js';
import CourseNavigator from './CourseNavigator.js';
import Modules from './Modules.js';
import Sidebar from './Sidebar.js';
import Quizzes from './quizzes.js';
import Assignments from './assignments.js';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router';

export default function tarp() {
  return(
      <div className="container">
        <h1>Trap!!!</h1>
        <div className="row">
          <div className="d-none d-md-block col-md-2">
            <TarpNavigator/>
          </div>
          <div className="d-none d-md-block col-md-2">
            <CourseNavigator highlight="Home"/>
          </div>
          <div className="col-md-8 col-xl-7">
            <Routes>
              <Route path="/modules" element={<Modules/>}/>
              <Route path="/assignments" element={<Assignments/>}/>
              <Route path="/quizzes" element={<Quizzes/>}/>
            </Routes>
          </div>
          <div className="d-none d-xl-block col-lg-1">
            <Sidebar/>
          </div>
        </div>
      </div>
  );
}