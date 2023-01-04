import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'

import { StarFilled } from '@ant-design/icons'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useAppSelector } from '../redux/store'
import client from '../client/axios'
import Categories from '../components/uploaded_courses/Categories'
import { Footer, Navbar } from '../containers'
import CourseInfo from '../containers/detail/CourseInfo'
import CoverImage from '../components/detail/CoverImage'
import RelatedCourse from '../containers/detail/RealatedCourses'
import BuyCourse from '../containers/detail/BuyCourse'

export default function CourseDetailPage() {
	interface Section {
		uuid: string
		name: string
		sectionNum: number
		document: string
		document_name: string
		video_name: string
		video: string
		summary: string
	}
	interface CourseResult {
		uuid: string
		name: string
		categories: any[]
		cover_image: string
		tutor: any
		price: number
		is_finished: boolean
		description: string
		rate: number
		popular: number
		updated_at: string
		is_bought: boolean
	}
	interface Course {
		count: number
		results: CourseResult[]
	}
	const [course, setCourse] = useState<CourseResult>()
	const [related_courses, setRelatedCourses] = useState<CourseResult[]>([])

	const { course_id } = useParams()
	const [sections, setSections] = useState<Section[]>([])
	const [loading, setLoading] = useState(false)
	const [fetching, setFetching] = useState(false)

	const [show, setShow] = useState(false)
	const navigate = useNavigate()
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const user = useAppSelector((state) => state.user)
	const user_uuid = user.account?.uuid
	useEffect(() => {
		async function fetchCategory() {
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
			}, 500)
			setFetching(true)
			client
				.get<CourseResult>(`/course/${course_id}`)
				.then((respone) => {
					setCourse(respone.data)
					return respone.data.categories
				})
				.then((data: any) => {
					for (let i = 0; i < data.length; ++i) {
						if (data[i].created_by_system == true) {
							client
								.get<Course>(
									`/course?categories=${data[i].uuid}`
								)
								.then((respone) => {
									setRelatedCourses(respone.data.results)
								})
							break
						}
					}
				})
			client
				.get<Section[]>(
					`/sections?course=${course_id}&ordering=sectionNum`
				)
				.then((response) => {
					setSections(response.data)
				})
				.then(() => {
					setFetching(false)
				})
		}
		fetchCategory()
	}, [course_id])
	if (loading || fetching)
		return (
			<div className="d-flex justify-content-center align-items-center vh-100">
				<ClipLoader
					color="#FF6783"
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		)
	else
		return (
			<div>
				<Navbar />
				<Container fluid className="px-0">
					<CoverImage cover_image={course?.cover_image} />
					<Container>
						<CourseInfo
							name={course?.name}
							tutor={`${course?.tutor.first_name} ${course?.tutor.last_name}`}
							categories={course?.categories}
							rate={course?.rate}
							tutees={course?.popular}
							updated_at={course?.updated_at}
						/>
						<Row className="py-4">
							<Col className="d-flex flex-row align-items-center">
								<div className="fw-bolder fs-5 px-1">
									Price:{' '}
								</div>
								<div className="px-3 fs-5">
									{course?.price} $
								</div>
							</Col>
							{course?.is_bought ? (
								<Col>
									<Button
										onClick={() =>
											navigate(
												`/user/boughtCourses/${course.uuid}`
											)
										}
									>
										{' '}
										Learn now{' '}
									</Button>
								</Col>
							) : (
								<BuyCourse
									show={show}
									handleShow={handleShow}
									handleClose={handleClose}
									course_id={course_id}
								/>
							)}
						</Row>
						<Row className="py-2 justify-content-between">
							<Col className="col-sm-8">
								<Container className="py-3">
									<div className="fw-bolder fs-3">
										About This Class
									</div>
									<div
										className="fw-bolder fs-5 py-3"
										style={{
											whiteSpace: 'pre-line',
											textAlign: 'justify',
										}}
									>
										{course?.description}
									</div>
								</Container>
								<Container></Container>
							</Col>
							<RelatedCourse courses={related_courses} />
						</Row>
					</Container>
				</Container>
				<Footer />
			</div>
		)
}
