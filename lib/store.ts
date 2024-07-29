import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favProfReducer from "./features/favourite-professors/FavouriteProfessorsSlice";
import cartReducer from "./features/cart/CartSlice";
import favCourseReducer from "./features/favourite-courses/favCourseSlice";
import authReducer from "./features/auth/authSlice";
import collegeReducer from "./features/college/collegeSlice";
import universityReducer from "./features/university/universitySlice";
import studentProfileReducer from "./features/user/studentProfileSlice";
import professorReducer from "./features/professor/professorSlice";
import coursesReducer from "./features/courses/coursesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  studentProfile: studentProfileReducer,
  professors: professorReducer,
  favProfs: favProfReducer,
  courses: coursesReducer,
  favCourses: favCourseReducer,
  cart: cartReducer,
  college: collegeReducer,
  university: universityReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
