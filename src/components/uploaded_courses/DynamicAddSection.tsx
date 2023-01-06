import { Button, Form, Input, Space } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import TextArea from 'antd/es/input/TextArea'
import UploadFile from './UploadFile'
import { RcFile } from 'antd/es/upload'

export default function DynamicAddSection({
	props,
	sectionsFile,
	setSectionsFile,
	initIndex,
}: any) {
	interface File {
		file: RcFile[]
		id: number
	}
	interface SectionFile {
		document: RcFile[]
		video: RcFile[]
	}
	const [isUploadDocument, setIsUploadDocument] = useState(true)
	const [isUploadVideo, setIsUploadVideo] = useState(true)
	const addDocument = (document: File) => {
		let temp: SectionFile[] = sectionsFile
		temp[document.id].document = document.file
		setSectionsFile(temp)
	}
	const addVideo = (video: File) => {
		let temp: SectionFile[] = sectionsFile
		temp[video.id].video = video.file
		setSectionsFile(temp)
	}
	return (
		<Form.List name="sections">
			{(fields, { add, remove }) => (
				<>
					{fields.map((field, index) => {
						return (
							<Space
								className="d-flex"
								key={field.key}
								direction="vertical"
								// size={12}
								style={{ padding: 10 }}
							>
								<Form.Item
									name={[field.name, 'name']}
									label={`Section ${index + initIndex + 1}`}
									rules={[
										{
											required: true,
											message:
												'Please input name of section',
										},
									]}
								>
									<Input placeholder="Name" />
								</Form.Item>
								<Form.Item
									label="Summary"
									name={[field.name, 'summary']}
								>
									<TextArea
										placeholder="Text here"
										rows={2}
									/>
								</Form.Item>
								<Form.Item
									label="Video"
									valuePropName="fileList"
									name="video"
									rules={[
										{
											required: isUploadVideo,
											message: 'Please input Video',
										},
									]}
								>
									<UploadFile
										type="picture-card"
										setFiles={addVideo}
										id={index + 1}
										setIsUpload={setIsUploadVideo}
										accept="video/*"
										button={
											<div>
												<PlusOutlined />
												<div style={{ marginTop: 8 }}>
													Upload
												</div>
											</div>
										}
									></UploadFile>
								</Form.Item>
								<Form.Item
									label="Document"
									valuePropName="fileList"
									name="document"
									rules={[
										{
											required: isUploadDocument,
											message: 'Please input document',
										},
									]}
								>
									<UploadFile
										type="picture-card"
										setFiles={addDocument}
										id={index + 1}
										setIsUpload={setIsUploadDocument}
										accept="application/pdf"
										button={
											<div>
												<PlusOutlined />
												<div style={{ marginTop: 8 }}>
													Upload
												</div>
											</div>
										}
									></UploadFile>
								</Form.Item>
								<MinusCircleOutlined
									style={{
										height: 40,
										color: 'red',
									}}
									onClick={() => {
										remove(field.name)
										let temp: SectionFile[] = sectionsFile
										temp.splice(index, 1)
										setSectionsFile(temp)
									}}
								/>
							</Space>
						)
					})}
					<Form.Item>
						<Button
							className="d-flex align-items-center justify-content-center"
							icon={<PlusOutlined />}
							type="dashed"
							block
							onClick={() => {
								add()
								let temp: SectionFile[] = sectionsFile
								temp.push({ document: [], video: [] })
								setSectionsFile(temp)
							}}
						>
							Add
						</Button>
					</Form.Item>
				</>
			)}
		</Form.List>
	)
}
