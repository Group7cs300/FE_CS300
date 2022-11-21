import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { ButtonGroup, SplitButton } from 'react-bootstrap'

import './Footer.css'

let linkStyle = {
	display: 'flex',
	alignItems: 'center',
	color: 'white',
}

export default function Footer() {
	return (
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
			<div style={{ display: 'flex', marginTop: '1%' }}>
				<div style={{ marginLeft: '5%', marginRight: '3%' }}>
					&copyright; meSHARE, Inc, 2022
				</div>
				<Nav.Link
					to="/help"
					end
					as={NavLink}
					style={{ marginRight: '3%' }}
				>
					Help
				</Nav.Link>
				<Nav.Link
					to="/privacy"
					end
					as={NavLink}
					style={{ marginRight: '3%' }}
				>
					Privacy
				</Nav.Link>
				<Nav.Link
					to="/terms"
					end
					as={NavLink}
					style={{ marginRight: '3%' }}
				>
					Terms
				</Nav.Link>
				<Nav.Link
					to="/facebook"
					end
					as={NavLink}
					style={{ marginRight: '3%', marginLeft: '35%' }}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
					</svg>
				</Nav.Link>
				<Nav.Link to="/" end as={NavLink} style={{ marginRight: '3%' }}>
					meSHARE
				</Nav.Link>
			</div>
		</div>
	)
}
