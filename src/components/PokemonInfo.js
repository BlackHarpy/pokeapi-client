import React from 'react';
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper';

import {DescriptionCard} from './DescriptionCard'
import {PokemonCard} from './PokemonCard'
import {BulbapediaSection} from './BulbapediaSection'

const  pokedexImageUrl = 'https://data.whicdn.com/images/71286714/large.gif';
const waitingImageUrl = 'https://78.media.tumblr.com/9e9c3f70954ac563e568e0f4001e481a/tumblr_nn4rtmvYmW1r9m88fo1_500.gif';

const style = {
  margin: 20,
  maxWidth: 600,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

function mapStateToProps(state) {
  return {
    usingElectron: state.usingElectron,
    pokemonData: state.selectedPokemon,
    fetchingPokemon: state.fetchingPokemon
  }
}

function getSpinner() {
  return (
    <DescriptionCard title={"Loading Pokémon Data"} imageUrl={waitingImageUrl} text={"Please stand by..."} />
  )
}

function getStartCard() {
  return (
    <DescriptionCard 
      title={"Hi! How are you doing today? :)"} 
      imageUrl={pokedexImageUrl}
      text={"Select a Pokémon from the list"} 
    /> 
  )
}

function getPokemonCard(pokemonData, usingElectron) {
  return <PokemonCard data={pokemonData} usingElectron={usingElectron} />
}

function getCard(fetchingPokemon, pokemonData, usingElectron) {
  if (fetchingPokemon) {
    return getSpinner();
  }
  if (!pokemonData.name) {
    return getStartCard();
  }
  return getPokemonCard(pokemonData, usingElectron);
}

function buildContent (fetchingPokemon,pokemonData, usingElectron) {
  return  (
  <div  style={{textAlign :'center'}}>
    <Paper style={style} zDepth={2}> 
     {getCard(fetchingPokemon, pokemonData, usingElectron)}
    </Paper>
  </div>)
}
const Container = ({fetchingPokemon, pokemonData, usingElectron}) => {
  return (<div>
    {buildContent(fetchingPokemon, pokemonData, usingElectron)}
    {/* <BulbapediaSection /> */}
  </div>);
};

export const PokemonInfo = connect(mapStateToProps)(Container);
