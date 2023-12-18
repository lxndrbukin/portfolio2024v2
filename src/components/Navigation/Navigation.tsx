import './assets/styles.scss';
import { Component } from 'react';

export class Navigation extends Component {
  render(): JSX.Element {
    return (
      <nav className="navigation">
        <ul className="navigation-links">
          <li className="navigation-link">
            <a href="#about">
              About <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="navigation-link">
            <a href="#courses">
              Courses <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
          <li className="navigation-link">
            <a href="#projects">
              Projects <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
