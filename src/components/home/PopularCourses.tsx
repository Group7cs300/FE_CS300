import { message } from 'antd'
import { useEffect, useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import client from '../../client/axios'
import CoursesGroup from './CoursesGroup'

export default function PopularCourses() {
	interface Course {
		uuid: number
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
	const [courses, setCourses] = useState<Course[]>([])

	useEffect(() => {
		async function fetchCourses() {
			client
                .get<CoursesResult>(
                    `/course`
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
		<Container>
			<Carousel variant="dark" className='p-5'>
				<Carousel.Item>
					<CoursesGroup />
				</Carousel.Item>
				<Carousel.Item>
					<CoursesGroup />
				</Carousel.Item>
				<Carousel.Item>
					<CoursesGroup />
				</Carousel.Item>
			</Carousel>
		</Container>
	)
}
