import { courseDetailDataProp } from "@/constents/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouriteCoursesState {
  favouriteCourses: courseDetailDataProp[];
}

const initialState: FavouriteCoursesState = {
  favouriteCourses: [],
};

const favouriteCoursesSlice = createSlice({
  name: "favouriteCourses",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<courseDetailDataProp>) => {
      const { favouriteCourses } = state;
      const { payload } = action;

      if (
        payload &&
        !favouriteCourses.some((course) => course.id === payload.id)
      ) {
        state.favouriteCourses.push(payload);
      }
    },
    removeFromFavourites: (state, action: PayloadAction<number>) => {
      state.favouriteCourses = state.favouriteCourses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouriteCoursesSlice.actions;
export default favouriteCoursesSlice.reducer;
