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
				<h1>Become a tutor</h1>
				<h2>
					If you have experiment of some topic connect to our for
					become tutor. Then earn income by that.
				</h2>
				<h2>
					We provide the extensions for you to teach what you love.
				</h2>
				<Button>Start teaching today</Button>
			</div>
		</Container>
	)
}
