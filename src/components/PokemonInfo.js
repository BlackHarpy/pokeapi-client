import React from 'react';
import Paper from 'material-ui/Paper';
import {PokemonCard} from './PokemonCard'
import { connect } from 'react-redux'

const style = {
  margin: 20,
  maxWidth: 600,
  textAlign: 'center',
  display: 'inline-block',
};

function mapStateToProps(state) {
  return {
    pokemonData: state.selectedPokemon
  }
}

function getPokemonCard (pokemonData) {
  return  (<div  style={{textAlign :'center'}}>
  <Paper style={style} zDepth={2}> <PokemonCard data={pokemonData}/> </Paper>
  </div>)
}
const Container = ({pokemonData}) => {
  return (<div>
    {pokemonData.name ?  getPokemonCard(pokemonData) : 'No selected Pokémon'}
  </div>);
};

export const PokemonInfo = connect(mapStateToProps)(Container);
