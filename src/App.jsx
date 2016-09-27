/*jshint esversion: 6 */

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MainBar from './MainBar';
import PokemonCard from './PokemonCard';

const App = React.createClass({
  getInitialState: function() {
      return {pokemonData: []};
  },
  getPokemon: function(url) {
    console.log('url',url);
  },
  render: function() {
    return (
      <MuiThemeProvider>
        <div>
          <MainBar pokemonFunction={this.getPokemon}/>
          <PokemonCard pokemonData={this.state.pokemonData}/>
        </div>

      </MuiThemeProvider>
    );
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
