import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./Slices/CourseSlice.js";
import { announcementReducer } from "./Slices/AnnouncementSlice.js";
import { quizReducer } from "./Slices/QuizSlice.js";
import { userReducer } from "./Slices/userSlice.js";
import { languageReducer } from "./Slices/LanguageSlice.js";
export const store = configureStore({
  reducer: {
    courseReducer,
    announcementReducer,
    quizReducer,
    userReducer,
    languageReducer
  }
});
