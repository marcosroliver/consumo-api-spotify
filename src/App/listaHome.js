import React from 'react';
import UltimosBuscados from './UltimosBuscados/ultimosBuscados';
import UltimosVisitados from './UltimosVisitados/ultimosVisitados';

class Home extends React.Component{
    render(){
        return(
            <div className='Home'>
                <UltimosBuscados/>
                <UltimosVisitados/>
            </div>
        )
    }
}

export default Home