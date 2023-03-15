import React from "react";
// import posts from './posts.json';
// import PostItem from "./post-item.js";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeCompoment = () => {
  return (
      <>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitsList/>
      </>
  );
};
export default HomeCompoment;