import { Content } from 'antd/es/layout/layout'
import { Outlet, Route, Routes, useParams } from 'react-router-dom'
import SideBar from '../components/users/SideBar'
import { Footer, Navbar } from '../containers'
import { useAppSelector } from '../redux/store'


export default function UserPage() {
	const account = useAppSelector((state) => state.user.account)
	const user_uuid = account?.uuid
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Navbar />
			<div
				className="container-fluid d-flex flex-row justify-content-between p-0"
				style={{ flex: 1 }}
			>
				<SideBar username={user_uuid} />
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}
