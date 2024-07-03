import { Mentor } from "@/constents/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouriteProfessorsState {
  favouriteProfessors: Mentor[];
}

const initialState: FavouriteProfessorsState = {
  favouriteProfessors: [],
};

const favouriteProfessorsSlice = createSlice({
  name: "favouriteProfessors",
  initialState,
  reducers: {
    AddToFavProf: (state, action: PayloadAction<Mentor>) => {
      const { favouriteProfessors } = state;
      const exists = favouriteProfessors.some((mentor) => mentor.id === action.payload.id);
      if (!exists) {
        state.favouriteProfessors = [...favouriteProfessors, action.payload];
      }
    },
    RemoveFromFavProf: (state, action: PayloadAction<number>) => {
      state.favouriteProfessors = state.favouriteProfessors.filter((mentor) => mentor.id !== action.payload);
    },
  },
});

export const { AddToFavProf, RemoveFromFavProf } = favouriteProfessorsSlice.actions;
export default favouriteProfessorsSlice.reducer;
