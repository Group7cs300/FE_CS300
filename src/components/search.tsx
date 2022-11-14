import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Search() {
	let navigate = useNavigate()
	const [search_text, setSearchText] = useState('')

	return (
		<Form
			onSubmit={() => navigate(`/courses/${search_text}`)}
			className="navbar__search"
			style={{
				width: '100%',
			}}
		>
			<Form.Control
				onChange={(e) => {
					setSearchText(e.target.value)
				}}
				type="text"
				placeholder="What course do you want to learn?"
				aria-label="Search"
			/>
		</Form>
	)
}
