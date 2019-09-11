import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'

import App from './App'

import { configureStore } from './store'
const store = configureStore()

class MainApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <ConnectedRouter>
          <Switch>
            <Route path='/' component={App} />
          </Switch>
        </ConnectedRouter> */}
        <App />
      </Provider>
    )
  }
}

export default MainApp
