import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CourseCard({props,course}: any) {
	console.log(course)
	const navigate = useNavigate()
	return (
		<Card
			style={{
				borderRadius: 10,
				height:'300px'
			}}
			onClick={() => navigate(`/Course/${course.uuid}`)}
		>
			<Card.Img style={{height:'150px'}} src={course.cover_image} />
			<Card.Body className="p-0">
				<div className='d-flex justify-content-between'>
					<div className="fw-light fs-6 p-1">
					{course.popular} tutees
					</div>
					<div className='ml-auto fw-light fs-6 p-1 px-3'> Rate {course.rate}/5</div>
				</div>
				<div className="fw-bold fs-5 px-3" >
					{course.name}
				</div>
				<div className='ml-auto fw-normal text-center fs-6 p-1 px-3'> {course.tutor.username}</div>
				
			</Card.Body>
		</Card>
	)
}