'use strict';

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _MainBar = require('./MainBar');

var _MainBar2 = _interopRequireDefault(_MainBar);

var _PokemonCard = require('./PokemonCard');

var _PokemonCard2 = _interopRequireDefault(_PokemonCard);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _reactMdSpinner = require('react-md-spinner');

var _reactMdSpinner2 = _interopRequireDefault(_reactMdSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)(); /*jshint esversion: 6 */

var App = _react2.default.createClass({
    displayName: 'App',

    getInitialState: function getInitialState() {
        return {
            pokemonData: {},
            loading: false
        };
    },
    getPokemon: function getPokemon(url) {
        this.setState({ loading: true });
        _jquery2.default.get(url, function (data) {
            this.setState({ pokemonData: data, loading: false });
        }.bind(this));
    },

    render: function render() {
        if (!this.state.loading) {
            if (Object.keys(this.state.pokemonData).length > 0) {
                return _react2.default.createElement(
                    _MuiThemeProvider2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_MainBar2.default, { sendPokemon: this.getPokemon }),
                        _react2.default.createElement(_PokemonCard2.default, { pokemonData: this.state.pokemonData })
                    )
                );
            } else {
                return _react2.default.createElement(
                    _MuiThemeProvider2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_MainBar2.default, { sendPokemon: this.getPokemon }),
                        _react2.default.createElement(
                            _Paper2.default,
                            { zDepth: 0 },
                            _react2.default.createElement(
                                'div',
                                { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    'Click on the Menu button to open Pokémon List'
                                )
                            )
                        )
                    )
                );
            }
        } else {
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_MainBar2.default, { sendPokemon: this.getPokemon }),
                    _react2.default.createElement(
                        'div',
                        { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                        _react2.default.createElement(_reactMdSpinner2.default, { size: 100 })
                    )
                )
            );
        }
    }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));