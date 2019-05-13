import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Route } from 'react-router-dom';
import Appnav from './dom/nav.js';
class App extends Component {
  render() {
    return (
      <Route>
        <Appnav/>
      </Route>
    );
  }
}

export default App;