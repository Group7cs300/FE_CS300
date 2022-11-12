import { Button, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function BecomeATutor() {
	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<Image src="/home/become_tutor.png" width="100%" />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<h1
					style={{
						textAlign: 'center',
						marginBottom: 20,
					}}
				>
					Become a tutor
				</h1>
				<h2
					style={{
						fontSize: 22,
						paddingLeft: '10%',
						paddingRight: '30%',
						marginBottom: 20,
					}}
				>
					If you have experiment of some topic connect to our for
					become tutor. Then earn income by that.
				</h2>
				<h2
					style={{
						fontSize: 22,
						paddingLeft: '30%',
						paddingRight: '15%',
						marginBottom: 30,
					}}
				>
					We provide the extensions for you to teach what you love.
				</h2>
				<div
					style={{
						textAlign: 'center',
					}}
				>
					<Button
						style={{
							width: '40%',
						}}
					>
						Start teaching today
					</Button>
				</div>
			</div>
		</Container>
	)
}
