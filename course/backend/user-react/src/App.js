import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dbApiCall from './db-api-calls.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    dbApiCall.getUsers().then(res => this.setState({users:res}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
