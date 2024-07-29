import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getAllCourses, getCourseById } from "./coursesAPI";
import { RootState } from "@/lib/store";

interface profId {
  _id: string;
}

interface Price {
  _id: string;
  price: number;
}

interface uni {
  _id: string
}

export interface Course {
  _id: string;
  thumbnailImage: string;
  courseName: string;
  professorId: profId | null;
  streams: string[];
  UniversityIds: uni[];
  numberOfTopics: number;
  numberOfArticles: number;
  numberOfPDFs: number;
  lengthOfVideoInMinutes: number;
  credits: number;
  description: string;
  reuirements: string;
  topics: string[];
  reviewsId: string[];
  priceId: Price | null;
}

interface CoursesState {
  courses: Course[];
  course: Course | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  course: null,
  status: "idle",
  error: null,
};

// Async thunk for fetching all courses
export const fetchAllCourses = createAsyncThunk<Course[]>(
  "courses/fetchAll",
  async () => {
    const response = await getAllCourses();
    return response;
  }
);

// Async thunk for fetching a course by ID
export const fetchCourseById = createAsyncThunk<Course, string>(
  "courses/fetchById",
  async (id: string) => {
    const response = await getCourseById(id);
    return response;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAllCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.status = "succeeded";
          state.courses = action.payload;
        }
      )
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCourseById.fulfilled,
        (state, action: PayloadAction<Course>) => {
          state.status = "succeeded";
          state.course = action.payload;
        }
      )
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectCourses = (state: RootState) => state.courses.courses;
export const selectFetchedCourse = (state: RootState) => state.courses.course;
export const selectCoursesStatus = (state: RootState) => state.courses.status;
export const selectCoursesError = (state: RootState) => state.courses.error;

export default coursesSlice.reducer;
