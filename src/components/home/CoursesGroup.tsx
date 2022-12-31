import { CardGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CourseCard from './CourseCard'

export default function CoursesGroup() {
	return (
		<CardGroup>
			<NavLink to="/course">
				<CourseCard />
			</NavLink>
			<NavLink to="/course">
				<CourseCard />
			</NavLink>
			<NavLink to="/course">
				<CourseCard />
			</NavLink>
		</CardGroup>
	)
}
