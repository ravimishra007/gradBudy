export interface User {
  id?: string;
  email: string;
  password?: string; // Password should be optional as it won't be returned by the server
}

export interface LoginInfo {
  email: string;
  password: string;
}

export function createUser(userData: User): Promise<{ data: User }> {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    const data: User = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo: LoginInfo): Promise<{ data: User }> {
  const email = loginInfo.email;
  const password = loginInfo.password;
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/users?email=${email}`);
    const data: User[] = await response.json();
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "wrong credentials" });
      }
    } else {
      reject({ message: "user not found" });
    }
    // TODO: on server it will only return some info of user (not password)
  });
}

export async function updateUser(
  update: Partial<User>
): Promise<{ data: User }> {
  const response = await fetch(`http://localhost:8080/users/${update.id}`, {
    method: "PUT",
    body: JSON.stringify(update),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  const data: User = await response.json();
  return { data };
}

export function signOut(userId: string): Promise<{ data: string }> {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    resolve({ data: "success" });
  });
}
