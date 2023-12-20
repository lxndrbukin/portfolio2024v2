import './assets/styles.scss';
import { Component } from 'react';

export class AboutMe extends Component {
  render(): JSX.Element {
    return (
      <div id='about' className='about'>
        <p>
          Even when I was just a teenager I was always interested in Tech and
          Software Development. I've always tried to play around with HTML and
          CSS but never actually tried learning Web Development. I was mostly
          having fun with pre-made templates and just tried to play around with
          the <b>HTML</b> and <b>CSS</b> code when I was younger.
        </p>
        <p>
          In 2020 I finally decided to give it a go and began learning Web
          Development. Slowly but surely I've been gaining knowledge of{' '}
          <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>.
        </p>
        <p>
          Today I'm finally not just playing around with pre-made templates but
          actually creating projects from scratch using <b>JavaScript</b>,{' '}
          <b>TypeScript</b> and libraries/frameworks like <b>React</b> on the
          frontend and <b>Express</b> on the backend. This is only the beginning
          of my journey and I still have a lot to learn but I can't wait to see
          what awaits me ahead.
        </p>
      </div>
    );
  }
}
