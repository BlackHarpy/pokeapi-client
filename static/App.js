'use strict';

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MainBar = require('./MainBar');

var _MainBar2 = _interopRequireDefault(_MainBar);

var _PokemonCard = require('./PokemonCard');

var _PokemonCard2 = _interopRequireDefault(_PokemonCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)(); /*jshint esversion: 6 */

var App = _react2.default.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return { pokemonData: [] };
  },
  getPokemon: function getPokemon(url) {
    console.log('url', url);
  },
  render: function render() {
    return _react2.default.createElement(
      _MuiThemeProvider2.default,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_MainBar2.default, { pokemonFunction: this.getPokemon }),
        _react2.default.createElement(_PokemonCard2.default, { pokemonData: this.state.pokemonData })
      )
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));