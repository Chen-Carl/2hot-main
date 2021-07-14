import React, { Component } from 'react'
import { Input, Menu } from 'antd';
import './index.less'
import logo from '../../assets/images/logo.png';
import LinkButton from '../../components/LinkButton'
import { NavLink, withRouter } from 'react-router-dom';


const { Search } = Input;

class Header extends Component {
    onSearch = value => console.log(value);

    login = () => {
        this.props.history.push('/login');
    }

    register = () => {
        this.props.history.push('/register');
    }

    render() {
        return (
            <header className="header">
                <div className="header-logo">
                    <img src={logo} alt="" />
                    <h1>2Hot 鞋念</h1>
				</div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><NavLink to="/home/intro">首页</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/home/product">商城</NavLink></Menu.Item>
                </Menu>
                <Search className="header-search" placeholder="input search text" onSearch={this.onSearch} enterButton />
                <LinkButton style={{marginRight: "5px"}} onClick={this.register}>注册</LinkButton>
                <span style={{color: "white"}}>|</span>
                <LinkButton style={{marginLeft: "5px", marginRight: "20px"}} onClick={this.login}>登录</LinkButton>
            </header>
        )
    }
}

export default withRouter(Header);
