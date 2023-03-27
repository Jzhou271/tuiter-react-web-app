import React from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom";
import "./index.css";

const ProfileComponent = () =>{
  const profile = useSelector(state => state.profile)
  const inputdate = profile.dateJoined
  const [month, year] = inputdate.split("/")
  function getMonth(month) {
    const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return m[month - 1];
  }
  return(
      <div>
        <div>
          <div className="fw-bold" style={{ fontSize: "20px" }}>
            {profile.firstName} {profile.lastName}
          </div>
          <div className="text-muted">6,114 Tweets</div>
        </div>
        <div>
          <div className="">
          <img src={`${profile.bannerPicture}`}
               alt=""
               style={{ width: "100%" }} />
          <img className="rounded-pill wd-profile"
               alt=""
               style={{ width: "20%", height: "20%" }}
               src={`${profile.profilePicture}`} />
          <Link to="/tuiter/edit-profile">
            <button className="fw-bold btn btn-outline-secondary rounded-pill float-end mt-3 me-3" style={{ color: "black" }}>
              Edit Profile
            </button>
          </Link>
          </div>

          <div className="fw-bold" style={{ fontSize: "20px" }}>
            {profile.firstName} {profile.lastName}
          </div>
          <div className="text-muted">{profile.handle}</div>
          <div className="mt-3">{profile.bio}</div>

          <div className="d-flex mt-3 text-muted">
            <span className="me-3">
              <i className="bi bi-geo-alt me-1"></i>
              <span>{profile.location}</span>
            </span>
            <span className="me-3">
              <i className="bi bi-balloon me-1 fa-lg text-muted"></i>
              <span>Born in {profile.dateOfBirth}</span>
            </span>
            <span className="float-left me-3">
              <i className="bi bi-calendar-minus me-1 text-muted"></i>
              <span>Joined {getMonth(month)} {year}</span>
            </span>
          </div>
          <div className="mt-2">
            <div>
              <span className="fw-bold">{profile.followingCount}</span>
              <span className="ms-1 me-4 text-muted">Following</span >
              <span className="fw-bold">{profile.followersCount}</span>
              <span className="ms-1 me-4 text-muted">Followers</span >
            </div>
          </div>
        </div>
      </div>
  )
}
export default ProfileComponent