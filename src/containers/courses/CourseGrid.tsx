import { Col, Container, Row } from 'react-bootstrap'
import { PageNumber } from '../../components/courses/PageNumber'
import CourseCard from '../../components/courses/CourseCard'

export default function CourseGrid({
	courses,
	totalCourses,
	page,
	setPage,
}: any) {
	return (
		<div className="col col-xxl-9 col-xl-7 col-lg-8 col-sm-6 col-md-6">
			<div>
				<Container>
					<Row sm="1" lg="2" xxl="3">
						{courses.map((course: any) => (
							<Col className="p-4" key={course.name}>
								<CourseCard course={course} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
			<div>
				<PageNumber
					page={page}
					totalPage={Math.ceil(totalCourses / 9)}
					setPage={setPage}
				></PageNumber>
			</div>
		</div>
	)
}
