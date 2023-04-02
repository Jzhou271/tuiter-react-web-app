import React from "react"
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer"
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post = {}}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
      <div className="d-flex">
        <img className="rounded-circle d-flex" alt ="" src={`../imgs/${post.image}`} width="45px" height="45px"/>
        <div className="float-end">
          <div className="ms-2">
            <span className="fw-bold me-2">
              {post.username}
            </span>
            <span>
              <i className="fa fa-check-circle me-2"></i>
            </span>
            <span className="text-muted">{post.handle} - {post.time}</span>
            <span className="float-end">
            <i className="bi bi-x-lg"
               onClick={() => deleteTuitHandler(post._id)}></i>
            </span>
          </div>
          <div className="ms-2 mt-2 mb-2">{post.tuit}</div>
        </div>
      </div>
  );
};

export default TuitItem