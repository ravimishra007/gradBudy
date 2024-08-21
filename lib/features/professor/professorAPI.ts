import API from "@/lib/config";
import { Professor } from "./professorSlice";

// GET: Get list of all professors
export const getProfessors = async (): Promise<Professor[]> => {
  try {
    const response = await API.get<Professor[]>("professor/get");
    return response.data;
  } catch (error) {
    console.error("Error getting professors:", error);
    throw error;
  }
};

// GET: Get a professor by ID
export const getProfessorById = async (id: string): Promise<Professor> => {
  try {
    const response = await API.get<Professor>(`professor/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting professor by ID:", error);
    throw error;
  }
};
