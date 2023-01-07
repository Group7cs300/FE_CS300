import { Button } from 'antd'
import { Dispatch, SetStateAction } from 'react'
import { Category } from '../../constants/types'

interface PopularCategoriesProps {
	category: Category | undefined
	setCategory: Dispatch<SetStateAction<Category | undefined>>
	categories: Category[]
}

export default function PopularCategories({
	category,
	setCategory,
	categories,
}: PopularCategoriesProps) {
	return (
		<div className="d-flex justify-content-center align-items-center my-3 w-75">
			{categories.map((cat) => (
				<Button
					size="large"
					type="text"
					key={cat.name}
					style={{
						borderBottom:
							cat !== category ? undefined : 'solid 3px #1a049e',
						fontSize: 20,
					}}
					onClick={() => setCategory(cat)}
				>
					{cat.name}
				</Button>
			))}
		</div>
	)
}
