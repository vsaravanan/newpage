import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import sidebar from './reducer-sidebar'
import data_menus from './reducer-menus'
import data_workflows from './reducer-workflows'
import current_workflow from './reducer-workflow'

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    sidebar,
    data_menus,
    data_workflows,
    current_workflow,
  })

export default reducers
