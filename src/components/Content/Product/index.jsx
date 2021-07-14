import React, { Component } from 'react'
import Item from '../Item'
import Title from '../Title'
import './index.less'

export default class Product extends Component {
    render() {
        return (
            <div className="product">
                <Title title="商城"></Title>
                <ul>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                    <li><Item></Item></li>
                </ul>
            </div>

        )
    }
}
