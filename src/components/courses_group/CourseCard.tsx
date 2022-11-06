import { Card } from 'react-bootstrap'

export default function CourseCard() {
	return (
		<Card
			style={{
				margin: 30,
				borderRadius: 10,
			}}
		>
			<Card.Img src="/home/python.png" />
			<Card.Body>
				<Card.Text>
					Python for Beginer: Learn the Python programming language
					and the fundamentals of Python
				</Card.Text>
				<Card.Footer>Tutor</Card.Footer>
			</Card.Body>
		</Card>
	)
}
