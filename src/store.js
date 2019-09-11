import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import allReducers from './reducers'
import { compose } from 'redux'

const middlewares = [thunk, routerMiddleware, logger]

function configureStore(initialState) {
  // const store = createStore(allReducers, initialState, compose(applyMiddleware(...middlewares)))
  const store = createStore(allReducers, initialState, compose(applyMiddleware(...middlewares)))
  return store
}

export { configureStore }
