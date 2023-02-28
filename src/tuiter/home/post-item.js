import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const PostItem = (
    {
      post = {
        "profileImg": "../imgs/musk.jpeg",
        "userName": "Elon Musk",
        "handled": "elonmusk",
        "time": "23h",
        "title": "Amazing how about @inspiration4x mission!",
        "image": "../imgs/post1.jpeg",
        "articleTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "articleContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
        "comments":"4.2K",
        "forwards": "3.5K",
        "likes":"37.5K"
      }
    }
    ) => {
  return (
      <li className="list-group-item">
        <div className="d-flex pt-2">
          <img src={post.profileImg}
               alt=""
               className="rounded-pill"
               style={{height: "50px"}}/>
          <div>
            <div className="ps-3 me-3">
              <div className="row">
              <span>
                <i className="fa fa-ellipsis-h float-end fa-lg mt-3"></i>
              </span>
                <div className="col-10 d-flex">
                  <div className="fw-bold">{post.userName}</div>
                  <i className="fa fa-check-circle ms-2 me-2"></i>
                  <div className="text-secondary">
                    @{post.handled} · {post.time}
                  </div>
                </div>
                <div className="mb-2" style={{fontSize: "15px"}}>{post.title}</div>
                <img src={post.image}
                     alt=""
                     className="rounded-5"
                     style={{width: "500px", height: "300px"}}/>
                <div className="mb-3">{post.articleTitle}</div>
                <div className="mb-3">{post.articleContent}</div>
              </div>
              <div className="row mb-2">
                <div className="col-3">
                  <i className="fa-regular fa-comment text-secondary"></i>
                  <span className="text-secondary ps-2">{post.comments}</span>
                </div>
                <div className="col-3">
                  <i className="fas fa-retweet text-secondary"></i>
                  <span className="text-secondary ps-2">{post.forwards}</span>
                </div>
                <div className="col-3">
                  <i className="fa-regular fa-heart text-secondary"></i>
                  <span className="text-secondary ps-2">{post.likes}</span>
                </div>
                <div className="col-3">
                  <i className="fa-solid fa-arrow-up-from-bracket text-secondary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default PostItem;