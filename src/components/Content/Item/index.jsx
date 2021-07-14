import React, { Component } from 'react'
import './index.less'

export default class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src="/images/home1.jpg" alt="中国" />
                <span>
                    info
                </span>
            </div>
        )
    }
}
