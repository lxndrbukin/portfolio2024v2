import './assets/styles.scss';
import { Component } from 'react';
import { ProjectProps } from './assets/types';
import { projects } from './assets/projects';

import { Project } from './Project';

export class Projects extends Component {
  renderProjects(): JSX.Element[] {
    return projects.map((project: ProjectProps) => {
      return <Project {...project} />;
    });
  }

  render(): JSX.Element {
    return (
      <div id='projects' className='projects'>
        {this.renderProjects()}
      </div>
    );
  }
}
