import API from "@/lib/config";

export interface Ranking {
  name: string;
  value: number;
}

export interface Overview {
  name: string;
  yearFounded: number;
  overview: string;
  address: string;
  landmark: string;
  pincode: number;
  city: string;
  district: string;
  state: string;
  affiliatedBy: string;
  accreditations: string;
  ranking: Ranking[];
}

export interface Campus {
  about: string;
  size: string;
  facilities: string[];
  hostelLife: string;
}

export interface CourseAbout {
  name: string;
  duration: string;
  specialization: string[];
  fee: string;
  admissionCriteria: string;
  detail: string;
  _id: string;
}

export interface Course {
  offered: string;
  about: CourseAbout[];
}

export interface Placement {
  intro: string;
  highestLastYear: number;
  avgLastYear: number;
  topRecruiters: string[];
}

export interface Gallery {
  profilePhoto: string;
  logo: string;
  photos: string[];
  videoLink: string[];
}

export interface Faq {
  _id: string;
  question: string;
  answer: string;
}

export interface College {
  _id: string;
  overview: Overview;
  campus: Campus;
  course: Course;
  placement: Placement;
  gallery: Gallery;
  faq: Faq[];
}


// GET: Get list of all colleges
export const getAllColleges = async (): Promise<{ data: College[] }> => {
  try {
    const response = await API.get("college/get");
    return { data: response.data };
  } catch (error) {
    console.error("Error getting colleges:", error);
    throw error;
  }
};

// POST: Add a new college
export const addCollege = async (
  college: College
): Promise<{ data: College }> => {
  try {
    const response = await API.post("college/add", college);
    return { data: response.data };
  } catch (error) {
    console.error("Error adding college:", error);
    throw error;
  }
};

// PATCH: Edit a college by ID
export const editCollege = async (
  id: string,
  college: College
): Promise<{ data: College }> => {
  try {
    const response = await API.patch(`college/edit/${id}`, college);
    return { data: response.data };
  } catch (error) {
    console.error("Error editing college:", error);
    throw error;
  }
};

// DELETE: Delete a college by ID
export const deleteCollege = async (id: string): Promise<void> => {
  try {
    await API.delete(`college/delete/${id}`);
  } catch (error) {
    console.error("Error deleting college:", error);
    throw error;
  }
};
