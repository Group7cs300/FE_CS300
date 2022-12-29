import { Card } from 'react-bootstrap'

export default function CourseCard() {
	return (
		<Card className='rounded m-3'>
			<Card.Img src="/home/python.png" />
			<Card.Body>
				<Card.Text>
					Python for Beginner: Learn the Python programming language
					and the fundamentals of Python
				</Card.Text>
				<Card.Footer>Tutor</Card.Footer>
			</Card.Body>
		</Card>
	)
}
