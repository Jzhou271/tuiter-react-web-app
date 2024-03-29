import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/users/users-chunks";

function LoginScreen() {
  const {currentUser} = useSelector((state) => state.users);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loginThunk({username, password}))
  }
  return(
      <div>
        <h1>Login</h1>
        <div className="form-group">
          <label>Username</label>
          <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
          />
        </div>
        <button onClick={login} className="btn btn-primary mt-2">Login</button>
        <div>
          {currentUser && (
              <div>
                <h2>{currentUser.username}</h2>
                <h2>{currentUser.password}</h2>
              </div>
          )}
        </div>
      </div>
  )
}
export default LoginScreen;