import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import client from '../../client/axios'
import { ClipLoader } from 'react-spinners'
import { Image } from 'antd'
import Categories from '../../components/uploaded_courses/Categories'
import { StarFilled } from '@ant-design/icons'
import { Col, Container } from 'react-bootstrap'
import ListSection from '../../components/uploaded_courses/ListSection'
export default function BoughtCourseDetail() {
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
	interface Course {
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
	}
	const [course, setCourse] = useState<Course>()
	const { course_id } = useParams()
	const [sections, setSections] = useState<Section[]>([])
	const [loading, setLoading] = useState(false)
	const [fetching, setFetching] = useState(false)
	const [visible, setVisible] = useState(false)

	function formatDateVN(dateString: any) {
		if (dateString != undefined) {
			const date = dateString.split('T')
			const subDateStr = date[0].split('-')
			return `${subDateStr[2]}-${subDateStr[1]}-${subDateStr[0]}`
		}
	}
	useEffect(() => {
		async function fetchCategory() {
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
			}, 500)
			setFetching(true)
			client.get<Course>(`/course/${course_id}`).then((respone) => {
				setCourse(respone.data)
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
	}, [])
	if (loading || fetching)
		return (
			<div className="d-flex mx-auto align-items-center">
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
			<div className="col m-4">
				<div className="d-flex flex-row align-items-center">
					<li className="w-bold fs-2 py-4 px-4">
						<NavLink
							to={`/user/uploadedCourses/`}
							className="nav-link d-inline"
						>
							Bought Courses
						</NavLink>
					</li>
				</div>
				<Container className="px-5">
					<Image
						preview={{ visible: false }}
						alt="cover_image"
						width="70%"
						style={{ borderRadius: 10 }}
						src={course?.cover_image}
						onClick={() => setVisible(true)}
					/>
					<div style={{ display: 'none' }}>
						<Image.PreviewGroup
							preview={{
								visible,
								onVisibleChange: (vis) => setVisible(vis),
							}}
						>
							<Image src={course?.cover_image} />
						</Image.PreviewGroup>
					</div>
					<hr />
					<h2 className="p-3">{course?.name}</h2>
					<hr />
					<Container className="d-flex flex-row align-items-center">
						<Col className="d-flex flex-row align-items-center py-3">
							<div className="fw-bolder fs-5 p-1">Category: </div>

							<Categories categories={course?.categories} />
						</Col>
						<Col className="d-flex flex-row align-items-center py-3">
							<div className="d-flex flex-row align-items-center">
								<StarFilled style={{ color: '#FDDA0D' }} />
								<div className="px-1">
									{course?.rate} &#40; {course?.popular}{' '}
									tutees&#41;
								</div>
							</div>
						</Col>
					</Container>
					<Container className="d-flex flex-row align-items-center py-3">
						<Col className="d-flex flex-row align-items-center py-3">
							<div className="fw-bolder fs-5 px-1">
								Share by:{' '}
							</div>
							<div className="px-3 fs-5">
								{course?.tutor.last_name}{' '}
								{course?.tutor.first_name}
							</div>
						</Col>
						<Col className="d-flex flex-row align-items-center py-3">
							<div className="fw-bolder fs-5 pl-5">
								Latest Update:{' '}
							</div>
							<div className="px-3 fs-5">
								{formatDateVN(course?.updated_at)}
							</div>
						</Col>
					</Container>
					<Container className="align-items-center py-3">
						<div className="fw-bolder fs-3">About This Class</div>
						<div
							className="fw-bolder fs-5 py-3"
							style={{ whiteSpace: 'pre-line' }}
						>
							{course?.description}
						</div>
					</Container>
					<Container>
						<ListSection sections={sections} width="300px" />
					</Container>
				</Container>
			</div>
		)
}
