/*jshint esversion: 6 */

import React from 'react';

import AppBar from 'material-ui/AppBar';
import PokemonList from './PokemonList';

const AppBarExampleIcon = React.createClass({

    getInitialState: function() {
        return {openDrawer: false, pokemonList: []};
    },
    selectUrl: function(url) {
        this.props.sendPokemon(url);
        this.setState({openDrawer: false});
    },
 
    openDrawer() {
        this.setState({openDrawer: true});
    },
    render: function() {
        return (
            <div>
                <AppBar title="Pokedex" onLeftIconButtonTouchTap={this.openDrawer}/>
                <PokemonList open={this.state.openDrawer} selectUrl={this.selectUrl}/>
            </div>
        );
    }
});

export default AppBarExampleIcon;
