import React, { Component } from 'react'
import './index.less'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span className="footer-copyright">© 鞋念·2021</span>
                <span className="footer-address">复旦大学邯郸校区</span>
            </div>
        )
    }
}
