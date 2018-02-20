import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pokemonReducers from './reducers'
import App from './components/App'

import { fetchNext, saveElectronValue } from './actions/index'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(pokemonReducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

function checkElectron() {
  const userAgent = navigator.userAgent.toLowerCase()
  return store.dispatch(saveElectronValue(userAgent.indexOf(' electron/') > -1))
}

function loadList() {
  return store.dispatch(fetchNext(store.getState().next))
}

async function initializeState() {
  await checkElectron()
  await loadList()
}

initializeState()

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App style={{ height: '100%' }}/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)