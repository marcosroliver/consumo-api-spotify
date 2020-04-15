import React from 'react';
import {Switch, Route} from 'react-router-dom';
import $ from 'jquery';
import Busca from './Busca/busca';
import logo from '../assets/imgs/spotify_logo.svg';
import './App.css';
import '../assets/fonts/Roboto-Regular.ttf'

class App extends React.Component {
  constructor(props){
    super(props);
    this.getHashParams = this.getHashParams.bind(this)
  }

  //Get do parametro para salvar no localStorage
  getHashParams=()=> {
    var hashParams = [];
    var e, r = /([^&;=]+)=?([^&;]*)/g,q = window.location.search.substring(1);
    
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    localStorage.setItem('access_token', hashParams.access_token)
    return hashParams;
  }

  render(){
    const parametros = this.getHashParams()
    const token = parametros.access_token
    return (
      //botões temporários 
      <div className="App">
        <header className="App-header">
        <div>
          <div><img src={logo} className="spot-logo" alt="Spotify" /></div>
          <div className='botoes'>
            <a href='http://localhost:8888/login'><button>Login Spotify</button></a>
            <a href='/Resultado'><button>Resul_Busca</button></a>
            <a href='/Album'><button>Det_Album</button></a>
          </div>
        </div>
          <Busca/>
        </header>
      </div>
    )
  }
}

export default App
