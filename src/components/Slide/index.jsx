import React, { Component } from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './index.less'

const style = {
    width: "100%",
    height: "100%"
};

export default class Slide extends Component {
    clickLeft = () => {this.carousel.prev()};
    clickRight = () => {this.carousel.next()};

    render() {
        return (
            <div className="slide">
                <Carousel autoplay className="slide-carousel" ref={c => this.carousel = c }>
                    <div>
                        <img src="/images/home1.jpg" alt="" style={style} />
                        {/* <h3 style={contentStyle}>1</h3> */}
                    </div>
                    <div>
                        <img src="/images/home1.jpg" alt="" style={style} />
                        {/* <h3 style={contentStyle}>2</h3> */}
                    </div>
                    <div>
                        <img src="/images/home1.jpg" alt="" style={style} />

                        {/* <h3 style={contentStyle}>3</h3> */}
                    </div>
                </Carousel>
                <div className="slides-left" onClick={this.clickLeft}><LeftOutlined style={{margin: "0 auto"}}/></div>
                <div className="slides-right" onClick={this.clickRight}><RightOutlined style={{margin: "0 auto"}}/></div>
            </div>
        )
    }
}
