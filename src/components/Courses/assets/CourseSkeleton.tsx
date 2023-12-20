import { Component } from 'react';
import { SkeletonPart } from '../../App.Assets/reusable/SkeletonPart';

export class CourseSkeleton extends Component {
  applyLineStyling(): { [key: string]: string } {
    return {
      height: '20px',
      width: '100%',
      backgroundColor: 'rgba(153, 154, 155, 0.07)',
      margin: '5px',
    };
  }

  applyLangStyling(): { [key: string]: string } {
    return {
      height: '35px',
      width: '60px',
      backgroundColor: 'rgba(153, 154, 155, 0.07)',
      margin: '5px',
    };
  }

  render(): JSX.Element {
    return (
      <div className="course">
        <span className="course-dates">
          <SkeletonPart style={this.applyLineStyling()} />
        </span>
        <div className="course-info">
          <h4 className="course-name">
            <SkeletonPart style={this.applyLineStyling()} />
          </h4>
          <p className="course-desc">
            <SkeletonPart style={this.applyLineStyling()} />
            <SkeletonPart style={this.applyLineStyling()} />
            <SkeletonPart style={this.applyLineStyling()} />
          </p>
          <div className="course-langs">
            <SkeletonPart style={this.applyLangStyling()} />
            <SkeletonPart style={this.applyLangStyling()} />
            <SkeletonPart style={this.applyLangStyling()} />
          </div>
        </div>
      </div>
    );
  }
}
