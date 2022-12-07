import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { ButtonGroup } from 'react-bootstrap'

import './Footer.css'

let linkStyle = {
	display: 'flex',
	alignItems: 'center',
	color: 'white',
}

export default function Footer() {
	return (
		<footer>
		<div style={{ height: 250, background: '#002333', color: 'white' }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<ul
					style={{
						marginTop: '3%',
						marginLeft: '5%',
					}}
				>
					<li>
						<Nav.Link
							to="/aboutus"
							end
							as={NavLink}
							style={linkStyle}
						>
							About us
						</Nav.Link>
					</li>
					<li>
						<Nav.Link
							to="/contactus"
							end
							as={NavLink}
							style={linkStyle}
						>
							Contact us
						</Nav.Link>
					</li>
					<li>
						<Nav.Link
							to="/teachonmeshare"
							end
							as={NavLink}
							style={linkStyle}
						>
							Teach on meShare
						</Nav.Link>
					</li>
				</ul>
				<ul
					style={{
						marginTop: '3%',
					}}
				>
					<li>
						<Nav.Link
							to="/teamplans"
							end
							as={NavLink}
							style={linkStyle}
						>
							Team plans
						</Nav.Link>
					</li>
					<li>
						<Nav.Link
							to="/freecourse"
							end
							as={NavLink}
							style={linkStyle}
						>
							Free course
						</Nav.Link>
					</li>
				</ul>
				<DropdownButton
					as={ButtonGroup}
					title="English"
					style={{
						width: '10%',
						height: '20%',
						marginTop: '4%',
						marginRight: '10%',
					}}
					variant="light"
				>
					<Dropdown.Item eventKey="1">Vietnamese</Dropdown.Item>
					<Dropdown.Item eventKey="2">France</Dropdown.Item>
				</DropdownButton>
			</div>
			<div id="rectangle"></div>
		</div>
		</footer>
	)
}
