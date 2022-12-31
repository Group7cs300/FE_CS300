import { Col, message, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import client from '../client/axios'
import { Footer, Navbar, CourseDescription } from '../containers'

export default function CourseDetailPage() {
    interface CourseDetail {		
		uuid: number
		name: string
		price: number
		rate: GLfloat
		popular: number
		tutor: any
		cover_image: string
		description: string
		relatedCourse: CourseDetail
	}

	interface CoursesResult {
		count: number
		results: CourseDetail[]
	}

    const { uuid } = useParams()
	const [ course, setCourses ] = useState<CourseDetail[]>([])

	useEffect(() => {
		async function fetchCourses() {
			client
                .get<CoursesResult>(
                    `/course/${uuid}`
                )
                .then((response) => {
                    setCourses(response.data.results)
                })
                .catch((error) => {
                    message.error(error)
                })
		}
		fetchCourses()
}, [])

    
	return (
		<div 
            className='d-flex flex-column'
            style={{
                height: '100vh',
                display: 'inline-block'
            }}
        >
			<Navbar />
			<div className='d-flex'
                style={{
                    flex: 1
                }}
            >

			<Row>
				<CourseDescription 
					course={course}
					//relatedCourse={course.relatedCourse}
				/>
			</Row>
        	</div>
			<Footer />
		</div>
	)
}
