/*jshint esversion: 6 */

import React from 'react';
import $ from 'jquery';

import MenuItem from 'material-ui/MenuItem';

const PokemonListItem = React.createClass({
  selectPokemon: function() {
    // this.props.getPokemon(this.props.url);
  },

    render: function() {
        return (
            <MenuItem onTouchTap={this.selectPokemon}>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</MenuItem>
        );
    }
});

export default PokemonListItem;
