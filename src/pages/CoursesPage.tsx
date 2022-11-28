import { useEffect, useState } from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import client from '../client/axios'
import CourseGrid from '../container/courses/CourseGrid'
import { Footer, Navbar } from '../container'
import CountResults from '../components/courses/CountResults'
import Filter from '../container/courses/Filter'

export default function CoursesPage() {
	interface Course {
		uuid: number
		name: string
	}

	interface CoursesResult {
		count: number
		results: Course[]
	}

	const { search_text } = useParams()
	const [page, setPage] = useState(1)
	const [courses, setCourses] = useState<Course[]>([])
	const [count, setCount] = useState(0)
	const [date_filter, setDate_filter] = useState('All')
	const [level_filter, setLevel_filter] = useState('All')
	const [sort_direction, setSort_direction] = useState('Max to Min')
	const [currentSort,setCurrentSort] = useState(0)
	useEffect(() => {
		async function fetchCourses() {
			const { data } = await client.get<CoursesResult>(
				`/course?page=${page}&limit=9`
			)
			setCount(data.count)
			setCourses(data.results)
			console.log('date' , date_filter, '\nlevel' ,level_filter, '\nsort type', currentSort, '\ndirection', sort_direction)
		}
		fetchCourses()
	}, [page,date_filter,level_filter,currentSort,sort_direction])
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
				<div className="container d-flex flex-row justify-content-between">
					<Filter
						date_filter={date_filter}
						setDate_filter={setDate_filter}
						price_filter={level_filter}
						setPrice_filter={setLevel_filter}
						sort_direction={sort_direction} 
						setSort_direction={setSort_direction}
						currentSort={currentSort}
						setCurrentSort={setCurrentSort}
					/>
					<CourseGrid
						courses={courses}
						totalCourses={count}
						page={page}
						setPage={setPage}
					/>
				</div>
				<hr />
			</Container>
			<Footer />
		</div>
	)
}
