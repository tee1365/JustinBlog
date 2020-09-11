import counterSlice from "./slice/counterSlice";
import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import commonSlice from "./slice/commonSlice";
const { reducer: counter } = counterSlice;
const { reducer: common } = commonSlice;

const rootReducer = combineReducers({ counter, common });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;
