import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'
import { EditOutlined } from '@ant-design/icons'
import { StarFilled } from '@ant-design/icons'
export default function UploadedCourseCard({ props, course, edit }: any) {
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
					<div className="align-self-end mt-auto">
						<Button
							variant="secondary"
							className="m-3 d-inline-flex flex-row align-items-center"
							onClick={() =>
								navigate(`/user/uploadedCourses/${course.uuid}`)
							}
						>
							<EditOutlined />
							<div className="px-3">Edit</div>
						</Button>
					</div>
				</Card.Body>
			</div>
		</Card>
	)
}
