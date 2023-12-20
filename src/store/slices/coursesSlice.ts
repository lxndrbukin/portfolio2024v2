import { createSlice } from '@reduxjs/toolkit';
import { State, CourseProps } from './types';

const initialState: State<CourseProps> = {
  list: [],
  loading: false,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;
