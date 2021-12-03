import { Landing } from 'pages/Landing/Landing.controller'
import { Rules } from 'pages/Rules/Rules.controller'
import React from 'react'
//@ts-ignore
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { ProgressBar } from './App.components/ProgressBar/ProgressBar.controller'
import { Toaster } from './App.components/Toaster/Toaster.controller'
import { configureStore } from './App.store'
import { AppContainer } from './App.style'

export const store = configureStore({})

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ProgressBar />
        <AppContainer>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/rules">
              <Rules />
            </Route>
          </Switch>
        </AppContainer>
        <Toaster />
      </Router>
    </Provider>
  )
}
