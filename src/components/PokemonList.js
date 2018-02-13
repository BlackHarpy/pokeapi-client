import React from 'react'
import PropTypes from 'prop-types'

export const PokemonList = ({pokemon}) => {
  <ul>
    {pokemon.map((pokemon) => {
      {pokemon.name}
    })}
  </ul>
}