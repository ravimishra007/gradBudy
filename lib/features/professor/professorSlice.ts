import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfessorById, getProfessors } from "./professorAPI";
import { RootState } from "@/lib/store";

export interface Name {
  first: string;
  middle?: string;
  last: string;
}

export interface Info {
  profilePhoto: string;
  name: Name;
  desc: string;
  email: string;
  linkedin?: string;
  mobile: string[];
  address: string;
  landmark: string;
  pincode: string;
  city: string;
  district: string;
  state: string;
  languages: string[];
}

export interface Education {
  name: string;
  degree: string;
  field: string;
  gradYear: string;
  profileDesc: string;
}

export interface Experience {
  designation: string;
  org: string;
  startDate: string;
  endDate: string;
  desc: string;
}

export interface Specialization {
  name: string;
  desc: string;
}

export interface Specializations {
  intro: string;
  specialization: Specialization[];
}

export interface Professor {
  _id: string;
  info: Info;
  education: Education[];
  experience: Experience[];
  specializations: Specializations;
}

interface ProfessorState {
  professors: Professor[];
  professor: Professor | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfessorState = {
  professors: [],
  professor: null,
  status: "idle",
  error: null,
};

export const fetchProfessors = createAsyncThunk("professors/fetchAll", async () => {
  const response = await getProfessors();
  return response;
});

export const fetchProfessorById = createAsyncThunk("professors/fetchById", async (id: string) => {
  const response = await getProfessorById(id);
  return response;
});

const professorSlice = createSlice({
  name: "professors",
  initialState,
  reducers: {
    resetProfessor: (state) => {
      state.professor = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfessors.fulfilled, (state, action: PayloadAction<Professor[]>) => {
        state.status = "succeeded";
        state.professors = action.payload;
      })
      .addCase(fetchProfessors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch professors";
      })
      .addCase(fetchProfessorById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfessorById.fulfilled, (state, action: PayloadAction<Professor>) => {
        state.status = "succeeded";
        state.professor = action.payload;
      })
      .addCase(fetchProfessorById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch professor";
      });
  },
});

export const { resetProfessor } = professorSlice.actions;

export const selectAllProfessors = (state: RootState) => state.professors.professors;
export const selectProfessorById = (state: RootState) => state.professors.professor;
export const selectProfessorStatus = (state: RootState) => state.professors.status;
export const selectProfessorError = (state: RootState) => state.professors.error;

export default professorSlice.reducer;
