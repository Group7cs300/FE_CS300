import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function BecomeATutor() {
	return (
		<Container>
			<Row xs={1} sm={2}>
				<Col>
					<Image src="/home/become_tutor.png" width="100%" />
				</Col>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						paddingBottom: 30,
					}}
				>
					<h1 style={{ textAlign: 'center', marginBottom: '5%' }}>
						Become a tutor
					</h1>
					<h2
						style={{
							textAlign: 'left',
							fontSize: 22,
							width: '50%',
							marginRight: '30%',
						}}
					>
						If you have experiment of some topic connect to our for
						become tutor. Then earn income by that.
					</h2>
					<h2
						style={{
							textAlign: 'left',
							fontSize: 22,
							width: '50%',
							marginLeft: '30%',
							marginTop: '3%',
						}}
					>
						We provide the extensions for you to teach what you
						love.
					</h2>
					<Button style={{ background: '#002333', marginTop: '5%' }}>
						Start teaching today
					</Button>
				</Col>
			</Row>
		</Container>
	)
}
