import React from 'react'
import Elemento from '../Elemento/elemento'
import './ultimosVisitados.css'

class ultimosVisitados extends React.Component{
    render(){
        return(
        <div className='ultimosVisitados'>
            <p className='Titulo'>Álbuns visitados recentemente</p> 
            <div className='Lista'>
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

export default ultimosVisitados

