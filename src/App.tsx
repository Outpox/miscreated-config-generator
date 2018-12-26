import * as React from 'react';
import './App.css';
import Parameter from './components/parameter'

import logo from './assets/logo.svg';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Miscreated Config Generator</h1>
          <p>A dedicated server config generator</p>
        </header>
        <div className="app-intro">
          <Parameter parameter="sv_servername" inputType="text"></Parameter>
          <Parameter parameter="sv_servername" inputType="text"></Parameter>
          <Parameter parameter="sv_servername" inputType="text"></Parameter>
        </div>
      </div>
    );
  }
}

export default App;
