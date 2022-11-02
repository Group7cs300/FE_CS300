import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Navbar as NB } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
	return (
		<NB className="navbar">
			<Container>
				<NB.Brand style={{ color: 'white' }}>meSHARE</NB.Brand>
				<Form className="navbar__search">
					<Form.Control
						type="search"
						placeholder="What course do you want to learn?"
						aria-label="Search"
						style={{
							width: 500
						}}
					/>
				</Form>
				<Nav>
					<Nav.Link to="/login" end as={NavLink}>
						<Button
							style={{
								background: 'transparent',
								border: 'none',
							}}
						>
							Log in
						</Button>
					</Nav.Link>
					<Nav.Link to="/signup" end as={NavLink}>
						<Button
							style={{
								background: 'transparent',
								border: 'none',
							}}
						>
							Sign up
						</Button>
					</Nav.Link>
				</Nav>
			</Container>
		</NB>
	)
}
