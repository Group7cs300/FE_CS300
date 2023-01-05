import { Col, Container } from 'react-bootstrap'
import CourseCard from '../../components/courses/CourseCard'

export default function RelatedCourse({ props, courses }: any) {
	return (
		<Col className="col-sm-3 justify-content-center py-3">
			<div className="fw-bolder fs-3 text-center">Related Courses</div>
			<Container
				style={{
					height: '900px',
					width: '100%',
					overflow: 'scroll',
				}}
				className="mx-0 d-flex flex-column"
			>
				{courses.map((course: any) => (
					<Col key={course.uuid} className=" py-3">
						<CourseCard course={course} />
					</Col>
				))}
			</Container>
		</Col>
	)
}
