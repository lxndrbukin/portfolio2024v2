import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectProps, State } from './types';
import { fetchProjects } from '../thunks/fetchProjects';

const initialState: State<ProjectProps> = {
  list: [],
  loading: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state: State<ProjectProps>) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProjects.fulfilled,
      (state: State<ProjectProps>, action: PayloadAction<ProjectProps[]>) => {
        state.loading = false;
        state.list = action.payload;
      }
    );
  },
});

export default projectsSlice.reducer;
