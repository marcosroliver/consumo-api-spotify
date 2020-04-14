import React from'react'
import './elemento.css'
import Data from '../Data/data.json'

var Spotify = require ('spotify-web-api-js')
var s = new Spotify();



class Elemento extends React.Component{
   constructor(props){
       super(props)
       this.state = {dados:[Data]}
   }
    render(){  
        const total = this.state.dados.map((dados,indice) => (dados.indice)) 
        console.log(total)
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