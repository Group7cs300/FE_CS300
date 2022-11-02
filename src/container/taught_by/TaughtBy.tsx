import Image from 'react-bootstrap/Image'

export default function TaughtBy() {
	return (
		<div
			style={{
                display: 'flex',
				background: '#002333',
				color: 'white',
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: 50
			}}
		>
			<div
                style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
            >
				<h1>Classes Taught by Qualified creators</h1>
				<h2>Jessica Hische</h2>
				<h2>Jessica Hische</h2>
				<h2>Jessica Hische</h2>
			</div>
			<Image src="/home/tutor.jpeg" width="60%" />
		</div>
	)
}
