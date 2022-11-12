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
				padding: 50,
				paddingRight: 0,
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<h1
					style={{
						marginLeft: 40,
						marginRight: 40,
					}}
				>
					Classes Taught by Qualified creators
				</h1>
				<div
					style={{
						marginLeft: 100,
						marginTop: 40,
						fontSize: 28,
					}}
				>
					<ul>
						<li>Jessica Hische</li>
						<li>Tom Foese</li>
						<li>Jade Nguyen</li>
					</ul>
				</div>
			</div>
			<Image
				src="/home/tutor.jpeg"
				width="60%"
				style={{
					borderTopLeftRadius: 20,
					borderBottomLeftRadius: 20,
				}}
			/>
		</div>
	)
}
