import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './header/header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
      </header>
    </div>
  );
}

export default App;
