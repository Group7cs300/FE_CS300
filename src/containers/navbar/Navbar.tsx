import Container from 'react-bootstrap/Container'
import { Col, Navbar as NB, Row } from 'react-bootstrap'
import Search from '../../components/navbar/search'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import Login from '../../components/navbar/Login'

export default function Navbar() {
	const account = useAppSelector((state) => state.user.account)
	
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
						<Login account={account} dispatch={dispatch} ></Login>
					</Col>
					
				</Row>
			</Container>
		</NB>
	)
}
