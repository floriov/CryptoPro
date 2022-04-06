import React from 'react';
import logo from './logo.svg';
import './App.css';
import CryptoStreamer from './CryptoStreamer'


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <CryptoStreamer />
  </div>
  );
  
}

export default App;
