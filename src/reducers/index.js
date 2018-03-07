const initialState = {
  usingElectron: false,
  drawerOpened: false,
  fetching: false,
  pokemonList: [],
  selectedPokemon: {},
  next: 'https://pokeapi.co/api/v2/pokemon/',
  fetchingPokemon: false,
  selectedPokemon: {},
  visibleSection: 'pokemonInfo',
  favoritePokemon: []  
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
    case 'SHOW_POKEMON_INFO':
      return {...state, visibleSection: 'pokemonInfo'}
    case 'SHOW_BULBAPEDIA_SECTION':
      return {...state, visibleSection: 'bulbapediaSection'}
    case 'LIKE_POKEMON':
      return {...state, favoritePokemon: [...state.favoritePokemon, action.pokemon]}
    case 'UPDATE_FAVORITES':
      return {...state, favoritePokemon: action.newList}
    default:
      return state;
  }
}

export default pokemonReducers;