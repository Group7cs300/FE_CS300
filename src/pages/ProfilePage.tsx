import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Image } from 'antd'
import { useAppSelector } from '../redux/store'

export default function ProfilePage() {
	const [visible, setVisible] = useState(false)
	const user = useAppSelector((state)=>state.user)
	function formatDateVN(dateString: any) {
		if (dateString != undefined) {
			const date = dateString.split('T')
			const subDateStr = date[0].split('-')
			return `${subDateStr[2]}-${subDateStr[1]}-${subDateStr[0]}`
		}
	}
	return (
		<div className="col m-4 px-5" style={{height:1500}}>
			<div className="d-flex flex-row align-items-center">
				<li className="w-bold fs-2 py-4 px-4">Profile</li>
			</div>
			<Container>
				<Image
					preview={{ visible: false }}
					alt="cover_image"
					width="100%"
					style={{ borderRadius: 10 }}
					src="/home/background_profile.png"
					onClick={() => setVisible(true)}
				/>
				<div style={{ display: 'none' }}>
					<Image.PreviewGroup
						preview={{
							visible,
							onVisibleChange: (vis) => setVisible(vis),
						}}
					>
						<Image src="/home/background_profile.png" />
					</Image.PreviewGroup>
				</div>
				<hr />
				<div className="fw-bolder fs-5 p-3">Name: {user.account?.first_name} {user.account?.last_name}</div>
				<Container className="d-flex flex-row align-items-center py-2">
					<Col className="d-flex flex-row align-items-center">
						<div className="fw-bolder fs-5 pl-5">
							Joining date:{' '}
						</div>
						<div className="px-3 fs-5">
							{formatDateVN(user.account?.date_joined)}
						</div>
					</Col>
				</Container>
				<Container className="d-flex flex-row align-items-center py-2">
					<Col className="d-flex flex-row align-items-center">
						<div className="fw-bolder fs-5 px-1">Uploaded: </div>
						<div className="px-3 fs-5"> {user.account?.total_uploaded_course} courses </div>
					</Col>
				</Container>
				<Container className="d-flex flex-row align-items-center py-2">
					<Col className="d-flex flex-row align-items-center">
						<div className="fw-bolder fs-5 px-1">Contact: </div>
						<div className="px-3 fs-5"> {user.account?.email}</div>
					</Col>
				</Container>
				<hr />
				<div className="fw-bolder fs-3 py-3">About Me</div>
				<p>
					Hello, My name is Jessica and I am a Web Developer from the
					VietName. I am an experienced trainer leading web
					development bootcamps and also teaching online courses. My
					main areas of interest are ReatJS, Javascript, eCommerce,
					and business. I am passionate about what I do and about
					teaching others. Whatever your reason for learning to build
					websites you have made an excellent career choice. My
					personal motivation was to become my own boss and have more
					freedom and flexibility in my life. I also enjoy the
					technical challenge it provides and the way it constantly
					evolves. I built my first website back in 1999 and I have
					watched the web evolve into what it is today. I try to make
					my courses enjoyable and try to remember what it was like
					when I was learning. I also believe the best way to learn is
					by doing and try to include as many practical examples as
					possible in my courses. Thanks for taking an interest and I
					look forward to you joining me. Chris
				</p>
			</Container>
		</div>
	)
}
