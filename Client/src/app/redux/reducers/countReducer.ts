import { countActionTypes, SET_COUNT } from "../actions/count";

const reducer = (state = 0, action: countActionTypes): number => {
  switch (action.type) {
    case SET_COUNT:
      return action.payload.n;
    default:
      return state;
  }
};

export default reducer;
