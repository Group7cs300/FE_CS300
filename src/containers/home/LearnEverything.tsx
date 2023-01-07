import { useEffect, useState } from 'react'
import client from '../../client/axios'
import { PopularCategories, PopularCourses } from '../../components'
import { Category } from '../../constants/types'

export default function LearnEverything() {
	const [category, setCategory] = useState<Category|undefined>(undefined)
	const [categories, setCategories] = useState<Category[]>([])

	useEffect(() => {
		client.get<Category[]>('/categories?created_by_system=true').then((response) => {
			setCategories(response.data)
			setCategory(response.data[0])
		})
	}, [])
	return (
		<div
			className="learn_everything"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1
				style={{
					fontWeight: 'bolder',
					fontFamily: 'Khand',
				}}
			>
				Learn Everything You Need
			</h1>
			<PopularCategories categories={categories} category={category} setCategory={setCategory}/>
			{category!= undefined && <PopularCourses category={category} />}
		</div>
	)
}
