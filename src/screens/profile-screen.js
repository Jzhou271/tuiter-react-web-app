import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "../redux/user-reducer";

function ProfileScreen() {
  const {user} = useSelector((state) => state.user);
  const {count} = useSelector((state) => state.counter);
  const [profile, setProfile] = useState(user);
  const dispatch = useDispatch();
  const handleSaveButton = () => {
    dispatch(updateUser(profile));
  };
  return(
      <div>
        <h1>
          <button
              onClick={handleSaveButton}
              className="btn btn-primary float-end">Save</button>
          Profile Screen
        </h1>
        <label>First Name</label>
        <input value={profile.firstName}
        onChange={(e) =>
        setProfile({
          ...profile,
          firstName: e.target.value,
        })
        }
        /><br/>
        <label>Last Name</label>
        <input value={profile.lastName}
               onChange={(e) =>
                   setProfile({
                     ...profile,
                     lastName: e.target.value,
                   })
               }/><br/>
        <label>Email</label>
        <input value={profile.email} /><br/>
        <label>Phone</label>
        <input value={profile.phone} /><br/>
        <label>Address</label>
        <input value={profile.address} /><br/>
        <h2>Counter: {count}</h2>
      </div>
  )
}
export default ProfileScreen;