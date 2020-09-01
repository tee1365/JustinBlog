import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootStore";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const getCounter = (state: RootState): number => state.counter.value;

export default counterSlice;
