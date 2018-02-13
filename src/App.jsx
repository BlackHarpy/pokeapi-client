/*jshint esversion: 6 */

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainBar from './MainBar.jsx';
import PokemonCard from './PokemonCard.jsx';
import Paper from 'material-ui/Paper';
import MDSpinner from "react-md-spinner";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonData: {},
            loading: false
        };
    }
    getPokemon(url) {
        this.setState({ loading: true });
        $.get(url, function (data) {
            this.setState({ pokemonData: data, loading: false });
        }.bind(this));
    }

    render() {
        if (!this.state.loading) {
            if (Object.keys(this.state.pokemonData).length > 0) {
                return (
                    <MuiThemeProvider>
                        <div>
                            <MainBar sendPokemon={this.getPokemon} />
                            <PokemonCard pokemonData={this.state.pokemonData} />
                        </div>

                    </MuiThemeProvider>
                );
            } else {
                return (
                    <MuiThemeProvider>
                        <div>
                            <MainBar sendPokemon={this.getPokemon} />
                            <Paper zDepth={0}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                    <h2>Click on the Menu button to open Pokémon List</h2>
                                </div>
                            </Paper>
                        </div>

                    </MuiThemeProvider>
                );
            }

        } else {
            return (
                <MuiThemeProvider>

                    <div>
                        <MainBar sendPokemon={this.getPokemon} />
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <MDSpinner size={100} />
                        </div>
                    </div>
                </MuiThemeProvider>


            );
        }
    }
}


