import { Component } from 'react';
import { CourseProps } from './assets/types';

export class Course extends Component<CourseProps> {
  renderLangs(): JSX.Element[] {
    return this.props.langs.map((lang: string) => {
      return <span className="course-lang">{lang}</span>;
    });
  }

  render(): JSX.Element {
    return (
      <div className="course">
        <span className="course-dates">{this.props.dates}</span>
        <div className="course-info">
          <h4 className="course-name">{this.props.name}</h4>
          <p className="course-desc">{this.props.desc}</p>
          <div className="course-langs">{this.renderLangs()}</div>
        </div>
      </div>
    );
  }
}
