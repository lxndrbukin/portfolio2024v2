import './assets/styles.scss';
import { Component } from 'react';

export class Introduction extends Component {
  render(): JSX.Element {
    return (
      <div className='intro'>
        <h1 className='intro-fullname'>Alexander Bukin</h1>
        <h3 className='intro-role'>Full-Stack Developer</h3>
        <p className='intro-text'>
          I'm just at the beginning of my long journey as a Web Developer.
        </p>
      </div>
    );
  }
}
