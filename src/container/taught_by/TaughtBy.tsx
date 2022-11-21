import { Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function TaughtBy() {
	return (
		<div
			style={{
				display: 'flex',
				background: '#002333',
				color: 'white',
				padding: 20,
				marginTop: 20,
			}}
		>
			<Row xs={1} sm={2}>
				<Col
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Row>
						<h1
							style={{
								textAlign: 'left',
								marginBottom: '10%',
								marginLeft: '10%',
								width: '70%',
							}}
						>
							Classes Taught by Qualified creators
						</h1>
					</Row>
					<Row style={{ marginLeft: '40%' }}>
						<h2 style={{ textAlign: 'left' }}>Jessica Hische</h2>
						<h2 style={{ textAlign: 'left' }}>Tom Foese</h2>
						<h2 style={{ textAlign: 'left' }}>Jade Nguyen</h2>
					</Row>
				</Col>
				<Col>
					<Image src="/home/tutor.jpeg" width="100%" />
				</Col>
			</Row>
		</div>
	)
}
