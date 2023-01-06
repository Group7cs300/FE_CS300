import { Card } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'
import { StarFilled } from '@ant-design/icons'
export default function BoughtCourseCard({ props, course, edit }: any) {
	const account = useAppSelector((state) => state.user.account)
	return (
		<NavLink
			style={{ textDecoration: 'none', color: '#022233' }}
			to={`/user/boughtCourses/${course.uuid}`}
		>
			<Card
				style={{
					borderRadius: 10,
				}}
				className="mb-3"
			>
				<div className="row no-gutters">
					<div className="col-md-4 p-0">
						<Card.Img
							style={{ height: '200px', borderRadius: 10 }}
							src={course.cover_image}
						/>
					</div>
					<Card.Body className="col-md-8 d-flex align-items-start flex-column p-0">
						<div className="fw-bold fs-5 px-3">{course.name}</div>
						<div className="ml-auto fw-normal fs-6 p-1 px-3">
							{course.tutor.username}
						</div>
						<div className="fw-light fs-6 px-3">
							{course.popular} tutees
						</div>
						<div className="d-flex flex-row align-items-center px-3">
							<StarFilled style={{ color: '#FDDA0D' }} />
							<div className="px-1">
								{Math.round(Number(course.rate) * 10) / 10}
							</div>
						</div>
					</Card.Body>
				</div>
			</Card>
		</NavLink>
	)
}
