import React from 'react'
import Elemento from '../Elemento/elemento';
import './ultimosBuscados.css'

class ultimosBuscados extends React.Component{
    render(){
        return(
        <div className='ultimoBuscados'>
            <p className='Titulo'>Álbuns buscados recentemente</p>
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

export default ultimosBuscados