import { useEffect, useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import client from '../../client/axios'
import { Category, Course } from '../../constants/types'
import CourseCard from './CourseCard'

interface PopularCoursesProps {
	category: Category | undefined
}

export default function PopularCourses({ category }: PopularCoursesProps) {
	const [courses, setCourses] = useState<Course[]>([])
	const [displayCourses, setDisplayCourses] = useState<Course[][]>([])

	useEffect(() => {
		client
			.get<{ results: Course[] }>('/course/popular')
			.then((response) => {
				setCourses(response.data.results)
			})
	}, [category])

	useEffect(() => {
		var newArray = [],
			size = 3
		while (courses.length > 0) newArray.push(courses.splice(0, size))
		setDisplayCourses(newArray)
	}, [courses])

	return (
		<Container>
			<Carousel controls={false} variant="dark">
				{displayCourses.map((row, row_index) => (
					<Carousel.Item key={row_index}>
						<Row xs={3} className="p-5">
							{row.map((course) => (
								<Col key={course.uuid}>
									<CourseCard course={course} />
								</Col>
							))}
						</Row>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	)
}
