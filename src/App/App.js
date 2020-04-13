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
    const parametros = this.getHashParams();
    const token = parametros.access_token;
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
    }
    console.log(this.hashParams)
    return hashParams;
  }

  topTracksLorde = () =>{
    $.ajax({
        method: "GET",
        dataType: "Json",
        url:"https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR",
        headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
    .then(dados=>{
      alert('Musica' + dados.tracks[0].name)
      alert('Objeto'+ this.topTracksLorde)
    })
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <div><img src={logo} className="spot-logo" alt="Spotify" /></div>
        <button><a href='http://localhost:8888'>Login Spotify</a></button>
        <button onClick={this.topTracksLorde}>Top Track</button>
        </div>
          <Busca/>
        </header>
      </div>
    )
  }
}

export default App
