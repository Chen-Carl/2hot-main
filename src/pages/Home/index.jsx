import React, { Component } from 'react'
import './index.less'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Intro from '../Intro'
import Product from '../Product'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header></Header>
                <Switch>
                    <Route path='/home/intro' component={Intro}></Route>
                    <Route path='/home/product' component={Product}></Route>
                    <Redirect to="/home/intro"/>
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}
