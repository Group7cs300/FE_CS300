import { useState } from 'react'
import { Card, Col, Container, Pagination, Row } from 'react-bootstrap'

export function CourseCard({ props, course }: any) {
	if (course == '') {
		return <div></div>
	} else {
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
}
export function PageNumber({ props, page, setPage}: any) {
    console.log('page')
    console.log(page)
	return (
		<div>
			<Pagination className='justify-content-center'>
				<Pagination.First />
				{page > 1 &&<Pagination.Prev/>}
                {page > 3 && <Pagination.Ellipsis />}
				{page > 2 && <Pagination.Item >{page-2}</Pagination.Item>}
				{page > 1 && <Pagination.Item>{page-1}</Pagination.Item>}
				<Pagination.Item active>{page}</Pagination.Item>
                {page < 3 && <Pagination.Item onClick={() => setPage(2)}>{Number(page)+1}</Pagination.Item>}
				{page < 2 && <Pagination.Item>{Number(page)+2}</Pagination.Item>}
				<Pagination.Ellipsis />
				<Pagination.Next/>
				<Pagination.Last />
			</Pagination>
		</div>
	)
}
export default function CourseGrid({ props, courses, page, setPage }: any) {
	return (
		<div className="col col-xxl-9 col-xl-7 col-lg-8 col-sm-6 col-md-6">
			<div>
				{courses.map((rows: any, id: any) => {
					return (
						<Row sm="1" lg="2" xxl='3' key={id}>
							{rows.map((course: any, id: any) => (
								<Col className="p-4" key={id}>
									<CourseCard course={course} />
								</Col>
							))}
						</Row>
					)
				})}
			</div>
            <div>
                <PageNumber page={page} setPage={setPage}></PageNumber>
            </div>
		</div>
	)
}
