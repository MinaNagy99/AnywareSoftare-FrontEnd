import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import globalVarible from "../../../GlobalVaribale.js";

const initialState = { announcements: [],isLoading:false };
let token = localStorage.getItem('token')
export let getAnnouncement = createAsyncThunk(
  "announcement/getAnnouncements",
  async () => {
    try {
      let { data } = await axios.get(`${globalVarible.baseURL}/announcement`, {
        headers: { token }
      });
      return data;
    } catch (error) {
    }
  }
);
const AnnouncementSlice = createSlice({
  name: "announcement",
  initialState,
  extraReducers: {
    [getAnnouncement.pending]: (state) => {
      state.isLoading=true
    },
    [getAnnouncement.fulfilled]: (state, action) => {
      state.announcements = action.payload;
      state.isLoading=false
    }
  }
});

export let announcementReducer = AnnouncementSlice.reducer;
export let announcementAction = AnnouncementSlice.actions;
