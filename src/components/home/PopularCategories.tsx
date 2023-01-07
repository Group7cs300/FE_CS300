import { Dispatch, SetStateAction } from 'react'
import { Category } from '../../constants/types'

interface PopularCategoriesProps {
	category: Category | undefined
	setCategory: Dispatch<SetStateAction<Category | undefined>>
	categories:Category[]
}

export default function PopularCategories({
	category,
	setCategory,
	categories,
}: PopularCategoriesProps) {
	

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
					onClick={()=>setCategory(cat)}
				>
					{cat.name}
				</div>
			))}
		</div>
	)
}
