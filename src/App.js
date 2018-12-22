import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/_App.scss';

import Header from './header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
