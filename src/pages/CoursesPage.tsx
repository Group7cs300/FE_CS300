import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import client from '../client/axios'
import { Footer, Navbar } from '../container'

export default function CoursesPage() {
	interface Course {
		uuid: number
		name: string
	}

	const { search_text } = useParams()
	const [courses, setCourses] = useState<Course[]>([])

	useEffect(() => {
		async function fetchCourses() {
			const { data } = await client.get('/course')
			setCourses(data)
		}

		fetchCourses()
	}, [])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Navbar />
			<Container style={{ flex: 1 }}>
				<h1>Search text: {search_text}</h1>
				<div>
					{courses.map((course) => (
						<div>{course.name}</div>
					))}
				</div>
			</Container>
			<Footer />
		</div>
	)
}
