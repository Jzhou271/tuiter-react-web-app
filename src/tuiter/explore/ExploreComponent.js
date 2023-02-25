import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ExploreComponent = () => {
  return (
      <div className="d-flex flex-column align-content-start justify-content-start">
        <i className="fa-solid fa-magnifying-glass position-absolute p-2 ms-4 mt-1"></i>
        <div className="d-flex align-items-center mb-2">
          <input
              type="text"
              placeholder="Search Twitter"
              className="form-control rounded-5 ps-5 ms-3"/>
          <i className="fa-solid fa-gear mx-5 fa-lg"></i>
        </div>
        <ul className="nav mb-2 nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              For you
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-none d-md-block" href="#">
              Entertainment
            </a>
          </li>
        </ul>

        <div className="position-relative">
          <img
              src="../imgs/starship1.jpeg"
              className="col-sm-12 mt-2"
              alt="Starship"/>
          <div className="position-absolute bottom-0">
            <h2 className="fw-bold ms-3 text-white">SpaceX's Starship</h2>
          </div>
        </div>
      </div>
  );
};

export default ExploreComponent;
