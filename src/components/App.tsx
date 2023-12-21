import './App.Assets/assets/styles.scss';
import { Component, Fragment } from 'react';
import { Introduction } from './Introduction/Introduction';
import { Navigation } from './Navigation/Navigation';
import { Socials } from './Socials/Socials';
import { AboutMe } from './AboutMe/AboutMe';
import { Courses } from './Courses/Courses';
import { Projects } from './Projects/Projects';

export class App extends Component {
  componentDidMount(): void {
    window.document.title = 'Alexander Bukin';
  }

  render(): JSX.Element {
    return (
      <Fragment>
        <div className='container'>
          <div className='container-left'>
            <Introduction />
            <Navigation />
            <Socials />
          </div>
          <div className='container-right'>
            <AboutMe />
            <Courses />
            <Projects />
          </div>
        </div>
        <div className='background'></div>
      </Fragment>
    );
  }
}
