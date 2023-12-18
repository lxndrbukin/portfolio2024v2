import './assets/styles.scss';
import { Component } from 'react';
import { CourseProps } from './assets/types';
import { courses } from './assets/courses';
import { Course } from './Course';

export class Courses extends Component {
  renderCourses(): JSX.Element[] {
    return courses.map((course: CourseProps) => {
      return <Course {...course} />;
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
