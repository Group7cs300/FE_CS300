import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Col, Navbar as NB, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Search from '../../components/search'

let linkStyle = {
	display: 'flex',
	alignItems: 'center',
	color: 'white',
}

export default function Navbar() {
	return (
		<NB
			className="navbar"
			style={{
				backgroundColor: '#002333',
			}}
		>
			<Container>
				<Row style={{width: '100%'}}>
					<Col style={{ display: 'flex', alignItems: 'center' }}>
						<NB.Brand style={{ color: 'white' }} href="/">
							meSHARE
						</NB.Brand>
					</Col>
					<Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Search />
					</Col>
					<Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
						<Nav>
							<Nav.Link
								to="/login"
								end
								as={NavLink}
								style={linkStyle}
							>
								Log in
							</Nav.Link>
							<Nav.Link
								to="/signup"
								end
								as={NavLink}
								style={linkStyle}
							>
								Sign up
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
			</Container>
		</NB>
	)
}
