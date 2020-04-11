import React from'react'
import {Link} from 'react-router-dom'
import './detalheAlbum.css'

class DetalheAlbum extends React.Component{
    render(){
        return(
            <div className='DetalheAlbum'>
            <header>
                <p><Link to='/'>{'<-'} Voltar</Link></p>
            </header>
                <main>
                    <p>Tela de DetalheAlbum</p>
                </main>
            </div>
        )
    }


}

export default DetalheAlbum