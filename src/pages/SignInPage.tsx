import { Footer, Navbar } from '../containers'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import SignInForm from '../components/signin/SignInForm'
import { SignInSocialAccount } from '../components'

export default function SignInPage() {
	return (
		<Container
			fluid
			style={{
				padding: 0,
			}}
		>
			<Row>
				<Navbar />
			</Row>
			<Row>
				<Col
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '3%',
						marginRight: '3%',
						padding: 0,
					}}
					xs={6}
				>
					<Image
						src="/home/Login_picture_01.png"
						style={{
							width: '70%',
							marginTop: '10%',
							marginBottom: '5%',
							marginLeft: '30%',
						}}
					/>
					<Image
						src="/home/Login_picture_02.png"
						style={{
							width: '70%',
							marginBottom: '5%',
							marginLeft: '5%',
						}}
					/>
				</Col>
				<Col
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: '10%',
						marginBottom: '10%',
						marginLeft: '10%',
						marginRight: '10%',
						backgroundColor: '#002333',
						color: 'white',
						borderRadius: 40,
						paddingTop: 20,
						paddingBottom: 20,
					}}
				>
					<h1
						style={{
							fontSize: 40,
						}}
					>
						Sign in
					</h1>
					<h2
						style={{
							fontSize: 20,
						}}
					>
						Sign in to your account
					</h2>
					<SignInForm />
					<SignInSocialAccount />
				</Col>
			</Row>
			<Row>
				<Footer />
			</Row>
		</Container>
	)
}
