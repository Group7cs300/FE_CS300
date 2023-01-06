import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import client from '../../client/axios'
import { Category } from '../../constants/types'

interface PopularCategoriesProps {
	category: Category | undefined
	setCategory: Dispatch<SetStateAction<Category | undefined>>
}

export default function PopularCategories({
	category,
	setCategory,
}: PopularCategoriesProps) {
	const [categories, setCategories] = useState<Category[]>([])

	useEffect(() => {
		client.get<Category[]>('/categories/popular').then((response) => {
			setCategories(response.data)
			setCategory(response.data[0])
		})
	}, [])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				width: '70%',
				marginBottom: 30
			}}
		>
			{categories.map((cat) => (
				<div
					key={cat.name}
					style={{
						margin: '25px 40px',
						borderBottom: cat!==category ? undefined : 'solid 3px #1a049e',
						fontSize: 20,
						marginBottom: 0,
					}}
				>
					{cat.name}
				</div>
			))}
		</div>
	)
}
