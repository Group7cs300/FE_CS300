import { Content } from 'antd/es/layout/layout'
import { Container } from 'react-bootstrap'
import { Outlet, Route, Routes, useParams } from 'react-router-dom'
import SideBar from '../components/users/SideBar'
import { Footer, Navbar } from '../containers'
import Profile from '../containers/user/Profile'

export default function UserPage() {
	const { username } = useParams()
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Navbar />
			<div
				className="container-fluid d-flex flex-row justify-content-between p-0"
				style={{ flex: 1 }}
			>
				<SideBar username={username}/>
				<Outlet/>
			</div>
			<Footer />
		</div>
	)
}

