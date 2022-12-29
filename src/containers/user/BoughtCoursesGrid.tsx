import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import client from '../../client/axios'
import UploadedCourseCard from '../../components/uploaded_courses/UploadedCourseCard'


export default function BoughtCoursesGrid() {
    interface Course {
		uuid: string
		name: string
		rate: GLfloat
		popular:number
		tutor: any
		cover_image: string
	}
	interface CoursesResult {
		count: number
		results: Course[]
	}
    const navigate = useNavigate()
    const { user_uuid } = useParams()
    const[courses, setCourses] = useState<Course[]>([])
    useEffect(() => {
		async function fetchCourses() {
			const { data } = await client.get<CoursesResult>(
				`/course`
            )
            setCourses(data.results)
		}
		fetchCourses()
	}, [])
	return (
		<div className="col m-4">
            <li className='w-bold fs-2 py-4 px-4'>Uploaded Courses</li>
                    {courses.map((course: any) => (
							<Row className="p-3" key={course.name}>
								<UploadedCourseCard course={course} />
							</Row>
						))}
		</div>
	)
}
