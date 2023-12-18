import { Component } from 'react';
import { ProjectProps } from './assets/types';

export class Project extends Component<ProjectProps> {
  renderLangs(): JSX.Element[] {
    return this.props.langs.map((lang: string) => {
      return <span className="project-lang">{lang}</span>;
    });
  }

  render(): JSX.Element {
    return (
      <a target="_blank" href={this.props.url} className="project">
        <img className="project-img" alt="" src={this.props.img} />
        <div className="project-info">
          <h4 className="project-name">
            {this.props.name}{' '}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </h4>
          <p className="project-desc">{this.props.desc}</p>
          <div className="project-langs">{this.renderLangs()}</div>
        </div>
      </a>
    );
  }
}
