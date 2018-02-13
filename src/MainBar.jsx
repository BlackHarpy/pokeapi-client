import React from 'react';

import AppBar from 'material-ui/AppBar';
import PokemonList from './PokemonList.jsx';

export default class AppBarExampleIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false, 
            pokemonList: []
        };
    }
    selectUrl (url) {
        this.props.sendPokemon(url);
        this.setState({openDrawer: false});
    }
 
    openDrawer() {
        this.setState({openDrawer: true});
    }
    render() {
        return (
            <div>
                <AppBar title="Pokédex" onLeftIconButtonClick={this.openDrawer.bind(this)}/>
                <PokemonList open={this.state.openDrawer} selectUrl={this.selectUrl}/>
            </div>
        );
    }
};

