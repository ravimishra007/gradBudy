import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkUser, createUser, signOut, updateUser, User } from "./authAPI";

interface AuthState {
  loggedInUser: User | null;
  status: "idle" | "loading";
  error: string | null;
}

const initialState: AuthState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData: User) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "auth/updateUser",
  async (update: Partial<User>) => {
    const response = await updateUser(update);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  "auth/checkUser",
  async (loginInfo: { email: string; password: string }) => {
    const response = await checkUser(loginInfo);
    return response.data;
  }
);

export const signOutAsync = createAsyncThunk(
  "auth/signOut",
  async (userId: string) => {
    const response = await signOut(userId);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state) => {
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createUserAsync.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "idle";
          state.loggedInUser = action.payload;
        }
      )
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to create user";
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        checkUserAsync.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "idle";
          state.loggedInUser = action.payload;
        }
      )
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to check user";
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateUserAsync.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "idle";
          state.loggedInUser = action.payload;
        }
      )
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to update user";
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.status = "idle";
        state.loggedInUser = null;
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to sign out";
      });
  },
});

export const selectLoggedInUser = (state: { auth: AuthState }) =>
  state.auth.loggedInUser;

export const selectError = (state: { auth: AuthState }) => state.auth.error;

export const { increment } = authSlice.actions;

export default authSlice.reducer;
