import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import sidebar from './reducer-sidebar'
import data_menus from './reducer-menus'

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    sidebar: sidebar,
    data_menus: data_menus,
  })

export default reducers
