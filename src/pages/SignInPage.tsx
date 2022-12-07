import { Checkbox, Form, Input, Button } from 'antd'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import client from '../client/axios'
import APIS from '../constants/api'
import LOCAL_STORAGE_KEYS from '../constants/local_storage'
import { SigninCredentails, User } from '../constants/types'
import { Footer, Navbar } from '../containers'
import { useAppDispatch } from '../redux/store'
import { setToken } from '../redux/user/slice'

export default function SignInPage() {
	interface InputError {
		username?: string
		password?: string
		detail?: string
	}

	const [inputError, setInputError] = useState<InputError>({})
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const onFinish = (values: SigninCredentails) => {
		client
			.post<User>(APIS.SIGN_IN, {
				username: values.username,
				password: values.password,
			})
			.then((response) => {
				if (response.data.token) {
					localStorage.setItem(
						LOCAL_STORAGE_KEYS.TOKEN_KEY,
						response.data.token
					)
					dispatch(setToken(response.data.token))
					navigate('/')
				}
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
