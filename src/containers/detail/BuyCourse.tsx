import { message } from 'antd'
import { Button, Col, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import client from '../../client/axios'
import { useAppSelector } from '../../redux/store'

export default function BuyCourse({
	props,
	show,
	handleShow,
	handleClose,
	course_id,
}: any) {
	const user = useAppSelector((state) => state.user)
	const user_uuid = user.account?.uuid
	const navigate = useNavigate()
	const Confirm = () => {
		const form_data = new FormData()
		form_data.append('user', String(user_uuid))
		form_data.append('course', course_id)
		client.post(`/owned_courses`, form_data).then((response) => {
			message.success('OK')
		})
		handleClose()
	}
	return (
		<Col>
			<Button variant="primary" onClick={handleShow}>
				Buy Now
			</Button>
			{user.account ? (
				<div>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title> Buy Course</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Would you like to buy this course ?
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
							<Button variant="primary" onClick={Confirm}>
								Confirm
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			) : (
				<div>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title> Buy Course</Modal.Title>
						</Modal.Header>
						<Modal.Body>You have not signed in yet !!!!</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
							<Button
								variant="primary"
								onClick={() => navigate(`/signin`)}
							>
								Sign in now
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			)}
		</Col>
	)
}
