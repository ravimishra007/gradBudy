import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createFavProf,
  getFavProfs,
  getFavProfsByUserId,
  updateFavProf,
  deleteFavProf,
} from "./favProfessorAPI";

interface FavProf {
  _id: string;
  userId: string;
  profId: string;
  createdAt: string;
  updatedAt: string;
}

interface FavProfState {
  favProfs: FavProf[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FavProfState = {
  favProfs: [],
  status: "idle",
  error: null,
};

export const fetchFavProfs = createAsyncThunk<FavProf[]>(
  "favProfs/fetchFavProfs",
  async () => {
    const response = await getFavProfs();
    return response;
  }
);

export const fetchFavProfsByUserId = createAsyncThunk<FavProf[], string>(
  "favProfs/fetchFavProfsByUserId",
  async (userId: string) => {
    const response = await getFavProfsByUserId(userId);
    return response;
  }
);

export const addFavProf = createAsyncThunk<
  FavProf,
  { userId: string; profId: string }
>("favProfs/addFavProf", async ({ userId, profId }) => {
  const response = await createFavProf(userId, profId);
  return response;
});

export const updateFavProfById = createAsyncThunk<
  FavProf,
  { id: string; userId: string; profId: string }
>("favProfs/updateFavProf", async ({ id, userId, profId }) => {
  const response = await updateFavProf(id, userId, profId);
  return response;
});

export const deleteFavProfById = createAsyncThunk<string, string>(
  "favProfs/deleteFavProf",
  async (id: string) => {
    await deleteFavProf(id);
    return id;
  }
);

const favProfSlice = createSlice({
  name: "favProfs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavProfs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFavProfs.fulfilled,
        (state, action: PayloadAction<FavProf[]>) => {
          state.status = "succeeded";
          state.favProfs = action.payload;
        }
      )
      .addCase(fetchFavProfs.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch favorite professors";
      })
      .addCase(fetchFavProfsByUserId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFavProfsByUserId.fulfilled,
        (state, action: PayloadAction<FavProf[]>) => {
          state.status = "succeeded";
          state.favProfs = action.payload;
        }
      )
      .addCase(fetchFavProfsByUserId.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message ||
          "Failed to fetch favorite professors by user ID";
      })
      .addCase(addFavProf.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addFavProf.fulfilled,
        (state, action: PayloadAction<FavProf>) => {
          state.status = "succeeded";
          state.favProfs.push(action.payload);
        }
      )
      .addCase(addFavProf.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to add favorite professor";
      })
      .addCase(updateFavProfById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateFavProfById.fulfilled,
        (state, action: PayloadAction<FavProf>) => {
          state.status = "succeeded";
          const index = state.favProfs.findIndex(
            (prof) => prof._id === action.payload._id
          );
          if (index !== -1) {
            state.favProfs[index] = action.payload;
          }
        }
      )
      .addCase(updateFavProfById.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to update favorite professor";
      })
      .addCase(deleteFavProfById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteFavProfById.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.favProfs = state.favProfs.filter(
            (prof) => prof._id !== action.payload
          );
        }
      )
      .addCase(deleteFavProfById.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to delete favorite professor";
      });
  },
});

export const selectFavProfs = (state: any) =>
  state.favProfs.favProfs;

export default favProfSlice.reducer;
