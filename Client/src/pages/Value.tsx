import React from "react";
import { useSelector, useDispatch } from "react-redux";
import counterSlice, { getCounter } from "../app/redux/slice/counterSlice";
import { AppDispatch } from "../app/redux/rootStore";

const Value: React.FC = () => {
  const count = useSelector(getCounter);
  const { value } = count;
  const dispatch: AppDispatch = useDispatch();
  const { increment } = counterSlice.actions;
  return (
    <>
      <h1>{`${value} times`}</h1>
      <button type="button" onClick={() => dispatch(increment())}>
        add
      </button>
    </>
  );
};

export default Value;
