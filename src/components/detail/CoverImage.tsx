import { Image } from 'antd'
import { useState } from 'react'

export default function CoverImage({ props, cover_image }: any) {
	const [visible, setVisible] = useState(false)
	return (
		<div>
			<Image
				preview={{ visible: false }}
				alt="cover_image"
				width="100%"
				height="600px"
				style={{
					opacity: '0.5',
				}}
				src={cover_image}
				onClick={() => setVisible(true)}
			/>
			<div style={{ display: 'none' }}>
				<Image.PreviewGroup
					preview={{
						visible,
						onVisibleChange: (vis) => setVisible(vis),
					}}
				>
					<Image src={cover_image} />
				</Image.PreviewGroup>
			</div>
		</div>
	)
}
