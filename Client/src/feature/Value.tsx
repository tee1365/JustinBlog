import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeTypes } from "../app/redux/reducers/rootStore";
import { setCount, countActionTypes } from "../app/redux/actions/count";

const Value: React.FC = () => {
  const count = useSelector((store: storeTypes) => store.countReducer);
  const dispatch = useDispatch();
  const handleClick = (n: number): countActionTypes => dispatch(setCount(n));
  return (
    <>
      <h1>{`${count} times`}</h1>
      <button
        type="button"
        onClick={(): countActionTypes => handleClick(count + 1)}
      >
        add
      </button>
    </>
  );
};

export default Value;
