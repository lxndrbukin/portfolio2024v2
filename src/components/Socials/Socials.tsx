import './assets/styles.scss';
import { Component } from 'react';

export class Socials extends Component {
  render(): JSX.Element {
    return (
      <div className='socials'>
        <ul className='socials-links'>
          <li className='socials-link'>
            <a href='#'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li className='socials-link'>
            <a href='#'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li className='socials-link'>
            <a href='#'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
