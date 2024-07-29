import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import {
  getStudents,
  getStudentById,
  addStudent,
  editStudent,
  delStudent,
} from "./studentAPI";

export interface Name {
  first: string;
  middle: string;
  last: string;
}

export interface Info {
  profilePhoto: string;
  name: Name;
  desc: string;
  email: string;
  linkedin: string;
  mobile: string[];
  address: string;
  landmark: string;
  pincode: string;
  city: string;
  district: string;
  state: string;
}

export interface SecondaryEducation {
  name: string;
  board: string;
  stream: string;
  passingYear: string;
}

export interface SeniorSecondaryEducation {
  name: string;
  board: string;
  stream: string;
  marks: number;
  passingYear: string;
}

export interface DiplomaEducation {
  name: string;
  stream: string;
  passingYear: string;
}

export interface CollegeEducation {
  name: string;
  stream: string;
  branch: string;
  startingYear: string;
  passingYear: string;
}

export interface Education {
  secondary: SecondaryEducation;
  seniorSec: SeniorSecondaryEducation;
  diploma: DiplomaEducation;
  college: CollegeEducation;
}

export interface Experience {
  designation: string;
  org: string;
  startDate: string;
  endDate: string;
  desc: string;
}

export interface Skill {
  name: string;
  desc: string;
}

export interface Skills {
  intro: string;
  skill: Skill[];
}

export interface Student {
  info: Info;
  education: Education;
  skills: Skills;
  experience: Experience[];
}

export interface StudentState {
  student: Student;
  students: Student[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: StudentState = {
  student: {
    info: {
      profilePhoto:
        "https://ik.imagekit.io/def9idz9d/techBlogDoodle_D2Zqb2u_M.jpg",
      name: {
        first: "",
        middle: "",
        last: "",
      },
      desc: "",
      email: "",
      linkedin: "",
      mobile: [],
      address: "",
      landmark: "NA",
      pincode: "",
      city: "",
      district: "",
      state: "",
    },
    education: {
      secondary: {
        name: "",
        board: "",
        stream: "",
        passingYear: "",
      },
      seniorSec: {
        name: "",
        board: "",
        stream: "",
        marks: 0,
        passingYear: "",
      },
      diploma: {
        name: "",
        stream: "",
        passingYear: "",
      },
      college: {
        name: "",
        stream: "",
        branch: "",
        startingYear: "",
        passingYear: "",
      },
    },
    skills: {
      intro: "",
      skill: [
        {
          name: "",
          desc: "",
        },
      ],
    },
    experience: [
      {
        designation: "",
        org: "",
        startDate: "",
        endDate: "",
        desc: "",
      },
    ],
  },
  students: [],
  status: "idle",
  error: null,
};

// Async thunks
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async (token: string) => {
    const response = await getStudents(token);
    return response;
  }
);

export const fetchStudentById = createAsyncThunk(
  "students/fetchStudentById",
  async ({ id, token }: { id: string; token: string }) => {
    const response = await getStudentById(id, token);
    return response;
  }
);

export const createStudent = createAsyncThunk(
  "students/createStudent",
  async ({
    userId,
    student,
    token,
  }: {
    userId: string;
    student: Student;
    token: string;
  }) => {
    const data = { userId, student };
    console.log("Creating student with data:", data);
    const response = await addStudent(data, token);
    return response;
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async ({
    id,
    student,
    token,
  }: {
    id: string;
    student: Student;
    token: string;
  }) => {
    const response = await editStudent(id, student, token);
    return response;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async ({ id, token }: { id: string; token: string }) => {
    await delStudent(id, token);
    return id;
  }
);

const studentProfileSlice = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {
    updateStudentPersonalInfo: (
      state,
      action: PayloadAction<Partial<Info>>
    ) => {
      state.student.info = { ...state.student.info, ...action.payload };
    },
    updateEducation: (state, action: PayloadAction<Partial<Education>>) => {
      state.student.education = {
        ...state.student.education,
        ...action.payload,
      };
    },
    updateStudentExperience: (state, action: PayloadAction<Experience[]>) => {
      state.student.experience = action.payload;
    },
    addStudentExperience: (state) => {
      state.student.experience.push({
        designation: "",
        org: "",
        startDate: "",
        endDate: "",
        desc: "",
      });
    },
    updateStudentSkillsIntroText: (state, action: PayloadAction<string>) => {
      state.student.skills.intro = action.payload;
    },
    updateStudentSkill: (
      state,
      action: PayloadAction<{ index: number; key: keyof Skill; value: string }>
    ) => {
      const { index, key, value } = action.payload;
      state.student.skills.skill[index][key] = value;
    },
    addStudentSkill: (state) => {
      state.student.skills.skill.push({ name: "", desc: "" });
    },
    updateStudentSkillsData: (state, action: PayloadAction<Skills>) => {
      state.student.skills = action.payload;
    },
    resetStudentProfile: () => initialState,
    updateStudentData: (state, action: PayloadAction<Student>) => {
      return { ...state, student: { ...state.student, ...action.payload } };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchStudents.fulfilled,
        (state, action: PayloadAction<Student[]>) => {
          state.status = "succeeded";
          state.students = action.payload;
        }
      )
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(fetchStudentById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchStudentById.fulfilled,
        (state, action: PayloadAction<Student>) => {
          state.status = "succeeded";
          state.student = action.payload;
        }
      )
      .addCase(fetchStudentById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(createStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createStudent.fulfilled,
        (state, action: PayloadAction<Student>) => {
          state.status = "succeeded";
          state.students.push(action.payload);
        }
      )
      .addCase(createStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(updateStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        updateStudent.fulfilled,
        (state, action: PayloadAction<Student>) => {
          state.status = "succeeded";
          const index = state.students.findIndex(
            (student) => student.info.email === action.payload.info.email
          );
          if (index !== -1) {
            state.students[index] = action.payload;
          }
        }
      )
      .addCase(updateStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(deleteStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        deleteStudent.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = "succeeded";
          state.students = state.students.filter(
            (student) => student.info.email !== action.payload
          );
        }
      )
      .addCase(deleteStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const {
  updateStudentPersonalInfo,
  updateEducation,
  updateStudentExperience,
  addStudentExperience,
  updateStudentSkillsIntroText,
  updateStudentSkill,
  addStudentSkill,
  updateStudentSkillsData,
  resetStudentProfile,
  updateStudentData,
} = studentProfileSlice.actions;

export const selectStudentProfileInfo = (state: {
  studentProfile: StudentState;
}) => state.studentProfile.student.info;

export const selectStudent = (state: RootState) => state.studentProfile.student;

export default studentProfileSlice.reducer;
