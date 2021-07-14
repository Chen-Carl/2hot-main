import React, { Component } from 'react';
import { Form, Input, Select, Row, Col, Checkbox, Button, AutoComplete, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';
import Footer from '../../components/Footer'
import logo from '../../assets/images/logo.png';

const { Option } = Select;
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

export default class Register extends Component {
	state = {
		autoCompleteResult: [],
	};

	agreement = () => {
		return false;
	};

	render() {
		// const [form] = Form.useForm();

		const onFinish = (values) => {
			console.log('Received values of form: ', values);
		};

		const prefixSelector = (
			<Form.Item name="prefix" noStyle>
				<Select style={{ width: 70 }}>
					<Option value="86">+86</Option>
					<Option value="87">+87</Option>
				</Select>
			</Form.Item>
		);

		const onWebsiteChange = (value) => {
			if (!value) {
				this.setState({ autoCompleteResult: [] });
			} else {
				this.setState({
					autoCompleteResult: ['.com', '.org', '.net'].map(
						(domain) => `${value}${domain}`
					)
				});
			}
		};

		const websiteOptions = this.state.autoCompleteResult.map((website) => ({
			label: website,
			value: website,
		}));

		// const onFinish = (values) => {
		// 	console.log('Received values of form: ', values);
		// };

		return (
			<div className="register">
				<header className="register-header">
					<img src={logo} alt="" />
					<h1>2Hot 鞋念</h1>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
						<Menu.Item key="1"><NavLink to="/home/intro">首页</NavLink></Menu.Item>
						<Menu.Item key="2"><NavLink to="/home/product">商城</NavLink></Menu.Item>
					</Menu>
				</header>
				<section className="register-content">
					<h2>用户注册</h2>
					<Form
						{...formItemLayout}
						// form={form}
						name="register"
						onFinish={onFinish}
						initialValues={{
							prefix: '86',
						}}
						scrollToFirstError
					>
						<Form.Item
							name="email"
							label={<label style={{ color: "white" }}>E-mail</label>}
							rules={[
								{
									type: 'email',
									message: 'The input is not valid E-mail!',
								},
								{
									required: true,
									message: 'Please input your E-mail!',
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="password"
							label={<label style={{ color: "white" }}>Password</label>}
							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}
							hasFeedback
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							name="confirm"
							label={<label style={{ color: "white" }}>Confirm Password</label>}
							dependencies={['password']}
							hasFeedback
							rules={[
								{
									required: true,
									message: 'Please confirm your password!',
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}

										return Promise.reject(new Error('The two passwords that you entered do not match!'));
									},
								}),
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							name="nickname"
							label={<label style={{ color: "white" }}>Nickname</label>}
							tooltip="What do you want others to call you?"
							rules={[
								{
									required: true,
									message: 'Please input your nickname!',
									whitespace: true,
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="phone"
							label={<label style={{ color: "white" }}>Phone Number</label>}
							rules={[
								{
									required: true,
									message: 'Please input your phone number!',
								},
							]}
						>
							<Input
								addonBefore={prefixSelector}
								style={{
									width: '100%',
								}}
							/>
						</Form.Item>

						<Form.Item
							name="website"
							label={<label style={{ color: "white" }}>Website</label>}
							rules={[
								{
									required: false,
									message: 'Please input website!',
								},
							]}
						>
							<AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
								<Input />
							</AutoComplete>
						</Form.Item>

						<Form.Item
							label={<label style={{ color: "white" }}>Captcha</label>}
							extra="We must make sure that your are a human."
						>
							<Row gutter={8}>
								<Col span={12}>
									<Form.Item
										name="captcha"
										noStyle
										rules={[
											{
												required: true,
												message: 'Please input the captcha you got!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col span={12}>
									<Button>Get captcha</Button>
								</Col>
							</Row>
						</Form.Item>

						<Form.Item
							name="agreement"
							valuePropName="checked"
							rules={[
								{
									validator: (_, value) =>
										value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
								},
							]}
							{...tailFormItemLayout}
						>
							<Checkbox style={{ color: "white" }}>
								I have read the <a href="" onClick={this.agreement}>agreement</a>
							</Checkbox>
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
								Register
        					</Button>
						</Form.Item>
					</Form>
				</section>
				<Footer></Footer>
			</div>
		)
	}
}

