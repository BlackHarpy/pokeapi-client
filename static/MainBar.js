'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _PokemonList = require('./PokemonList');

var _PokemonList2 = _interopRequireDefault(_PokemonList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBarExampleIcon = _react2.default.createClass({
    displayName: 'AppBarExampleIcon',


    getInitialState: function getInitialState() {
        return { openDrawer: false, pokemonList: [] };
    },
    selectUrl: function selectUrl(url) {
        this.props.sendPokemon(url);
        this.setState({ openDrawer: false });
    },

    openDrawer: function openDrawer() {
        this.setState({ openDrawer: true });
    },

    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AppBar2.default, { title: 'Pokedex', onLeftIconButtonTouchTap: this.openDrawer }),
            _react2.default.createElement(_PokemonList2.default, { open: this.state.openDrawer, selectUrl: this.selectUrl })
        );
    }
}); /*jshint esversion: 6 */

exports.default = AppBarExampleIcon;