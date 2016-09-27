/*jshint esversion: 6 */

import React from 'react';
import $ from 'jquery';
import MDSpinner from "react-md-spinner";


import {Card, CardMedia, CardTitle, CardActions, CardText} from 'material-ui/Card';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const StatRow = React.createClass({
    getInitialState: function() {
        return {name: ''};
    },
    componentDidMount: function(){
        $.get(this.props.nameUrl, function(data) {
            this.setState({name: data.names[5].name});

        }.bind(this));
    },
    render: function() {
        if (this.state.name) {

            return (
                <TableRow key={this.props.key} >
                    <TableRowColumn>{this.state.name}</TableRowColumn>
                    <TableRowColumn>{this.props.value}</TableRowColumn>
                </TableRow>

            )
        } else {
            return (
                <TableRow key={this.props.key} >
                    <TableRowColumn><MDSpinner /></TableRowColumn>
                </TableRow>
            );
        }
    }
})

const SpeciesData = React.createClass({
    getInitialState: function() {
        return {speciesData: {}};
    },
    componentDidMount: function(){
        this.setState({speciesData: {}});
        $.get(this.props.dataUrl, function(data) {
            this.setState({speciesData: data});
        }.bind(this));
    },
    render: function() {
        if (Object.keys(this.state.speciesData).length > 0) {
            let formattedTitle = this.state.speciesData.id + ' - ' + this.state.speciesData.names[0].name;
            return (
                <div>
                    <CardTitle style={{display: 'flex', justifyContent: 'center' }} title={formattedTitle} />
                    <CardTitle style={{display: 'flex', justifyContent: 'center' }} subtitle={this.state.speciesData.genera[0].genus} />
                    <CardText>{this.state.speciesData.flavor_text_entries[1].flavor_text}</CardText>
                </div>
            );
        } else {
            return (
                <div>
                    <MDSpinner />
                </div>
            )
        }

    }
});

const PokemonCard = React.createClass({
    generateStatsRows: function() {
        return this.props.pokemonData.stats.map(function(value, key) {
            return (
                <StatRow key={key} nameUrl={value.stat.url} value={value.base_stat}/>
            )
        })
    },

    renderTypes: function() {
        return this.props.pokemonData.types.map(function(value, key) {
            return (
                <FlatButton key={key} label={value.type.name.toUpperCase()} />
            )
        })
    },

    render: function() {
        if (Object.keys(this.props.pokemonData).length > 0) {
            console.log(this.props.pokemonData.species.url);
            return (
                <Card>
                    <CardMedia style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div  style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                            <img src={this.props.pokemonData.sprites.front_default} />
                        </div>

                    </CardMedia>
                    <SpeciesData dataUrl={this.props.pokemonData.species.url} />
                    <Table>
                        <TableBody displayRowCheckbox={false}>
                            {this.generateStatsRows()}
                        </TableBody>
                    </Table>
                    <CardActions>
                        {this.renderTypes()}
                    </CardActions>
                </Card>
            );
        } else {
            return (
                <div style={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
                    <MDSpinner size={100}/>
                </div>
            )
        }

    }
});

export default PokemonCard;
