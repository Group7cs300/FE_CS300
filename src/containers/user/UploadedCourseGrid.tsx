import { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import client from '../../client/axios'
import UploadedCourseCard from '../../components/uploaded_courses/UploadedCourseCard'
import { useAppSelector } from '../../redux/store'
import { PlusOutlined } from '@ant-design/icons'
export default function UploadedCourseGrid() {
	interface Course {
		uuid: string
		name: string
		rate: GLfloat
		popular: number
		tutor: any
		cover_image: string
	}
	interface CoursesResult {
		count: number
		results: Course[]
	}
	const navigate = useNavigate()
	const account = useAppSelector((state) => state.user.account)
	const user_uuid = account?.uuid
	const [courses, setCourses] = useState<Course[]>([])
	useEffect(() => {
		async function fetchCourses() {
			if (user_uuid != undefined) {
				client
					.get<CoursesResult>(`/course?tutor=${account?.uuid}`)
					.then((response) => {
						setCourses(response.data.results)
					})
			}
		}
		fetchCourses()
	}, [])
	return (
		<div className="col m-4">
			<li className="w-bold fs-2 py-4 px-4">Uploaded Courses</li>
			<Button
				className="m-3 d-inline-flex flex-row align-items-center"
				onClick={() => navigate(`/user/uploadedCourses/add`)}
			>
				<PlusOutlined />
				<div className="px-3">New course</div>
			</Button>
			{courses.map((course: any) => (
				<Row className="p-3" key={course.uuid}>
					<UploadedCourseCard course={course} />
				</Row>
			))}
		</div>
	)
}
