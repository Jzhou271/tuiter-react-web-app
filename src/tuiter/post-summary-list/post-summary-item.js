import React from "react";

const PostSummaryItem = ({posts}) => {
  return(
      <li className="list-group-item ps-3">
        <div className="row align-items-center">
          <div className="col">
            <div className="text-black">{posts.topic}
              <img src={posts.image} alt="" className="mb-5 float-end" width="80"></img>
              <div className="fw-bold mt-1 mb-1">{posts.username}
                <i className="ps-1 fa-solid fa-square-check"></i>
                <span className="text-muted"> - {posts.time} </span>
              </div>
              <div>{posts.tuit}</div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;
