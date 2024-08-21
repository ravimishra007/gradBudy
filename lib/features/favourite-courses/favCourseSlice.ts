import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createFavCourse,
  getFavCourses,
  getFavCoursesByUserId,
  updateFavCourse,
  deleteFavCourse,
} from "./favCourseAPI";

interface FavCourse {
  _id: string;
  userId: string;
  courseId: string;
  createdAt: string;
  updatedAt: string;
}

interface FavCourseState {
  favCourses: FavCourse[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FavCourseState = {
  favCourses: [],
  status: "idle",
  error: null,
};

export const fetchFavCourses = createAsyncThunk<FavCourse[]>(
  "favCourses/fetchFavCourses",
  async () => {
    const response = await getFavCourses();
    return response;
  }
);

export const fetchFavCoursesByUserId = createAsyncThunk<FavCourse[], string>(
  "favCourses/fetchFavCoursesByUserId",
  async (userId: string) => {
    const response = await getFavCoursesByUserId(userId);
    return response;
  }
);

export const addFavCourse = createAsyncThunk<
  FavCourse,
  { userId: string; courseId: string }
>("favCourses/addFavCourse", async ({ userId, courseId }) => {
  const response = await createFavCourse(userId, courseId);
  return response;
});

export const updateFavCourseById = createAsyncThunk<
  FavCourse,
  { id: string; userId: string; courseId: string }
>("favCourses/updateFavCourse", async ({ id, userId, courseId }) => {
  const response = await updateFavCourse(id, userId, courseId);
  return response;
});

export const deleteFavCourseById = createAsyncThunk<string, string>(
  "favCourses/deleteFavCourse",
  async (id: string) => {
    await deleteFavCourse(id);
    return id;
  }
);

const favCourseSlice = createSlice({
  name: "favCourses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFavCourses.fulfilled,
        (state, action: PayloadAction<FavCourse[]>) => {
          state.status = "succeeded";
          state.favCourses = action.payload;
        }
      )
      .addCase(fetchFavCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch favorite courses";
      })
      .addCase(fetchFavCoursesByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFavCoursesByUserId.fulfilled,
        (state, action: PayloadAction<FavCourse[]>) => {
          state.status = "succeeded";
          state.favCourses = action.payload;
        }
      )
      .addCase(fetchFavCoursesByUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch favorite courses by user ID";
      })
      .addCase(addFavCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addFavCourse.fulfilled,
        (state, action: PayloadAction<FavCourse>) => {
          state.status = "succeeded";
          state.favCourses.push(action.payload);
        }
      )
      .addCase(addFavCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add favorite course";
      })
      .addCase(updateFavCourseById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateFavCourseById.fulfilled,
        (state, action: PayloadAction<FavCourse>) => {
          state.status = "succeeded";
          const index = state.favCourses.findIndex(
            (course) => course._id === action.payload._id
          );
          if (index !== -1) {
            state.favCourses[index] = action.payload;
          }
        }
      )
      .addCase(updateFavCourseById.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to update favorite course";
      })
      .addCase(deleteFavCourseById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteFavCourseById.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.favCourses = state.favCourses.filter(
            (course) => course._id !== action.payload
          );
        }
      )
      .addCase(deleteFavCourseById.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to delete favorite course";
      });
  },
});

export const selectFavCourses = (state: any) => state.favCourses.favCourses;

export default favCourseSlice.reducer;
