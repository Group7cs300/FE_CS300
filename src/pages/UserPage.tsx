import { Content } from 'antd/es/layout/layout'
import { Container } from 'react-bootstrap'
import { Outlet, Route, Routes, useParams } from 'react-router-dom'
import SideBar from '../components/users/SideBar'
import { Footer, Navbar } from '../containers'
import Profile from './ProfilePage'

export default function UserPage() {
	const { user_uuid } = useParams()
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
				<SideBar username={user_uuid}/>
				<Outlet/>
			</div>
			<Footer />
		</div>
	)
}

