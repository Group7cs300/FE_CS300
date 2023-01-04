import Star from '../../components/detail/Rate'

import { Col, Container, Row } from 'react-bootstrap'
import Categories from '../../components/uploaded_courses/Categories'

export default function CourseInfo({
	props,
	name,
	categories,
	tutor,
	rate,
	tutees,
	updated_at,
}: any) {
	function formatDateVN(dateString: any) {
		if (dateString != undefined) {
			const date = dateString.split('T')
			const subDateStr = date[0].split('-')
			return `${subDateStr[2]}-${subDateStr[1]}-${subDateStr[0]}`
		}
	}

	return (
		<div>
			<h2 className="pt-3">{name}</h2>
			<hr />
			<Row className="d-flex flex-row align-items-center py-3">
				<Col className="d-flex flex-row align-items-center">
					<div className="fw-bolder fs-5 px-1">Category: </div>

					<Categories categories={categories} />
				</Col>
				<Col className="align-items-center">
					<Star star={rate} />
					<div>
						<div className="px-1">{tutees} tutees</div>
					</div>
				</Col>
			</Row>
			<Row className="d-flex flex-row align-items-center py-2">
				<Col className="d-flex flex-row align-items-center">
					<div className="fw-bolder fs-5 px-1">Share by: </div>
					<div className="px-3 fs-5">{tutor}</div>
				</Col>
				<Col className="d-flex flex-row align-items-center">
					<div className="fw-bolder fs-5 pl-5">Latest Update: </div>
					<div className="px-3 fs-5">{formatDateVN(updated_at)}</div>
				</Col>
			</Row>
		</div>
	)
}
