import { Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function SideBar({ props, username }: any) {
	const SidebarData = [
		{
			title: 'Profile',
			path: `/user/${username}/profile`,
			id: 1,
		},
		{
			title: 'Uploaded Course',
			path: `/user/${username}/uploadedCourses`,
			id: 2,
		},
		{
			title: 'Bought Course',
			path: `/user/${username}/boughtCourses`,
			id: 3,
		},
	]
	return (
		<>
			<style type="text/css">
				{`
            .bg-sidebar {
            	background-color: #0C5776;
            	color: white;
            }
			.nav-pills .nav-link.active {
				border-radius: 0.2rem;
				color: #fff;
				background-color: #002333;
				box-shadow: rgb(0 0 0 / 45%) 0px 4px 4px;
			}
			.nav .nav-link{
				color:white;
			}
			.nav .nav-link:hover{
				background-color: #efefef;
				color: black
			}
    `}
			</style>
			<div className="col col-sm-2 py-3 bg-sidebar">
				<div className="mx-auto" style={{ width: '70%' }}>
					<img
						src="/home/avatar.png"
						alt="avatar"
						width="100%"
						style={{
							border: '2px solid #000000',
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
							borderRadius: '100%',
						}}
					/>
				</div>
				<div
					className="m-2 my-5"
					style={{ border: '1px solid #000000' }}
				/>
				<ul className="nav nav-link-color-red nav-pills flex-column mb-auto">
					{SidebarData.map((item) => {
						return (
							<li key={item.id} className="nav-item m-1">
								<NavLink
									to={item.path}
									className="nav-link"
								>
									{item.title}
								</NavLink>
							</li>
						)
					})}
				</ul>
				<div style={{ height: '300px' }}></div>
			</div>
		</>
	)
}
