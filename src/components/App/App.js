import React, { Component } from 'react';
import './App.scss';

import Header from '../Header/Header';
import Section from '../Section/Section';
import SectionSteps from '../SectionSteps/SectionSteps';
import SectionAboutUs from '../SectionAboutUs/SectionAboutUs';
import SectionInfo from '../SectionInfo/SectionInfo';
import SectionForm from '../SectionForm/SectionForm';


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
