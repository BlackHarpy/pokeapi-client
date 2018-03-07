import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import MDSpinner from "react-md-spinner";
import MenuItem from 'material-ui/MenuItem'

import { fetchPokemonInfo } from '../actions/index'

function mapStateToProps(state) {
  return {
    fetching: state.fetching
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

const Container = ({ list, fetchPokemonInfo, fetching }) => {
  const handleClick = (url) => {
    fetchPokemonInfo(url)
  }
  return (<div>
    {list.map((pokemon, index) => {
      return <MenuItem key={index} onClick={e => { e.preventDefault(); handleClick(pokemon.url) }}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </MenuItem>
    })}
    {spinner(fetching)}
  </div>)
}

export const PokemonList = connect(mapStateToProps, mapDispatchToProps)(Container);