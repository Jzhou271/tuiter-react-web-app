import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
      post
    }
) =>{
  const dispatch = useDispatch();
  return (
      <div className="d-flex m-2 ms-5" style={{color: "grey"}}>
        <div className="w-25">
          <i className="fa fa-comment"></i>
          <span> {post.replies}</span>
        </div>
        <div className="w-25">
          <i className="fa-solid fa-retweet"></i>
          <span> {post.retuits}</span>
        </div>
        <div className='w-25'>
          <i onClick={() => dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1,
          }))
          } className="bi bi-heart-fill me-2 text-danger" id="likes"></i>
          {post.likes}
        </div>
        <div className='w-25'>
          <i onClick={() => dispatch(updateTuitThunk({
            ...post,
            dislikes: post.dislikes + 1,
          }))
          } className="bi bi-hand-thumbs-down-fill me-2" id="likes"></i>
          {post.dislikes}
        </div>
        <div className>
          <i className="fa-solid fa-share"></i>
        </div>
      </div>

  )
}

export default TuitStats;