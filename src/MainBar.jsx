/*jshint esversion: 6 */

import React from 'react';
import $ from 'jquery';

import SearchInput from './SearchInput';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import PokemonListItem from './PokemonListItem';

const AppBarExampleIcon = React.createClass({

    getInitialState: function() {
        return {open: false, pokemonList: []};
    },
    getPokemonList: function() {
      console.log('props main', this.props);
        $.get("http://pokeapi.co/api/v2/pokemon/", function(data) {
          console.log('data', data);
            let output = data.results.map(function(record) {
              return (<PokemonListItem name={record.name} url={record.url} />);
            })
            this.setState({pokemonList: output});
        }.bind(this));
    },
    displayList: function() {
        console.log('hola mierdaaaaaaa');
        this.getPokemonList();
        this.setState({
            open: !this.state.open
        });
    },
    render: function() {
      console.log('props render', this.props);
        return (
            <div>
                <AppBar title="Pokedex" onLeftIconButtonTouchTap={this.displayList}/>
                <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
                    <SearchInput/>
                    {this.state.pokemonList}
                </Drawer>
            </div>

        );
    }
});

export default AppBarExampleIcon;
