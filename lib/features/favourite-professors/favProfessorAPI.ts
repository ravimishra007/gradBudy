import API from "@/lib/config";

export const createFavProf = async (userId: string, profId: string) => {
  try {
    const response = await API.post(`fav/favProf`, {
      userId,
      profId,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating favourite professor:", error);
    throw error;
  }
};

export const getFavProfs = async () => {
  try {
    const response = await API.get(`fav/favProf`);
    return response.data;
  } catch (error) {
    console.error("Error getting favourite professors:", error);
    throw error;
  }
};

export const getFavProfsByUserId = async (userId: string) => {
  try {
    const response = await API.get(`fav/favProf/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting favourite professors by user ID:", error);
    throw error;
  }
};

export const updateFavProf = async (
  id: string,
  userId: string,
  profId: string
) => {
  try {
    const response = await API.put(`fav/favProf/${id}`, {
      userId,
      profId,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating favourite professor:", error);
    throw error;
  }
};

export const deleteFavProf = async (id: string) => {
  try {
    const response = await API.delete(`fav/favProf/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting favourite professor:", error);
    throw error;
  }
};
