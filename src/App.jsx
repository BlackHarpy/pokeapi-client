/*jshint esversion: 6 */

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainBar from './MainBar';
import PokemonCard from './PokemonCard';
import Paper from 'material-ui/Paper';
import MDSpinner from "react-md-spinner";


const App = React.createClass({
    getInitialState: function() {
        return {
            pokemonData: {},
            loading: false
        };
    },
    getPokemon: function(url) {
        this.setState({loading: true});
        $.get(url, function(data) {
            this.setState({pokemonData: data, loading: false});
        }.bind(this));
    },

    render: function() {
        console.log(this.state);
        if (!this.state.loading) {
            if ( Object.keys(this.state.pokemonData).length > 0) {
                return (
                    <MuiThemeProvider>
                        <div>
                            <MainBar sendPokemon={this.getPokemon}/>
                            <PokemonCard pokemonData={this.state.pokemonData}/>
                        </div>

                    </MuiThemeProvider>
                );
            } else {
                return (
                    <MuiThemeProvider>
                        <div>
                            <MainBar sendPokemon={this.getPokemon}/>
                            <Paper zDepth={0}>
                                <h1>Test</h1>
                            </Paper>
                        </div>

                    </MuiThemeProvider>
                );
            }

        } else {
                return (
                    <MuiThemeProvider>

                    <div>
                        <MainBar sendPokemon={this.getPokemon}/>
                        <div style={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
                            <MDSpinner size={100}/>
                        </div>
                    </div>
                    </MuiThemeProvider>


                );

        }


    }
})

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
