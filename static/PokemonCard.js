'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactMdSpinner = require('react-md-spinner');

var _reactMdSpinner2 = _interopRequireDefault(_reactMdSpinner);

var _Card = require('material-ui/Card');

var _Table = require('material-ui/Table');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */

var StatRow = _react2.default.createClass({
    displayName: 'StatRow',

    getInitialState: function getInitialState() {
        return { name: '' };
    },
    componentDidMount: function componentDidMount() {
        _jquery2.default.get(this.props.nameUrl, function (data) {
            this.setState({ name: data.names[5].name });
        }.bind(this));
    },
    render: function render() {
        if (this.state.name) {

            return _react2.default.createElement(
                _Table.TableRow,
                { key: this.props.key },
                _react2.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    this.state.name
                ),
                _react2.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    this.props.value
                )
            );
        } else {
            return _react2.default.createElement(
                _Table.TableRow,
                { key: this.props.key },
                _react2.default.createElement(
                    _Table.TableRowColumn,
                    null,
                    _react2.default.createElement(_reactMdSpinner2.default, null)
                )
            );
        }
    }
});

var SpeciesData = _react2.default.createClass({
    displayName: 'SpeciesData',

    getInitialState: function getInitialState() {
        return { speciesData: {} };
    },
    componentDidMount: function componentDidMount() {
        this.setState({ speciesData: {} });
        _jquery2.default.get(this.props.dataUrl, function (data) {
            this.setState({ speciesData: data });
        }.bind(this));
    },
    render: function render() {
        if (Object.keys(this.state.speciesData).length > 0) {
            var formattedTitle = this.state.speciesData.id + ' - ' + this.state.speciesData.names[0].name;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Card.CardTitle, { style: { display: 'flex', justifyContent: 'center' }, title: formattedTitle }),
                _react2.default.createElement(_Card.CardTitle, { style: { display: 'flex', justifyContent: 'center' }, subtitle: this.state.speciesData.genera[0].genus }),
                _react2.default.createElement(
                    _Card.CardText,
                    null,
                    this.state.speciesData.flavor_text_entries[1].flavor_text
                )
            );
        } else {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactMdSpinner2.default, null)
            );
        }
    }
});

var PokemonCard = _react2.default.createClass({
    displayName: 'PokemonCard',

    generateStatsRows: function generateStatsRows() {
        return this.props.pokemonData.stats.map(function (value, key) {
            return _react2.default.createElement(StatRow, { key: key, nameUrl: value.stat.url, value: value.base_stat });
        });
    },

    renderTypes: function renderTypes() {
        return this.props.pokemonData.types.map(function (value, key) {
            return _react2.default.createElement(_FlatButton2.default, { key: key, label: value.type.name.toUpperCase() });
        });
    },

    render: function render() {
        if (Object.keys(this.props.pokemonData).length > 0) {
            return _react2.default.createElement(
                _Card.Card,
                null,
                _react2.default.createElement(
                    _Card.CardMedia,
                    { style: { width: '100%', display: 'flex', justifyContent: 'center' } },
                    _react2.default.createElement(
                        'div',
                        { style: { width: '50%', display: 'flex', justifyContent: 'center' } },
                        _react2.default.createElement('img', { src: this.props.pokemonData.sprites.front_default })
                    )
                ),
                _react2.default.createElement(SpeciesData, { dataUrl: this.props.pokemonData.species.url }),
                _react2.default.createElement(
                    _Table.Table,
                    null,
                    _react2.default.createElement(
                        _Table.TableBody,
                        { displayRowCheckbox: false },
                        this.generateStatsRows()
                    )
                ),
                _react2.default.createElement(
                    _Card.CardActions,
                    null,
                    this.renderTypes()
                )
            );
        } else {
            return _react2.default.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                _react2.default.createElement(_reactMdSpinner2.default, { size: 100 })
            );
        }
    }
});

exports.default = PokemonCard;