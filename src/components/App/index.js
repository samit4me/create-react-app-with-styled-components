import React, { Component } from 'react';
import Centered from '../Centered';
import Header from './Header';
import Img from './Img';
import Intro from './Intro';
import logo from '../../logo.svg';

class App extends Component {
  render() {
    return (
      <Centered>
        <Header>
          <Img src={logo} alt="logo" />
          <h2>Welcome to React and <code>styled-components</code>💅</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Centered>
    );
  }
}

export default App;
