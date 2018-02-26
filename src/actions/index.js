import {APIService} from '../services/APIService'
import {IpcService} from '../services/IpcService'

export const saveElectronValue = (usingElectron) => {
  return {
    type: 'SAVE_ELECTRON_VALUE',
    usingElectron
  }

}
export const openDrawer = () => {
  return {
    type: 'OPEN_DRAWER',
  }
}

export const closeDrawer = () => {
  return {
    type: 'CLOSE_DRAWER',
  }
}

export const requestNext = () => {
  return {
    type: 'REQUEST_NEXT'
  }
}

export const recieveNext = (data) => {
  return {
    type: 'RECIEVE_NEXT',
    newRecords: data.results,
    next: data.next
  }
}

export const requestPokemonInfo = (url) => {
  return {
    type: 'REQUEST_POKEMON_INFO'
  }
}

export const recievePokemonInfo = (selectedPokemon) => {
  return {
    type: 'RECIEVE_POKEMON_INFO',
    selectedPokemon
  }
}

export const showBulbapediaSection = () => {
  return {
    type: 'SHOW_BULBAPEDIA_SECTION'
  }
}

export const showPokemonInfo = () => {
  return {
    type: 'SHOW_POKEMON_INFO'
  }
}

export const updateFavorites = (newList) => {
  return {
    type: 'UPDATE_FAVORITES',
    newList
  }
}

export function loadFavorites() {
  return dispatch => {
    IpcService.sendLoadMessage().then(data => {
      dispatch(updateFavorites(data));
    })
  }
}

export function saveFavorites(newList) {
  return dispatch => {
    return IpcService.sendSaveMessage(newList).then(data => {
      dispatch(updateFavorites(newList));
    })
  }
}

export function fetchNext(url) {
  return dispatch => {
    dispatch(requestNext())
    return APIService.getPokemonList(url).then(data => {
      dispatch(recieveNext(data));
    })
  }
}

export function fetchPokemonInfo(url) {
  return dispatch => {
    dispatch(closeDrawer())
    dispatch(showPokemonInfo())
    dispatch(requestPokemonInfo())
    return APIService.getPokemonInfo(url).then(data => {
      dispatch(recievePokemonInfo(data));
    })
  }
}
