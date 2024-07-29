import API from "@/lib/config";

// Fetch all courses
export const getAllCourses = async () => {
  try {
    const response = await API.get(`api/course`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
};

// Fetch a course by ID
export const getCourseById = async (id: string) => {
  try {
    const response = await API.get(`api/course/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course with ID ${id}:`, error);
    throw error;
  }
};
