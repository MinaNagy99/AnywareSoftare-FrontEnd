import { createSlice } from "@reduxjs/toolkit";

import { changeLanguage } from "i18next";

let initialState = { languageToConvert: "AR" };

const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state) => {
      if (state.languageToConvert == "AR") {
        changeLanguage("ar");
        state.languageToConvert = "EN";
      } else {
        changeLanguage("en");
        state.languageToConvert = "AR";
      }
    }
  }
});

export let languageReducer = langSlice.reducer;
export let languageActions = langSlice.actions;
