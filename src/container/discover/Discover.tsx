import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function Discover() {
	return (
		<Container style={{ paddingTop: 20, maxWidth: '100%' }}>
			<Row xs={1} sm={2}>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '40%',
					}}
				>
					<h1
						style={{
							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: 30,
							marginRight: '30%',
							marginBottom: '5%',
							width: '50%',
							textAlign: 'left',
						}}
					>
						What Will You Discover?
					</h1>
					<h2
						style={{
							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: 27,
							width: '50%',
							marginTop: '5%',
							textAlign: 'left',
						}}
					>
						Explore new skills, deepen existing passions, and get
						lost in creativity.
					</h2>
				</Col>
				<Col style={{ width: '60%', paddingRight: 0 }}>
					<Image src="/home/main.webp" width={'100%'} />
				</Col>
			</Row>
		</Container>
	)
}
