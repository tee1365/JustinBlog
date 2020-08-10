export const SET_COUNT = "setCount";

export interface setCountInterface {
  type: typeof SET_COUNT;
  payload: {
    n: number;
  };
}

export const setCount = (n: number): setCountInterface => ({
  type: SET_COUNT,
  payload: {
    n,
  },
});

export type countActionTypes = setCountInterface;
