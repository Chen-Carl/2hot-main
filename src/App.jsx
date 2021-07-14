import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { BackTop } from 'antd';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/home' component={Home}></Route>
					<Redirect to="/home"/>
        </Switch>
        <BackTop />
      </BrowserRouter>
    )
  }
}
