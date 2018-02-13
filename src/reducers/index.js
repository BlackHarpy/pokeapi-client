const initialState = {
  drawerOpened: false,
  pokemonList: [],
  selectedPokemon: {}
}

const pokemonReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_DRAWER':
      return {...state, drawerOpened: true}
    case 'CLOSE_DRAWER':
      return {...state, drawerOpened: false}
    
    default:
      return state;
  }
}

export default pokemonReducers;