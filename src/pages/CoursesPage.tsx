import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import client from '../client/axios'
import CourseGrid from '../containers/courses/CourseGrid'
import CountResults from '../components/courses/CountResults'
import Filter from '../containers/courses/Filter'
import { Footer, Navbar } from '../containers'
import { message } from 'antd'

export default function CoursesPage() {
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
	const date = new Date()
	function getDateFilter(date_filter: any){
		if (date_filter == 'All')
			return ''
		if (date_filter == 'In this week')
			if(Number(date.getDate()) > 7 )
				return String(date.getFullYear()) +'-'+String(date.getMonth()+1)+'-' + String(Number(date.getDate()) - 7)
			else
				return String(date.getFullYear()) +'-'+String(date.getMonth())+'-' + String(30 + Number(date.getDate()) -  Number(date.getDay()))
		if (date_filter == 'In this month')
			return String(date.getFullYear()) +'-'+String(date.getMonth()+1)+'-1'
		if (date_filter == 'In this year')
			return String(date.getFullYear()) +'-1-1'
	}
	function getTypeSort(currentSort: any,sort_direction:any)
	{
		if(currentSort == 0)
			return 'null'
		if(sort_direction == 'Max to Min')
		{
			switch (currentSort){
				case 1: return '-rate'
				case 2: return '-popular'
				case 3: return '-price'
			}		
		}
		if(sort_direction == 'Min to Max')
		{
			switch (currentSort){
				case 1: return 'rate'
				case 2: return 'popular'
				case 3: return 'price'
			}
		}			
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
			client
                .get<CoursesResult>(
                    `/course?name=${search_text}&page=${page}&limit=9&ordering=${getTypeSort(
                        currentSort,
                        sort_direction
                    )}&updated_at__gt=${getDateFilter(date_filter)}`
                )
                .then((response) => {
                    setCount(response.data.count)
                    setCourses(response.data.results)
                })
                .catch((error) => {
                    message.error(error)
                })
			
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
