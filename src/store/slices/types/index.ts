export type CourseProps = {
  date: string;
  name: string;
  desc: string;
  url: string;
  langs: string[];
};

export type ProjectProps = {
  img: string;
  name: string;
  desc: string;
  url: string;
  langs: string[];
};

export type State<T> = {
  list: T[];
  loading: boolean;
};
