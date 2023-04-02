import React from "react"
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post = {}}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
      <div className="d-flex">
        <img alt ="img" className="rounded-circle d-flex" src={`/tuiter/res/img/${post.image}`} width="38px"
             height="38px"/>
        <div className=" float-end">
          <div className="ms-2">
            <span><b>{post.username}</b> <i className="fa fa-check-circle" style={{color:"rgb(29,161,242)"}}></i> </span>
            <span style={{"color": "grey","fontSize": "0.9em"}}>{post.handle} - {post.time}</span>
            <i className="bi bi-x-lg " style={{position: "absolute", top: "0.5em", right: "0.5em"}}
               onClick={() => deleteTuitHandler(post._id)}></i><br/>
          </div>
          <div className="ms-2">
            <span> {post.tuit}</span>
          </div>
        </div>
      </div>
  );
};
export default TuitItem