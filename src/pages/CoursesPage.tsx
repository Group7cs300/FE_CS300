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
	const [page, setPage] = useState(1)
	const [courses, setCourses] = useState<Course[]>([])
	const [count, setCount] = useState(0)
	// useEffect(() => {
		
	// }, [])

	useEffect(() => {
		async function fetchCourses(page: number) {
			const { data } = await client.get(`/course?page=${page}&limit=9`)
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

		fetchCourses(page)
	}, [page])
	console.log(page)
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
				<div className='container d-flex flex-row justify-content-between'>
					<Filter/>
					<CourseGrid courses={courses} page={page} setPage={setPage}/>
				</div>
				<hr />
			</Container>
			<Footer />
		</div>
	)
}
