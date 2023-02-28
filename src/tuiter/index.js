import React from 'react';
import {Routes, Route} from "react-router";
import Nav from "../nav.js";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/ExploreComponent.js";
import HomeCompoment from "./home/index.js";

function Tuiter() {
  return (
      <div className="row mt-2">
        <Nav/>
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
          <Routes>
            <Route path="/" element={<ExploreComponent/>}/>
            <Route path="home" element={<HomeCompoment/>}/>
          </Routes>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
  );
}
export default Tuiter