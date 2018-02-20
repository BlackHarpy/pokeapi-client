import pokemonReducers from "../reducers/index"
import * as actions from "../actions/index";

describe('reducers', () => {

  function testReducer(actionName, action, expected) {
    it('should handle ' + actionName, () => {
      expect(pokemonReducers(initialState, action)).toEqual(expected)
    });
  }

  const initialState = {
    usingElectron: false,
    drawerOpened: false,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  };

  it('should return the initial state', () => {
    expect(pokemonReducers(undefined, {})).toEqual(initialState)
  });

  let action = {
    type: 'SAVE_ELECTRON_VALUE',
    usingElectron: true
  };

  let expected = {
    usingElectron: true,    
    drawerOpened: false,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  }

  testReducer('SAVE_ELECTRON_VALUE', action, expected);

  action = {
    type: 'OPEN_DRAWER'
  };

  expected = {
    usingElectron: false,    
    drawerOpened: true,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  }

  testReducer('OPEN_DRAWER', action, expected);

  action = {
    type: 'CLOSE_DRAWER'
  };

  expected = {
    usingElectron: false,    
    drawerOpened: false,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  }

  testReducer('CLOSE_DRAWER', action, expected);

  action = {
    type: 'REQUEST_NEXT'
  };

  expected = {
    usingElectron: false,    
    drawerOpened: false,
    fetching: true,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  }

  testReducer('REQUEST_NEXT', action, expected);

  action = {
    type: 'RECIEVE_NEXT',
    newRecords: [{
      name: 'pikachu'
    }],
    next: 'page2.url'
  };

  expected = {
    usingElectron: false,    
    drawerOpened: false,
    fetching: false,
    pokemonList: [{
        name: 'pikachu'
      }
    ],
    selectedPokemon: {},
    next: 'page2.url',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  }

  testReducer('RECIEVE_NEXT', action, expected);

  action = {
    type: 'REQUEST_POKEMON_INFO'
  };

  expected = {
    usingElectron: false,    
    drawerOpened: false,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: true,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  }

  testReducer('REQUEST_POKEMON_INFO', action, expected);

  action = {
    type: 'RECIEVE_POKEMON_INFO',
    selectedPokemon: {
      name: 'pikachu'
    }
  };

  expected = {
    usingElectron: false,    
    drawerOpened: false,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {
      name: 'pikachu'
    },
    visibleSection: 'pokemonInfo'
  }

  testReducer('RECIEVE_POKEMON_INFO', action, expected);

  action = {
    type: 'SHOW_POKEMON_INFO'
  };

  expected = {
    usingElectron: false,    
    drawerOpened: false,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'pokemonInfo'
  }

  testReducer('SHOW_POKEMON_INFO', action, expected);

  action = {
    type: 'SHOW_BULBAPEDIA_SECTION'
  };

  expected = {
    usingElectron: false,    
    drawerOpened: false,
    fetching: false,
    pokemonList: [],
    selectedPokemon: {},
    next: 'https://pokeapi.co/api/v2/pokemon/',
    fetchingPokemon: false,
    selectedPokemon: {},
    visibleSection: 'bulbapediaSection'
  }

  testReducer('SHOW_BULBAPEDIA_SECTION', action, expected);
  
});