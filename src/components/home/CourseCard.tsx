import { Card } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Course } from '../../constants/types'

interface CourseCardProps {
	course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
	return (
			<Card as={NavLink} to={`/course/${course.uuid}`} style={{ textDecoration: 'none' }} className="rounded text-dark">
				<Card.Img width={300} height={300} src={course.cover_image} />
				<Card.Header>{course.name}</Card.Header>
				<Card.Body>
					<Card.Text>{course.description}</Card.Text>
					<Card.Footer>{course.tutor.username}</Card.Footer>
				</Card.Body>
			</Card>
	)
}
