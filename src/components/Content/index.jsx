import React, { Component } from 'react'
import About from './About'
import Product from './Product'
import './index.less'

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <About></About>
                <Product></Product>
            </div>
        )
    }
}
