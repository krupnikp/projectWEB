import React, { Component } from 'react';
import './scss/_App.scss';

import Header from './header.js';
import Section from './section.js';
import SectionSteps from './sectionSteps.js';
import SectionAboutUs from './sectionAboutUs.js';
import SectionInfo from './sectionInfo.js';
import SectionForm from './sectionForm.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Section />
          <SectionSteps />
          <SectionAboutUs />
          <SectionInfo />
          <SectionForm />
      </div>
    );
  }
}

export default App;
