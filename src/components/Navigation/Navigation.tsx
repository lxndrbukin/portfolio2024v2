import './assets/styles.scss';
import { Component } from 'react';

export class Navigation extends Component {
  render(): JSX.Element {
    return (
      <nav className='navigation'>
        <ul className='navigation-links'>
          <li className='navigation-link'>
            <a href='#about'>About</a>
          </li>
          <li className='navigation-link'>
            <a href='#courses'>Courses</a>
          </li>
          <li className='navigation-link'>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </nav>
    );
  }
}
