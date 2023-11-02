import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import globalVarible from "../../../GlobalVaribale.js";

let initialState = { courses: [] };
let token = localStorage.getItem("token");
export const getCourses = createAsyncThunk(
  "course/getCourses",
  async (args, thunkAPI) => {
    try {
      let { data } = await axios.get(`${globalVarible.baseURL}/course`, {
        headers: {
          token
        }
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const courseSlice = createSlice({
  name: "course",
  initialState,
  extraReducers: {
    [getCourses.pending]: () => {
      console.log("pending");
    },
    [getCourses.fulfilled]: (state, action) => {
      state.courses = action.payload;
    }
  }
});

export let courseReducer = courseSlice.reducer;
export let courseActions = courseSlice.actions;
