import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { StarFilled } from '@ant-design/icons'

export default function CourseCard({ course }: any) {
	return (
		<Card
			style={{
				borderRadius: 10,
				height: '300px',
				textDecoration: 'none',
			}}
			as={NavLink}
			to={`/course/${course.uuid}`}
			className="text-dark"
		>
			<Card.Img style={{ height: '150px' }} src={course.cover_image} />
			<Card.Body className="p-0">
				<div className="d-flex justify-content-between py-2">
					<div className="fw-light fs-6 px-2">
						{course.popular} tutees
					</div>
					<div className="d-flex flex-row align-items-center px-3">
						<StarFilled style={{ color: '#FDDA0D' }} />
						<div className="px-1">
							{Math.round(Number(course.rate) * 10) / 10}
						</div>
					</div>
				</div>
				<div className="fw-bold fs-5 px-3">{course.name}</div>
				<div className="ml-auto fw-normal text-center fs-6 p-1 px-3">
					{course.tutor.username}
				</div>
			</Card.Body>
		</Card>
	)
}
