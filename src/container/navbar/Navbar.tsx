import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Navbar as NB } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Search from '../../components/search'

import './Navbar.css'

let linkStyle = {
	display: 'flex',
	alignItems: 'center',

	color: 'white',
}

export default function Navbar() {
	return (
		<NB className="navbar">
			<Container>
				<NB.Brand style={{ color: 'white' }} href="/">
					meSHARE
				</NB.Brand>
				<Search />
				<Nav>
					<Nav.Link to="/login" end as={NavLink} style={linkStyle}>
						Log in
					</Nav.Link>
					<Nav.Link to="/signup" end as={NavLink} style={linkStyle}>
						Sign up
					</Nav.Link>
				</Nav>
			</Container>
		</NB>
	)
}
