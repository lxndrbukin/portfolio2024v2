import './App.Assets/assets/styles.scss';
import { Component } from 'react';
import { Introduction } from './Introduction/Introduction';
import { Navigation } from './Navigation/Navigation';
import { Socials } from './Socials/Socials';

export class App extends Component {
  render(): JSX.Element {
    return (
      <div className='container'>
        <div className='container-left'>
          <Introduction />
          <Navigation />
          <Socials />
        </div>
      </div>
    );
  }
}
