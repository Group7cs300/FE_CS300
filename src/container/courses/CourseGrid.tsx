import { Col, Row } from 'react-bootstrap'
import { PageNumber } from '../../components/courses/PageNumber'
import CourseCard from '../../components/courses/CourseCard'
import { useEffect, useState } from 'react'

export default function CourseGrid({
	props,
	courses,
	totalCourses,
	page,
	setPage,
}: any) {
	const [displayCourses, setDisplayCourses] = useState([])

	useEffect(() => {
		let grid: any = []

		while (courses.length > 0) grid.push(courses.splice(0, 3))
		setDisplayCourses(grid)
	}, [courses])

	return (
		<div className="col col-xxl-9 col-xl-7 col-lg-8 col-sm-6 col-md-6">
			<div>
				<PageNumber
					page={page}
					totalPage='10'
					setPage={setPage}
				></PageNumber>
			</div>
			<div>
				{displayCourses.map((rows: any, id: any) => {
					return (
						<Row sm="1" lg="2" xxl="3" key={id}>
							{rows.map((course: any, id: any) => (
								<Col className="p-4" key={id}>
									<CourseCard course={course} />
								</Col>
							))}
						</Row>
					)
				})}
			</div>
			
		</div>
	)
}
