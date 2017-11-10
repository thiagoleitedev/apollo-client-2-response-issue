//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from '~/app/Store'
import Dashboard from '~/app/containers/Dashboard'
import './assets/style/global.css'

injectTapEventPlugin()

render(
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Router history={browserHistory}>
        <Redirect from="/" to="/dashboard" />
        <Route path="/">
          <Route path="dashboard" component={Dashboard} />
        </Route>
        <Redirect from="/*" to="/" />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root'),
)
