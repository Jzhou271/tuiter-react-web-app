import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitItem from "./tuits-item";
import TuitStats from "./tuit-stats";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList =() =>{
  const {tuits, loading} = useSelector(
      state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [dispatch])
  return(
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          tuits.map(details =>
              <div  className="list-group-item ">
                <TuitItem  　key = {new Date().getTime()}  post={details}/>
                <TuitStats  post={details}/>
              </div>
          )
        }
      </ul>
  );
};

export default TuitList