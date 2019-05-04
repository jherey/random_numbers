import React, { Component } from 'react';

import Home from './components/Home';
import './assets/style.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}

export default App;
