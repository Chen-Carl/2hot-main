import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Menu } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './index.less';
import logo from '../../assets/images/logo.png';
// import {reqLogin} from '../../api/index';
// import memoryUtils from '../../utils/memoryUtils';
// import storageUtils from '../../utils/storageUtils';
// import { Redirect } from 'react-router';

export default class Login extends Component {
	// onFinish = async (values) => {
	// 	const {username, password} = values;
	// 	const result = await reqLogin(username, password);
	// 	if (result.status === 0) {
	// 		message.success('successfully log in');
	// 		const user = result.data;
	// 		memoryUtils.user = user;
	// 		storageUtils.saveUser(user);
	// 		this.props.history.replace('/');
	// 	} else {
	// 		message.error(result.msg);
	// 	}
	// };

	register = () => {
        this.props.history.push('/register');
		return false;
	}

	render() {
		// const user = memoryUtils.user;
		// if (user._id) {
		// 	return <Redirect to='/' />
		// }

		return (
			<div className="login">
				<header className="login-header">
					<img src={logo} alt="" />
					<h1>2Hot 鞋念</h1>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
						<Menu.Item key="1"><NavLink to="/home/intro">首页</NavLink></Menu.Item>
						<Menu.Item key="2"><NavLink to="/home/product">商城</NavLink></Menu.Item>
					</Menu>
				</header>
				<section className="login-content">
					<h2>用户登录</h2>
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
					>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input your Username!',
								},
							]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
								{
									min: 5, message: 'Password length must not be less than 5 bits!'
								},
								{
									pattern: /^[a-zA-Z0-9_]+$/, message: 'You\'ve input an invalid character!'
								},
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox className="login-form-remember">Remember me</Checkbox>
							</Form.Item>
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								Log in
							</Button>
							<div className="login-form-register">Or <a href="" onClick={this.register}>register now!</a></div>
						</Form.Item>
					</Form>
				</section>
			</div>
		)
	}
}

