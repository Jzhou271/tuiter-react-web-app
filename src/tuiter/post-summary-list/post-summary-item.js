import React from "react";

const PostSummaryItem = (
    {
      posts = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "image": "react.png",
        "tweets": "",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs"}
    }
) => {
  return(
      <li className="list-group-item ps-3">
        <div className="row align-items-center">
          <div className="col">
            <div className="text-black">{posts.topic}
              <img src={posts.image} alt="" className="mb-5 float-end" width="100"></img>
              <div className="fw-bold">{posts.userName}
                <i className="ps-1 fa-solid fa-square-check"></i>
                <span className="text-muted"> - {posts.time} </span>
              </div>
              <div className="text-black fw-bold">
                {posts.title}
              </div>
              <div className="text-muted">{posts.tweets}</div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;
