import React, { Component } from 'react';
import './scss/_App.scss';

import Header from './header.js';
import Section from './section.js';
import SectionSteps from './sectionSteps.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Section />
          <SectionSteps />
      </div>
    );
  }
}

export default App;
