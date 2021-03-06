import React from'react'
import './elemento.css'
import Data from '../Data/data.json'
import Spotify from 'spotify-web-api-js'
var s = new Spotify()
s.setAccessToken(localStorage.getItem('access_token'))


//teste de consumo da API por pesquisa retorno no console.log
s.searchTracks('bob',{limit:5})
  .then(function(data) {
    for (const x in data.tracks.items) {
        console.log(`nomeArtista:${data.tracks.items[x].album.artists[0].name}`,
            `nomeAlbum:${data.tracks.items[x].album.name}`,
            `urlImagem: ${data.tracks.items[x].album.images[0].url}`,
            `idAlbum':${data.tracks.items[x].album.id}`,
            `uri:${data.tracks.items[x].uri}`)
    }
    console.log('Search by "Bob"', data)
  }, function(err) {
    console.error(err);
  });

//teste de consumo da API por album retorno no console.log
s.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data);
  }, function(err) {
    console.error(err);
  });

class Elemento extends React.Component{
   constructor(props){
       super(props)
   }
    render(){  
         return(
          <div className='Elemento'>
              <img src='https://i.scdn.co/image/ab67616d0000b273e19b1b51cdd35051e17cf6dc'/>
              <p>Nome do album em duas linhas</p>
              <p>Nome do artista</p>                 
          </div>       
        )
    }
}
export default Elemento