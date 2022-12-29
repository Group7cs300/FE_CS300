import { Footer, Navbar } from '../containers'

export default function NotFoundPage() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Navbar />
			<div style={{ flex: 1 }}>404 Not found</div>
			<Footer />
		</div>
	)
}
