import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../profile/index.css"
import {updateProfile} from "../profile/profile-reducer";


const EditProfileComponent = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state => state.profile));
  let[newProfile, setNewProfile] = useState(profile);
  let[fullName, setFullName] = useState(`${newProfile.firstName} ${newProfile.lastName}`);
  let[editing, setEditing] = useState(false);
  let[birthDate, setBirthDate] = useState(newProfile.dateOfBirth);
  const birthYear = (newProfile.dateOfBirth).split('/')[2];
  let[newbirthYear, setNewBirthYear] = useState(birthYear);
  let navigate = useNavigate();
  const change= () => {
    let path = `../profile`;
    navigate(path);
  }

  const saveProfile = () => {
    const first = fullName.split(" ")[0].trim();
    const last = fullName.split(" ")[1].trim();
    const upDatedProfile = {
      ...newProfile,
      firstName:first,
      lastName:last,
      handle:`@${first}`,
      dateOfBirth : birthDate
    }
    dispatch(updateProfile(upDatedProfile));
    change();
  }

  const dateChange = (value) => {
    setBirthDate(value);
    setEditing(false);
    setNewBirthYear(value.split("-")[0]);
  }
  return (
      <div>
        <div>
          <div className="mt-1 mb-2 row">
            <div onClick={change}><i className="bi bi-x-lg"></i>
              <span className="w-100 fw-bold p-5" style={{ fontSize: "20px" }}>Edit Profile</span>
              <div className="float-end">
                <button className="rounded-pill btn border float-end wd-font-13 btn-dark ps-3 pe-3 pt-1 pb-1" onClick={saveProfile}>
                  Save
                </button>
              </div>
            </div>

          </div>
          <div>
            <img src ={`/tuiter/res/img/${profile.bannerPicture}`}
                 alt=""
                 style={{ width: "100%" }} />
            <img src ={`/tuiter/res/img/${profile.profilePicture}`}
                 alt="" className="rounded-pill wd-profile"
                 style={{ width: "20%", height: "20%" }}></img>
          </div>

          <div className="border-1">
          <label htmlFor="name" className="text-muted wd-position">Name</label>
            <input id="name"
                   onChange={(e) => setFullName(e.target.value)}
                   className="form-control pt-4"
                   value={fullName}/>

            <label htmlFor="bio" className="text-muted wd-position">Bio</label>
            <textarea id="bio"
                      onChange={(e) => setNewProfile({
                        ...newProfile,
                        bio: e.target.value,
                      })}
                      value={newProfile.bio}
                      rows="3"
                      className="form-control pt-4">
            </textarea>

            <label htmlFor="location" className="text-muted wd-position">Location</label>
            <textarea id="location"
                      onChange={(e) => setNewProfile({
                        ...newProfile,
                        location : e.target.value,
                      })}
                      value={newProfile.location}
                      rows="1"
                      className="form-control pt-4">
            </textarea>

            <label htmlFor="website" className="text-muted wd-position">Website</label>
            <textarea id = "website"
                      onChange={(e) => setNewProfile({
                        ...newProfile,
                        website : e.target.value,
                      })}
                      value={newProfile.website}
                      rows="1"
                      className="form-control pt-4">
            </textarea>

            <div className="mt-4">
              <label className="text-muted" htmlFor="birth">Birth date</label>
              ·
              <span className="text-primary" onClick={(e) => setEditing(true)}>Edit</span>
              <div>
                {editing ? <input onChange={(e) => dateChange(e.target.value)}
                                  type="date"
                                  value={birthDate}/>
                    : <span className="bg-black">{profile.dateOfBirth}</span>
                }
                <span>{newbirthYear}</span>
              </div>
            </div>
            <div className="mt-3">
              <span>Switch to professional</span>
              <span className="float-end"><i className="fa-solid fa-greater-than"></i></span>
            </div>
          </div>
        </div>
      </div>
  )
};
export default EditProfileComponent;
