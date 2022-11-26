import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function Discover() {
	return (
		<Container style={{ paddingTop: 20 }}>
			<Row xs={1} sm={2}>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						padding: 30,
					}}
				>
					<h1
						style={{
							textAlign: 'center',

							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: 30,
						}}
					>
						What Will You Discover?
					</h1>
					<h2
						style={{
							textAlign: 'center',

							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: 27,
						}}
					>
						Explore new skills, deepen existing passions, and get
						lost in creativity.
					</h2>
				</Col>
				<Col>
					<Image src="/home/main.webp" width={'100%'} />
				</Col>
			</Row>
		</Container>
	)
}

