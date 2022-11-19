import { Card, Col, Container, Row } from 'react-bootstrap'

export function CourseCard({ props, course }: any) {
	if (course == '') {
		return(
		<div></div>
        )
	} else {
		return (
			<Card
				style={{
					margin: 30,
					borderRadius: 10,
				}}
			>
				<Card.Img src='/home/python.png' />
				<Card.Body>
					<Card.Text>{course.name}</Card.Text>
					<Card.Footer>Tutor</Card.Footer>
				</Card.Body>
			</Card>
		)
	}
}
export default function CourseGrid({ props, courses }: any) {
	return (
		<Container fluid>
			{courses.map((rows: any, id: any) => {
				return (
					<Row key={id}>
						{rows.map((course: any, id: any) => (
							<Col sm key={id}>
								<CourseCard course={course}/>
							</Col>
						))}
					</Row>
				)
			})}
		</Container>
	)
}
