import { Button, Checkbox, Form, Input } from 'antd'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import client from '../client/axios'
import { User } from '../constants/types'
import { Footer, Navbar } from '../containers'

export default function SignUpPage() {
	const navigate = useNavigate()

	interface InputError {
		username?: string
		password?: string
		email?: string
		detail?: string
	}

	const [inputError, setInputError] = useState<InputError>({})

	const onFinish = (values : any) => {
		client
			.post<User>('/app/account/sign_up', {
				username: values.username,
				password: values.password,
				email: values.email,
			})
			.then(() => {
				navigate('/signin')
			})
			.catch((err: Error | AxiosError<InputError>) => {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						setInputError(err.response.data)
					}
				}
			})
	}

	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<Container className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
				<Form
					onFinish={onFinish}
					name="basic"
					initialValues={{ remember: true }}
					autoComplete="off"
				>
					<Form.Item
						label="Username"
						validateStatus={inputError.username ? 'error' : ''}
						hasFeedback
						help={inputError.username}
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Email"
						name="email"
						validateStatus={inputError.email ? 'error' : ''}
						hasFeedback
						help={inputError.email}
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your email!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						validateStatus={inputError.password ? 'error' : ''}
						hasFeedback
						help={inputError.password}
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						label="Confirm Password"
						name="confirm_password"
						dependencies={['password']}
						hasFeedback
						help
						rules={[
							{
								required: true,
								message: 'Please confirm your password!',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve()
									}
									return Promise.reject(
										new Error(
											'The two passwords that you entered do not match!'
										)
									)
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item
						validateStatus={inputError.detail ? 'error' : ''}
						hasFeedback
						help={inputError.detail}
					>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Container>
			<Footer />
		</div>
	)
}
