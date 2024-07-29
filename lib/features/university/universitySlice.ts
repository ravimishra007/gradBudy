import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addUniversity, editUniversity, getAllUniversities, deleteUniversity, University } from './universityAPI';

interface UniversityState {
  universities: University[];
  status: 'idle' | 'loading';
  error: string | null;
}

const initialState: UniversityState = {
  universities: [],
  status: 'idle',
  error: null,
};

export const fetchAllUniversitiesAsync = createAsyncThunk(
  'university/fetchAll',
  async () => {
    const response = await getAllUniversities();
    return response.data;
  }
);

export const addUniversityAsync = createAsyncThunk(
  'university/add',
  async (university: University) => {
    const response = await addUniversity(university);
    return response.data;
  }
);

export const editUniversityAsync = createAsyncThunk(
  'university/edit',
  async ({ id, university }: { id: string; university: University }) => {
    const response = await editUniversity(id, university);
    return response.data;
  }
);

export const deleteUniversityAsync = createAsyncThunk(
  'university/delete',
  async (id: string) => {
    await deleteUniversity(id);
    return id;
  }
);

const universitySlice = createSlice({
  name: 'university',
  initialState,
  reducers: {
    resetUniversityState: (state) => {
      state.universities = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUniversitiesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchAllUniversitiesAsync.fulfilled,
        (state, action: PayloadAction<University[]>) => {
          state.status = 'idle';
          state.universities = action.payload;
        }
      )
      .addCase(fetchAllUniversitiesAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message || 'Failed to fetch universities';
      })
      .addCase(addUniversityAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        addUniversityAsync.fulfilled,
        (state, action: PayloadAction<University>) => {
          state.status = 'idle';
          state.universities.push(action.payload);
        }
      )
      .addCase(addUniversityAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message || 'Failed to add university';
      })
      .addCase(editUniversityAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        editUniversityAsync.fulfilled,
        (state, action: PayloadAction<University>) => {
          state.status = 'idle';
          const index = state.universities.findIndex(university => university._id === action.payload._id);
          if (index !== -1) {
            state.universities[index] = action.payload;
          }
        }
      )
      .addCase(editUniversityAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message || 'Failed to edit university';
      })
      .addCase(deleteUniversityAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        deleteUniversityAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = 'idle';
          state.universities = state.universities.filter(university => university._id !== action.payload);
        }
      )
      .addCase(deleteUniversityAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message || 'Failed to delete university';
      });
  },
});

export const { resetUniversityState } = universitySlice.actions;

export const selectUniversities = (state: { university: UniversityState }) => state.university.universities;
export const selectUniversityError = (state: { university: UniversityState }) => state.university.error;

export default universitySlice.reducer;
