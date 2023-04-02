import React from "react";
import PostSummaryItem from "./post-summary-item.js";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const {tuits} = useSelector(state => state.tuitsData)
  return(
      <ul className="list-group">
        {
          tuits.map(post =>
              <PostSummaryItem
                  key={post._id} posts={post}/>)
        }
      </ul>
  );
};
export default PostSummaryList;

