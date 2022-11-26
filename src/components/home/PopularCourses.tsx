import { Carousel, Container } from 'react-bootstrap'
import CoursesGroup from './CoursesGroup'

export default function PopularCourses() {
	return (
		<Container>
			<Carousel variant="dark" className='p-5'>
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
