import { CardGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CourseCard from './CourseCard'

export default function CoursesGroup() {
	return (
		<CardGroup>
			<NavLink to="/course/1">
				<CourseCard />
			</NavLink>
			<NavLink to="/course/1">
				<CourseCard />
			</NavLink>
			<NavLink to="/course/1">
				<CourseCard />
			</NavLink>
		</CardGroup>
	)
}
