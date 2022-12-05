import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Button, Col, Navbar as NB, Row } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import Search from '../../components/search'
import LOCAL_STORAGE_KEYS from '../../constants/local_storage'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { removeToken, removeAccount } from '../../redux/user/slice'

let linkStyle = {
	display: 'flex',
	alignItems: 'center',
	color: 'white',
}

export default function Navbar() {
	const account = useAppSelector((state) => state.user.account)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	return (
		<NB
			className="navbar"
			style={{
				backgroundColor: '#002333',
			}}
		>
			<Container>
				<Row style={{ width: '100%' }}>
					<Col style={{ display: 'flex', alignItems: 'center' }}>
						<NB.Brand style={{ color: 'white' }} href="/">
							meSHARE
						</NB.Brand>
					</Col>
					<Col
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Search />
					</Col>
					<Col
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}
					>
						<Nav>
							{account ? (
								<Nav.Link
									onClick={() => {
										localStorage.removeItem(
											LOCAL_STORAGE_KEYS.TOKEN_KEY
										)
										dispatch(removeToken())
										dispatch(removeAccount())
										navigate('/')
									}}
									as={Button}
									style={linkStyle}
									className="d-flex align-items-center border-0 text-white"
								>
									Đăng xuất
								</Nav.Link>
							) : (
								<>
									<Nav.Link
										to="/signin"
										as={NavLink}
										style={linkStyle}
										className="d-flex align-items-center"
									>
										Đăng nhập
									</Nav.Link>
									<Nav.Link
										to="/signup"
										as={NavLink}
										style={linkStyle}
										className="d-flex align-items-center"
									>
										Đăng ký
									</Nav.Link>
								</>
							)}
						</Nav>
					</Col>
				</Row>
			</Container>
		</NB>
	)
}
