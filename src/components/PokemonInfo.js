import React from 'react';
import {PokemonCard} from './PokemonCard'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    pokemonData: state.selectedPokemon
  }
}

const Container = ({pokemonData}) => {
  return (<div>
    {pokemonData.name ?  <PokemonCard data={pokemonData}/> : 'No selected Pokémon'}
  </div>);
};

export const PokemonInfo = connect(mapStateToProps)(Container);
