import { Col } from 'react-bootstrap'
import CourseCard from '../../components/courses/CourseCard'

export default function RelatedCourse({ props, courses }: any) {
	console.log(courses)
	return (
		<Col className="col-sm-3">
			<div className="fw-bolder fs-3">Related Courses</div>
			{courses.map((course: any) => (
				<Col key={course.uuid} className=" py-3">
					<CourseCard course={course} />
				</Col>
			))}
		</Col>
	)
}
