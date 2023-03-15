import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitsItem = (
    {
      post = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "time": "2h",
        "image": "spacex.jpeg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="rounded-pill" alt="" width="45px" src={post.image}/>
          </div>

          <div className="col-11">
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(post._id)}></i>
              <span className="fw-bold">{post.userName}</span>
              <i className="fa fa-check-circle ms-2 me-2"></i>
            <span className="text-muted">
                {post.handle}
            </span>
            <span> · </span>
            <span className="text-muted">
              {post.time}
            </span>
            <div className="mt-1 mb-3">
              {post.tuit}
            </div>

            <div className="col-11">
              <i className="fa-regular fa-comment me-2"></i>
              <span className="me-5">{post.replies}</span>
              <span>
                <i className="fas fa-retweet me-2"></i>
                <span className="me-5">{post.retuits}</span>
              </span>
              <span>
                <i className="fa-solid fa-heart me-2"></i>
                <span className="me-5">{post.likes}</span>
              </span>
              <span>
                <i className="fa-solid fa-share-nodes me-2"></i>
              </span>
            </div>
          </div>
        </div>
      </li>
  );
};
export default TuitsItem;