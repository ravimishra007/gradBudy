import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkUser, createUser, resetPassword, User, updateUser } from "./authAPI";

interface AuthState {
  loggedInUser: User | null;
  email: string | null;
  otp: string | null;
  status: "idle" | "loading";
  error: string | null;
}

const initialState: AuthState = {
  loggedInUser: null,
  email: null,
  otp: null,
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
  async (email: string) => {
    const response = await updateUser(email);
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

export const resetPasswordAsync = createAsyncThunk(
  "auth/resetPassword",
  async (userData: User) => {
    const response = await resetPassword(userData);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    resetAuthState: (state) => {
      state.email = null;
      state.otp = null;
      state.loggedInUser = null;
      state.status = "idle";
      state.error = null;
    },
    signOut: (state) => {
      state.loggedInUser = null;
      state.email = null;
      state.otp = null;
      localStorage.removeItem("user"); // Clear user data from localStorage
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
          localStorage.setItem("user", JSON.stringify(action.payload)); // Store user data in localStorage
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
          console.log("User data stored in localStorage:", action.payload);
          localStorage.setItem("user", JSON.stringify(action.payload)); // Store user data in localStorage
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
      .addCase(resetPasswordAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        resetPasswordAsync.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "idle";
          state.loggedInUser = action.payload;
        }
      )
      .addCase(resetPasswordAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message || "Failed to reset password";
      });
  },
});

export const { setEmail, setOtp, resetAuthState, signOut } = authSlice.actions;

export const selectLoggedInUser = (state: { auth: AuthState }) => state.auth.loggedInUser;
export const selectError = (state: { auth: AuthState }) => state.auth.error;
export const selectEmail = (state: { auth: AuthState }) => state.auth.email;
export const selectOtp = (state: { auth: AuthState }) => state.auth.otp;

export default authSlice.reducer;
