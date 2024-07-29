import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  checkUser,
  createUser,
  resetPassword,
  User,
  updateUser,
} from "./authAPI";

interface AuthState {
  loggedInUser: User | null;
  email: string | null;
  otp: string | null;
  status: "idle" | "loading";
  error: string | null;
}

const loadUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedUser = window.localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

const initialState: AuthState = {
  loggedInUser: loadUserFromLocalStorage(),
  email: null,
  otp: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (userData: {
    role: string;
    email: string;
    name: string;
    password: string;
  }) => {
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
  async (userData: { email: string; otp: string; newPassword: string }) => {
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
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("user");
      }
    },
    setUserFromLocalStorage: (state) => {
      state.loggedInUser = loadUserFromLocalStorage();
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
          if (typeof window !== "undefined") {
            window.localStorage.setItem("user", JSON.stringify(action.payload));
          }
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
          if (typeof window !== "undefined") {
            window.localStorage.setItem("user", JSON.stringify(action.payload));
          }
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

export const {
  setEmail,
  setOtp,
  resetAuthState,
  signOut,
  setUserFromLocalStorage,
} = authSlice.actions;

export const selectLoggedInUser = (state: { auth: AuthState }) =>
  state.auth.loggedInUser;
export const selectError = (state: { auth: AuthState }) => state.auth.error;
export const selectEmail = (state: { auth: AuthState }) => state.auth.email;
export const selectOtp = (state: { auth: AuthState }) => state.auth.otp;

export default authSlice.reducer;
