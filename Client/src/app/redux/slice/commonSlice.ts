import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Axios from "axios";
import dayjs from "dayjs";
import type { RootState } from "../rootStore";
import dayOfYear from "dayjs/plugin/dayOfYear";

interface CommonState {
  image: string;
}

const initialState: CommonState = {
  image: window.localStorage.getItem("splashPageImage") || "",
};

export const fetchImage = createAsyncThunk("common/fetchImage", async () => {
  try {
    const imageObj: any = await Axios.get(
      "https://api.unsplash.com/photos/random?orientation=landscape&client_id=zcZKjKq4URKIvy2gho5nO1Egrh5zEac5f4K3vpLL41s"
    );
    const image: string = imageObj.data.urls.regular;
    window.localStorage.setItem("splashPageImage", image);
    dayjs.extend(dayOfYear);
    let day = dayjs().dayOfYear().toString();
    window.localStorage.setItem("imageDay", day);
    return image;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
});

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImage.rejected, () => {
      alert("fetch image error");
    });
    builder.addCase(
      fetchImage.fulfilled,
      (state, action: PayloadAction<string>) => {
        console.log(action.payload);
        state.image = action.payload;
      }
    );
  },
});

export const getCommon = (state: RootState): CommonState => state.common;

export default commonSlice;
