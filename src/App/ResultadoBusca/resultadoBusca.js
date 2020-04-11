import React from 'react'
import './resultadoBusca.css'

class ResultadoBusca extends React.Component{
    render(){
        return(
            <div class="ResultadoBusca">
                <p className='Titulo'>Resultados encontrados para "TERMO PESQUISA"</p> 
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

export default ResultadoBusca