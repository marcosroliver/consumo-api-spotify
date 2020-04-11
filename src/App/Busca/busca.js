import React from 'react';
import '../../assets/fonts/Roboto-Bold.ttf';
import './busca.css';
class Busca extends React.Component{
    render(){
        return(
            <div className='Busca'>                
                        <p>Busque por um artistas, álbuns ou músicas</p>
                    <textarea placeholder="Comece a escrever..." rows="1" cols="100%"></textarea>
                    <div className="Lista">
                        <p>Álbuns buscados recentemente</p>
                    </div>
                    <div className="Lista">
                        <p>Álbuns visitados recentemente</p>
                    </div>
            </div>

        )
    }
}

export default Busca