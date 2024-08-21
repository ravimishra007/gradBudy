import API from "@/lib/config";

export interface User {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  id: string;
  name?: string;
  email: string;
  password?: string;
  role?: string;
  otp?: string;
  newPassword?: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}

// Create a new user
export const createUser = async (userData: {
  role: string;
  email: string;
  name: string;
  password: string;
}): Promise<{ data: User }> => {
  try {
    const response = await API.post("user/signup", userData);
    return { data: response.data };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Check user credentials for login
export const checkUser = async (
  loginInfo: LoginInfo
): Promise<{ data: User }> => {
  try {
    const response = await API.post("user/login", loginInfo);
    return { data: response.data };
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Update user by email
export const updateUser = async (email: string): Promise<{ data: User }> => {
  try {
    const response = await API.post("user/forgot-password", { email });
    return { data: response.data };
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Reset user password
export const resetPassword = async (userData: {
  email: string;
  otp: string;
  newPassword: string;
}): Promise<{ data: User }> => {
  try {
    const response = await API.post("user/reset-password", userData);
    return { data: response.data };
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};
