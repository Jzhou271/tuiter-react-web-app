import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateCount} from "../redux/counter-reducer";

function CounterScreen() {
  const {count} = useSelector((state) => state.counter);
  const [counter, setCounter] = useState(count);
  const dispatch = useDispatch();
  const handleSaveCounter = () => {
    dispatch(updateCount(counter));
  };
  const updateCounter = (newCount) => {
    setCounter(newCount);
    dispatch(updateCount(newCount));
  }
  return(
      <div>
        <h1>
          <button
              onClick={handleSaveCounter}
              className="btn btn-primary float-end">Save</button>
          CounterScreen
        </h1>
        <h2>{counter}</h2>
        <button onClick={() => updateCounter(counter + 1)}>+</button>
        <button onClick={() => updateCounter(counter - 1)}>-</button>
      </div>
  );
}
export default CounterScreen;