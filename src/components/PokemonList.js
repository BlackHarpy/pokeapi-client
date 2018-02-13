import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import MenuItem from 'material-ui/MenuItem'

import {fetchPokemonInfo} from '../actions/index'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonInfo: (url) => {
      dispatch(fetchPokemonInfo(url))
    }
  }
}


const Container = ({list, fetchPokemonInfo}) => {
  const handleClick = (url) => {
    fetchPokemonInfo(url)
  }
  return (<div>
    {list.map((pokemon, index) => {
      return <MenuItem key={index} onClick={e => { e.preventDefault(); handleClick(pokemon.url)}}>
      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </MenuItem>
      
    })}
  </div>)
}

export const PokemonList = connect(mapStateToProps, mapDispatchToProps)(Container);