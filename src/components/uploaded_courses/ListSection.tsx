import axios from 'axios'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FileFilled, DownloadOutlined } from '@ant-design/icons'
import PlayVideo from './PlayVideo'
export default function ListSection({ props, sections, width }: any) {
	interface Section {
		uuid: string
		name: string
		sectionNum: number
		document: string
		document_name: string
		video_name: string
		video: string
		summary: string
	}
	const [curSection, setCurSection] = useState(1)
	const onClick = (index: number) => {
		setCurSection(index)
	}
	const downloadFile = (index: any) => {
		axios({
			url: sections[index].document,
			method: 'GET',
			responseType: 'blob',
		}).then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]))
			const link = document.createElement('a')
			link.href = url
			link.setAttribute('download', sections[index].document_name)
			document.body.appendChild(link)
			link.click()
		})
	}
	return (
		<>
			<style type="text/css">
				{`
                .btn-primary{
                    font-size: '16';
                    height: 50px;
                    background-color: #ffffff;
                    color: #000000;
                    border-color: #ffffff;
                }
                .btn-primary:active{
                    background-color: #666;
                    color: white;
                  }
                .btn-primary:hover {
                background-color: #002333;
                color: #ffffff;
            }
            `}
			</style>
			<Container>
				<Row>
					{sections[curSection - 1] != undefined && (
						<Col className="col-sm-8 py-3 px-5">
							<PlayVideo curSection={curSection} all={sections} />
						</Col>
					)}
					<Col
						className="col-sm-4"
						style={{
							fontWeight: 550,
							fontSize: 24,
							paddingBottom: '10px',
						}}
					>
						<Row>Section in this course</Row>
						<Row>
							<Container
								style={{
									height: '300px',
									width: width,
									overflow: 'scroll',
								}}
								className="mx-0 d-flex flex-column border"
							>
								{sections.map((section: any) => (
									<Button
										key={section.uuid}
										variant="primary"
										className={
											section?.sectionNum == curSection
												? 'my-2 active'
												: 'my-2'
										}
										onClick={() =>
											onClick(section?.sectionNum)
										}
									>
										Section {section.sectionNum}:{' '}
										{section.name}
									</Button>
								))}
							</Container>
						</Row>
					</Col>
				</Row>
				{sections[curSection - 1] != undefined && (
					<div>
						<Row>
							<div>
								<li className="w-bold fs-2 py-4 px-4">
									{sections[curSection - 1]?.name}
								</li>
							</div>
						</Row>
						<Row>
							<div className="w-bold fs-5 px-4">
								{sections[curSection - 1]?.summary}
							</div>
						</Row>

						<Row>
							<Col>
								<div className="w-bold fs-5 py-2 px-4">
									Document:{' '}
								</div>
							</Col>

							<Col className="d-inline-flex flex-row align-items-center">
								<FileFilled />
								<div className="px-3">
									{sections[curSection - 1]?.document_name}
								</div>
								<DownloadOutlined
									style={{ color: 'blue' }}
									onClick={() => downloadFile(curSection - 1)}
								/>
							</Col>
						</Row>
					</div>
				)}
			</Container>
		</>
	)
}
