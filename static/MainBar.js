'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _SearchInput = require('./SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _PokemonListItem = require('./PokemonListItem');

var _PokemonListItem2 = _interopRequireDefault(_PokemonListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */

var AppBarExampleIcon = _react2.default.createClass({
    displayName: 'AppBarExampleIcon',


    getInitialState: function getInitialState() {
        return { open: false, pokemonList: [] };
    },
    getPokemonList: function getPokemonList() {
        console.log('props main', this.props);
        _jquery2.default.get("http://pokeapi.co/api/v2/pokemon/", function (data) {
            console.log('data', data);
            var output = data.results.map(function (record) {
                return _react2.default.createElement(_PokemonListItem2.default, { name: record.name, url: record.url });
            });
            this.setState({ pokemonList: output });
        }.bind(this));
    },
    displayList: function displayList() {
        console.log('hola mierdaaaaaaa');
        this.getPokemonList();
        this.setState({
            open: !this.state.open
        });
    },
    render: function render() {
        var _this = this;

        console.log('props render', this.props);
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AppBar2.default, { title: 'Pokedex', onLeftIconButtonTouchTap: this.displayList }),
            _react2.default.createElement(
                _Drawer2.default,
                { open: this.state.open, docked: false, onRequestChange: function onRequestChange(open) {
                        return _this.setState({ open: open });
                    } },
                _react2.default.createElement(_SearchInput2.default, null),
                this.state.pokemonList
            )
        );
    }
});

exports.default = AppBarExampleIcon;