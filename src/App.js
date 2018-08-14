import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction'
import './css/fonts.css';

import {library} from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 styles={styles.header}>Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;