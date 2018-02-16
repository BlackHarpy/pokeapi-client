import * as actions from '../actions/index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

jest.mock('../services/APIService');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

    it('should create an action to open Drawer', () => {
        const expectedAction = {
            type: 'OPEN_DRAWER'
        };
        expect(actions.openDrawer()).toEqual(expectedAction)
    });

    it('should create an action to close Drawer', () => {
        const expectedAction = {
            type: 'CLOSE_DRAWER'
        };
        expect(actions.closeDrawer()).toEqual(expectedAction)
    });

    it('should create an action to request next Pokemons in list', () => {
        const expectedAction = {
            type: 'REQUEST_NEXT'
        };
        expect(actions.requestNext()).toEqual(expectedAction)
    });

    it('should create an action to recieve next Pokemons in list', () => {
        const data = {
            results: [{
                name: 'pikachu'
            }, {
                name: 'raichu'
            }],
            next: 'nextURL'
        }
        const expectedAction = {
            type: 'RECIEVE_NEXT',
            newRecords: [{
                name: 'pikachu'
            }, {
                name: 'raichu'
            }],
            next: 'nextURL'
        };
        expect(actions.recieveNext(data)).toEqual(expectedAction)
    });

    it('should create an action to request Pokemon Info', () => {
        const expectedAction = {
            type: 'REQUEST_POKEMON_INFO'
        };
        expect(actions.requestPokemonInfo()).toEqual(expectedAction)
    });

    it('should create an action to recieve Pokemon Info', () => {
        const pokemon = {
            name: 'pikachu'
        }
        const expectedAction = {
            type: 'RECIEVE_POKEMON_INFO',
            selectedPokemon: {
                name: 'pikachu'
            }
        };
        expect(actions.recievePokemonInfo(pokemon)).toEqual(expectedAction)
    });
});

describe('async actions', () => {
    it('should fetch pokemon list', () => {
        const expectedActions = [{
            type: 'REQUEST_NEXT'
        }, {
            type: 'RECIEVE_NEXT',
            newRecords: [{
                name: 'pikachu'
            }, {
                name: 'raichu'
            }],
            next: 'nextURL'
        }];

        const store = mockStore({})

        return store.dispatch(actions.fetchNext('url')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })

    it('should fetch pokemon info', () => {
        const expectedActions = [{
            type: 'CLOSE_DRAWER'
        },{
            type: 'REQUEST_POKEMON_INFO'
        }, {
            type: 'RECIEVE_POKEMON_INFO',
            selectedPokemon: {
                name: 'pikachu'
            }
        }];

        const store = mockStore({})

        return store.dispatch(actions.fetchPokemonInfo('url')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})