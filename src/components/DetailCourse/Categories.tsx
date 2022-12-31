import { Card, Col } from "react-bootstrap";
import Button from "../../containers/detail/Button";

export default function Categories({props,course}: any) {
	return (
		<Card
			style={{
				borderRadius: 10,
				height:'300px'
			}}
		>
			<Card.Img style={{height:'150px'}} src={course.cover_image} />
			<Card.Body className="p-0">
				<div className='d-flex justify-content-between'>
					<div className="fw-light fs-6 p-1">
					<Col
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        }}>
                        <Button 
                            border="none"
                            backgroundColor="#002333"
                            color="#FFFFFF"
                            fontSize="16px"
                            height = "30px"
                            onClick={() => console.log("Button!")}
                            radius = "30px"
                            width = "250px"
                            children = {course.categories}
                        />
                    </Col>	
					</div>
					<div className='ml-auto fw-light fs-6 p-1 px-3'> Rate {course.rate}/5</div>
				</div>
				<div className="fw-bold fs-5 px-3">
					{course.name}
				</div>
				<div className='ml-auto fw-normal text-center fs-6 p-1 px-3'> {course.tutor.username}</div>
				
			</Card.Body>
		</Card>
	)
}