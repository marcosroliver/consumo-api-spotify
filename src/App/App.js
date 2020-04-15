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
    this.topTracksLorde = this.topTracksLorde.bind(this)
  }

  getHashParams=()=> {
    var hashParams = [];
    var e, r = /([^&;=]+)=?([^&;]*)/g,q = window.location.search.substring(1);
    
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    localStorage.setItem('access_token', hashParams.access_token)
    return hashParams;
  }

  
  topTracksLorde=(s)=>{
      $.ajax({
        method: "GET",
        dataType: "Json",
        url:"https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR",
        headers: {
        Authorization: 'Bearer '+ s
      }
    })
    .then(dados=>{
      console.log(dados)
    })
  }

 
  
  render(){
    const parametros = this.getHashParams()
    const token = parametros.access_token
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <div><img src={logo} className="spot-logo" alt="Spotify" /></div>
        <a href='http://localhost:8888/login'><button>Login Spotify</button></a>
        </div>
          <Busca/>
        </header>
      </div>
    )
  }
}

export default App
