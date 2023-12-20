import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProjectProps } from '../slices/types';
import { API_URL } from './assets';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (): Promise<ProjectProps[]> => {
    const res = await axios.get(`${API_URL}/myprojects`);
    return res.data;
  }
);
