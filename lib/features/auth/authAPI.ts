export interface User {
  id?: string;
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

export function createUser(userData: User): Promise<{ data: User }> {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5000/user/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    const data: User = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo: LoginInfo): Promise<{ data: User }> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: User = await response.json();
      resolve({ data });
    } catch (error) {
      reject({ message: "Invalid login credentials" });
    }
  });
}

export async function updateUser(email: string): Promise<{ data: User }> {
  console.log(email);
  const response = await fetch(`http://localhost:5000/user/forgot-password`, {
    method: "POST",
    body: JSON.stringify({email}),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Email not found");
  }

  const data: User = await response.json();
  return { data };
}

export async function resetPassword(userData: User): Promise<{ data: User }> {
  console.log(userData);
  const response = await fetch(`http://localhost:5000/user/reset-password`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to reset password");
  }

  const data: User = await response.json();
  return { data };
}