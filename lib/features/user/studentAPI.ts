import API from "@/lib/config";
import { Student } from "./studentProfileSlice";

// GET: Get list of all students
export const getStudents = async (token: string): Promise<Student[]> => {
  try {
    const response = await API.get<Student[]>("student/get", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting students:", error);
    throw error;
  }
};

// GET: Get a student by ID
export const getStudentById = async (
  id: string,
  token: string
): Promise<Student> => {
  try {
    const response = await API.get<Student>(`student/byUserId/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting student by ID:", error);
    throw error;
  }
};

// POST: Add a new student
export const addStudent = async (
  data: { userId: string; student: Student },
  token: string
): Promise<Student> => {
  try {
    const { userId, student } = data;
    const response = await API.post<Student>(
      "student/add",
      { userId, ...student },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

// PATCH: Edit a student by ID
export const editStudent = async (
  id: string,
  student: Student,
  token: string
): Promise<Student> => {
  try {
    const response = await API.patch<Student>(`student/edit/${id}`, student, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing student:", error);
    throw error;
  }
};

// DELETE: Delete a student by ID
export const delStudent = async (id: string, token: string): Promise<void> => {
  try {
    await API.delete(`student/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
};
