import API from "@/lib/config";

export const createFavCourse = async (userId: string, courseId: string) => {
  try {
    const response = await API.post(`fav/favCourse`, {
      userId,
      courseId,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating favorite course:", error);
    throw error;
  }
};

export const getFavCourses = async () => {
  try {
    const response = await API.get(`fav/favCourse`);
    return response.data;
  } catch (error) {
    console.error("Error getting favorite courses:", error);
    throw error;
  }
};

export const getFavCoursesByUserId = async (userId: string) => {
  try {
    const response = await API.get(`fav/favCourse/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting favorite courses by user ID:", error);
    throw error;
  }
};

export const updateFavCourse = async (
  id: string,
  userId: string,
  courseId: string
) => {
  try {
    const response = await API.put(`fav/favCourse/${id}`, {
      userId,
      courseId,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating favorite course:", error);
    throw error;
  }
};

export const deleteFavCourse = async (id: string) => {
  try {
    const response = await API.delete(`fav/favCourse/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting favorite course:", error);
    throw error;
  }
};
