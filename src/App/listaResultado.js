import React from 'react';
import UltimosVisitados from './ResultadoBusca/resultadoBusca';

class Resultado extends React.Component{
    render(){
        return(
            <div className='Resultado'>
                <UltimosVisitados/>
            </div>
        )
    }
}

export default Resultado