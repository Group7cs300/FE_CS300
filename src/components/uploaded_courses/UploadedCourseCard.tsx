import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'

export default function UploadedCourseCard({ props, course }: any) {
    const navigate = useNavigate()
    const account = useAppSelector((state) => state.user.account)
	const user_uuid = account?.uuid
	return (
		<Card
			style={{
				borderRadius: 10,
			}}
			className="mb-3"
		>
			<div className="row no-gutters">
				<div className="col-md-4 p-0">
					<Card.Img
						style={{ height: '100%', borderRadius: 10 }}
						src={course.cover_image}
					/>
				</div>
				<Card.Body
					className="col-md-8 d-flex align-items-start flex-column p-0"
					
				>
					<div className="fw-bold fs-5 px-3">{course.name}</div>
					<div className="ml-auto fw-normal fs-6 p-1 px-3">
						{course.tutor.username}
					</div>
					<div className="fw-light fs-6 px-3">
						{course.popular} tutees
					</div>
					<div className="ml-auto fw-light fs-6 p-1 px-3">
						{' '}
						Rate {course.rate}/5
					</div>
					<div className="align-self-end mt-auto">
						<Button className="m-3" onClick={() => navigate(`/user/${user_uuid}/uploadedCourses/${course.uuid}`)}>Edit</Button>
					</div>
				</Card.Body>
			</div>
		</Card>
	)
}
