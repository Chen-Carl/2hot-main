import React, { Component } from 'react'
import './index.less'

export default class Title extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="title">
                {title}
            </div>
        )
    }
}
