import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function Discover() {
	return (
		<Container
			style={{
				paddingTop: 60,
				paddingBottom: 60,
				maxWidth: '100%',
				paddingLeft: 0,
				paddingRight: 0,
			}}
		>
			<Row>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<h1
						style={{
							fontFamily: 'Jacques Francois',
							fontStyle: 'normal',
							fontWeight: 400,
							fontSize: 40,
							marginRight: '20%',
							marginBottom: '5%',
							width: '60%',
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
							width: '60%',
							marginLeft: '15%',
						}}
					>
						Explore new skills, deepen existing passions, and get
						lost in creativity.
					</h2>
				</Col>
				<Col xs={8}>
					<Image src="/home/main.webp" width="100%" />
				</Col>
			</Row>
		</Container>
	)
}
