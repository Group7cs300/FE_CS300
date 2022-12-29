import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import client from '../client/axios'
import { Footer, Navbar, CourseDescription } from '../container'

export default function CourseDetailPage() {
    interface Course {
		uuid: number
		name: string
        description: string
        tutor: string
        image: string
        date: string
        categories: string //vector<Categories> (?)
	}

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
                
                <CourseDescription />
            </div>
			<Footer />
		</div>
	)
}
