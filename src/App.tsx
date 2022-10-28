import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Container>
	)
}

export default App
