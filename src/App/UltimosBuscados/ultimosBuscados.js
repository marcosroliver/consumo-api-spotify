import React from 'react'
import './ultimosBuscados.css'

class ultimosBuscados extends React.Component{
    render(){
        return(
        <div className='ultimoBuscados'>
            <p className='Titulo'>Álbuns buscados recentemente</p>
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
                <div className='Elemento'>
                    <div className='Thumb'><img src=''></img></div>
                    <div>
                    <p className='Nome_Album'>Nome do Album</p>
                    <p className='Nome_Artista'>Nome do Artista</p>
                    </div>
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

export default ultimosBuscados