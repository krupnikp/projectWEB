import React, { Component } from 'react';
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
