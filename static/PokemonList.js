'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _PokemonListItem = require('./PokemonListItem');

var _PokemonListItem2 = _interopRequireDefault(_PokemonListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */

var PokemonList = _react2.default.createClass({
    displayName: 'PokemonList',

    componentDidMount: function componentDidMount() {
        this.getPokemonList('http://pokeapi.co/api/v2/pokemon/');
    },

    closeDrawer: function closeDrawer(url) {
        this.setState({ open: false });
        this.props.selectUrl(url);
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open });
    },

    getInitialState: function getInitialState() {
        return { open: false, pokemonList: [], next: '' };
    },
    getPokemonList: function getPokemonList(url) {
        var event = this.closeDrawer;
        _jquery2.default.get(url, function (data) {
            var i = this.state.pokemonList.length;
            var page = data.results.map(function (record) {
                i++;
                return _react2.default.createElement(_PokemonListItem2.default, { key: i, name: record.name, url: record.url, tapEvent: event });
            });
            var output = this.state.pokemonList.concat(page);
            this.setState({ pokemonList: output });
            this.setState({ next: data.next });
        }.bind(this));
    },
    getNextPage: function getNextPage(e) {
        _jquery2.default.get(this.state.next, function (data) {
            var i = this.state.pokemonList.length;
            var page = data.results.map(function (record, key) {
                i++;
                return _react2.default.createElement(_PokemonListItem2.default, { key: i, name: record.name, url: record.url });
            });
            var output = this.state.pokemonList.concat(page);
            this.setState({ pokemonList: output });
            this.setState({ next: data.next });
        }.bind(this));
    },
    addPokemons: function addPokemons(e) {
        var scrollTop = e.nativeEvent.target.scrollTop;
        var max = e.nativeEvent.target.scrollHeight - e.nativeEvent.target.clientHeight;
        var percScrolling = scrollTop / max * 100;
        if (percScrolling == 100) {
            this.getPokemonList(this.state.next);
        }
    },
    render: function render() {
        var _this = this;

        return _react2.default.createElement(
            'div',
            { ref: 'list', onScroll: this.addPokemons },
            _react2.default.createElement(
                _Drawer2.default,
                { ref: 'drawer', docked: false,
                    open: this.state.open,
                    onRequestChange: function onRequestChange(open) {
                        return _this.setState({ open: open });
                    } },
                this.state.pokemonList
            )
        );
    }
});

exports.default = PokemonList;