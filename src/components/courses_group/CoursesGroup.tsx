import { Card, CardGroup } from 'react-bootstrap'
import CourseCard from './CourseCard'

export default function CoursesGroup() {
	return (
		<CardGroup>
			<CourseCard />
            <CourseCard />
            <CourseCard />
		</CardGroup>
	)
}
