import {APIService} from '../services/APIService'

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
    dispatch(requestPokemonInfo())
    return APIService.getPokemonInfo(url).then(data => {
      dispatch(recievePokemonInfo(data));
    })
  }

}
