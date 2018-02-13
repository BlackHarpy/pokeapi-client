/*jshint esversion: 6 */

import React from 'react';
import $ from 'jquery';

import MenuItem from 'material-ui/MenuItem';

export default class PokemonListItem extends React.Component {
    handleTapEvent() {
        this.props.tapEvent(this.props.url);
    }

    render() {
        return (
            <MenuItem onTouchTap={this.handleTapEvent}>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</MenuItem>
        );
    }
}