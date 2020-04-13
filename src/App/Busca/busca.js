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
                    <Switch>
                        <Route exact path='/'>
                            <header>
                                <p>Busque por artistas, álbuns ou músicas</p>
                                <input placeholder="Comece a escrever..." rows="1" cols="100%"></input>
                            </header>
                            <main>
                                <ListaHome/>
                            </main>
                            </Route>
                        <Route path='/Resultado'>
                            <header>
                                <p>Busque por artistas, álbuns ou músicas</p>
                                <input placeholder="Comece a escrever..." rows="1" cols="100%"></input>
                            </header>
                            <main>
                                <ListaResultado/>
                            </main>
                        </Route>
                        <Route path='/Album' component={DetalheAlbum}/>
                    </Switch>
            </div>
        )
    }
}

export default Busca