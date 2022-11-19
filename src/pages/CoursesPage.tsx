import { useEffect, useState } from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import client from '../client/axios'
import CourseGrid from '../components/courses_grid/CourseGrid'
import { Footer, Navbar } from '../container'
import Filter from '../container/SearchResults/SearchResults'
import { CountResults } from '../container/SearchResults/SearchResults'

export default function CoursesPage() {
	interface Course {
		uuid: number
		name: string
	}
	const { search_text } = useParams()
	const [courses, setCourses] = useState<Course[]>([])
	const [count, setCount] = useState(0)
	useEffect(() => {
		async function fetchCourses() {
			const { data } = await client.get('/course')
			setCount(data.length)
			let grid: any[] = []
			for (const [index, course] of data.entries()) {
				if (index == grid.length * 3) grid.push([])
				grid[grid.length - 1].push(course)
			}
			for (let i = grid[grid.length - 1].length; i < 3; ++i)
				grid[grid.length - 1].push('')
			console.log(grid)
			setCourses(grid)
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
				<CountResults search_text={search_text} count={count} />
				<hr />
				<Stack
					direction="horizontal"
					gap={5}
					style={{ alignItems: 'start', padding:20 }}
				>
					<div style={{ width: '10%' }}>
						<Filter></Filter>
					</div>
					<div
						className="ms-auto "
						style={{ width: '70%' }}
					>
						<CourseGrid courses={courses}></CourseGrid>
					</div>
				</Stack>
			</Container>
			<Footer />
		</div>
	)
}
