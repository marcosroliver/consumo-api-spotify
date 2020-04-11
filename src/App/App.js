import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Busca from './Busca/busca';

import logo from '../assets/imgs/spotify_logo.svg';
import './App.css';
import '../assets/fonts/Roboto-Regular.ttf'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div><img src={logo} className="spot-logo" alt="Spotify" /></div>
        <Busca/>
      </header>
    </div>
  );
}

export default App;
