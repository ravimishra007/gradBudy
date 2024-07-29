import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addCollege,
  editCollege,
  getAllColleges,
  deleteCollege,
  College,
} from "./collegeAPI";

interface CollegeState {
  colleges: College[];
  status: "idle" | "loading";
  error: string | null;
}

const initialState: CollegeState = {
  colleges: [],
  status: "idle",
  error: null,
};

export const fetchAllCollegesAsync = createAsyncThunk(
  "college/fetchAll",
  async () => {
    const response = await getAllColleges();
    return response.data;
  }
);

export const addCollegeAsync = createAsyncThunk(
  "college/add",
  async (college: College) => {
    const response = await addCollege(college);
    return response.data;
  }
);

export const editCollegeAsync = createAsyncThunk(
  "college/edit",
  async ({ id, college }: { id: string; college: College }) => {
    const response = await editCollege(id, college);
    return response.data;
  }
);

export const deleteCollegeAsync = createAsyncThunk(
  "college/delete",
  async (id: string) => {
    await deleteCollege(id);
    return id;
  }
);

const collegeSlice = createSlice({
  name: "college",
  initialState,
  reducers: {
    resetCollegeState: (state) => {
      state.colleges = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCollegesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAllCollegesAsync.fulfilled,
        (state, action: PayloadAction<College[]>) => {
          state.status = "idle";
          state.colleges = action.payload;
        }
      )
      .addCase(fetchAllCollegesAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to fetch colleges";
      })
      .addCase(addCollegeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addCollegeAsync.fulfilled,
        (state, action: PayloadAction<College>) => {
          state.status = "idle";
          state.colleges.push(action.payload);
        }
      )
      .addCase(addCollegeAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to add college";
      })
      .addCase(editCollegeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        editCollegeAsync.fulfilled,
        (state, action: PayloadAction<College>) => {
          state.status = "idle";
          const index = state.colleges.findIndex(
            (college) => college._id === action.payload._id
          );
          if (index !== -1) {
            state.colleges[index] = action.payload;
          }
        }
      )
      .addCase(editCollegeAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to edit college";
      })
      .addCase(deleteCollegeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteCollegeAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "idle";
          state.colleges = state.colleges.filter(
            (college) => college._id !== action.payload
          );
        }
      )
      .addCase(deleteCollegeAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to delete college";
      });
  },
});

export const { resetCollegeState } = collegeSlice.actions;

export const selectColleges = (state: { college: CollegeState }) =>
  state.college.colleges;
export const selectCollegeError = (state: { college: CollegeState }) =>
  state.college.error;

export default collegeSlice.reducer;
