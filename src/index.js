import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pokemonReducers from './reducers'
import App from './components/App'

import {fetchNext} from './actions/index'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(pokemonReducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store
  .dispatch(fetchNext(store.getState().next))
  .then(() => console.log(store.getState()))
render(
  <MuiThemeProvider>

    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)