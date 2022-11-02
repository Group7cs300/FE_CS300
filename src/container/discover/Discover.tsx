import Image from 'react-bootstrap/Image'

export default function Discover() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				margin: 0,
				marginTop: 50,
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
						fontFamily: 'Jacques Francois',
						fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 36,
					}}
				>
					What Will You Discover?
				</h1>
				<h2
                    style={{
                        fontFamily: 'Jacques Francois',
						fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 32,
                    }}
                >
					Explore new skills, deepen existing passions, and get lost
					in creativity.
				</h2>
			</div>
			<Image src="/home/main.webp" width="60%" />
		</div>
	)
}
