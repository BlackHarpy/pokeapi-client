import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'

import { fetchPokemonInfo } from '../actions/index'

function mapStateToProps(state) {
  return {
    likedPokemon: state.likedPokemon
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

const Container = ({ likedPokemon, fetchPokemonInfo, fetching }) => {
  const handleClick = (url) => {
    fetchPokemonInfo(url)
  }
  return (<div>
    {/* {likedPokemon.map((pokemon, index) => {
      return <MenuItem key={index} onClick={e => { e.preventDefault(); handleClick(pokemon.url) }}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </MenuItem>
    })} */}
    <div> Favorites </div>
  </div>)
}

export const PokemonFavorites = connect(mapStateToProps, mapDispatchToProps)(Container);