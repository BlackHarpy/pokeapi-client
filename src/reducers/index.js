const initialState = {
  usingElectron: false,
  drawerOpened: false,
  fetching: false,
  pokemonList: [],
  selectedPokemon: {},
  next: 'https://pokeapi.co/api/v2/pokemon/',
  fetchingPokemon: false,
  selectedPokemon: {}
}

const pokemonReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_ELECTRON_VALUE':
      return {...state, usingElectron: action.usingElectron}
    case 'OPEN_DRAWER':
      return {...state, drawerOpened: true}
    case 'CLOSE_DRAWER':
      return {...state, drawerOpened: false}
    case 'REQUEST_NEXT':
      return {...state, fetching: true}
    case 'RECIEVE_NEXT':
      return {...state, fetching: false, pokemonList: [...state.pokemonList, ...action.newRecords], next: action.next}
    case 'REQUEST_POKEMON_INFO':
      return {...state, fetchingPokemon: true}
    case 'RECIEVE_POKEMON_INFO':
      return {...state, fetchingPokemon: false, selectedPokemon: action.selectedPokemon}  
    default:
      return state;
  }
}

export default pokemonReducers;