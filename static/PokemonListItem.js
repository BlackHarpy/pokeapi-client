'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PokemonListItem = _react2.default.createClass({
    displayName: 'PokemonListItem',

    selectPokemon: function selectPokemon() {
        // this.props.getPokemon(this.props.url);
    },

    render: function render() {
        return _react2.default.createElement(
            _MenuItem2.default,
            { onTouchTap: this.selectPokemon },
            this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)
        );
    }
}); /*jshint esversion: 6 */

exports.default = PokemonListItem;