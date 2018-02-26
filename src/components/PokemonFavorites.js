import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'

import { fetchPokemonInfo } from '../actions/index'

function mapStateToProps(state) {
  return {
    favoritePokemon: state.favoritePokemon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonInfo: (url) => {
      dispatch(fetchPokemonInfo(url))
    }
  }
}

function spinner(fetching) {
  if (fetching) {
    return <MenuItem key={'spinner'} style={{ textAlign: 'center' }}>
      <MDSpinner />
    </MenuItem>
  }
}

function listfavoritePokemons(favoritePokemon, handleClick) {
  if (favoritePokemon.length) {
    return favoritePokemon.map((pokemon, index) => {
      return <MenuItem key={index} onClick={e => { e.preventDefault(); handleClick(pokemon.url) }}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </MenuItem>
    })
  } else {
    return <MenuItem> No Favorites yet :( </MenuItem>
  }
}

const Container = ({ favoritePokemon, fetchPokemonInfo, fetching }) => {
  const handleClick = (url) => {
    fetchPokemonInfo(url)
  }
  return (<div style={{ backgroundColor: 'lightpink' }}>
    {listfavoritePokemons(favoritePokemon, handleClick)}
  </div>)
}

export const PokemonFavorites = connect(mapStateToProps, mapDispatchToProps)(Container);