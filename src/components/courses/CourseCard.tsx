import { Card } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { StarFilled } from '@ant-design/icons'

export default function CourseCard({ props, course }: any) {
	const navigate = useNavigate()
	return (
		<NavLink
			style={{ textDecoration: 'none', color: '#022233' }}
			to={`/Course/${course.uuid}`}
		>
			<Card
				style={{
					borderRadius: 10,
					height: '300px',
				}}
			>
				<Card.Img
					style={{ height: '150px' }}
					src={course.cover_image}
				/>
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
		</NavLink>
	)
}
