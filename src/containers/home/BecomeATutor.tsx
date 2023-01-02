import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function BecomeATutor() {
	return (
		<Container style={{ maxWidth: '100%' }}>
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
					<h1 style={{ textAlign: 'center', fontSize: 50 }}>
						Become a tutor
					</h1>
					<h2
						style={{
							width: '50%',
							fontSize: 24,
							marginTop: '5%',
							marginRight: '20%',
							fontWeight: 'normal',
						}}
					>
						If you have experiment of some topic connect to our for
						become tutor. Then earn income by that.
					</h2>
					<h2
						style={{
							width: '35%',
							fontSize: 24,
							marginTop: '5%',
							marginLeft: '40%',
							fontWeight: 'normal',
						}}
					>
						We provide the extensions for you to teach what you
						love.
					</h2>
					<Button
						size="lg"
						style={{
							marginTop: '5%',
							width: '50%',
							borderRadius: 20,
							backgroundColor: '#002333',
						}}
					>
						Start teaching today
					</Button>
				</Col>
			</Row>
		</Container>
	)
}
