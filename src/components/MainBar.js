import React from 'react';
import { connect } from 'react-redux'
import { openDrawer, closeDrawer, fetchNext, showPokemonInfo } from '../actions'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton';


import {PokemonList} from './PokemonList'
import { PokemonFavorites } from './PokemonFavorites'


function mapStateToProps(state) {
  return {
    drawerOpened: state.drawerOpened,
    pokemonList: state.pokemonList,
    fetching: state.fetching,
    next: state.next,
    visibleSection: state.visibleSection,
    usingElectron: state.usingElectron
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openDrawer: () => {
      dispatch(openDrawer())
    },
    closeDrawer: () => {
      dispatch(closeDrawer())
    },
    fetchNext: (url) => {
      dispatch(fetchNext(url))
    },
    showPokemonInfo: () => {
      dispatch(showPokemonInfo())
    }
  }
}

function navButton (text, action) {
  return (
  <FlatButton label={text} onClick={action} />
  )
}

function getFavoritesList (usingElectron) {
  if (usingElectron) {
    return <PokemonFavorites /> 
  }
}

const Container = ({ 
  openDrawer, 
  closeDrawer, 
  drawerOpened, 
  pokemonList, 
  fetching, 
  fetchNext, 
  next, 
  visibleSection,
  showPokemonInfo, 
  usingElectron }) => {
  const handleMenuClick = (e) => {
    openDrawer();
  }
  const closerDrawer = () => {
    closerDrawer()
  }

  const handleScroll = (e) => {
    const scrollTop = e.nativeEvent.target.scrollTop;
    const max = e.nativeEvent.target.scrollHeight - e.nativeEvent.target.clientHeight;
    const percScrolling = (scrollTop/max) * 100;
    if (percScrolling >= 100 && !fetching) {
      fetchNext(next);
    }
  }

  return (
    <div>
      <AppBar title="Pokédex" onLeftIconButtonClick={handleMenuClick} 
      iconElementRight={visibleSection === 'bulbapediaSection' ? navButton('Go Back', showPokemonInfo) : undefined}/>
      <div onScroll={handleScroll}>
        <Drawer docked={false} open={drawerOpened} onRequestChange={closeDrawer}>
        {getFavoritesList(usingElectron)}
          <PokemonList list={pokemonList}/>
        </Drawer>
      </div>
    </div>
  )
}

export const MainBar = connect(mapStateToProps, mapDispatchToProps)(Container);
