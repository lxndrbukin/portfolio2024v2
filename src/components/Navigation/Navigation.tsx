import './assets/styles.scss';
import { Component } from 'react';

export class Navigation extends Component {
  render(): JSX.Element {
    return (
      <nav className='navigation'>
        <ul className='navigation-links'>
          <li className='navigation-link'>
            <a href='#'>About</a>
          </li>
          <li className='navigation-link'>
            <a href='#'>Courses</a>
          </li>
          <li className='navigation-link'>
            <a href='#'>Projects</a>
          </li>
        </ul>
      </nav>
    );
  }
}
