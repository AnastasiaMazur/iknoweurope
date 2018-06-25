import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IndexScene from './@index/IndexScene'
import Header from './Header'
import withTheme from '../utils/withTheme'
import Alert from './Alert'

const LayoutScene = () =>
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexScene} />
    </Switch>
    <Alert />
  </main>

LayoutScene.propTypes = {}

export default withTheme(LayoutScene)
