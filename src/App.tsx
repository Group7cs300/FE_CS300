import { Route, Routes } from 'react-router-dom'
import CoursesPage from './pages/CoursesPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/courses/:search_text" element={<CoursesPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
