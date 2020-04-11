import React from 'react';
import {Switch,Route} from 'react-router-dom';
import '../../assets/fonts/Roboto-Bold.ttf';
import ListaHome from '../listaHome';
import DetalheAlbum from '../DetalheAlbum/detalheAlbum';
import ListaResultado from '../listaResultado';
import './busca.css';

class Busca extends React.Component{
    render(){
        return(
            <div className='Busca'>                
                <main>
                    <Switch>
                        <Route exact path='/'>
                            <p>Busque por artistas, álbuns ou músicas</p>
                            <input placeholder="Comece a escrever..." rows="1" cols="100%"></input>
                            <ListaHome/>
                            </Route>
                        <Route path='/Resultado'>
                            <p>Busque por artistas, álbuns ou músicas</p>
                            <input placeholder="Comece a escrever..." rows="1" cols="100%"></input>
                            <ListaResultado/>
                        </Route>
                        <Route path='/Album' component={DetalheAlbum}/>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Busca