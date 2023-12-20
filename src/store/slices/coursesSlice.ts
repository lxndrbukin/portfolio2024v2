import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { State, CourseProps } from './types';
import { fetchCourses } from '../thunks/fetchCourses';

const initialState: State<CourseProps> = {
  list: [],
  loading: false,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state: State<CourseProps>) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCourses.fulfilled,
      (state: State<CourseProps>, action: PayloadAction<CourseProps[]>) => {
        state.loading = false;
        state.list = action.payload;
      }
    );
  },
});

export default coursesSlice.reducer;
