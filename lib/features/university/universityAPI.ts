import { CourseDetail } from "@/constents/types";
import API from "@/lib/config";

export interface University {
  _id: string;
  overview: {
    name: string;
    yearFounded: number;
    overview: string;
    address: string;
    landmark: string;
    pincode: number;
    city: string;
    district: string;
    state: string;
    universityType: string;
    accreditations: string;
    ranking: Array<{ name: string; value: number }>;
  };
  campus: {
    about: string;
    size: string;
    facilities: string[];
    hostelLife: string;
  };
  course: {
    offered: string;
    about: CourseDetail[];
  };
  placement: {
    intro: string;
    highestLastYear: number;
    avgLastYear: number;
    topRecruiters: string[];
  };
  gallery: {
    profilePhoto: string;
    logo: string;
    photos: string[];
    videoLink: string[];
  };
  faq: Array<{ question: string; answer: string; _id:string }>;
}

// Fetch all universities
export const getAllUniversities = async (): Promise<{ data: University[] }> => {
  try {
    const response = await API.get("university/all");
    return { data: response.data };
  } catch (error) {
    console.error("Error fetching universities:", error);
    throw error;
  }
};

// Add a university
export const addUniversity = async (
  university: University
): Promise<{ data: University }> => {
  try {
    const response = await API.post("university/add", university);
    return { data: response.data };
  } catch (error) {
    console.error("Error adding university:", error);
    throw error;
  }
};

// Edit a university
export const editUniversity = async (
  id: string,
  university: University
): Promise<{ data: University }> => {
  try {
    const response = await API.patch(`university/edit/${id}`, university);
    return { data: response.data };
  } catch (error) {
    console.error("Error editing university:", error);
    throw error;
  }
};

// Delete a university
export const deleteUniversity = async (id: string): Promise<void> => {
  try {
    await API.delete(`university/delete/${id}`);
  } catch (error) {
    console.error("Error deleting university:", error);
    throw error;
  }
};
