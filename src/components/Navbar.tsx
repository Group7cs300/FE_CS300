import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Navbar as NB } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
	return (
		<NB>
			<Container>
				<Nav>
					<Nav.Link to="/" end as={NavLink}>
						Home
					</Nav.Link>
				</Nav>
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="What course do you want to learn"
						className="me-2"
						aria-label="Search"
					/>
					<Button>Search</Button>
				</Form>
				<Button>ASD</Button>
			</Container>
		</NB>
	)
}
