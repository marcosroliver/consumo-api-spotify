import React from 'react'
import './ultimosVisitados.css'

class ultimosVisitados extends React.Component{
    render(){
        return(
        <div className='ultimosVisitados'>
            <p className='Titulo'>Álbuns visitados recentemente</p> 
            <div className="Lista">
                <div className='Elemento'>
                    <div className='Thumb'><img src=''></img></div>
                    <p className='Nome_Album'>Nome do Album</p>
                    <p className='Nome_Artista'>Nome do Artista</p>
                </div>
                <div className='Elemento'>
                    <div className='Thumb'><img src=''></img></div>
                    <p className='Nome_Album'>Nome do Album</p>
                    <p className='Nome_Artista'>Nome do Artista</p>
                </div>
                <div className='Elemento'>
                    <div className='Thumb'><img src=''></img></div>
                    <div>
                    <p className='Nome_Album'>Nome do Album</p>
                    <p className='Nome_Artista'>Nome do Artista</p>
                    </div>
                </div>            
            </div>
        </div>
        )
    }

}

export default ultimosVisitados

