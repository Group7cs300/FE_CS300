import { Container } from 'react-bootstrap'
import { PopularCategories, PopularCourses } from '../../components'

export default function LearnEverything() {
	return (
		<div
			className="learn_everything"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 100,
			}}
		>
			<h1>Learn Everything You Need</h1>
			<PopularCategories />
			<PopularCourses />
		</div>
	)
}
