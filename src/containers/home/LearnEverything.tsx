import { useState } from 'react'
import { PopularCategories, PopularCourses } from '../../components'
import { Category } from '../../constants/types'

export default function LearnEverything() {
	const [category, setCategory] = useState<Category|undefined>(undefined)

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
			<PopularCategories category={category} setCategory={setCategory}/>
			<PopularCourses category={category} />
		</div>
	)
}
