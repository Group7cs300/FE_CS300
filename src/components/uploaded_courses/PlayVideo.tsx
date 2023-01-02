import { useEffect } from 'react'

export default function PlayVideo({ props, curSection, all }: any) {
	return (
		<div>
			{all.map((section: any) => (
				<div key={section.uuid}>
					{section.sectionNum == curSection && (
						<video
							id="myVideo"
							controls
							width="100%"
							height="300"
						>
							<source
								id="mp4_src"
								src={section.video}
								type="video/mp4"
							/>
						</video>
					)}
				</div>
			))}
		</div>
	)
}
