import { State } from '../../../store/slices/types';


export type CoursesProps = {
  fetchCourses: Function;
  courses: State<CourseProps>;
};

export type CourseProps = {
  date: string;
  name: string;
  desc: string;
  url: string;
  langs: string[];
};
