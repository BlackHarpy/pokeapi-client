import React from 'react'
import {MainBar} from './MainBar'
import {PokemonInfo} from './PokemonInfo'

const App = () => (
  <div style={{ height: '100%' }}>
    <MainBar />
    <PokemonInfo style={{ height: '100%' }}/>
  </div>
)

export default App