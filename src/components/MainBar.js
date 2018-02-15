import React from 'react';
import { connect } from 'react-redux'
import { openDrawer, closeDrawer, fetchNext } from '../actions'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

import {PokemonList} from './PokemonList'


function mapStateToProps(state) {
  return {
    drawerOpened: state.drawerOpened,
    pokemonList: state.pokemonList,
    fetching: state.fetching,
    next: state.next
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
    }
  }
}

function handleScroll (e) {
  
}

const Container = ({ openDrawer, closeDrawer, drawerOpened, pokemonList, fetching, fetchNext, next }) => {
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
    if (percScrolling >= 100) {
      fetchNext(next);
    }
  }

  return (
    <div>
      <AppBar title="Pokédex" onLeftIconButtonClick={handleMenuClick} />
      <div onScroll={handleScroll}>
        <Drawer docked={false} open={drawerOpened} onRequestChange={closeDrawer}>
          <PokemonList list={pokemonList}/>
        </Drawer>
      </div>
    </div>
  )
}

export const MainBar = connect(mapStateToProps, mapDispatchToProps)(Container);
