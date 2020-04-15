import React from 'react'
import './resultadoBusca.css'
import Elemento from '../Elemento/elemento'

class ResultadoBusca extends React.Component{
    render(){
        return(
            <div class="ResultadoBusca">
                <p className='Titulo'>Resultados encontrados para "Bob"</p>
                <div className="Lista"> 
                <Elemento/>
                <Elemento/>
                <Elemento/>
                <Elemento/>
                <Elemento/>
                </div>
                <div className="Lista"> 
                <Elemento/>
                <Elemento/>
                <Elemento/>
                <Elemento/>
                <Elemento/>
                </div>
        </div>
        )
    }
}

export default ResultadoBusca