import React from 'react';
import { connect } from 'react-redux'
import { openDrawer, closeDrawer } from '../actions'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

import {PokemonList} from './PokemonList'


function mapStateToProps(state) {
  return {
    drawerOpened: state.drawerOpened,
    pokemonList: state.pokemonList,
    fetching: state.fetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openDrawer: () => {
      dispatch(openDrawer())
    },
    closeDrawer: () => {
      dispatch(closeDrawer())
    }
  }
}

const Container = ({ openDrawer, closeDrawer, drawerOpened, pokemonList, fetching }) => {
  const handleMenuClick = (e) => {
    openDrawer();
  }
  const closerDrawer = () => {
    closerDrawer()
  }
  return (
    <div>
      <AppBar title="Pokédex" onLeftIconButtonClick={handleMenuClick} />
      <Drawer docked={false} open={drawerOpened} onRequestChange={closeDrawer}>
      <PokemonList list={pokemonList}/>
      </Drawer>
    </div>
  )
}

export const MainBar = connect(mapStateToProps, mapDispatchToProps)(Container);
