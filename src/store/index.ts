import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from './slices/coursesSlice';
import projectsSlice from './slices/projectsSlice';

export const store = configureStore({
  reducer: {
    courses: coursesSlice,
    projects: projectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './thunks/fetchCourses';
export * from './thunks/fetchProjects';
