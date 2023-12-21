import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CourseProps } from '../slices/types';
import { API_URL } from './assets';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (): Promise<CourseProps[]> => {
    const res = await axios.get(`${API_URL}/courses.json`);
    return res.data;
  }
);
