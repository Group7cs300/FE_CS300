import { Card } from "react-bootstrap";

export default function CourseCard({ props, course }: any) {
	return (
		<Card
			style={{
				borderRadius: 10,
			}}
		>
			<Card.Img src="/home/python.png" />
			<Card.Body className="p-0">
				<div className='d-flex justify-content-between'>
					<div className="fw-light fs-6 p-2">
					{' '}
					{'{'}count{'}'} tutees
					</div>
					<div className='ml-auto fw-light fs-6 p-2 px-3'> Rate 4,5/5</div>
				</div>
				{/* <div className="fw-bold fs-5 px-2">{course.name}</div> */}
				<div className="fw-bold fs-5 px-3">
					Python for Beginer: Learn the Python programming language and the ...
				</div>
				<div className='ml-auto fw-normal text-center fs-6 p-2 px-3'> Tutor</div>
				
			</Card.Body>
		</Card>
	)
}