import './assets/styles.scss';
import { Component } from 'react';
import { CoursesProps, CourseProps } from './types';
import { connect } from 'react-redux';
import { RootState, fetchCourses } from '../../store';
import { courses } from './assets/courses';
import { Course } from './Course';

class _Courses extends Component<CoursesProps> {
  componentDidMount(): void {
    this.props.fetchCourses();
  }

  renderCourses(): JSX.Element[] {
    return this.props.courses.list.map((course: CourseProps) => {
      return <Course key={course.name} {...course} />;
    });
  }

  render(): JSX.Element {
    return (
      <div id='courses' className='courses'>
        {this.renderCourses()}
      </div>
    );
  }
}

const mapStateToProps = ({ courses }: RootState) => {
  return {
    courses,
  };
};

export const Courses = connect(mapStateToProps, { fetchCourses })(_Courses);
