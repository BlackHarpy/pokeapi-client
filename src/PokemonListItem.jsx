/*jshint esversion: 6 */

import React from 'react';
import $ from 'jquery';

import MenuItem from 'material-ui/MenuItem';

export default class PokemonListItem extends React.Component {
    handleClick() {
        this.props.tapEvent(this.props.url);
    }

    render() {
        return (
            <MenuItem onClick={this.handleClick}>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</MenuItem>
        );
    }
}