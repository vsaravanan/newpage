import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import sidebar from './reducer-sidebar'

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    sidebar: sidebar,
  })

export default reducers
