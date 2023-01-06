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
				paddingRight: 0,
				marginTop: 20,
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
					<Row>
						<h1
							style={{
								width: '80%',
								lineHeight: 2,
								marginLeft: '5%',
							}}
						>
							Classes Taught by Qualified creators
						</h1>
					</Row>
					<Row
						style={{
							marginLeft: '30%',
							marginTop: '10%',
						}}
					>
						<h2>Jessica Hische</h2>
						<h2>Tom Foese</h2>
						<h2>Jade Nguyen</h2>
					</Row>
				</Col>
				<Col xs={8}>
					<Image
						src="/home/tutor.jpeg"
						width="90%"
						style={{
							borderRadius: 40,
						}}
					/>
				</Col>
			</Row>
		</div>
	)
}
