import { Carousel, Container } from 'react-bootstrap'
import CoursesGroup from '../courses_group/CoursesGroup'

export default function PopularCourses() {
	return (
		<Container>
			<Carousel variant="dark">
				<Carousel.Item>
					<CoursesGroup />
				</Carousel.Item>
				<Carousel.Item>
					<CoursesGroup />
				</Carousel.Item>
				<Carousel.Item>
					<CoursesGroup />
				</Carousel.Item>
			</Carousel>
		</Container>
	)
}
